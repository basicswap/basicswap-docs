---
sidebar_position: 2
title: Under the Hood
description: "Technical details of how BasicSwap DEX operates"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<div style={{textAlign: 'center'}}>
  # Under the Hood
</div>

**BasicSwap** can be best understood as the decentralized version of the SWIFT messaging network, facilitating the exchange of messages between trading peers through the decentralized SMSG network. This communication layer enables users to execute coin swaps directly, without any central party involvement.

Importantly, **BasicSwap itself does not conduct the actual swapping of coins**. This process occurs exclusively on-chain via atomic swaps executed directly on the respective blockchains of the cryptocurrencies being exchanged. 

BasicSwap's primary function is to help users establish a secure communication channels between each other, enabling them to exchange the cryptographic information necessary for atomic swaps and to broadcast their offers publicly without relying on intermediaries.

<div style={{display: 'flex', justifyContent: 'center', margin: '2rem 0'}}>
  <div style={{maxWidth: '700px', padding: '1.5rem', border: '1px solid #e6e6e6', borderRadius: '8px', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.05)'}}>
    <div style={{display: 'flex', alignItems: 'center', marginBottom: '1rem'}}>
      <div style={{backgroundColor: '#2a3f87', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginRight: '15px', flexShrink: 0}}>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="M7 15h0M2 9.5h20" />
        </svg>
      </div>
      <h3 style={{margin: 0}}>BasicSwap is a Messaging Protocol + Atomic Swaps</h3>
    </div>
    <p style={{marginBottom: 0}}>
      BasicSwap combines decentralized messaging with atomic swap protocols to create a fully decentralized exchange without intermediaries.
    </p>
  </div>
</div>

## Atomic Swaps

BasicSwap implements two distinct atomic swap protocols: HTLC ('Secret Hash') and PTLC ('Adaptor Signature'). These on-chain mechanisms enable cryptocurrency exchanges without requiring trusted third parties.

<div className="container">
  <div className="row">
    <div className="col col--6">
      <div className="card margin-bottom--md">
        <div className="card__header">
          <h3 style={{textAlign: 'center'}}>HTLC Protocol (Secret Hash)</h3>
        </div>
        <div className="card__body">
          <p style={{marginBottom: 0}}>Uses hashed time-locked contracts to guarantee that both parties fulfill their obligations or the transaction is automatically reversed.</p>
        </div>
      </div>
    </div>
    <div className="col col--6">
      <div className="card margin-bottom--md">
        <div className="card__header">
          <h3 style={{textAlign: 'center'}}>PTLC Protocol (Adaptor Sigs)</h3>
        </div>
        <div className="card__body">
          <p style={{marginBottom: 0}}>Employs adaptor signatures to enable atomic swaps with unscriptable coins like Monero while providing better privacy.</p>   
        </div>
      </div>
    </div>
  </div>
</div>

### Technical Implementation

Both protocols are open-source developments from the broader cryptocurrency community and their scope is intentionally narrow — they do not match orders or provide a complete DEX framework. Instead, they focus exclusively on secure, trustless execution of exchanges directly on the respective blockchains without intermediaries.

### The Messaging Layer Requirement

Due to their focused scope, atomic swap protocols require a complementary decentralized messaging infrastructure to relay critical information between participants. This communication layer is essential because:

* Blockchains operate independently and cannot directly communicate with each other
* Participants need to exchange cryptographic proofs and transaction details
* Each step in the swap process requires confirmation data from the counterparty

:::info
**Learn more about atomic swaps:**
- [Atomic Swaps Explained](https://particl.news/atomic-swap-style-showdown/)
- [HTLC (Secret Hash) Swaps](https://github.com/decred/atomicswap)
- [PTLC (Adaptor Signature) Swaps](https://www.getmonero.org/resources/research-lab/pubs/MRL-0010.pdf)

:::

## SecureMessaging (SMSG)

BasicSwap utilizes the SecureMessaging (SMSG) network—an open-source, decentralized messaging protocol similar to BitMessage—to facilitate the exchange of cryptographic data necessary for atomic swaps. This communication infrastructure enables direct peer-to-peer information sharing without requiring intermediaries.

### SMSG Architecture

<div style={{marginBottom: '2rem'}}>
  <p style={{fontWeight: 'bold', fontSize: '1.1rem', marginBottom: '1rem'}}></p>
  <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
    <div style={{display: 'flex', alignItems: 'flex-start', gap: '1rem'}}>
      <div style={{color: '#2a3f87', display: 'flex', justifyContent: 'center', alignItems: 'center', flexShrink: 0}}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
      </div>
      <div>**Node architecture:** All BasicSwap users automatically operate as nodes within the SMSG network.</div>
    </div>
    <div style={{display: 'flex', alignItems: 'flex-start', gap: '1rem'}}>
      <div style={{color: '#2a3f87', display: 'flex', justifyContent: 'center', alignItems: 'center', flexShrink: 0}}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
      </div>
      <div>**End-to-end encryption:** All messages are encrypted on the user's local device before transmission.</div>
    </div>
    <div style={{display: 'flex', alignItems: 'flex-start', gap: '1rem'}}>
      <div style={{color: '#2a3f87', display: 'flex', justifyContent: 'center', alignItems: 'center', flexShrink: 0}}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
      </div>
      <div>**Decentralized broadcasting:** Encrypted messages are distributed throughout the network.</div>
    </div>
    <div style={{display: 'flex', alignItems: 'flex-start', gap: '1rem'}}>
      <div style={{color: '#2a3f87', display: 'flex', justifyContent: 'center', alignItems: 'center', flexShrink: 0}}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
      </div>
      <div>**Collective validation:** All nodes participate in relaying and validating messages to ensure authenticity.</div>
    </div>
  </div>
</div>

This architecture provides robust protection for users' financial information against unauthorized access while maintaining a completely decentralized structure.

### Decentralized Functionality

The SMSG network enables BasicSwap to offer functionality beyond what atomic swaps alone can provide:

* Maintaining a decentralized order book
* Automating complex swap procedures from the user's perspective
* Facilitating secure communication between independent blockchain networks

In practice, BasicSwap functions as a decentralized alternative to SWIFT—providing a messaging protocol that enables direct peer-to-peer communication for executing atomic swaps using official coin cores (Bitcoin Core, Litecoin Core, etc.).

It's important to understand that BasicSwap itself does not process, initiate, or execute the actual swaps. Its role is strictly limited to enabling secure communication between trading parties and simplifying the complex process of performing atomic swaps across different blockchains.

## Adaptor Signatures

While many DEX platforms rely on smart contracts or HTLC atomic swaps, these technologies present compatibility issues with certain cryptocurrencies like Bitcoin or Monero. BasicSwap overcomes these limitations through the implementation of adaptor signatures.

<div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '2rem 0'}}>
  <div style={{width: '100%', maxWidth: '800px'}}>
    <Tabs>
      <TabItem value="what" label="What Are Adaptor Signatures" default>
        <div style={{borderRadius: '8px', padding: '1.5rem', background: 'linear-gradient(135deg, #3a87bd, #2a3f87)', color: 'white', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'}}>
          <h4 style={{color: 'white', marginTop: 0}}>Advanced Cryptographic Technique</h4>
          <p>
            Adaptor signatures are an off-chain form of smart contract that provide the flexibility needed to execute atomic swaps with non-programmable cryptocurrencies like Monero.
          </p>
          <p style={{marginBottom: 0}}>
            They also provide more privacy than traditional HTLC atomic swaps by not inscribing an identical hash at a similar time on both participating blockchains of a swap.
          </p>
        </div>
      </TabItem>
      <TabItem value="benefits" label="Benefits">
        <div style={{borderRadius: '8px', padding: '1.5rem', background: 'linear-gradient(135deg, #3a87bd, #2a3f87)', color: 'white', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'}}>
          <h4 style={{color: 'white', marginTop: 0}}>Key Advantages</h4>
          <ul style={{marginBottom: 0}}>
            <li>Enables atomic swaps with cryptocurrencies that lack smart contract capabilities</li>
            <li>Enhances privacy by avoiding identical on-chain footprints</li>
            <li>Reduces blockchain bloat compared to traditional HTLC methods</li>
            <li>Provides better resistance against chain analysis</li>
          </ul>
        </div>
      </TabItem>
      <TabItem value="technical" label="Technical Deep Dive">
        <div style={{borderRadius: '8px', padding: '1.5rem', background: 'linear-gradient(135deg, #3a87bd, #2a3f87)', color: 'white', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'}}>
          <h4 style={{color: 'white', marginTop: 0}}>Cryptographic Foundation</h4>
          <p>
            Adaptor signatures utilize a cryptographic technique where a signature can only be completed when a specific piece of information (the adaptor) is known.
          </p>
          <p style={{marginBottom: 0}}>
            This creates a conditional payment system where revealing the adaptor to complete one transaction necessarily reveals the information needed to complete the counterparty transaction.
          </p>
        </div>
      </TabItem>
    </Tabs>
  </div>
</div>

:::info
Learn more about Adaptor Signatures: [Whitepaper - OtVES Signatures](https://eprint.iacr.org/2018/472.pdf)

:::