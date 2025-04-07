---
sidebar_position: 1
title: What is BasicSwap
description: "Overview of the BasicSwap DEX protocol and its features"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<div style={{textAlign: 'center'}}>
  # What is BasicSwap DEX?
</div>

**BasicSwap** is a cross-chain, non-custodial, and highly secure DEX (decentralized exchange) that lets you trade cryptocurrencies directly via atomic swaps. By eliminating intermediaries, it creates a trading environment where you maintain complete control of your assets throughout every trade. 

The platform enables you to place or take swap offers with zero trading fees and without the need to create an account, leveraging blockchain technology to facilitate peer-to-peer exchanges without centralized servers or vulnerable points of failure.

**BasicSwap** represents a return to the founding principles of cryptocurrency; financial sovereignty, privacy protection, and freedom from institutional gatekeepers.

## What is it?

BasicSwap stands as the world's most secure and decentralized DEX, facilitating cross-chain atomic swaps through direct peer-to-peer interaction without central points of failure.

This fully non-custodial platform features a decentralized order book where users can make or take swap offers without fees, counterparties, or account requirements. 

<div style={{textAlign: 'center', marginBottom: '1.5rem'}}>
  <img src="/img/images/basicswap_orders.png" alt="BasicSwap's order book" style={{borderRadius: '8px', maxWidth: '100%', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'}}/>
  <p style={{fontStyle: 'italic', marginTop: '0.5rem'}}>
  </p>
</div>

Only the two participants of a swap are involved in any part of the trading process. A swap consists of a series of messages exchanged between parties, each containing necessary data that allows progression to the next step of the transaction. 

To preserve decentralization and privacy, all communication occurs over the **SecureMessaging Network** (SMSG), a privacy-first decentralized mixnet built on the Particl blockchain. Each message sent through the network is encrypted such that only the intended recipient can decrypt its content. Messages are relayed by the entire network, ensuring both privacy and resilience against censorship or targeted attacks. 

Developed as a robust, secure alternative to centralized exchanges with histories of fund losses (such as FTX, BitFinex, and MtGox), BasicSwap delivers a more reliable and secure cryptocurrency trading environment for all participants. 

:::info

**BasicSwap is currently in beta stage**. The platform already provides most essential trading features expected from cryptocurrency exchanges while continuing to evolve through active community development. Additional functionality and improvements are planned for future releases as the project matures beyond its beta phase.

:::

## Benefits

BasicSwap represents a fundamental departure from conventional "centralized exchanges" (CEXs) through its decentralized architecture, offering several significant advantages:

<div className="container" style={{marginTop: '2rem'}}>
  <div className="row">
    <div className="col col--4" style={{marginBottom: '2rem'}}>
      <div className="card" style={{height: '100%', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)', transition: 'transform 0.2s', cursor: 'default'}}>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%'}}>
          <div style={{backgroundColor: '#3b82f6', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '1rem'}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="8" height="8" x="2" y="2" rx="1"></rect>
              <path d="M14 2c1.5 0 3 1.5 3 3v7"></path>
              <path d="M20 2c.5 0 1 .5 1 1v17c0 .5-.5 1-1 1h-1c-.5 0-1-.5-1-1V3c0-.5.5-1 1-1h1z"></path>
              <path d="M14 12a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v3h-3v-3z"></path>
              <path d="M3 10a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h0a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h0z"></path>
              <path d="M7 10a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h0a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h0z"></path>
              <path d="M11 10a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h0a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h0z"></path>
            </svg>
          </div>
          <h3 style={{textAlign: 'center', marginBottom: '0.75rem', fontSize: '1.2rem', fontWeight: 'bold'}}>True Cross-Chain Compatibility</h3>
          <p style={{textAlign: 'center', margin: '0', flex: '1'}}>Swap cryptocurrencies from different blockchains like Bitcoin and Monero without wrapped tokens or intermediary assets.</p>
        </div>
      </div>
    </div>
    <div className="col col--4" style={{marginBottom: '2rem'}}>
      <div className="card" style={{height: '100%', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)', transition: 'transform 0.2s', cursor: 'default'}}>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%'}}>
          <div style={{backgroundColor: '#3b82f6', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '1rem'}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
              <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect>
              <path d="M12 11h4"></path>
              <path d="M12 16h4"></path>
              <path d="M8 11h.01"></path>
              <path d="M8 16h.01"></path>
            </svg>
          </div>
          <h3 style={{textAlign: 'center', marginBottom: '0.75rem', fontSize: '1.2rem', fontWeight: 'bold'}}>Decentralized Order Book</h3>
          <p style={{textAlign: 'center', margin: '0', flex: '1'}}>Provides a distributed system where users can place and take swap offers directly on the network rather than through a central matching engine.</p>
        </div>
      </div>
    </div>
    <div className="col col--4" style={{marginBottom: '2rem'}}>
      <div className="card" style={{height: '100%', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)', transition: 'transform 0.2s', cursor: 'default'}}>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%'}}>
          <div style={{backgroundColor: '#3b82f6', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '1rem'}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25"></path>
              <line x1="8" x2="8" y1="16" y2="20"></line>
              <line x1="8" x2="16" y1="20" y2="20"></line>
              <line x1="16" x2="16" y1="20" y2="16"></line>
              <line x1="12" x2="12" y1="20" y2="16"></line>
            </svg>
          </div>
          <h3 style={{textAlign: 'center', marginBottom: '0.75rem', fontSize: '1.2rem', fontWeight: 'bold'}}>No Intermediaries</h3>
          <p style={{textAlign: 'center', margin: '0', flex: '1'}}>Removes all third parties from the trading process, eliminating central points of failure and reducing counterparty risk.</p>
        </div>
      </div>
    </div>
    <div className="col col--4" style={{marginBottom: '2rem'}}>
      <div className="card" style={{height: '100%', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)', transition: 'transform 0.2s', cursor: 'default'}}>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%'}}>
          <div style={{backgroundColor: '#3b82f6', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '1rem'}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="14" x="2" y="5" rx="2"></rect>
              <line x1="2" x2="22" y1="10" y2="10"></line>
              <line x1="7" x2="7" y1="15" y2="15"></line>
              <line x1="12" x2="12" y1="15" y2="15"></line>
            </svg>
          </div>
          <h3 style={{textAlign: 'center', marginBottom: '0.75rem', fontSize: '1.2rem', fontWeight: 'bold'}}>No Trading Fees</h3>
          <p style={{textAlign: 'center', margin: '0', flex: '1'}}>Only pay the standard blockchain network fees for transactions, with no additional platform fees or commissions.</p>
        </div>
      </div>
    </div>
    <div className="col col--4" style={{marginBottom: '2rem'}}>
      <div className="card" style={{height: '100%', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)', transition: 'transform 0.2s', cursor: 'default'}}>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%'}}>
          <div style={{backgroundColor: '#3b82f6', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '1rem'}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              <path d="M8 11V7a4 4 0 0 1 8 0v4"></path>
              <line x1="12" x2="12" y1="15" y2="17"></line>
            </svg>
          </div>
          <h3 style={{textAlign: 'center', marginBottom: '0.75rem', fontSize: '1.2rem', fontWeight: 'bold'}}>Superior Financial Privacy</h3>
          <p style={{textAlign: 'center', margin: '0', flex: '1'}}>Implements privacy-conscious technology to protect sensitive financial information from unauthorized access or surveillance.</p>
        </div>
      </div>
    </div>
    <div className="col col--4" style={{marginBottom: '2rem'}}>
      <div className="card" style={{height: '100%', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)', transition: 'transform 0.2s', cursor: 'default'}}>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%'}}>
          <div style={{backgroundColor: '#3b82f6', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '1rem'}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
          </div>
          <h3 style={{textAlign: 'center', marginBottom: '0.75rem', fontSize: '1.2rem', fontWeight: 'bold'}}>User-Friendly Interface</h3>
          <p style={{textAlign: 'center', margin: '0', flex: '1'}}>Presents complex decentralized trading mechanisms through a straightforward interface that simplifies the trading process.</p>
        </div>
      </div>
    </div>
  </div>
</div>

These advantages are direct consequences of BasicSwap's inherently decentralized protocol architecture — benefits that cannot be replicated within centralized exchange infrastructures.

## Under the Hood

**BasicSwap** can be best understood as the decentralized version of the SWIFT messaging network, facilitating the exchange of messages between trading peers through the decentralized SMSG network. This communication layer enables users to execute coin swaps directly, without any central party involvement.

Importantly, **BasicSwap itself does not conduct the actual swapping of coins**. This process occurs exclusively on-chain via atomic swaps executed directly on the respective blockchains of the cryptocurrencies being exchanged. 

BasicSwap's primary function is to help users establish a secure communication channels between each other, enabling them to exchange the cryptographic information necessary for atomic swaps and to broadcast their offers publicly without relying on intermediaries.

## Compatible Coins

<div style={{textAlign: 'center', marginBottom: '1.5rem'}}>
  <img src="/img/images/basicswap_wallets.png" alt="BasicSwap's wallets page" style={{borderRadius: '8px', maxWidth: '100%', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'}}/>
  <p style={{fontStyle: 'italic', marginTop: '0.5rem'}}>
  </p>
</div>

<Tabs>
  <TabItem value="bitcoin" label="Bitcoin & Forks" default>
    <ul>
      <li><strong>Bitcoin (BTC)</strong> - The original cryptocurrency</li>
      <li><strong>Litecoin (LTC)</strong> - Faster and cheaper Bitcoin alternative wiht privacy</li>
      <li><strong>Bitcoin Cash (BCC)</strong> - Bitcoin fork focused on payments</li>
      <li><strong>Dogecoin (DOGE)</strong> - Bitcoin with dogs</li> 
    </ul>
  </TabItem>
  <TabItem value="privacy" label="Privacy Coins">
    <ul>
      <li><strong>Monero (XMR)</strong> - Leading privacy-focused cryptocurrency</li>
      <li><strong>Wownero (WOW)</strong> - Monero fork with experimental features</li>
      <li><strong>Particl (PART)</strong> - Privacy coin with marketplace features</li>
      <li><strong>Firo (FIRO)</strong> - Privacy coin using zero-knowledge proofs</li>
      <li><strong>PIVX (PIVX)</strong> - Proof-of-stake privacy coin</li>
    </ul>
  </TabItem>
  <TabItem value="other" label="Other Coins">
    <ul>
      <li><strong>Dash (DASH)</strong> - Fast transactions with optional privacy</li>
      <li><strong>Decred (DCR)</strong> - Autonomous digital currency with hybrid consensus</li>
    </ul>
  </TabItem>
</Tabs>
