---
sidebar_position: 10
title: Web UI Authentication
description: "How to password-protect your BasicSwap web interface and API"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Web UI Authentication

BasicSwap can require a password to access the web interface and API. This protects your instance from unauthorized access, which is particularly important if your BasicSwap is reachable over a network (for example, when running with `--htmlhost=0.0.0.0`).

When authentication is enabled, every page except the login screen requires a valid session or API credentials. Without them, visitors are redirected to the login page.

:::caution
BasicSwap's built-in HTTP server does not use TLS. If your instance is accessible from outside `localhost`, your password is sent in cleartext unless you put a reverse proxy (e.g., Nginx, Caddy) with HTTPS in front of it.
:::

:::info
Since v0.17.3, a password alone is not enough to reach the UI over a network. BasicSwap also checks the request's `Host` header against an allowlist, so a LAN address, hostname, or reverse-proxy domain must be added to `allowed_hosts` as well. See [Reaching BasicSwap Over a Network](#reaching-basicswap-over-a-network) below.
:::

## Reaching BasicSwap Over a Network

Since v0.17.3, BasicSwap checks the `Host` header of every request, and the `Origin` of every state-changing request, against an allowlist. This is a defence against DNS-rebinding and cross-site attacks. `localhost`, `127.0.0.1` and `::1` on the configured html port are always allowed, so a purely local install and the default Docker setup (which publishes the port to localhost) need no configuration.

To reach the UI by anything else, add that host to `allowed_hosts` in `basicswap.json` and restart:

```json title="basicswap.json"
{
  "allowed_hosts": ["192.168.1.50", "nas.local", "https://swap.example.com", "http://localhost:5555"]
}
```

- A **bare host** (`192.168.1.50`, `nas.local`) allows that host on any scheme and port.
- A **`scheme://host` entry** (`https://swap.example.com`) is matched as an exact origin. Use this for a reverse proxy, so the browser's `https://` origin is accepted, and include the port if your proxy listens on a non-default one (`https://swap.example.com:8443`).

There is no `basicswap-prepare` flag for `allowed_hosts`. Edit `basicswap.json` in your data directory by hand and restart. This setting is not added to existing configurations on update, so if you are upgrading from a version before v0.17.3, add it yourself.

There are two failure modes worth recognising:

- Reaching the UI by a **LAN IP, hostname, or mDNS name** that is not listed returns `403 Host not allowed`, and the page does not load at all. A bind-all address (`0.0.0.0`) is never accepted as a hostname, so binding to `0.0.0.0` and browsing to the machine's LAN IP fails until you list that IP.
- Reaching it through a **reverse proxy**, or an **SSH tunnel forwarded to a different local port than the server uses**, lets the page load but then returns `Cross-origin request blocked` on every action, and live updates stop. Add the origin you actually type in the browser (`https://swap.example.com`, or `http://localhost:5555` for a tunnel), or forward the same port the server listens on.

:::caution
`allowed_hosts` can be set to `"*"` to accept any host name, but BasicSwap refuses to start with `"*"` unless client authentication is enabled. For a trusted, isolated network you can override that refusal with `"unsafe_allow_any_host_without_auth": true` (v0.17.4). Even with `"*"`, the cross-origin and WebSocket checks stay enforced, so a reverse-proxy origin must still be listed.
:::

## Enable Authentication

### During Initial Setup

Add the `--client-auth-password` flag when running `basicswap-prepare` for the first time.

<Tabs groupId="auth-setup">
  <TabItem value="docker" label="Docker" default>
    Append the flag to your `basicswap-prepare` command:

    ```bash title="Terminal"
    docker run --rm -t --name swap_prepare \
      -v $COINDATA_PATH:/coindata i_swapclient \
      basicswap-prepare --datadir=/coindata \
      --withcoins=monero,bitcoin \
      --client-auth-password=YOUR_PASSWORD
    ```
  </TabItem>
  <TabItem value="no-docker" label="Without Docker">
    Append the flag to your `basicswap-prepare` command:

    ```bash title="Terminal"
    basicswap-prepare --datadir=$SWAP_DATADIR \
      --withcoins=monero,bitcoin \
      --client-auth-password=YOUR_PASSWORD
    ```
  </TabItem>
</Tabs>

### On an Existing Installation

You can enable authentication at any time by re-running `basicswap-prepare` with the `--client-auth-password` flag. BasicSwap must be stopped first.

