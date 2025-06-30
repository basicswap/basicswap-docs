---
sidebar_position: 7
title: GUI-Based Automated Market Making
description: "How to use the integrated automated market making (AMM) tool in the BasicSwap DEX GUI."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import React from 'react';

# GUI-Based Automated Market Making (AMM)

This guide explains how to use the Automated Market Making (AMM) tool integrated into the BasicSwap user interface. The AMM tool helps you provide liquidity with low effort by automating offer management.

## Key Features

The AMM page incorporates all functionalities from the original companion script, alongside additional quality-of-life features. These include:

*   **Automatic Offer Republication**: Automatically republishes offers on the order book upon expiry.
*   **Automatic Price Adjustments**: Adjusts offer rates based on the market price of each coin (a configurable percentage above or below market price).
*   **Automatic Offer Size Adjustments**: Adjusts the amount of coins offered when previous offers are partially filled.
*   **Market Buy/Sell**: Accepts offers up to a desired rate, then sets a new offer until the full desired amount is fulfilled.
*   **Automatic Startup**: Starts the AMM tool automatically with BasicSwap.
*   **GUI Configuration**: Configure all AMM settings directly from the user interface.
*   **Swap Type Selection**: Choose between Secret Hash or Adaptor Signature swap types.
*   **Price Source Selection**: Select the method used to determine automatic price adjustments.

## How it Works

### Automatic Republication of Offers

BasicSwap offers have a set expiration time due to limitations of the SMSG P2P network. This previously required you to manually republish offers. With the AMM integration, this manual process is no longer necessary. You can set your offers within the tool and configure them for automatic republication upon expiry.

### Automatic Price Adjustments

This feature automatically adjusts your offer's rate based on the current market price of both coins in the pair.

You can choose from various methods to determine the market rate:
*   **CoinGecko API**: Fetches the price from CoinGecko.
*   **BasicSwap Order Book**: Uses the best rate of auto-accept offers on BasicSwap's own order book (no external connection).
*   **Combined Methods**: Use different combinations of the above, including a static and/or fixed minimum rate.

You can also set a **premium** on the market rate (a percentage above or below). This allows you to set offers that can guarantee a profit margin over the market rate at the time the offer was published.

### Automatic Offer Size Adjustments

If you have a set inventory of a coin to offer, your offers need to reflect the remaining inventory after partial fills. For example, if you start with 100 Litecoins and a 20 Litecoin partial swap occurs, you are left with 80 Litecoins. The next time your offer is automatically republished, it will account for this reduced inventory.

Once you configure your "Offer Size Increment" parameter, the AMM manages this entire process seamlessly in the background.

### Market Buys and Sells (Experimental)

The AMM tool introduces a "market buy/sell" functionality through the **Bids** function. This is currently an experimental feature.

While the AMM's primary role is to automatically place dynamic offers, you can enable a feature to also place bids at a desired rate. If a bid's size exceeds the available quantity at a specific rate, the AMM will take the existing offer and then immediately place a new offer for the remaining amount of your initial bid.

**Example:** You want to acquire 10 Monero for 10 Litecoin (1.0 ratio). An offer for 5 Monero for 5 Litecoin exists at that rate. The AMM will first accept the entire 5 Monero offer. Then, it will place a new offer at the same rate for the remaining 5 Monero.

#### How to Enable Market Buys and Sells

As this feature is experimental, it requires manual activation.
1.  Navigate to the **Settings** page.
2.  In the **General** tab, activate both `debug` and `debug_ui`.

This feature will be integrated into the stable set of functionalities in the future, removing the need for manual activation.

## AMM User Interface Breakdown

### Main Screen

The main AMM screen provides a central hub for managing your automated offers.

*   **Offers Table**: Displays all your offers, their status (enabled/disabled), and main parameters.
*   **Create New Offer**: Button to create a new automatic offer.
*   **Refresh Button**: Refreshes the offer table with the most recent information.
*   **Edit/Remove**: Options to edit or remove an existing offer.
*   **AMM Control Center**: Start or stop all automatic offers.
*   **Global Configuration**: Modify global AMM parameters.

### Create a New Offer

This form allows you to define the parameters for a new automated offer.

*   **Local Name/Label**: A private name for your offer (not visible to others).
*   **Enable/Disable Offer**: Controls if the offer is active. Disabled offers will not be republished.
*   **Maker Coin**: The coin you are offering.
*   **Taker Coin**: The coin you want to receive.
*   **Total Offer Amount**: The total quantity of the maker coin you are offering. This amount is reduced after partial fills.
*   **Minimum Rate**: The absolute lowest rate at which you are willing to sell. This protects against price drops.
*   **Rate Tweak Percentage**: The percentage above or below the market price for your offer. E.g., a value of "1" on a $330 market price results in a $333 offer price ($330 + 1%).
*   **Minimum Wallet Balance**: The minimum balance required in your wallet for the offer to be republished.
*   **Offer Expiry Time (seconds)**: How long your offer remains on the order book before republication. Shorter durations mean more frequent rate updates.
*   **SMSG Identity**: The SMSG identity to publish your offer from. Can be randomized for new offers.
*   **Swap Protocol**: The swap protocol for your offer (Adaptor Signature or Secret Hash).
*   **Minimum Bid Amount**: The minimum amount required for a bid on your offer to be automatically accepted.
*   **Offer Size Adjustment Precision**: The precision of offer size adjustments after a partial fill.
*   **Coin Rate/Price Calculation Method**: How coin rates are determined. "Static" disables automatic price adjustments.

### Create a Bid

This form allows you to create automated bids to acquire coins.

*   **Local Name/Label**: A private name for your bid (not visible to others).
*   **Enable/Disable Offer**: Controls if the bid is active.
*   **Maker Coin**: The coin you are offering.
*   **Taker Coin**: The coin you want to acquire.
*   **Total Offer Amount**: The total quantity of the maker coin you are offering for this bid.
*   **Maximum Rate**: The absolute highest rate you are willing to pay. This protects against price spikes.
*   **Minimum Coin to Balance**: The minimum balance required in your wallet for a bid to be placed.
*   **Max Concurrent**: Maximum number of active bids at once.
*   **Offers to Bid On**: Filter which offer types to bid on: `auto_accept_only` (default), `all`, or `known_only`.
*   **SMSG Identity**: The SMSG identity to publish your bid from.
*   **Minimum Swap Amount**: The minimum number of coins required for a swap to take place.
*   **Use Balance Bidding**: Automatically calculates the bid size based on your total coin balance minus the offer’s minimum amount.
