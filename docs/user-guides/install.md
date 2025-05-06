---
sidebar_position: 1
title: Installation Guide
description: "How to install the BasicSwap DEX on various platforms"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import React from 'react';

# BasicSwap Installation Guide

:::warning
Monitor your terminal output carefully during BasicSwap installation. **Any error messages require immediate attention—even seemingly minor errors can prevent successful launch if left unresolved.**

Watch particularly for permission issues, dependency failures, or network connectivity problems, and resolve each before proceeding to the next installation step.
:::

## Automated Installation Methods

<Tabs>
  <TabItem value="windows" label="Windows" default>
    <div style={{padding: '1.5rem', background: 'linear-gradient(135deg, #3b82f6, #1e40af)', color: 'white', borderRadius: '8px', marginBottom: '1rem'}}>
      <h3>Windows .exe Installer (Unstable, not Recommended)</h3>
      <p>Install BasicSwap on Windows effortlessly with a graphical installation wizard:</p>
      <ol>
        <li>Download the .exe installer from <a href="https://github.com/gerlofvanek/basicswap-installation-GUI/releases" style={{color: 'white', textDecoration: 'underline'}}>GitHub</a></li>
        <li><strong>Run the installer as administrator</strong> (right-click → Run as administrator)</li>
        <li>Follow the on-screen instructions to complete the installation</li>
      </ol>
      <p>This intuitive installer streamlines the setup process via an easy-to-navigate menu.</p>
    </div>
  </TabItem>
  <TabItem value="linux" label="Linux">
    <div style={{padding: '1.5rem', background: 'linear-gradient(135deg, #3b82f6, #1e40af)', color: 'white', borderRadius: '8px', marginBottom: '1rem'}}>
      <h3>Linux, Mac, and WSL Script Suite</h3>
      <p>For Linux users on various distributions, as well as WSL and MacOS, the simplest installation method is through community-developed scripts:</p>
      <ol>
        <li>Clone the scripts from <a href="https://github.com/nahuhh/basicswap-bash/" style={{color: 'white', textDecoration: 'underline'}}>GitHub</a></li>
      </ol>
      
      ```bash title="Terminal"
      git clone https://github.com/nahuhh/basicswap-bash.git || exit
      cd basicswap-bash
      ```
      
      <ol start="2">
        <li>Run the installation script:</li>
      </ol>
      
      ```bash title="Terminal"
      ./basicswap-install.sh
      ```
      <p>This collection of scripts automates configuration and management, including installing and updating BasicSwap, enabling/disabling/updating coin cores, enabling/disabling Tor, client auth & more.</p>
    </div>
  </TabItem>
</Tabs>

## Install Using Docker

BasicSwap is currently in beta stage and doesn't offer pre-compiled executables or integrations with third-party services (upcoming). You'll need to compile the source code and run a full node on your device. 

### Install Docker

Docker provides the simplest installation method for most users. This containerized approach ensures consistent setup across different environments and simplifies dependency management. 

However, please note that this method is not compatible with macOS systems — Mac users should follow the alternative instructions in the next section.

