---
sidebar_position: 2
title: VPS Installation
description: "How to install BasicSwap DEX on a cloud server and access it remotely via SSH tunneling"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# VPS Installation

Running BasicSwap on a VPS (Virtual Private Server) lets you keep the DEX online 24/7 without leaving your local machine on. This is particularly useful if you want to use the [market making tool](/docs/user-guides/market-making) to provide liquidity around the clock.

This guide covers setting up a cloud server, installing BasicSwap on it, and securely accessing the web UI from your local machine through an SSH tunnel.

## Prerequisites

- A VPS account with a provider such as Digital Ocean, Vultr, or Hetzner. Digital Ocean is known to work out of the box with no special networking adjustments needed.
- Basic familiarity with the terminal and SSH.

**Recommended server specs:**

| Resource | Minimum |
|----------|---------|
| **OS** | Ubuntu 22.04 LTS or newer |
| **RAM** | 8 GB (BasicSwap runs full nodes for each enabled coin) |
| **Storage** | 100 GB+ SSD, depending on which coins you enable |

:::tip
You can significantly reduce RAM and storage requirements by using [lightweight modes](/docs/user-guides/lightweight-modes) such as Electrum wallets for Bitcoin/Litecoin or remote nodes for Monero.
:::

## Set Up Your Server

1. Log in to your cloud provider and create a new server (often called a "droplet" or "instance").

2. Select **Ubuntu 22.04 LTS** as the operating system.

3. Choose a plan with at least **8 GB of RAM** and enough storage for the blockchains of the coins you want to enable.

4. For authentication, select **SSH key** if possible. Password authentication also works but is less secure.

5. Deploy the server and note the **IP address** your provider assigns to it.

## Connect to Your Server

Open a terminal on your local machine and connect to the server over SSH.

```bash title="Terminal"
ssh root@YOUR_SERVER_IP
```

:::info
The default username depends on your provider. Digital Ocean uses `root`, but others may use `ubuntu` or a different account name. Your provider will tell you which one to use.
:::

The first time you connect, your terminal will warn you about an unknown host. Type `yes` to accept the host key and continue. Then enter your password (or let your SSH key handle authentication).

## Prepare the Server

1. Update all system packages to their latest versions.

```bash title="Terminal"
sudo apt update && sudo apt upgrade -y
```

If prompted about package configuration (for example, which version of OpenSSH to keep), you can safely keep the local version currently installed.

2. Reboot the server so all updates take effect.

```bash title="Terminal"
sudo reboot
```

3. Wait a moment, then reconnect using the same SSH command.

```bash title="Terminal"
ssh root@YOUR_SERVER_IP
```

:::info
If you get a "Connection refused" error, the server is still rebooting. Wait a bit and try again.
:::

## Set Up the Firewall

Before installing BasicSwap, set up a firewall to lock down the server. Since you will access BasicSwap through an SSH tunnel, no additional ports need to be opened.

```bash title="Terminal"
sudo ufw default deny incoming
sudo ufw default allow outgoing
sudo ufw allow ssh
sudo ufw enable
```

Type `y` when asked to confirm. This allows only SSH connections (port 22) and blocks all other incoming traffic.

:::warning
Make sure you allow SSH **before** enabling the firewall. Otherwise you will lock yourself out of the server.
:::

## Install BasicSwap

The Docker installation method is recommended for VPS setups. Follow the **Linux Docker instructions** in the [Installation Guide](/docs/user-guides/install#install-using-docker) to install Docker, create the BasicSwap image, and configure it.

When you reach the `basicswap-prepare` configuration step, make sure to include these flags:

- `--htmlhost="0.0.0.0"` and `--wshost="0.0.0.0"` so the web UI is accessible for remote connections.
- `--client-auth-password=YOUR_PASSWORD` to protect the web UI with a password. This is strongly recommended for any network-accessible instance. See the [Web UI Authentication](/docs/user-guides/web-ui-authentication) guide for details.

Your configuration command should look something like this:

```bash title="Terminal"
docker run --rm -t --name swap_prepare -v $COINDATA_PATH:/coindata i_swapclient basicswap-prepare --datadir=/coindata --withcoins=monero,bitcoin --htmlhost="0.0.0.0" --wshost="0.0.0.0" --xmrrestoreheight=$CURRENT_XMR_HEIGHT --usebtcfastsync --client-auth-password=YOUR_PASSWORD
```

:::caution
Store the mnemonic seed displayed during setup in a safe place. It is your wallet backup and is valid for all enabled coins. Also note the Monero restore height (`echo $CURRENT_XMR_HEIGHT`) for future recovery.
:::

## Start BasicSwap

Navigate to the BasicSwap Docker directory and start the container in detached mode so it keeps running after you close your SSH session. The `COINDATA_PATH` variable is read automatically from the `.env` file you set up during installation.

```bash title="Terminal"
cd basicswap/docker/
docker-compose up -d
```

## Access BasicSwap From Your Local Machine

BasicSwap's web UI runs on port 12700. Rather than exposing this port to the internet, use an SSH tunnel to forward it securely to your local machine.

On your **local machine** (not the server), open a new terminal and run:

```bash title="Terminal"
ssh -N -L 12700:localhost:12700 root@YOUR_SERVER_IP
```

This command forwards port 12700 on your local machine to port 12700 on the server through an encrypted SSH connection. The `-N` flag tells SSH not to execute any remote commands (tunnel only), and `-L` sets up the port forwarding.

The terminal will appear to hang with no output. This is normal. Keep it open for as long as you want to access the UI.

Now open your web browser and go to:

```
http://localhost:12700
```

You should see the BasicSwap web interface. If you set a password during setup, you will be prompted to log in.

## Keep BasicSwap Running

Since you started the container with `docker-compose up -d`, BasicSwap will keep running even after you disconnect from the server. It will also restart automatically if the server reboots, as long as the Docker daemon is enabled (which it is by default on most VPS providers).

To check that the container is running:

```bash title="Terminal"
docker ps
```

To follow the logs in real time:

```bash title="Terminal"
cd basicswap/docker/
docker-compose logs -f
```

Press `Ctrl + C` to stop following logs (this does not stop BasicSwap).

## Security Recommendations

- **Use SSH key authentication** instead of passwords for your server login. Most VPS providers let you add your public key during server creation.
- **Enable Web UI authentication** with `--client-auth-password` as described above. See the [Web UI Authentication](/docs/user-guides/web-ui-authentication) guide for managing passwords and API access.
- **Keep your server updated** regularly by running `sudo apt update && sudo apt upgrade` and rebooting when needed.
- **Do not expose port 12700** directly to the internet. Always access BasicSwap through an SSH tunnel.

## Useful Commands

| Command | Description |
|---------|-------------|
| `docker ps` | Check if BasicSwap is running |
| `docker-compose logs -f` | Follow logs in real time |
| `docker-compose up -d` | Start BasicSwap in the background |
| `docker-compose stop` | Stop BasicSwap |
| `docker-compose restart` | Restart BasicSwap |

All `docker-compose` commands must be run from the `basicswap/docker/` directory.
