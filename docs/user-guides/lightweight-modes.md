---
sidebar_position: 3
title: Lightweight Modes
description: "How to use Electrum light wallets and Monero remote nodes on BasicSwap DEX instead of running full nodes"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import React from 'react';

# Lightweight Modes

BasicSwap supports lightweight alternatives to running full blockchain nodes for select coins. Instead of downloading and syncing entire blockchains, you can use **Electrum light wallets** for Bitcoin and Litecoin, or connect to a **remote Monero node** for Monero and Wownero. These modes reduce disk and bandwidth requirements at the cost of trusting a third-party server for blockchain data. Running a full node remains the most trustless and private option.

:::info
Lightweight modes are currently available for **Bitcoin**, **Litecoin** (via Electrum), and **Monero**, **Wownero** (via remote nodes). All other coins still require full nodes.
:::

## Electrum Light Wallets (Bitcoin & Litecoin)

BasicSwap supports **Electrum light wallets** as an alternative to running full blockchain nodes for **Bitcoin (BTC)** and **Litecoin (LTC)**. Instead of downloading and syncing an entire blockchain, Electrum mode connects to remote ElectrumX servers to query blockchain data.

### How It Works

In standard (RPC) mode, BasicSwap runs a full node for each enabled coin, which means downloading the entire blockchain and verifying every transaction locally. This provides maximum security and trustlessness but requires significant disk space and sync time.

In **Electrum mode**, BasicSwap connects to remote ElectrumX servers using the standardized ElectrumX protocol. These servers index the blockchain and respond to balance, transaction, and UTXO queries on your behalf. Your wallet keys remain local, with only public address information being sent to the server.

### Trade-offs

| | Full Node (RPC) | Electrum Light Wallet |
|---|---|---|
| **Blockchain download** | Full chain required | None |
| **Disk space** | Significant (potentially hundreds of GB for BTC) | Minimal |
| **Setup time** | Hours to days (initial sync) | Seconds |
| **Trust model** | Fully trustless; you verify everything | Trusts the Electrum server to provide accurate data |
| **Privacy** | Maximum; no third party sees your queries | Server can see which addresses you query |
| **Availability** | Independent; your own node | Depends on server availability (auto-failover built in) |

### Supported Coins

Only the following coins currently support Electrum mode:

- **Bitcoin (BTC)**
- **Litecoin (LTC)**

### Enable Electrum Mode

There are multiple ways to enable Electrum light wallet mode, depending on whether you are setting up BasicSwap for the first time or modifying an existing installation.

#### During Initial Setup

You can enable Electrum mode when first configuring BasicSwap by adding the `--light` flag to the `basicswap-prepare` command. This enables Electrum for all supported coins (BTC and LTC).

<Tabs groupId="setup-method">
  <TabItem value="docker" label="Docker" default>
    ```bash title="Terminal"
    docker run --rm -t --name swap_prepare -v $COINDATA_PATH:/coindata i_swapclient basicswap-prepare --datadir=/coindata --withcoins=monero,bitcoin --htmlhost="0.0.0.0" --wshost="0.0.0.0" --xmrrestoreheight=$CURRENT_XMR_HEIGHT --light
    ```
  </TabItem>
  <TabItem value="no-docker" label="Without Docker">
    ```bash title="Terminal"
    basicswap-prepare --datadir=$SWAP_DATADIR --withcoins=monero,bitcoin --xmrrestoreheight=$CURRENT_XMR_HEIGHT --light
    ```
  </TabItem>
</Tabs>

To enable Electrum for a specific coin only, use the per-coin mode flags instead:

<Tabs groupId="setup-method">
  <TabItem value="docker" label="Docker" default>
    ```bash title="Terminal"
    docker run --rm -t --name swap_prepare -v $COINDATA_PATH:/coindata i_swapclient basicswap-prepare --datadir=/coindata --withcoins=monero,bitcoin,litecoin --htmlhost="0.0.0.0" --wshost="0.0.0.0" --xmrrestoreheight=$CURRENT_XMR_HEIGHT --btc-mode=electrum --ltc-mode=electrum
    ```
  </TabItem>
  <TabItem value="no-docker" label="Without Docker">
    ```bash title="Terminal"
    basicswap-prepare --datadir=$SWAP_DATADIR --withcoins=monero,bitcoin,litecoin --xmrrestoreheight=$CURRENT_XMR_HEIGHT --btc-mode=electrum --ltc-mode=electrum
    ```
  </TabItem>
