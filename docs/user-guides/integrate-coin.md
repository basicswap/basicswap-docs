---
sidebar_position: 8
title: Integrate a Coin
description: "How to add your coin to the BasicSwap DEX"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import React from 'react';

# Integrate a Coin

BasicSwap DEX facilitates cryptocurrency trading without intermediaries and, leveraging its open-source architecture, supports community-driven expansion of supported assets. This guide outlines the process for integrating additional cryptocurrencies into the BasicSwap ecosystem.

:::info
As a cross-chain DEX performing on-chain atomic swaps, BasicSwap requires custom integration work for each cryptocurrency. This process necessitates blockchain-specific implementation rather than following a standardized template.

:::

## Crowd-Sourced Integration

BasicSwap's open-source architecture enables developers to contribute cryptocurrency integrations via GitHub pull requests. When accepted and merged into the main codebase, these integrations become immediately available to all users running current BasicSwap versions, expanding the platform's trading capabilities community-wide.

### Requirements

BasicSwap's cross-chain architecture imposes specific technical prerequisites for cryptocurrency integration. For standard implementation, a blockchain must demonstrate the following characteristics:

* **UTXO-Based Transaction Model:** Utilizes an Unspent Transaction Output script system.
* **Time-Lock Capability:** Implements either CheckLockTimeVerify (CLTV) or CheckSequenceVerify (CSV).
* **Segregated Witness Support:** Has Segwit functionality enabled.
* **Watch-Only Wallet Compatibility:** Supports monitoring addresses without private key exposure

### Testing for Requirements

BasicSwap provides a requirements testing script to quickly evaluate a cryptocurrency's compatibility with the standard integration process.

If your coin fails some requirements, integration remains possible but may require custom framework development.

1. Install BasicSwap and ensure you are running the latest version.
2. Open the `basicswap` folder in a terminal.
3. Navigate to where the test script is located.

   ```bash title="Terminal"
   cd scripts
   ```

4. Execute the requirements test script with the command below, replacing the path with the correct location of your cryptocurrency's daemon executable.

   ```bash title="Terminal"
   py requirements.python ~/Applications/particl/bin/particld -d
   ```

### Integration Process

Cryptocurrencies meeting all the requirements above have high integration potential. However, each integration remains a unique process tailored to the specific blockchain architecture.

To guide your implementation, you can examine existing integrations of similar cryptocurrencies by reviewing their code repositories. The numbered links beside each cryptocurrency name provide direct access to relevant integration commits and pull requests.

| Coin | UTXO Scripts | Bitcoin Version | CLTV | CSV | Segwit | Watch-only Addresses |
|------|--------------|-----------------|------|-----|--------|----------------------|
| Bitcoin | Yes | 24.0 | Yes | Yes | Yes | Yes |
| Monero | No | — | — | — | — | — |
| Litecoin | Yes | 0.21 | Yes | Yes | Yes | Yes |
| Dash ([1](https://github.com/basicswap/basicswap/commit/7298867e18efbaf1a6630769da651084ea8e954c), [2](https://github.com/basicswap/basicswap/commit/4866ff4db89593472d21261ebbbb6a87e3f1f922), [3](https://github.com/basicswap/basicswap/commit/aa14da27af33b5b02845d6c87e32b46e57d741a4)) | Yes | — | Yes | Yes | No | Yes |
| Decred ([1](https://github.com/basicswap/basicswap/commits/decred)) | Yes | — | Yes | Yes | Yes | Yes |
| Wownero ([1](https://github.com/basicswap/basicswap/commits/wow)) | No | — | — | — | — | — |
| Firo ([1](https://github.com/basicswap/basicswap/commits/firo)) | Yes | — | Yes | Yes | No | Yes |
| PIVX ([1](https://github.com/basicswap/basicswap/commit/d74699992be727ea4bb6df0871da5983ef775566)) | Yes | — | Yes | No | No | Yes |
| Particl | Yes | 24.0 | Yes | Yes | Yes | Yes |
