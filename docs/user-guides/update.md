---
sidebar_position: 2
title: Update Guide
description: "How to update your BasicSwap DEX instance"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import React from 'react';

# BasicSwap Update Guide

BasicSwap DEX is under active open-source development, with frequent releases introducing new features, improvements, and critical bug fixes. Maintaining your installation with regular updates ensures optimal performance and security.

This guide provides step-by-step instructions for properly updating your BasicSwap instance to the latest version.

## Update a Docker Image

If you've built BasicSwap using the Docker method, follow these steps to update your instance to the most up-to-date version.

<Tabs groupId="update-method">
  <TabItem value="update-basicswap" label="Update BasicSwap">
    1. Navigate to your BasicSwap's Docker folder (where BasicSwap is installed).
    
    ```bash title="Terminal"
    cd basicswap/docker
    ```

    2. Stop the BasicSwap Docker image.
    
    ```bash title="Terminal"
    docker-compose stop
    ```

    3. Make sure you're on the correct repository.
    
    ```bash title="Terminal"
    git remote set-url origin https://github.com/basicswap/basicswap
    ```

    4. Pull the latest BasicSwap updates from Github.
    
    ```bash title="Terminal"
    git pull
    ```

    5. Apply the updates to your Docker image.
    
    ```bash title="Terminal"
    docker-compose build --no-cache
    ```

    6. Launch BasicSwap
    
    ```bash title="Terminal"
    docker-compose up
    ```

  </TabItem>
  <TabItem value="update-coin-cores" label="Update Coin Core Versions">
    To update the core versions of cryptocurrencies enabled in your BasicSwap installation, first ensure BasicSwap itself is running the latest version. This prerequisite is essential, as the coin core update process depends on components from the main BasicSwap codebase.

    1. Update your BasicSwap instance to the latest version.  

    2. Navigate to your BasicSwap docker folder (where your BasicSwap docker image is located).
    
    ```bash title="Terminal"
    cd basicswap/docker
    ```

    3. Stop the BasicSwap Docker image.
    
    ```bash title="Terminal"
    docker-compose stop
    ```

    4. Apply coin core updates to your docker image. Make sure to write what coin core(s) you want to update using the `--withcoins` argument.
    
    ```bash title="Terminal" showLineNumbers
    docker-compose run --rm swapclient \ 
    basicswap-prepare --datadir=/coindata --preparebinonly --withcoins=monero,bitcoin
    ```
  </TabItem>
</Tabs>

## Update Without Docker

If you installed BasicSwap directly from source rather than using Docker containers, follow the steps below to update your installation to the latest version.

:::tip
Linux users can simplify the update process with community-maintained automation scripts available in the [basicswap-bash repository](https://github.com/nahuhh/basicswap-bash). 
:::

<Tabs groupId="update-method-no-docker">
  <TabItem value="update-basicswap-no-docker" label="Update BasicSwap">
    1. Properly shutdown BasicSwap.

    2. Initialize the update environment by executing the following commands sequentially (**one by one**). 
    
    ```bash title="Terminal" showLineNumbers
    export SWAP_DATADIR=$HOME/coinswaps
    . $SWAP_DATADIR/venv/bin/activate && python3 -V
    ```

    3. Navigate to your BasicSwap folder and clear build cache.
    
    ```bash title="Terminal" showLineNumbers
    cd $SWAP_DATADIR/basicswap
    rm -rf $SWAP_DATADIR/basicswap/build
    ```

    4. Make sure you're on the correct repository.
    
    ```bash title="Terminal"
    git remote set-url origin https://github.com/basicswap/basicswap
    ```

    5. Pull the latest BasicSwap updates from Github.
    
    ```bash title="Terminal"
    git pull
    ```

    6. Apply the updates to your BasicSwap instance.
    
    ```bash title="Terminal" showLineNumbers
    pip3 install --require-hashes -r requirements.txt
    pip3 install .
    ```
  </TabItem>
  <TabItem value="update-coin-cores-no-docker" label="Update Coin Core Versions">
    To update the core versions of cryptocurrencies enabled in your BasicSwap installation, first ensure BasicSwap itself is running the latest version. This prerequisite is essential, as the coin core update process depends on components from the main BasicSwap codebase.

    1. Properly shutdown BasicSwap.
    
    2. Update your BasicSwap instance to the latest version.

    3. Apply coin core updates to your BasicSwap instance. Make sure to input what coin core(s) you want to update using the `--withcoins` argument.
    
    ```bash title="Terminal"
    basicswap-prepare --datadir=$SWAP_DATADIR --preparebinonly --withcoins=monero,bitcoin
    ```
  </TabItem>
</Tabs>