</Tabs>

You can also specify a custom Electrum server during setup:

```bash title="Terminal"
basicswap-prepare --datadir=$SWAP_DATADIR --withcoins=bitcoin --btc-mode=electrum --btc-electrum-server=custom.server.com:50002:true
```

The server format is `host:port[:ssl]`, where `ssl` is `true` (default) or `false`.

#### Via the Web UI

You can switch an existing coin to Electrum mode through the BasicSwap Settings page:

1. Navigate to **Settings** in the BasicSwap web interface.
2. Locate the coin you want to switch (Bitcoin or Litecoin).
3. Change the **Connection Type** dropdown from `rpc` to `electrum`.
4. (Optional) Configure custom Electrum servers in the server list fields.
5. (Optional) Adjust the **Address Gap Limit** (default: 50).
6. Click **Apply** to save changes.
7. A migration modal will appear. Confirm the switch and, if the source wallet holds a balance, choose whether to transfer those funds during this switch or leave them on their current addresses.

:::warning
You cannot switch connection modes while the coin has active swaps in progress. Complete or cancel all pending swaps before switching.
:::

#### Via Configuration File

You can manually edit the `basicswap.json` file to enable Electrum mode:

1. Stop BasicSwap.
2. Open `basicswap.json` in a text editor (located in your data directory).
3. Under the coin's `chainclients` section, set the following:

```json title="basicswap.json"
{
  "chainclients": {
    "bitcoin": {
      "connection_type": "electrum",
      "manage_daemon": false
    }
  }
}
```

4. Restart BasicSwap.

### Switching Between Modes

You can switch between full node (RPC) and Electrum mode at any time, provided there are no active swaps for that coin. There is no persistent "auto-transfer" setting; each switch triggers a one-off migration modal whose contents depend on the direction of the switch.

**Both modes derive from the same seed.** Standard BIP84 (native segwit) funds derived from that seed are visible in both RPC and Electrum mode, so switching connection type does not normally require moving funds. Transfer only comes into play when funds sit on addresses that the destination mode cannot derive.

:::tip
You don't have to use the BasicSwap migration flow. If you'd rather handle it yourself, send the funds out to another wallet you own (external Electrum, a hardware wallet, another BasicSwap instance, anything you trust) before you start the switch. Once the source wallet is empty there's nothing left for the migration to move, and you can bring the funds back later or leave them where they are.
:::

#### Switching RPC → Electrum

When you apply the switch in Settings, a modal appears that:

1. Shows the coin's **extended private key** (e.g. `zprv...` / `yprv...`) for backup into an external Electrum wallet, with import instructions. You must tick *"I have written down this key"* before confirming the switch.
2. Scans the RPC wallet for funds on **non-derivable (non-BIP84) addresses**. These are legacy or imported addresses that the BIP84 derivation path cannot reach from the seed, so an external Electrum wallet restored from the extended key would not see them.
3. If such funds exist and exceed the estimated sweep fee, BasicSwap **automatically consolidates them to a BIP84 address** as part of the switch. There is no opt-out in this direction. If the balance on non-derivable addresses is below the fee threshold, the modal notes this and no transfer is attempted.

Funds already on BIP84 addresses are left in place. They remain visible and spendable from the Electrum lite wallet without being moved.

#### Switching Electrum → RPC

When you apply the switch in Settings, a modal appears that:

1. Checks the lite wallet balance and the estimated sweep fee. The transfer option is only offered when the balance exceeds roughly twice the estimated fee; otherwise the modal shows *"Balance is too low to transfer - fee would exceed funds"* and no sweep is possible.
2. If a transfer is possible, shows two radio options:
   - **Auto-transfer funds to RPC wallet** (selected by default). BasicSwap sweeps the lite wallet balance to the full-node wallet during the switch. A standard network fee is deducted.
   - **Keep funds on current addresses.** No sweep is performed. BasicSwap still syncs the RPC wallet's keypool to match the lite wallet's derived addresses and triggers a rescan, so funds on those addresses remain discoverable by the full node after the switch.

:::warning
Each switch is an explicit, one-off decision; the choice is not remembered for future switches.
:::

### Custom Electrum Servers