<Tabs groupId="auth-enable-existing">
  <TabItem value="docker" label="Docker" default>
    ```bash title="Terminal"
    docker-compose stop
    docker-compose run --rm swapclient \
      basicswap-prepare --datadir=/coindata \
      --client-auth-password=YOUR_PASSWORD
    docker-compose up -d
    ```
  </TabItem>
  <TabItem value="no-docker" label="Without Docker">
    Stop BasicSwap, then run:

    ```bash title="Terminal"
    basicswap-prepare --datadir=$SWAP_DATADIR \
      --client-auth-password=YOUR_PASSWORD
    ```

    Start BasicSwap again afterward.
  </TabItem>
</Tabs>

The password is hashed and stored as `client_auth_hash` in `basicswap.json`. The plaintext password is never saved.

## Login

Once authentication is enabled, opening the BasicSwap web UI redirects you to the login page. Enter the password you set during setup.

After a successful login, a session cookie is created. The session is valid for 60 minutes and resets its expiration each time you interact with the interface. If you are idle for more than 60 minutes, you will need to log in again.

:::info
If BasicSwap detects that the web UI is accessible from a non-local address, the login page displays a warning about sending passwords over plain HTTP. For remote deployments, set up HTTPS through a reverse proxy.
:::

## API Authentication

The BasicSwap JSON API (endpoints under `/json/`) is protected by the same password. There are two ways to authenticate API requests.

### HTTP Basic Auth

Use HTTP Basic Authentication with any username (it is ignored) and the auth password. This is the simplest method for scripts and command-line tools.

```bash title="Terminal"
curl -u :YOUR_PASSWORD http://localhost:12700/json/wallets
```

The colon before the password indicates an empty username.

### Session-Based Auth

You can also obtain a session by sending a POST request to `/login` with JSON:

```bash title="Terminal"
curl -X POST http://localhost:12700/login \
  -H "Content-Type: application/json" \
  -d '{"password": "YOUR_PASSWORD"}' \
  -c cookies.txt

curl -b cookies.txt http://localhost:12700/json/wallets
```

The response includes a `basicswap_session_id` cookie that you can reuse for subsequent requests.

## Change Password

There are two ways to change the authentication password.

**Via the web UI:** Navigate to `/changepassword` while logged in. Enter your current password and a new one. The new password must meet these requirements:

* At least 8 characters
* At least one uppercase letter (A-Z)
* At least one lowercase letter (a-z)
* At least one number (0-9)

**Via the command line:** Stop BasicSwap and re-run `basicswap-prepare` with the new password:

<Tabs groupId="auth-change-pw">
  <TabItem value="docker" label="Docker" default>
    ```bash title="Terminal"
    docker-compose stop
    docker-compose run --rm swapclient \
      basicswap-prepare --datadir=/coindata \
      --client-auth-password=NEW_PASSWORD
    docker-compose up -d
    ```
  </TabItem>
  <TabItem value="no-docker" label="Without Docker">
    ```bash title="Terminal"
    basicswap-prepare --datadir=$SWAP_DATADIR \
      --client-auth-password=NEW_PASSWORD
    ```
  </TabItem>
</Tabs>

## Disable Authentication

To remove password protection entirely, use the `--disable-client-auth` flag. BasicSwap must be stopped first.

<Tabs groupId="auth-disable">
  <TabItem value="docker" label="Docker" default>
    ```bash title="Terminal"
    docker-compose stop
    docker-compose run --rm swapclient \
      basicswap-prepare --datadir=/coindata \
      --disable-client-auth
    docker-compose up -d
    ```
  </TabItem>
  <TabItem value="no-docker" label="Without Docker">
    ```bash title="Terminal"
    basicswap-prepare --datadir=$SWAP_DATADIR \
      --disable-client-auth
    ```
  </TabItem>
</Tabs>

This removes the `client_auth_hash` entry from `basicswap.json`. After restarting, the web UI and API are accessible without a password.

## Security Notes

* The authentication password is hashed using RFC 2440 (the same scheme used by Tor) before being stored. The plaintext password is never written to disk.
* Sessions are stored in memory. Restarting BasicSwap invalidates all active sessions, requiring everyone to log in again.
* BasicSwap serves HTTP, not HTTPS. On `localhost` this is fine, but for remote access, place a reverse proxy with TLS (Nginx, Caddy, etc.) in front of BasicSwap.
* When using `--htmlhost=0.0.0.0`, your web UI is exposed to the entire local network (or wider, depending on firewall rules). Always enable authentication in this configuration. Reaching the UI by a LAN address, hostname, or reverse proxy also requires an `allowed_hosts` entry, because the `Host` check runs before authentication (see [Reaching BasicSwap Over a Network](#reaching-basicswap-over-a-network)).
* The login page, static assets, error pages, and info pages are exempt from authentication. All other pages and API endpoints require a valid session or Basic Auth credentials.
