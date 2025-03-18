---
sidebar_position: 4
title: Manage Enabled Coins
description: "How to manage enabled coins on BasicSwap DEX"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import React from 'react';

# Manage Enabled Coins

BasicSwap DEX operates as a fully non-custodial exchange, giving you complete control over your assets throughout the trading process. This architecture provides significant security and privacy advantages but requires running a full node for each cryptocurrency you enable.

This comprehensive guide explains all aspects of coin management within the BasicSwap environment, from enabling currencies to monitoring blockchain synchronization and managing wallets.

:::info
In the current beta release, BasicSwap requires running full blockchain nodes locally for each enabled cryptocurrency. Solutions such as light nodes and third-party integrations are being considered and/or worked on by our community of open-source contributors and should eventually go live.  
:::

## Enable Coins

BasicSwap comes with Particl enabled by default, as the platform relies on the SecureMessaging (SMSG) network—a core component of the Particl blockchain ecosystem—to facilitate its decentralized messaging and order book functionality.

To trade with additional cryptocurrencies such as Bitcoin, Litecoin, or Monero, you'll need to explicitly enable them by following the instructions in our [Enable or Disable Coins](/docs/user-guides/enable-disable-coins) guide.

## Monitor Sync Status

When operating BasicSwap, your device functions as a full node for each enabled cryptocurrency (such as Bitcoin), requiring complete blockchain synchronization before trading.

To check current synchronization progress:

1. Access the Wallets page by selecting the `Wallets` tab on the BasicSwap interface.

2. Review the progress bars displayed on each cryptocurrency tile, which indicate real-time synchronization status.

3. Confirm network connectivity by verifying that each coin shows an Updating status indicator next to its core version number.

Initial synchronization may take several hours depending on the blockchain size and your internet connection speed.

## Manage Wallets (Deposit/Withdraw)

BasicSwap provides comprehensive wallet management for each enabled cryptocurrency, with both common functions and currency-specific features accessible through a unified interface.

1. Navigate to the Wallets page by selecting the `Wallets` tab in the main navigation.

2. Locate the cryptocurrency you wish to manage and click its associated `Manage` button.

3. Within the management interface, you'll find deposit and withdrawal functions, coin-specific features (such as balance conversion for PART), transaction history, balance information, and advanced settings relevant to that particular cryptocurrency.

:::info
When using PIVX, Dash, or Firo cryptocurrencies, an additional initialization step is required. After the blockchain has completely synchronized, you must activate the Reseed wallet function to properly enable deposit and withdrawal capabilities.

Failure to perform this step will result in wallet functionality remaining disabled, even with a fully synchronized blockchain. The reseeding process typically completes within a few seconds and only needs to be performed once after initial synchronization.
:::