BasicSwap ships with a set of default Electrum servers for each supported coin. You can configure custom servers for additional control or privacy.

#### Default Servers

<Tabs>
  <TabItem value="btc-servers" label="Bitcoin" default>
    | Server | Port | SSL |
    |--------|------|-----|
    | bitcoin.stackwallet.com | 50002 | Yes |
    | electrum.blockstream.info | 50002 | Yes |
    | electrum.emzy.de | 50002 | Yes |
    | electrum.bitaroo.net | 50002 | Yes |
    | electrum.acinq.co | 50002 | Yes |
    | btc.lastingcoin.net | 50002 | Yes |
  </TabItem>
  <TabItem value="ltc-servers" label="Litecoin">
    | Server | Port | SSL |
    |--------|------|-----|
    | litecoin.stackwallet.com | 20063 | Yes |
    | electrum-ltc.bysh.me | 50002 | Yes |
    | electrum.ltc.xurious.com | 50002 | Yes |
    | backup.electrum-ltc.org | 443 | Yes |
    | ltc.rentonisk.com | 50002 | Yes |
    | electrum-ltc.petrkr.net | 60002 | Yes |
    | electrum.jochen-hoenicke.de | 50004 | Yes |
  </TabItem>
</Tabs>

#### Server Format

Servers are specified in `host:port:ssl` format:

- `bitcoin.stackwallet.com:50002:true`; SSL enabled (default)
- `my-server.local:50001:false`; SSL disabled

#### Configuring Custom Servers

**Via the Web UI:** Navigate to Settings, select the coin, and enter your servers in the clearnet or onion server text fields (one per line).

**Via configuration file:** Add the `electrum_clearnet_servers` and/or `electrum_onion_servers` lists to the coin's section in `basicswap.json`:

```json title="basicswap.json"
{
  "chainclients": {
    "bitcoin": {
      "connection_type": "electrum",
      "manage_daemon": false,
      "electrum_clearnet_servers": [
        "bitcoin.stackwallet.com:50002:true",
        "electrum.blockstream.info:50002:true"
      ],
      "electrum_onion_servers": [
        "your-onion-server.onion:50001:false"
      ]
    }
  }
}
```

### Tor Integration

Electrum mode supports Tor for enhanced privacy. BasicSwap does not ship with any built-in `.onion` Electrum servers. If you want to use onion servers, you must add them yourself in the Settings UI or in `basicswap.json`.

When Tor is enabled on your BasicSwap instance:

1. **Onion servers are prioritised:** any user-supplied `.onion` servers are placed ahead of clearnet servers in the connection order.
2. **Clearnet servers are routed through a SOCKS5 Tor proxy:** clearnet servers remain in the list and are reached through Tor.
3. **SSL behaviour is per-server:** the `ssl` flag is taken from each server entry as-is and is not changed by Tor. Clearnet Electrum servers typically use SSL; onion servers are usually configured with `ssl: false` since Tor already provides end-to-end encryption.

No additional configuration is needed beyond enabling Tor on your BasicSwap instance and optionally adding `.onion` servers to your Electrum server list.

### Monitoring Electrum Wallets

When a coin is running in Electrum mode, the **Wallets** page in the BasicSwap web interface displays different information than in full node mode:

- **Connected Server:** the hostname and port of the currently connected Electrum server.
- **Server Version:** the version of the ElectrumX server.
- **Connection Status:** one of the following:
  - `connected`: successfully connected and operational.
  - `disconnected`: temporarily disconnected; BasicSwap will automatically attempt reconnection.
  - `all_failed`: all configured servers have failed. Check your server list and network connectivity.

Unlike full node mode, there is no blockchain sync progress bar. Electrum wallets are ready as soon as a server connection is established.

#### Server Health & Failover

BasicSwap automatically monitors server health and handles failover:

- Servers are pinged at regular intervals to detect failures.
- If a server becomes unresponsive, BasicSwap automatically switches to another available server.
- Rate-limited servers are temporarily blacklisted (5 minute backoff).
- Server performance is tracked to prioritize faster, more reliable servers.

