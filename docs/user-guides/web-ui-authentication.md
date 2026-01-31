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

The password is hashed and stored as `client_auth_hash` in `basicswap_settings.json`. The plaintext password is never saved.

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

This removes the `client_auth_hash` entry from `basicswap_settings.json`. After restarting, the web UI and API are accessible without a password.

## Security Notes

* The authentication password is hashed using RFC 2440 (the same scheme used by Tor) before being stored. The plaintext password is never written to disk.
* Sessions are stored in memory. Restarting BasicSwap invalidates all active sessions, requiring everyone to log in again.
* BasicSwap serves HTTP, not HTTPS. On `localhost` this is fine, but for remote access, place a reverse proxy with TLS (Nginx, Caddy, etc.) in front of BasicSwap.
* When using `--htmlhost=0.0.0.0`, your web UI is exposed to the entire local network (or wider, depending on firewall rules). Always enable authentication in this configuration.
* The login page, static assets, error pages, and info pages are exempt from authentication. All other pages and API endpoints require a valid session or Basic Auth credentials.
