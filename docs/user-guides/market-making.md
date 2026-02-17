---
sidebar_position: 8
title: Automated Market Making (AMM)
description: "How to use the automated market making tool in BasicSwap DEX to provide liquidity and manage offers."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import React from 'react';

# Automated Market Making (AMM)

BasicSwap includes an integrated Automated Market Making (AMM) tool that automates offer management on the decentralized order book. It handles offer republication, dynamic price adjustments, inventory tracking after partial fills, and optional automated bidding. This guide covers every aspect of the AMM: setup, configuration, rate strategies, automation, and troubleshooting.

:::caution
The AMM places real offers and spends real coins. Start with a single offer template and small amounts while learning the system.
:::

## How the AMM Works

The AMM runs as a standalone Python process (`createoffers.py`) managed through the AMM page in the BasicSwap web interface. It operates on a configurable loop (default: every 60 seconds) and performs the following on each cycle:

1. **Checks each enabled offer template** against your current wallet balance.
2. **Republishes expired offers** with updated rates and amounts. Offers on the SMSG network have a limited lifetime, so the AMM handles republication automatically.
3. **Adjusts offer sizes** after partial fills, reducing the amount by configurable increments.
4. **Recalculates rates** based on your chosen pricing strategy (market data, orderbook data, fixed rate, or a combination).
5. **Places bids** on existing offers if bid templates are configured (experimental feature).

The AMM stores its configuration in `createoffers.json` and tracks active offers and bids in `createoffers_state.json`, both located in the `AMM/` subdirectory of your BasicSwap data folder.

:::info
The AMM runs as a separate subprocess. It must be started manually from the AMM page or configured to start automatically with BasicSwap using the Autostart toggle.
:::

## Getting Started

### 1. Open the AMM Page

Navigate to the **AMM** page in the BasicSwap web interface. This is the central control panel for all automated market making activity.

### 2. Create an Offer Template

Click the **Add Offer** button to open the offer creation form. Fill in the following fields:

* **Local Name/Label**: A private name for your reference (not visible to other users).
* **Maker Coin**: The coin you are selling.
* **Taker Coin**: The coin you want to receive.
* **Total Offer Amount**: How much of the maker coin to offer.
* **Minimum Rate**: The lowest rate you will accept, acting as a price floor.
* **Rate Tweak Percentage**: A percentage adjustment above or below the market rate (e.g., `2` adds a 2% premium).
* **Coin Rate/Price Calculation Method**: How the AMM determines the offer rate. See [Rate Adjustment Strategies](#rate-adjustment-strategies) for details.
* **Offer Expiry Time**: How long (in seconds) each offer stays on the order book before the AMM republishes it. Shorter values mean more frequent rate updates.
* **Minimum Bid Amount**: The smallest bid the AMM will auto-accept.
* **Offer Size Increment**: Controls how the AMM adjusts offer sizes after partial fills. See [Amount Step](#amount-step-privacy-feature) for details.
* **Swap Protocol**: Choose between Adaptor Signature or Secret Hash.
* **SMSG Identity**: The SMSG address to publish from. Use `auto` for a new random address per offer.

See the full [Offer Template Reference](#offer-template-reference) for all available parameters.

### 3. Configure Global Settings (Optional)

Click **Global Configuration** to adjust timing parameters:

* **Min/Max Seconds Between Offers**: Controls the random delay between publishing consecutive offers (default: 15-60 seconds).
* **Main Loop Delay**: How often the AMM checks all templates (default: 60 seconds, range: 10-1000).

These defaults work well for most setups. See [Global Settings](#global-settings) for the full list.

### 4. Start the AMM

Click the **Start AMM** button. The AMM process will begin its loop, creating and managing offers based on your templates. You can monitor its activity in the **Log Viewer** at the bottom of the AMM page.

* **Stop**: Gracefully shuts down the AMM process.
* **Force Start**: Kills any existing AMM processes and starts fresh. Use this if the AMM gets stuck.

### 5. Enable Autostart (Optional)

Toggle the **Autostart** option to have the AMM start automatically whenever BasicSwap launches. This is useful for unattended operation.

## Rate Adjustment Strategies

The `adjust_rates_based_on_market` parameter controls how the AMM determines offer pricing. This can be set globally or overridden per offer template. Six modes are available:

| Mode | Price Sources | Fallback Behavior | Use Case |
|---|---|---|---|
| `static` | None (uses `minrate` + `ratetweakpercent` only) | N/A | Fixed-price offers with no market tracking |
| `false` | CoinGecko only | Skips offer if CoinGecko is unavailable | Simple external price tracking |
| `true` | Higher of CoinGecko or orderbook | Falls back to whichever source is available | General use (recommended) |
| `all` | Requires both CoinGecko and orderbook | Skips offer if either source is unavailable | Conservative pricing with dual-source validation |
| `only` | BasicSwap orderbook only | Skips offer if no orderbook data exists | Privacy-focused (no external API calls) |
| `minrate` | Orderbook with `minrate` as floor | Uses `minrate` if no orderbook data exists | Orderbook pricing with a safety net |

### Mode Details

**`static`**: Uses `minrate` as the base rate and applies `ratetweakpercent` on top. No market data is fetched. Best when you want a fixed, predictable price.

**`false`**: Fetches rates from the CoinGecko API. If CoinGecko is unreachable, the offer is skipped for that cycle. Best for straightforward market-rate tracking with an external source.

**`true`**: Fetches rates from both CoinGecko and the BasicSwap orderbook, then uses whichever is higher. If one source is unavailable, the other is used as a fallback. This is the recommended default for most users because it balances reliability with market accuracy.

**`all`**: Requires valid data from both CoinGecko and the orderbook. Uses the higher of the two rates. If either source is unavailable, the offer is skipped. Best when you want strict dual-source validation and are willing to skip cycles when data is incomplete.

**`only`**: Uses only the rates from existing auto-accept offers on BasicSwap's own orderbook. No external API calls are made. If no matching offers exist on the orderbook, the offer is skipped. Best for users who want to avoid any external network connections.

**`minrate`**: Uses the orderbook rate when available, but falls back to `minrate` if no orderbook data exists. This gives you orderbook-based pricing with a guaranteed floor price as a safety net.

:::tip
For most users, `true` is the best starting point. If you want to avoid external API calls entirely, use `only`. If you want a fixed price with no market tracking, use `static`.
:::

### Rate Tweak Percentage

The `ratetweakpercent` parameter adjusts the final rate by a percentage:

```
final_rate = base_rate * (1 + ratetweakpercent / 100)
```

* A value of `2` adds a 2% premium above the market rate.
* A value of `-3` sets the rate 3% below market.
* The final rate never drops below `minrate`, regardless of the tweak value.

**Example:** If the market rate for LTC/BTC is `0.003` and you set `ratetweakpercent` to `5`, the offer rate becomes `0.003 * 1.05 = 0.00315`.

## Offer Template Reference

| Parameter | Type | Default | Description |
|---|---|---|---|
| `name` | string | | Private label for this template (not visible to others) |
| `enabled` | bool | `true` | Whether this template is active |
| `coin_from` | string | | Coin you are selling (e.g., `"Litecoin"`) |
| `coin_to` | string | | Coin you want to receive (e.g., `"Bitcoin"`) |
| `amount` | float | | Base offer amount in `coin_from` units |
| `minrate` | float | | Absolute minimum acceptable rate (price floor) |
| `ratetweakpercent` | float | `0` | Percentage adjustment above or below market rate |
| `amount_variable` | bool | `true` | Allow partial fills (bidders can bid for less than the full amount) |
| `amount_step` | float | | Offer size increment for privacy (see below) |
| `min_coin_from_amt` | float | `0` | Minimum wallet balance to keep; offers stop if balance would drop below this |
| `offer_valid_seconds` | int | `3600` | How long each offer stays on the orderbook before republication |
| `automation_strategy` | string | `"accept_all"` | Bid acceptance mode: `accept_all`, `accept_known`, or `none` |
| `swap_type` | string | `"adaptor_sig"` | Swap protocol: `adaptor_sig` (Adaptor Signature) or `secret_hash` (Secret Hash) |
| `address` | string | `"auto"` | SMSG address to publish from (`"auto"` = random new address per offer) |
| `min_swap_amount` | float | | Minimum bid size the AMM will accept |
| `adjust_rates_based_on_market` | string | (global) | Per-offer override for the rate adjustment mode |

### Amount Step (Privacy Feature)

The `amount_step` parameter prevents counterparties from inferring your exact wallet balance through the size of your offers.

Instead of publishing an offer for your full available balance, the AMM rounds the offer size down to the nearest multiple of `amount_step`. This means the offer amount changes in fixed increments rather than revealing precise balance information.

**How it works:**

1. If your wallet balance can cover the full template `amount` while keeping `min_coin_from_amt` in reserve, the offer is published at the full `amount`. No stepping occurs.
2. If your balance is too low for the full amount, the AMM calculates how much is available (`wallet_balance - min_coin_from_amt`), then rounds that down to the largest multiple of `amount_step` that fits.

**Example:** Your template specifies `amount: 100`, `amount_step: 10`, and `min_coin_from_amt: 50` (keep at least 50 LTC in reserve).

* If your wallet holds 200 LTC: `200 - 50 = 150` available, which covers the full 100. The offer is published at **100 LTC**.
* If your wallet holds 120 LTC: `120 - 50 = 70` available, which cannot cover 100. The AMM rounds 70 down to the nearest multiple of 10, resulting in a **70 LTC** offer.
* If your wallet holds 55 LTC: `55 - 50 = 5` available, which is less than one `amount_step` (10). The template is **skipped** for this cycle.

:::info
The `amount_step` value must be between `0.001` and the template's `amount` value. Smaller increments give finer granularity but reveal more about your balance. Larger increments offer stronger privacy but less precise inventory usage.
:::

## Automation Strategies and Identity Management

### Bid Acceptance Strategies

The `automation_strategy` field on each offer template controls how incoming bids are handled:

* **`accept_all`**: Automatically accepts all incoming bids that meet the offer parameters. Provides maximum liquidity but gives you no control over who you trade with.
* **`accept_known`**: Only auto-accepts bids from SMSG identities that have completed at least one successful swap with you previously. More cautious; new counterparties are rejected.
* **`none`**: All bids require manual approval through the BasicSwap interface. Maximum control, but requires active monitoring.

### Identity Filtering

The AMM includes automatic protections against unreliable counterparties:

* **Failed bid tracking**: Identities with more than 3 failed bids, where failures outnumber successes, are automatically skipped.
* **Per-identity overrides**: On the SMSG Addresses page, you can set an `automation_override` for specific identities:
  * **Always Accept** (1): Bids from this identity are always auto-accepted, regardless of the offer's automation strategy.
  * **Never Accept** (2): Bids from this identity are always rejected.

### SMSG Addresses

The `address` field in offer templates controls which SMSG identity publishes the offer:

* **`"auto"`**: Generates a new random SMSG address for each offer. This provides better privacy because offers cannot be linked to a single identity.
* **Specific address**: Use a fixed SMSG address if you want a consistent identity across offers. This is useful if you want counterparties to recognize you and build swap history for the `accept_known` strategy.

Manage your SMSG addresses on the **SMSG Addresses** page in the BasicSwap interface.

## Bid Templates (Experimental)

In addition to placing offers, the AMM can actively bid on existing offers to acquire coins. This "market buy/sell" feature is experimental and requires debug mode.

### How Bids Work

The AMM scans the orderbook for offers matching your bid template criteria. When a match is found, it places a bid. If the available quantity at your desired rate is less than your bid amount, the AMM takes what is available and then places a new offer for the remaining amount.

**Example:** You want to acquire 10 XMR at a rate of 1.0 LTC/XMR. An offer for 5 XMR at that rate exists on the orderbook. The AMM bids on the 5 XMR offer, then publishes a new offer for the remaining 5 XMR.

### How to Enable Bids

Bid templates are an experimental feature that requires manual activation:

1. Navigate to the **Settings** page.
2. In the **General** tab, enable both `debug` and `debug_ui`.
3. Return to the AMM page. The bid template section is now visible.

### Bid Template Reference

| Parameter | Type | Default | Description |
|---|---|---|---|
| `name` | string | | Private label for this bid template |
| `enabled` | bool | `true` | Whether this template is active |
| `coin_from` | string | | Coin you want to acquire |
| `coin_to` | string | | Coin you are spending |
| `amount` | float | | Amount of `coin_from` to acquire |
| `max_rate` | float | | Maximum rate you will pay (price ceiling) |
| `min_coin_to_balance` | float | | Minimum wallet balance to maintain for `coin_to` |
| `max_concurrent` | int | `1` | Maximum number of active bids at the same time |
| `offers_to_bid_on` | string | `"auto_accept_only"` | Which offers to target (see below) |
| `address` | string | `"auto"` | SMSG address to bid from |
| `min_swap_amount` | float | | Minimum swap size |
| `use_balance_bidding` | bool | `false` | Calculate bid size dynamically from wallet balance |

### Offer Filtering for Bids

The `offers_to_bid_on` parameter controls which offers the AMM will bid on:

* **`auto_accept_only`** (default): Only bids on offers with automatic acceptance enabled. Avoids offers that require manual approval, reducing the chance of stuck bids.
* **`all`**: Bids on all available offers regardless of acceptance mode.
* **`known_only`**: Only bids on offers from identities with at least one successful swap in your history.

### Balance Bidding

When `use_balance_bidding` is enabled, the AMM calculates the bid amount dynamically:

```
bid_amount = wallet_balance - min_coin_to_balance
```

This is useful for liquidation strategies where you want to convert your entire available balance minus a reserve.

### Pre-Offer Bidding

Pre-offer bidding is an option on **offer templates** (not bid templates). It changes how the AMM processes an offer template by adding a step before the offer is published.

Normally, the AMM publishes your offer and waits for someone else to bid on it. With `attempt_bids_first` enabled, the AMM first scans the orderbook for existing offers in the **reverse direction** (where someone else is selling what you want to buy) and bids on those. Whatever amount gets filled through bids is subtracted from the offer. The AMM then publishes an offer for the remaining amount, or skips the offer entirely if everything was filled.

**Example:** Your offer template is set to sell 10 LTC for BTC. With `attempt_bids_first` enabled, the AMM finds an existing offer selling 4 BTC for LTC at an acceptable rate. It bids on that offer for 4 LTC worth, then publishes a new offer for the remaining 6 LTC.

This is different from **bid templates**, which are standalone entries that only place bids and never create offers. Pre-offer bidding combines both behaviors in a single template.

**Related parameters:**

* **`attempt_bids_first`**: Set to `true` to enable this behavior on an offer template (default: `false`).
* **`bid_rate_tolerance`**: Percentage tolerance for accepting existing offer rates (e.g., `2.0` means the AMM will bid on offers with rates up to 2% worse than your target rate).
* **`max_bid_percentage`**: Maximum percentage of the template amount to fill through bids before publishing an offer (default: `50`, meaning at most half the amount can be filled via bids).
* **`bid_strategy`**: Controls filtering of which offers to bid on (`balanced`, `aggressive`, `conservative`).

## Global Settings

These parameters control the overall behavior of the AMM process. Configure them through the **Global Configuration** panel on the AMM page.

| Setting | Description | Default | Range |
|---|---|---|---|
| `min_seconds_between_offers` | Minimum delay between publishing consecutive offers | `15` | |
| `max_seconds_between_offers` | Maximum delay between publishing consecutive offers | `60` | |
| `main_loop_delay` | Seconds between each AMM processing cycle | `60` | 10-1000 |
| `prune_state_delay` | Seconds between cleaning old entries from the state file | `120` | |
| `prune_state_after_seconds` | How long (in seconds) to keep old state data before pruning | `604800` (7 days) | |

The delay between offers is randomized within the min/max range for each cycle.

## Practical Examples

<Tabs>
  <TabItem value="ltc-btc" label="LTC/BTC Market Maker" default>
    A basic setup to sell Litecoin for Bitcoin at a 2% premium above market rate, with automatic price tracking and privacy-aware offer sizing.

    ```json title="Offer Template"
    {
      "name": "LTC to BTC",
      "enabled": true,
      "coin_from": "Litecoin",
      "coin_to": "Bitcoin",
      "amount": 50,
      "minrate": 0.002,
      "ratetweakpercent": 2,
      "amount_variable": true,
      "amount_step": 5,
      "min_coin_from_amt": 10,
      "offer_valid_seconds": 1800,
      "automation_strategy": "accept_all",
      "swap_type": "adaptor_sig",
      "address": "auto",
      "min_swap_amount": 0.5,
      "adjust_rates_based_on_market": "true"
    }
    ```

    **What this does:** Offers up to 50 LTC for BTC, adjusting the size in 5 LTC increments based on wallet balance. Keeps at least 10 LTC in reserve. Sets the rate 2% above the higher of CoinGecko or orderbook rates, with a floor of 0.002 BTC/LTC. Republishes every 30 minutes with updated pricing. Accepts all incoming bids of 0.5 LTC or more.
  </TabItem>
  <TabItem value="xmr-privacy" label="Privacy-Focused XMR Provider">
    A setup for selling Particl for Monero using only orderbook data (no external API calls) and restricting trades to known counterparties.

    ```json title="Offer Template"
    {
      "name": "PART to XMR (private)",
      "enabled": true,
      "coin_from": "Particl",
      "coin_to": "Monero",
      "amount": 500,
      "minrate": 0.01,
      "ratetweakpercent": 1,
      "amount_variable": true,
      "amount_step": 50,
      "min_coin_from_amt": 100,
      "offer_valid_seconds": 3600,
      "automation_strategy": "accept_known",
      "swap_type": "adaptor_sig",
      "address": "auto",
      "min_swap_amount": 10,
      "adjust_rates_based_on_market": "only"
    }
    ```

    **What this does:** Offers up to 500 PART for XMR, in 50 PART increments. Uses only BasicSwap orderbook rates (no CoinGecko calls), with a floor of 0.01 XMR/PART. Only accepts bids from identities with successful swap history. Uses `adaptor_sig` for better on-chain privacy. Skips cycles where no orderbook data is available.
  </TabItem>
  <TabItem value="fixed-rate" label="Fixed-Rate Offer">
    A setup with a fixed price and no market tracking, suitable when you have a specific rate in mind.

    ```json title="Offer Template"
    {
      "name": "BTC to LTC (fixed)",
      "enabled": true,
      "coin_from": "Bitcoin",
      "coin_to": "Litecoin",
      "amount": 0.1,
      "minrate": 300,
      "ratetweakpercent": 0,
      "amount_variable": true,
      "amount_step": 0.01,
      "min_coin_from_amt": 0.01,
      "offer_valid_seconds": 7200,
      "automation_strategy": "accept_all",
      "swap_type": "adaptor_sig",
      "address": "auto",
      "min_swap_amount": 0.005,
      "adjust_rates_based_on_market": "static"
    }
    ```

    **What this does:** Offers up to 0.1 BTC for LTC at a fixed rate of 300 LTC/BTC. No market data is fetched; the rate stays at `minrate` (300) with no tweak applied. Republishes every 2 hours. Accepts all bids of 0.005 BTC or more.
  </TabItem>
</Tabs>

## Limitations

* **Single process**: Only one AMM process can run at a time. Starting a second instance will fail unless you stop or force-replace the first.
* **SMSG offer lifetime**: Offers on the SMSG network expire after the configured duration. The AMM handles republication, but there is a brief gap between expiration and the next cycle.
* **CoinGecko availability**: Rate modes that depend on CoinGecko (`false`, `true`, `all`) may skip cycles if the API is unreachable or rate-limited.
* **Counterparty reliability**: Swaps can still fail if the counterparty becomes unresponsive during the atomic swap process. The AMM tracks failed identities to avoid repeat issues.
* **Balance requirements**: If your wallet balance drops below `min_coin_from_amt`, the AMM stops publishing that offer template until the balance recovers.
* **Bid feature is experimental**: Bid templates require debug mode and may change in future releases.

## Troubleshooting

**AMM will not start**
* Check for orphan processes using the **Kill Orphans** button on the AMM page.
* Try **Force Start** to terminate any stuck processes and start fresh.
* Review the log viewer for error messages.

**Offers are not appearing on the orderbook**
* Verify that the offer template is set to `enabled: true`.
* Check that your wallet balance exceeds `min_coin_from_amt` plus the offer amount (or the smallest `amount_step` multiple).
* If using a rate mode that depends on external data (`false`, `true`, `all`, `only`, `minrate`), confirm the required data source is available. The log viewer will show "skipping" messages when data is missing.

**Rates seem incorrect**
* Verify the sign and magnitude of `ratetweakpercent`. A positive value increases the rate; a negative value decreases it.
* Confirm which rate mode is active for the template. Check the global setting and any per-offer override.
* If using CoinGecko-dependent modes, check that the API is reachable from your machine.

**Bids are not being placed**
* Confirm that debug mode is enabled: Settings > General > enable both `debug` and `debug_ui`.
* Check that the bid template is enabled and `max_concurrent` has not been reached.
* Verify that matching offers exist on the orderbook within your `max_rate` threshold.

**AMM process keeps stopping**
* Open the log viewer and look for error messages.
* If client authentication is enabled on BasicSwap, ensure the `auth` field in the AMM global settings matches your credentials.
* Check that the BasicSwap API is responding (the AMM communicates with BasicSwap over its local API).

## AMM Interface Reference

The AMM page provides the following controls:

* **Start / Stop / Force Start**: Manage the AMM process lifecycle.
* **Autostart Toggle**: Enable or disable automatic startup with BasicSwap.
* **Offer Templates Table**: View, add, edit, and delete offer templates. Each row shows the template name, coin pair, amount, rate settings, and enabled status.
* **Bid Templates Table**: (Visible in debug mode) View, add, edit, and delete bid templates.
* **Global Configuration Panel**: Adjust timing and delay settings.
* **Config JSON Editor**: Directly edit the raw `createoffers.json` configuration file for advanced use cases.
* **State File Viewer**: Inspect the current `createoffers_state.json` to see tracked offers and bids.
* **Log Viewer**: View real-time output from the AMM process, including errors, offer creation events, and rate calculations.
* **Debug Mode Toggle**: Enable or disable debug output for more detailed logging.