### Electrum Configuration Reference

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `connection_type` | string | `"rpc"` | Set to `"electrum"` to enable light wallet mode |
| `manage_daemon` | bool | `true` | Must be `false` when using Electrum mode |
| `electrum_clearnet_servers` | list | (built-in defaults) | Custom clearnet servers in `host:port:ssl` format |
| `electrum_onion_servers` | list | `[]` | Custom `.onion` servers for Tor |
| `electrum_poll_interval` | int | `10` | Polling interval in seconds for wallet updates |
| `address_gap_limit` | int | `50` | BIP44 gap limit for address derivation and discovery (clamped between 5 and 100) |

### Electrum Limitations

- **Supported coins:** Only Bitcoin and Litecoin. All other coins require full nodes.
- **Trust model:** Electrum mode trusts the remote server to provide accurate blockchain data. For maximum trustlessness, use full node (RPC) mode.
- **Litecoin MWEB:** MWEB addresses (starting with `ltcmweb1`) are not supported in Electrum mode. Use standard Litecoin addresses.
- **Server availability:** If all configured servers are down, wallet operations will be unavailable until a server becomes reachable. Built-in failover minimizes this risk.

---

## Monero Remote Nodes

BasicSwap supports connecting to a **remote Monero daemon** instead of running a local `monerod` instance. This avoids downloading the full Monero blockchain while still keeping your wallet running locally. The same mechanism also applies to **Wownero**.

:::info
With remote node mode, only the daemon (`monerod`) is remote. The wallet (`monero-wallet-rpc`) always runs locally on your machine. Your keys never leave your device.
:::

### How It Works

In standard mode, BasicSwap runs both a local Monero daemon (`monerod`) and a local wallet RPC (`monero-wallet-rpc`). The daemon downloads and validates the entire Monero blockchain, which requires significant disk space and sync time.

In **remote node mode**, BasicSwap skips running a local daemon and instead connects `monero-wallet-rpc` to an external Monero daemon. The wallet generates and manages keys locally, and only communicates with the remote daemon to query blockchain data and broadcast transactions.

### Trade-offs

| | Full Node (Local Daemon) | Remote Node |
|---|---|---|
| **Blockchain download** | Full chain required (~200+ GB) | None |
| **Disk space** | Significant | Minimal (wallet data only) |
| **Setup time** | Hours to days (initial sync) | Seconds |
| **Trust model** | Fully trustless; you verify everything | Trusts the remote daemon to provide accurate data |
| **Privacy** | Maximum; no third party sees your queries | Remote node can see your transaction queries |
| **Availability** | Independent; your own node | Depends on remote node availability |

### Enable Remote Node Mode

There are multiple ways to enable remote node mode, depending on whether you are setting up BasicSwap for the first time or modifying an existing installation.

#### During Initial Setup

You can configure BasicSwap to use a remote Monero node during initial setup by setting the `XMR_RPC_HOST` and `XMR_RPC_PORT` environment variables before running `basicswap-prepare`. This automatically sets `manage_daemon` to `false` for Monero.

<Tabs groupId="setup-method">
  <TabItem value="docker" label="Docker" default>
    ```bash title="Terminal"
    docker-compose run --rm -e XMR_RPC_HOST="node2.monerodevs.org" -e XMR_RPC_PORT=18089 swapclient basicswap-prepare --datadir=/coindata --withcoins=monero,bitcoin --htmlhost="0.0.0.0" --wshost="0.0.0.0" --xmrrestoreheight=$CURRENT_XMR_HEIGHT
    ```
  </TabItem>
  <TabItem value="no-docker" label="Without Docker">
    ```bash title="Terminal"
    XMR_RPC_HOST="node2.monerodevs.org" XMR_RPC_PORT=18089 basicswap-prepare --datadir=$SWAP_DATADIR --withcoins=monero,bitcoin --xmrrestoreheight=$CURRENT_XMR_HEIGHT
    ```
  </TabItem>
</Tabs>

If the remote node requires authentication, also set `XMR_RPC_USER` and `XMR_RPC_PWD`:

