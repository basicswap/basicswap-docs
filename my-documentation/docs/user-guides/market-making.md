---
sidebar_position: 7
title: Automated Market Making
description: "How to use the automated market making tool for BasicSwap DEX"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import React from 'react';

# Automated Market Making Script

BasicSwap DEX offers specialized tools to help you efficiently provide liquidity and manage your trading positions. This comprehensive guide provides detailed instructions for leveraging these powerful features.

## Offer Management

BasicSwap imposes a 48-hour maximum lifespan for order book listings due to limitations in the SecureMessaging (SMSG) network protocol. 

The `createoffers.py` script overcomes this constraint by automatically maintaining your offers on the order book while allowing dynamic adjustment of trading parameters.

### Automatically Republish Offers and Adjust Prices

Using `createoffers.py`, you can ensure that your offers stay persistently listed on the order book, with periodic price updates.

1. Navigate to your `/docker` folder and make sure that your BasicSwap instance is [up-to-date](/docs/basicswap-guides/update-guide).

   ```bash title="Terminal"
   git pull
   docker-compose build
   ```

2. Navigate to the `/scripts` folder.

3. Enable the script's configuration file by renaming it `createoffers.json`.

   ```bash title="Terminal"
   cp template_createoffers.json createoffers.json
   ```

4. Open the `createoffers.json` file in a text editor.

   ```bash title="Terminal"
   nano createoffers.json
   ```

5. Edit the file and set the correct parameters by modifying the following values to your preferences.

   * `coin_from`: The coin you want to send.
   
   * `coin_to`: The coin you want to receive in exchange of your `coin_from`.
   
   * `amount`: The number of `coin_from` coins you want to offer on the books.
   
   * `amount_step`: Set a size increment to ensure offers are posted up to the desired `amount`.
   
   * `min_coin_from_amt`: Reserved balance. Minimum coin balance for the script to automatically post offers.
   
   * `minrate`: This refers to the lowest acceptable rate under which the script should not consider an offer. Note that this isn't the effective exchange rate, but merely the absolute minimum rate you deem acceptable. The script will refrain from publishing offers on the books that fall below this value, thereby offering protection against sudden and unexpected liquidity spikes.
   
   * `ratetweakpercent`: This parameter specifies the percentage above or below the current market price (as reported by CoinGecko's API) at which you want to list your orders. For instance, if you set this to a value of 5, your offers will be listed at 5% above the market reported price. This feature automates the process of listing profitable offers on the order book.
   
   * `amount_variable`: Either `True` or `False`, determines whether you permit your offer to be partially fulfilled. For example, if you enable this option (set it to `True`), someone could fulfill just 25 PART of your 100 PART offer instead of the entire amount.
   
   * `address`: This refers to your swap identity or swap address. You have the option to specify one (this would be a Particl address from your BasicSwap Particl wallet), or if you prefer, you can set this to -1, which will prompt the system to generate a new random address each time your offer is updated.
   
   * `name`: The name of your offer. Keep it as `offer 0`, `offer 1`, and so on.
   
   * `min_swap_amount`: This refers to the smallest amount of coins a bid must request for the script to automatically accept the offer. Remember that each transaction incurs on-chain transaction fees. Thus, it may be beneficial to set this value higher than the current on-chain fees.
   
   * `offer_valid_seconds`: This parameter determines the duration (in seconds) for which your offer will remain on the books. After this time has elapsed, your offer will be re-published with a price adjustment, provided the script is still in operation. For instance, setting it to `3600` will prompt the script to re-publish your offer every hour with a revised price (current market price + `ratetweakpercent`). This parameter can be set universally instead of on a per-order basis.
   
   * `swap_type`: The script defaults to publishing offers using the more private `adaptor_sig` swap type, which requires the offering blockchain to contain a transaction malleability fix (i.e., Segwit). If that's not the case for your offer, you'll need to change this to `secret_hash`.

   To save changes, press `CTRL + X`, then `Y + ENTER`.

6. **With BasicSwap running in the background**, start the python script.

   ```bash title="Terminal"
   python createoffers.py
   ```

   :::tip
   The script requires continuous execution to remain active; closing the terminal will terminate the process. To maintain persistent operation, we recommend running it within a terminal multiplexer like[Byobu](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-byobu-for-terminal-management-on-ubuntu-16-04) or [screen](https://linuxize.com/post/how-to-use-linux-screen/).
   :::