<Tabs groupId="operating-systems">
  <TabItem value="windows" label="Windows">
    1. Complete the prerequisites on the [Docker Desktop WSL 2 backend page](https://docs.docker.com/desktop/windows/wsl/), which includes activating WSL2 on Windows.

    2. Download [Docker Desktop for Windows](https://docs.docker.com/desktop/windows/wsl/) from the official website.

    3. Follow the installation instructions for Docker with WSL 2 as detailed on the Docker Desktop WSL 2 backend documentation.

    :::info
    **Docker on Windows 11:** Some Docker Desktop versions may experience compatibility issues with Windows 11. If you encounter problems, consider installing Docker Desktop version 4.8.x or earlier, which have proven more stable on Windows 11 systems. 
    
    **Hardware Virtualization Requirements:** Docker requires hardware virtualization support which must be enabled in your BIOS/UEFI settings. Before installation:

    * Access your computer's BIOS/UEFI (typically by pressing `F2`, `F12`, or `Delete` during startup)
    * Navigate to the CPU configuration section
    * Enable options labeled "Virtualization Technology", "Intel VT-x/AMD-V", or similar 
    * Save changes and restart

    Docker's installation wizard will alert you if virtualization is disabled. Follow any on-screen troubleshooting guidance provided during setup.
    :::
  </TabItem>
  <TabItem value="linux" label="Linux">

:::info

Depending on your Docker version, commands may either require a dash (-) or not. If, for example, `docker-compose up` and other Docker commands return an error, try running them without a dash (e.g., `docker compose up`).

:::

    1. Install the required dependencies.

    ```bash title="Terminal"
    apt-get install curl jq git
    ```

    2. Verify that Docker is already installed on your system.

    ```bash title="Terminal"
    docker -v
    ```

    If you see a message indicating `Docker version (...)`, Docker is already installed and you can move on to the next steps without reinstalling it.

    3. Install Docker by following [the instructions on their website](https://docs.docker.com/engine/install/#server).

    4. Configure Docker to run without sudo is recommended, as outlined in [this guide](https://docs.docker.com/engine/install/linux-postinstall/). Without this setup, you'll need to type `sudo` before every `docker-compose` command.
  </TabItem>
</Tabs>

### Create the Docker Image

Create the BasicSwap Docker image needed to run the DEX. 

<Tabs groupId="operating-systems">
  <TabItem value="windows" label="Windows">
    1. Open a WSL (Linux) terminal.
    
    Press `Windows + R` > type "wsl" > press `ENTER`.

    2. Install Git and other dependencies.
    
    ```bash title="Terminal" showLineNumbers
    sudo apt update
    sudo apt install git jq curl
    ```

    3. Clone the BasicSwap repository.
    
    ```bash title="Terminal"
    git clone https://github.com/basicswap/basicswap.git
    ```

    4. Navigate to BasicSwap's Docker folder.
    
    ```bash title="Terminal"
    cd basicswap/docker/
    ```

    5. Copy the default environment file.
    
    ```bash title="Terminal"
    cp example.env .env
    ```

    6. **(Optional)** Set a custom coin data path by modifying the target path in your `.env` file.
    
    ```bash title="Terminal"
    nano .env
    ```

    7. Build the BasicSwap Docker image (make sure that you are in `basicswap/docker`).
    
    ```bash title="Terminal"
    docker-compose build
    ```
  </TabItem>
  <TabItem value="linux" label="Linux">
    1. Open a terminal.

    2. Install Git and other dependencies.
    
    ```bash title="Terminal" showLineNumbers
    sudo apt update
    sudo apt install git jq curl
    ```

    3. Clone the BasicSwap repository.
    
    ```bash title="Terminal"
    git clone https://github.com/basicswap/basicswap.git
    ```

    4. Navigate to BasicSwap's Docker folder.
    
    ```bash title="Terminal"
    cd basicswap/docker/
    ```

    5. Copy the default environment file.
    
    ```bash title="Terminal"
    cp example.env .env
    ```

    6. **(Optional)** Set a custom coin data path by modifying the target path in your `.env` file.
    
    ```bash title="Terminal"
    nano .env
    ```

    7. Build the BasicSwap Docker image (make sure you are in `basicswap/docker`).
    
    ```bash title="Terminal"
    docker-compose build
    ```
  </TabItem>
</Tabs>

### Configure the Docker Image

After creating BasicSwap's Docker image, it's time to configure it to your preferences.

<Tabs groupId="operating-systems">
  <TabItem value="windows" label="Windows">
    1. Open a WSL (Linux) terminal.
    
    Press `Windows + R` > type "wsl" > press `ENTER`.

    2. Navigate to BasicSwap's Docker folder.
    
    ```bash title="Terminal"
    cd basicswap/docker/
    ```

    3. Set `xmrrestoreheight` to Monero's current chain height.
    
    ```bash title="Terminal"
    CURRENT_XMR_HEIGHT=$(curl -s http://node2.monerodevs.org:18089/get_info | jq .height)
    ```

    4. Choose which cryptocurrencies to enable (Particl is enabled by default and cannot be disabled). You must explicitly specify these currencies in your configuration command.

    5. Determine whether you want to use fast synchronization for the Bitcoin blockchain by including the `--usebtcfastsync` parameter. Fast sync uses checkpoints to reduce initial setup time significantly.

    6. Append `--client-auth-password=<YOUR_PASSWORD>` to the below command to optionally enable client authentication to protect your web UI and API port access from unauthorized access.

    7. Execute the following command to configure your BasicSwap, adjusting it according to your preferences as described above.
    
    ```bash title="Terminal"
    docker run --rm -t --name swap_prepare -v $COINDATA_PATH:/coindata i_swapclient basicswap-prepare --datadir=/coindata --withcoins=monero,bitcoin --htmlhost="0.0.0.0" --wshost="0.0.0.0" --xmrrestoreheight=$CURRENT_XMR_HEIGHT --usebtcfastsync
    ```

    8. Note down and store the mnemonic provided by the above command in a safe place. It serves as your backup key and is valid for all enabled coins.

    9. Note down the result of the following command, it will speed up the process of recovering your Monero if needed. 
    
    ```bash title="Terminal"
    echo $CURRENT_XMR_HEIGHT
    ```

    10. **(Optional)** Adjust your timezone by specifying the appropriate `TZ` value in your `.env` file, located within the BasicSwap Docker directory. Use the `timedatectl list-timezones` command to view valid timezone options.
    
    ```bash title="Terminal"
    nano .env
    ```

    To save changes, press `CTRL + X`, then `Y + ENTER`.
  </TabItem>
  <TabItem value="linux" label="Linux">
    1. Open a terminal.
    
    2. Navigate to BasicSwap's Docker folder.
    
    ```bash title="Terminal"
    cd basicswap/docker/
    ```

    3. Set `xmrrestoreheight` to Monero's current chain height.
    
    ```bash title="Terminal"
    CURRENT_XMR_HEIGHT=$(curl -s http://node2.monerodevs.org:18089/get_info | jq .height)
    ```

    4. Choose which cryptocurrencies to enable (Particl is enabled by default and cannot be disabled). You must explicitly specify these currencies in your configuration command.

    5. Determine whether you want to use fast synchronization for the Bitcoin blockchain by including the `--usebtcfastsync` parameter. Fast sync uses checkpoints to reduce initial setup time significantly.

    6. Append `--client-auth-password=<YOUR_PASSWORD>` to the below command to optionally enable client authentication to protect your web UI and API port access from unauthorized access.

    7. Execute the following command to configure your BasicSwap, adjusting it according to your preferences as described above.
    
    ```bash title="Terminal"
    docker run --rm -t --name swap_prepare -v $COINDATA_PATH:/coindata i_swapclient basicswap-prepare --datadir=/coindata --withcoins=monero,bitcoin --htmlhost="0.0.0.0" --wshost="0.0.0.0" --xmrrestoreheight=$CURRENT_XMR_HEIGHT --usebtcfastsync
    ```

    8. Note down and store the mnemonic provided by the above command in a safe place. It serves as your backup key and is valid for all enabled coins.

    9. Note down the result of the following command, it will speed up the process of recovering your Monero if needed. 
    
    ```bash title="Terminal"
    echo $CURRENT_XMR_HEIGHT
    ```

    10. **(Optional)** Adjust your timezone by specifying the appropriate `TZ` value in your `.env` file, located within the BasicSwap Docker directory. Use the `timedatectl list-timezones` command to view valid timezone options.
    
    ```bash title="Terminal"
    nano .env
    ```

    To save changes, press `CTRL + X`, then `Y + ENTER`.
  </TabItem>
</Tabs>

### Start BasicSwap

After configuring your Docker image, the next step is to run it. Doing so will launch BasicSwap, making it accessible through web browsers.

<Tabs groupId="operating-systems">
  <TabItem value="windows" label="Windows">
    1. Open a WSL (Linux) terminal.
    
    Press `Windows + R` > type "wsl" > press `ENTER`.

    2. Navigate to BasicSwap's Docker folder.
    
    ```bash title="Terminal"
    cd basicswap/docker/
    ```

    3. Start the Docker image. This will initiate BasicSwap's startup process.
    
    ```bash title="Terminal" showLineNumbers
    export COINDATA_PATH=/var/data/coinswaps
    docker-compose up
    ```

    4. Allow BasicSwap to complete its startup sequence, then access the interface by opening your web browser and navigating to the address below.
    
    ```
    http://localhost:12700
    ```
  </TabItem>
  <TabItem value="linux" label="Linux">
    1. Open a terminal.

    2. Navigate to BasicSwap's Docker folder.
    
    ```bash title="Terminal"
    cd basicswap/docker/
    ```

    3. Start the Docker image. This will initiate BasicSwap's startup process.
    
    ```bash title="Terminal" showLineNumbers
    export COINDATA_PATH=/var/data/coinswaps
    docker-compose up
    ```

    4. Allow BasicSwap to complete its startup sequence, then access the interface by opening your web browser and navigating to the address below.
    
    ```
    http://localhost:12700
    ```
  </TabItem>
</Tabs>

## Install Without Docker

### Build BasicSwap

The first step to running BasicSwap without docker is to build it locally on your device.

<Tabs groupId="operating-systems">
  <TabItem value="macos" label="macOS">
    1. Open Terminal (i.e., `COMMAND ⌘ + SPACE` and type "terminal" > hit `ENTER ↵`).

    2. Install Homebrew by executing the following command in the Terminal. Homebrew extends MacOS with a wealth of Linux-style package management capabilities.
    
    ```bash title="Terminal"
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
    ```

    3. Install the required dependencies
    
    ```bash title="Terminal"
    brew install python git gnupg pkg-config jq
    ```

    4. Close the terminal and open a new one. This will update the python symlinks and let you progress through the next steps.

    5. Execute the commands below sequentially to setup the environment. **Each line must be run one-by-one** to prevent errors and ensure successful execution.
    
    ```bash title="Terminal" showLineNumbers
    export SWAP_DATADIR=/Users/$USER/coinswaps
    python3 -m venv "$SWAP_DATADIR/venv"
    . $SWAP_DATADIR/venv/bin/activate && python3 -V
    cd $SWAP_DATADIR
    git clone https://github.com/basicswap/basicswap.git 
    cd $SWAP_DATADIR/basicswap
    ```

    6. Install root SSL certificates for the SSL module (more information [here](https://pypi.org/project/certifi/)).
    
    ```bash title="Terminal"
    sudo python3 bin/install_certifi.py
    ```

    7. Continue with the BasicSwap installation, executing the following two commands.
    
    ```bash title="Terminal" showLineNumbers
    pip3 install --require-hashes -r requirements.txt
    pip3 install .
    ```
  </TabItem>
  <TabItem value="linux" label="Linux">
    1. Install the required dependencies
    
    ```bash title="Terminal"
    apt-get install --no-install-recommends git python3-venv libpython3-dev gnupg pkg-config gcc libc-dev curl jq
    ```

    2. Execute the commands below sequentially (one by one) to setup the environment. **Each line must be run one-by-one** to prevent errors and ensure successful execution.
    
    ```bash title="Terminal" showLineNumbers
    export SWAP_DATADIR=$HOME/coinswaps
    python3 -m venv "$SWAP_DATADIR/venv"
    . $SWAP_DATADIR/venv/bin/activate && python3 -V
    cd $SWAP_DATADIR
    git clone https://github.com/basicswap/basicswap.git 
    cd $SWAP_DATADIR/basicswap
    pip3 install --require-hashes -r requirements.txt
    pip3 install .
    ```
  </TabItem>
</Tabs>

### Configure BasicSwap

Once the installation is complete, configure BasicSwap according to your requirements.

<Tabs groupId="operating-systems">
  <TabItem value="macos" label="macOS">
    1. Open Terminal (i.e., `COMMAND ⌘ + SPACE` and type "terminal" > hit `ENTER ↵`).

    2. Navigate to your BasicSwap folder.
    
    ```bash title="Terminal"
    cd /Users/$USER/coinswaps
    ```

    3. Set `xmrrestoreheight` to Monero's current chain height.
    
    ```bash title="Terminal"
    CURRENT_XMR_HEIGHT=$(curl -s http://node2.monerodevs.org:18089/get_info | jq .height)
    ```

    4. Choose which cryptocurrencies to enable (Particl is enabled by default and cannot be disabled). You must explicitly specify these currencies in your configuration command.

    5. Determine whether you want to use fast synchronization for the Bitcoin blockchain by including the `--usebtcfastsync` parameter. Fast sync uses checkpoints to reduce initial setup time significantly.

    6. Append `--client-auth-password=<YOUR_PASSWORD>` to the below command to optionally enable client authentication to protect your web UI and API port access from unauthorized access.

    7. Execute the following command to configure your BasicSwap, adjusting it according to your preferences as described above.
    
    ```bash title="Terminal"
    basicswap-prepare --datadir=$SWAP_DATADIR --withcoins=monero,bitcoin --xmrrestoreheight=$CURRENT_XMR_HEIGHT --usebtcfastsync
    ```
  </TabItem>
  <TabItem value="linux" label="Linux">
    1. Open a terminal.

    2. Navigate to your BasicSwap folder.
    
    ```bash title="Terminal"
    cd $HOME/coinswaps
    ```

    3. Set `xmrrestoreheight` to Monero's current chain height.
    
    ```bash title="Terminal"
    CURRENT_XMR_HEIGHT=$(curl -s http://node2.monerodevs.org:18089/get_info | jq .height)
    ```

    4. Choose which cryptocurrencies to enable (Particl is enabled by default and cannot be disabled). You must explicitly specify these currencies in your configuration command.

    5. Determine whether you want to use fast synchronization for the Bitcoin blockchain by including the `--usebtcfastsync` parameter. Fast sync uses checkpoints to reduce initial setup time significantly.

    6. Append `--client-auth-password=<YOUR_PASSWORD>` to the below command to optionally enable client authentication to protect your web UI and API port access from unauthorized access.

    7. Execute the following command to configure your BasicSwap, adjusting it according to your preferences as described above.
    
    ```bash title="Terminal"
    basicswap-prepare --datadir=$SWAP_DATADIR --withcoins=monero,bitcoin --xmrrestoreheight=$CURRENT_XMR_HEIGHT --usebtcfastsync
    ```
  </TabItem>
</Tabs>

### Start BasicSwap

After configuration, launch BasicSwap to start the service. Once initialized, the DEX interface will be accessible through your web browser, allowing you to begin trading.

<Tabs groupId="operating-systems">
  <TabItem value="macos" label="macOS">
    1. Open Terminal (i.e., `COMMAND ⌘ + SPACE` and type "terminal" > hit `ENTER ↵`).

    2. Navigate to your BasicSwap folder.
    
    ```bash title="Terminal"
    cd /Users/$USER/coinswaps
    ```

    3. Launch BasicSwap.
    
    ```bash title="Terminal"
    basicswap-run --datadir=$SWAP_DATADIR
    ```

    4. Allow BasicSwap to complete its startup sequence, then access the interface by opening your web browser and navigating to the address below.
    
    ```
    http://localhost:12700
    ```
  </TabItem>
  <TabItem value="linux" label="Linux">
    1. Open a terminal.

    2. Navigate to your BasicSwap folder.
    
    ```bash title="Terminal"
    cd $HOME/coinswaps
    ```

    3. Launch BasicSwap.
    
    ```bash title="Terminal"
    basicswap-run --datadir=$SWAP_DATADIR
    ```

    4. Allow BasicSwap to complete its startup sequence, then access the interface by opening your web browser and navigating to the address below.
    
    ```
    http://localhost:12700
    ```
  </TabItem>
</Tabs>