<Tabs groupId="setup-method">
  <TabItem value="docker" label="Docker" default>
    ```bash title="Terminal"
    docker-compose run --rm -e XMR_RPC_HOST="192.168.1.9" -e XMR_RPC_PORT=18089 -e XMR_RPC_USER="myuser" -e XMR_RPC_PWD="mypassword" swapclient basicswap-prepare --datadir=/coindata --withcoins=monero,bitcoin --htmlhost="0.0.0.0" --wshost="0.0.0.0" --xmrrestoreheight=$CURRENT_XMR_HEIGHT
    ```
  </TabItem>
  <TabItem value="no-docker" label="Without Docker">
    ```bash title="Terminal"
    XMR_RPC_HOST="192.168.1.9" XMR_RPC_PORT=18089 XMR_RPC_USER="myuser" XMR_RPC_PWD="mypassword" basicswap-prepare --datadir=$SWAP_DATADIR --withcoins=monero,bitcoin --xmrrestoreheight=$CURRENT_XMR_HEIGHT
    ```
  </TabItem>
</Tabs>

#### Via the Web UI

You can switch to a remote Monero node through the BasicSwap Settings page:

1. Navigate to **Settings** in the BasicSwap web interface.
2. Expand the **Monero** card.
3. Set **Manage Daemon** to `False`.
4. Enter the remote node's IP or hostname in **Daemon RPC Host**.
5. Enter the remote node's port in **Daemon RPC Port** (typically `18081` or `18089`).
6. (Optional) Enable **Automatically Select Daemon** and add multiple nodes to the **Trusted Public Nodes** list for automatic failover.
7. (Optional) Set **Transaction Fee Priority** (Auto, Slow, Normal, or Fast).
8. Click **Apply** to save changes.

#### Via Configuration File

You can manually edit the `basicswap.json` file to enable remote node mode:

1. Stop BasicSwap.
2. Open `basicswap.json` in a text editor (located in your data directory).
3. Under `chainclients.monero`, set the following:

```json title="basicswap.json"
{
  "chainclients": {
    "monero": {
      "connection_type": "rpc",
      "manage_daemon": false,
      "manage_wallet_daemon": true,
      "rpchost": "node2.monerodevs.org",
      "rpcport": 18089
    }
  }
}
```

4. Restart BasicSwap.

For authenticated nodes, also add `rpcuser` and `rpcpassword`:

```json title="basicswap.json"
{
  "chainclients": {
    "monero": {
      "connection_type": "rpc",
      "manage_daemon": false,
      "manage_wallet_daemon": true,
      "rpchost": "192.168.1.9",
      "rpcport": 18089,
      "rpcuser": "myuser",
      "rpcpassword": "mypassword"
    }
  }
}
```

### Private Remote Nodes

If you run your own Monero node on a separate machine (e.g., a home server or VPS), you can connect BasicSwap to it either directly or through an SSH tunnel.

#### Without SSH Tunneling

1. Configure `monerod.conf` on the remote machine:

```ini title="monerod.conf"
rpc-login=myuser:mypassword
rpc-restricted-bind-port=18089
rpc-restricted-bind-ip=0.0.0.0
```

2. Open port `18089` in the remote machine's firewall if necessary.

3. Set the following in your BasicSwap `basicswap.json`:

```json title="basicswap.json"
{
  "chainclients": {
    "monero": {
      "connection_type": "rpc",
      "manage_daemon": false,
      "manage_wallet_daemon": true,
      "rpchost": "192.168.1.9",
      "rpcport": 18089,
      "rpcuser": "myuser",
      "rpcpassword": "mypassword"
    }
  }
}
```

4. Verify the connection from your BasicSwap machine:

```bash title="Terminal"
curl http://192.168.1.9:18089/json_rpc -u myuser:mypassword --digest -d '{"jsonrpc":"2.0","id":"0","method":"get_info"}' -H 'Content-Type: application/json'
```

#### With SSH Tunneling

SSH tunneling provides a secure connection without exposing RPC ports to the network. No RPC authentication is needed since SSH handles security.

1. On the remote Monero node, configure `monerod.conf`:

```ini title="monerod.conf"
rpc-restricted-bind-port=18089
```

2. Create an SSH tunnel from your BasicSwap machine to the remote node:

```bash title="Terminal"
ssh -N -L 18089:localhost:18089 user@REMOTE_NODE_IP
```

Or, from the remote machine, create a reverse tunnel to your BasicSwap machine:

```bash title="Terminal"
ssh -N -R 18089:localhost:18089 user@LOCAL_BSX_IP
```

3. Set the following in your BasicSwap `basicswap.json`:

```json title="basicswap.json"
{
  "chainclients": {
    "monero": {
      "connection_type": "rpc",
      "manage_daemon": false,
      "manage_wallet_daemon": true,
      "rpchost": "localhost",
      "rpcport": 18089
    }
  }
}
```

