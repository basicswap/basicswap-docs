---
sidebar_position: 5
title: Make an Offer
description: "How to make and manage trading offers on BasicSwap DEX"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import React from 'react';

# Create an Offer

BasicSwap is a cross-chain, privacy-focused decentralized exchange that eliminates intermediaries from cryptocurrency trading. Its distinctive distributed order book system allows you to create and accept trading offers without any third-party involvement.

This comprehensive guide will walk you through the complete process of creating an offer, configuring its parameters, and successfully placing it on the BasicSwap order book.

## Create an Offer

1. Open the BasicSwap interface and click the blue `New Offer` button.

2. Specify the cryptocurrency and amount you wish to sell in the **You Send** field.

3. Enter your desired receiving cryptocurrency and amount in the **You Get** field

    :::tip
    Set the current market rate by clicking the `Fetch Rate` button. This will automatically adjust the number of coins your offer will request, though you can adjust it manually after. 
    :::

4. Configure your offer parameters.
    * **Lock Rate**: When enabled, maintains your specified exchange rate by automatically adjusting the receiving amount. When disabled, the system recalculates the rate based on your entered **You Get** value.
    * **Amount Variable**: Allows partial fills by accepting bids for portions of your total offered amount.
    * **Rate Variable**: Permits incoming bids at rates that differ from your specified rate.

5. Proceed to the next configuration screen by clicking the blue `Continue` button.

## Configure Offer Settings

1. Set your offer's duration by adjusting the **Offer valid (hrs)** value, which determines how long your offer remains active on the order book.

2. Configure the **Contract Locked (Mins)** parameter to establish the atomic swap timeout period. This critical setting defines how long the system waits before determining a swap has failed and returning funds to both parties.

3. Select your bid acceptance preference; **Accept All** automatically accepts any incoming bid that matches your offer parameters while **Accept Known** only automatically accepts bids from traders you've previously completed swaps with

    :::caution
    Completed swaps do not automatically remove your offer from the order book. If using **Accept All** or **Accept Known**, remember that your offer remains active and may receive additional bids until it expires.
    :::

4. Proceed to the final confirmation step by clicking the blue `Continue` button.

## Confirm and Place Your Offer

1. Carefully review your order details on the confirmation screen, then click the `Confirm Offer` button to publish your order to the BasicSwap network.

## Monitor Your Active Offers

1. Track all your current and historical offers by navigating to the **Your Offers** tab, which displays their status and detailed information.

## Managing Incoming Bids

If you selected **Accept All**, the system will automatically process matching bids without requiring your intervention. 

However, if you disabled automatic acceptance, you'll need to manually review and approve incoming bids.

1. Monitor the **Bids** page regularly to check for incoming bid notifications.

2. When a bid arrives, click on the `Accept` button to view the complete swap request details.

3. After reviewing the bid information, click `Accept Bid` to initiate the atomic swap process.

4. Once accepted, the swap executes automatically through the atomic swap protocol with no further action required.

## Monitoring Swap Progress

Track the real-time status of your ongoing swaps through the comprehensive **Events** section of each bid's detail page. 

This page displays every step of the atomic swap process, including network confirmations, cryptographic verification stages, and payment broadcasts, giving you complete visibility into the swap's execution.