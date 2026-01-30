---
sidebar_position: 3
title: Electrum Light Wallets
description: "How to use Electrum light wallets instead of full nodes for Bitcoin and Litecoin on BasicSwap DEX"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import React from 'react';

# Electrum Light Wallets

BasicSwap supports **Electrum light wallets** as an alternative to running full blockchain nodes for **Bitcoin (BTC)** and **Litecoin (LTC)**. Instead of downloading and syncing an entire blockchain, Electrum mode connects to remote ElectrumX servers to query blockchain data, letting you start trading much faster with significantly lower disk and bandwidth requirements.

:::info
Electrum light wallet mode is currently available for **Bitcoin** and **Litecoin** only. All other coins still require full nodes.
:::

## How It Works

In standard (RPC) mode, BasicSwap runs a full node for each enabled coin — downloading the entire blockchain and verifying every transaction locally. This provides maximum security and trustlessness but requires significant disk space and sync time.

In **Electrum mode**, BasicSwap connects to remote ElectrumX servers using the standardized ElectrumX protocol. These servers index the blockchain and respond to balance, transaction, and UTXO queries on your behalf. Your wallet keys remain local — only public address information is sent to the server.

### Trade-offs

| | Full Node (RPC) | Electrum Light Wallet |
|---|---|---|
| **Blockchain download** | Full chain required | None |
| **Disk space** | Significant (hundreds of GB for BTC) | Minimal |
| **Setup time** | Hours to days (initial sync) | Seconds |
| **Trust model** | Fully trustless — you verify everything | Trusts the Electrum server to provide accurate data |
| **Privacy** | Maximum — no third party sees your queries | Server can see which addresses you query |
| **Availability** | Independent — your own node | Depends on server availability (auto-failover built in) |

## Supported Coins

Only the following coins currently support Electrum mode:

- **Bitcoin (BTC)**
- **Litecoin (LTC)**

All other coins (Monero, Particl, Firo, PIVX, Dash, etc.) require full nodes.

## Enable Electrum Mode

There are multiple ways to enable Electrum light wallet mode, depending on whether you are setting up BasicSwap for the first time or modifying an existing installation.

### During Initial Setup

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

### Via the Web UI

You can switch an existing coin to Electrum mode through the BasicSwap Settings page:

1. Navigate to **Settings** in the BasicSwap web interface.
2. Locate the coin you want to switch (Bitcoin or Litecoin).
3. Change the **Connection Type** dropdown from `rpc` to `electrum`.
4. (Optional) Configure custom Electrum servers in the server list fields.
5. (Optional) Toggle **Auto-transfer on mode switch** (enabled by default).
6. (Optional) Adjust the **Address Gap Limit** (default: 20).
7. Click **Apply** to save changes.

:::warning
You cannot switch connection modes while the coin has active swaps in progress. Complete or cancel all pending swaps before switching.
:::

### Via Configuration File

You can manually edit the `basicswap_settings.json` file to enable Electrum mode:

1. Stop BasicSwap.
2. Open `basicswap_settings.json` in a text editor (located in your data directory).
3. Under the coin's `chainclients` section, set the following:

```json title="basicswap_settings.json"
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

## Switching Between Modes

You can switch between full node (RPC) and Electrum mode at any time, provided there are no active swaps for that coin.

### Automatic Fund Transfer

By default, **auto-transfer on mode switch** is enabled. When you switch modes, BasicSwap will automatically sweep your funds from the old wallet to the new one:

- **RPC → Electrum:** Funds are swept from your full node wallet to Electrum-derived addresses.
- **Electrum → RPC:** Funds are swept from Electrum addresses back to your full node wallet.

A standard network fee is deducted from the sweep transaction.

### Manual Fund Transfer

If you disable auto-transfer (`auto_transfer_on_mode_switch: false`), you must manually move your funds between wallets when switching modes. Your old wallet's funds will not be accessible from the new mode until transferred.

## Custom Electrum Servers

BasicSwap ships with a set of default Electrum servers for each supported coin. You can configure custom servers for additional control or privacy.

### Default Servers

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

### Server Format

Servers are specified in `host:port:ssl` format:

- `bitcoin.stackwallet.com:50002:true` — SSL enabled (default)
- `my-server.local:50001:false` — SSL disabled

### Configuring Custom Servers

**Via the Web UI:** Navigate to Settings, select the coin, and enter your servers in the clearnet or onion server text fields (one per line).

**Via configuration file:** Add the `electrum_clearnet_servers` and/or `electrum_onion_servers` lists to the coin's section in `basicswap_settings.json`:

```json title="basicswap_settings.json"
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

## Tor Integration

Electrum mode fully supports Tor for enhanced privacy.

When Tor is enabled on your BasicSwap instance:

1. **Onion servers are prioritized** — if you have `.onion` Electrum servers configured, they will be used first.
2. **Clearnet servers are routed through Tor** — if no onion servers are available, clearnet servers are accessed through a SOCKS5 Tor proxy.
3. **SSL is automatically disabled over Tor** — Tor already provides end-to-end encryption, so the additional SSL layer is unnecessary.

No additional configuration is needed beyond enabling Tor on your BasicSwap instance and optionally adding `.onion` servers to your Electrum server list.

## Monitoring Electrum Wallets

When a coin is running in Electrum mode, the **Wallets** page in the BasicSwap web interface displays different information than in full node mode:

- **Connected Server** — the hostname and port of the currently connected Electrum server.
- **Server Version** — the version of the ElectrumX server.
- **Connection Status** — one of the following:
  - `connected` — successfully connected and operational.
  - `disconnected` — temporarily disconnected; BasicSwap will automatically attempt reconnection.
  - `all_failed` — all configured servers have failed. Check your server list and network connectivity.

Unlike full node mode, there is no blockchain sync progress bar — Electrum wallets are ready as soon as a server connection is established.

### Server Health & Failover

BasicSwap automatically monitors server health and handles failover:

- Servers are pinged at regular intervals to detect failures.
- If a server becomes unresponsive, BasicSwap automatically switches to another available server.
- Rate-limited servers are temporarily blacklisted (5 minute backoff).
- Server performance is tracked to prioritize faster, more reliable servers.

## Configuration Reference

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `connection_type` | string | `"rpc"` | Set to `"electrum"` to enable light wallet mode |
| `manage_daemon` | bool | `true` | Must be `false` when using Electrum mode |
| `electrum_clearnet_servers` | list | (built-in defaults) | Custom clearnet servers in `host:port:ssl` format |
| `electrum_onion_servers` | list | `[]` | Custom `.onion` servers for Tor |
| `electrum_poll_interval` | int | `10` | Polling interval in seconds for wallet updates |
| `auto_transfer_on_mode_switch` | bool | `true` | Automatically sweep funds when switching between RPC and Electrum |
| `address_gap_limit` | int | `20` | BIP44 gap limit for address derivation and discovery |

## Limitations

- **Supported coins:** Only Bitcoin and Litecoin. All other coins require full nodes.
- **Trust model:** Electrum mode trusts the remote server to provide accurate blockchain data. For maximum trustlessness, use full node (RPC) mode.
- **Litecoin MWEB:** MWEB addresses (starting with `ltcmweb1`) are not supported in Electrum mode. Use standard Litecoin addresses.
- **Server availability:** If all configured servers are down, wallet operations will be unavailable until a server becomes reachable. Built-in failover minimizes this risk.