### Trusted vs Untrusted Daemon

By default, BasicSwap treats remote daemons as **trusted**. The wallet skips some verification steps for better performance in this mode.

You can opt in to **auto mode**, which determines trust based on the daemon's IP address:

- **Trusted (private IPs):** `127.x.x.x`, `10.x.x.x`, `172.16-31.x.x`, `192.168.x.x`, `localhost`, and `*.local` addresses are treated as trusted.
- **Untrusted (public IPs):** All other addresses are treated as untrusted. The wallet performs additional verification to guard against a potentially dishonest daemon.

To change the trust mode:

- **In configuration:** Set `"trusted_daemon": "auto"` or `"trusted_daemon": false` in the Monero section of `basicswap.json`.

:::warning
Any remote node, even in untrusted mode, can provide bogus data including wildly inflated fees, which can cause permanent loss of funds. Only use nodes that you trust.
:::

### Automatic Daemon Selection

BasicSwap can automatically select from a list of remote Monero daemons, providing failover if one becomes unavailable. Unlike Electrum mode (which switches servers live), Monero daemon selection only happens at startup.

To enable automatic daemon selection:

1. Set `"automatically_select_daemon": true` in `basicswap.json` or enable it via the Settings UI.
2. Add remote node URLs to the `"remote_daemon_urls"` list in configuration, or the **Trusted Public Nodes** field in the Settings UI.

```json title="basicswap.json"
{
  "chainclients": {
    "monero": {
      "connection_type": "rpc",
      "manage_daemon": false,
      "manage_wallet_daemon": true,
      "automatically_select_daemon": true,
      "remote_daemon_urls": [
        "node2.monerodevs.org:18089",
        "node.xmr.to:18081"
      ]
    }
  }
}
```

BasicSwap tries the last-used node first. If it fails, the list is shuffled and each node is tried in turn. The first successful connection becomes the new default.

### Tor Integration

When Tor is enabled on your BasicSwap instance, remote Monero daemon connections are automatically routed through a SOCKS5 Tor proxy, unless the daemon is on a private IP address (which would be unnecessary and counterproductive).

No additional configuration is needed beyond enabling Tor on your BasicSwap instance.

### Monero Configuration Reference

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `manage_daemon` | bool | `true` | Set to `false` for remote node mode |
| `manage_wallet_daemon` | bool | `true` | Wallet always runs locally; leave as `true` |
| `rpchost` | string | `"127.0.0.1"` | Remote daemon IP or hostname |
| `rpcport` | int | `29798` | Remote daemon RPC port. `29798` is BasicSwap's own default, chosen to avoid colliding with a host-system `monerod`. When connecting to a public remote node, override this. Public Monero nodes conventionally expose `18081` (unrestricted) or `18089` (restricted) |
| `rpcuser` | string | `""` | Optional RPC authentication username |
| `rpcpassword` | string | `""` | Optional RPC authentication password |
| `trusted_daemon` | bool/string | `true` | `true` (bool), `false` (bool), or `"auto"` (string, auto-detects based on IP) |
| `automatically_select_daemon` | bool | `false` | Enable automatic daemon selection from URL list |
| `remote_daemon_urls` | list | `[]` | List of `host:port` strings for daemon failover |
| `fee_priority` | int | `0` | Transaction fee priority: 0=auto, 1=slow, 2=normal, 3=fast |
| `rpctimeout` | int | `60` | RPC timeout in seconds |

### Monero Limitations

- **Trust model:** Remote node mode trusts the remote daemon for blockchain data accuracy. For maximum trustlessness, run your own local Monero node.
- **Public node reliability:** Public Monero nodes may be unreliable, rate-limited, or slow. Consider running your own remote node or using automatic daemon selection with multiple nodes for better reliability.
- **Privacy:** The remote node can see which transactions you broadcast and which outputs you query. For maximum privacy, run your own node.
- **Wallet still runs locally:** `monero-wallet-rpc` runs on your machine and requires some system resources, though significantly less than a full daemon.

:::tip
All Monero remote node options also apply to **Wownero**. Use the `WOW_` environment variable prefix (e.g., `WOW_RPC_HOST`, `WOW_RPC_PORT`) during setup, and configure the `wownero` section in `basicswap.json` the same way as `monero`.
:::
