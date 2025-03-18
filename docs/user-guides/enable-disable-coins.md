---
sidebar_position: 3
title: Enable or Disable Coins
description: "How to enable or disable coins on your BasicSwap DEX instance"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import React from 'react';

# Enable or Disable Coins

By default, BasicSwap only comes with Particl enabled as it is required to run the SecureMessaging Network (SMSG), but you can easily enable other coins.

This guide will show you how to enable and disable coins on BasicSwap.

:::info
Currently, each coin you add has to be added **one by one**. Repeat the following step for each coin you want to enable.
:::

## BasicSwap on Docker

If you've built BasicSwap using the Docker method, follow these steps to enable or disable coins on your instance.

<Tabs groupId="coin-management-docker">
  <TabItem value="enable-coins-docker" label="Enable Coins">
    1. Stop the Docker image (this will shut down all BasicSwap processes).
    
    ```bash title="Terminal"
    docker-compose stop
    ```
    
    2. Add a cryptocurrency to your BasicSwap instance by running the command below, replacing bitcoin with the specific coin you wish to enable after the `--addcoin` parameter.
    
    ```bash title="Terminal"
    docker-compose run --rm swapclient basicswap-prepare --datadir=/coindata --addcoin=bitcoin
    ```

    :::tip
    You can copy an existing pruned datadir (excluding `bitcoin.conf` and any wallets) over to `$COINDATA_PATH/bitcoin`. Remove any existing wallets after copying over a pruned chain, or the Bitcoin daemon won't start.
    :::
  </TabItem>
  <TabItem value="disable-coins-docker" label="Disable Coins">
    1. Stop BasicSwap completely.
    
    ```bash title="Terminal"
    docker-compose stop
    ```

    2. Disable a coin by running the command below, replacing bitcoin with the specific coin you wish to enable after the `--disablecoin` parameter.
    
    ```bash title="Terminal"
    docker-compose run --rm swapclient basicswap-prepare --datadir=/coindata --disablecoin=bitcoin
    ```
    
    3. Launch BasicSwap normally.
    
    ```bash title="Terminal"
    docker-compose up
    ```
  </TabItem>
</Tabs>

## BasicSwap Without Docker

If you installed BasicSwap directly from source rather than using Docker containers, follow the steps below to add  prevent or remove coins from your BasicSwap instance.

:::tip
Linux users can simplify the process of adding and removing coins with community-maintained automation scripts available in [here on Github](https://github.com/nahuhh/basicswap-bash/releases). 
:::

<Tabs groupId="coin-management-no-docker">
  <TabItem value="enable-coins-no-docker" label="Enable Coins">
    1. Stop BasicSwap completely.

    2. Add a cryptocurrency to your BasicSwap instance by running the command below, replacing bitcoin with the specific coin you wish to enable after the `--addcoin` parameter.
    
    ```bash title="Terminal" 
    basicswap-prepare --usebtcfastsync --datadir=$SWAP_DATADIR --addcoin=bitcoin
    ```

    3. Apply the changes to your BasicSwap instance.
    
    ```bash title="Terminal" 
    . $SWAP_DATADIR/venv/bin/activate && python -V
    ```

    :::tip
    You can copy an existing pruned datadir (excluding `bitcoin.conf` and any wallets) over to `$COINDATA_PATH/bitcoin`. Remove any existing wallets after copying over a pruned chain, or the Bitcoin daemon won't start.
    :::
  </TabItem>
  <TabItem value="disable-coins-no-docker" label="Disable Coins">
    1. Stop BasicSwap completely.

    2. Remove the coin's record in your `basicswap.json` config file.
    
    ```bash title="Terminal"
    sudo nano /Users/$USER/coinswaps/basicswap.json
    ```

    In this example, here is what you would remove from `basicswap.json` to disable Monero.
    
    ```json title="basicswap.json"
    "monero": {
            "connection_type": "rpc",
            "manage_daemon": true,
            "manage_wallet_daemon": true,
            "rpcport": 29798,
            "zmqport": 30898,
            "walletrpcport": 29998,
            "rpchost": "127.0.0.1",
            "walletrpchost": "127.0.0.1",
            "walletrpcuser": "xmr_wallet_user",
            "walletrpcpassword": "xmr_wallet_pwd",
            "walletfile": "swap_wallet",
            "datadir": "/coindata/monero",
            "bindir": "/coindata/bin/monero",
            "restore_height": 2731435,
            "blocks_confirmed": 7,
            "walletsdir": "/coindata/monero"
    },
    ```

    3. Save the changes with `CTRL + X`, followed by an `ENTER`.

    4. Launch BasicSwap normally.
  </TabItem>
</Tabs>