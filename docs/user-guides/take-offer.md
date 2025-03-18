---
sidebar_position: 6
title: Take an Offer
description: "How to take trading offers on BasicSwap DEX"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import React from 'react';

# Take an Offer

BasicSwap is a cross-chain, privacy-focused decentralized exchange that eliminates intermediaries from cryptocurrency trading. Its distinctive distributed order book system allows you to create and accept trading offers without any third-party involvement.

This comprehensive guide will walk you through the complete process of creating an offer, configuring its parameters, and successfully placing it on the BasicSwap order book.

## Explore the Order Book

:::info
The price history chart displays market data from external API sources and may not perfectly reflect actual trading activity within BasicSwap. This information is provided for reference only.
:::

1. Access the available trading offers by selecting the **Show Order Book** page in the main navigation.

2. Review the list of active offers below the price chart and scroll through them to find suitable trading opportunities.

3. Refine the displayed offers using the filtering options located directly beneath the price history graph. These filters allow you to customize the view by currency pair, price range, or other parameters.

4. Hover over an offer's rate or offerer to view more detailed information.

## Place a Bid

1. Once you identify a suitable offer, initiate the trading process by clicking the `Swap` button located on the right side of the offer tile.

2. Carefully review the swap parameters on the details screen, including exchange rate, amount, and transaction fees. If the terms are acceptable, click the blue `Send Bid` button to proceed.

3. Upon confirmation, your bid is transmitted to the offerer through the secure SMSG network. The system will display a success message indicating your bid has been properly submitted.

## Monitor Your Swap

After placing a bid, the next steps depend on the offer creator's settings:

* **For automatically accepted offers:** No action is required on your part. The atomic swap process begins immediately and will complete without further intervention.
* **For manually approved offers:** You'll need to wait for the offerer to review and accept your bid. During this waiting period, you can track your bid status.

To monitor your active bids and swaps:

1. Access the **Bids** page to view all your outgoing bids and their current status.

2. Check the **Bid Status** indicator, which will display whether your bid is pending, accepted, or rejected.

3. For detailed information, click the `More Details` button of any bid to open its comprehensive status page. The detailed view provides real-time technical information about each step of the swap process, including blockchain confirmations.

4. Once the offerer accepts your bid, the atomic swap executes automatically. The system will transfer your new coins to your wallet after all blockchain confirmations are complete.