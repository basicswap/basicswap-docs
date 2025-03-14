```jsx
import React from 'react';
import styles from './styles.module.css';

export default function DexComparisonTable() {
  return (
    <div className="comparison-table-container" style={{
      overflow: 'auto',
      maxWidth: '100%',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      borderRadius: '8px',
      marginBottom: '2rem'
    }}>
      <table style={{
        borderCollapse: 'collapse',
        width: '100%',
        minWidth: '1200px',
        backgroundColor: '#1e2734',
        color: 'white',
        border: '1px solid #2c3e50'
      }}>
        <thead>
          <tr style={{ backgroundColor: '#1b2431' }}>
            <th colSpan="10" style={{
              padding: '1rem',
              fontSize: '1.2rem',
              textAlign: 'center',
              borderBottom: '2px solid #2c3e50'
            }}>
              DECENTRALIZED TRADING EXCHANGES COMPARISON TABLE
            </th>
          </tr>
          <tr style={{ backgroundColor: '#1b2431' }}>
            <th style={{
              padding: '0.75rem',
              textAlign: 'left',
              borderBottom: '1px solid #2c3e50',
              minWidth: '150px'
            }}></th>
            <th style={{
              padding: '0.75rem',
              textAlign: 'center',
              borderBottom: '1px solid #2c3e50',
              minWidth: '120px'
            }}>
              Centralized Exchanges<br/>(Kraken, Binance...)
            </th>
            <th style={{
              padding: '0.75rem',
              textAlign: 'center',
              borderBottom: '1px solid #2c3e50',
              minWidth: '120px'
            }}>
              AMM DEXs<br/>(Uniswap, PancakeSwap...)
            </th>
            <th style={{
              padding: '0.75rem',
              textAlign: 'center',
              borderBottom: '1px solid #2c3e50',
              minWidth: '100px'
            }}>
              Block DX
            </th>
            <th style={{
              padding: '0.75rem',
              textAlign: 'center',
              borderBottom: '1px solid #2c3e50',
              minWidth: '100px'
            }}>
              Hodlhodl
            </th>
            <th style={{
              padding: '0.75rem',
              textAlign: 'center',
              borderBottom: '1px solid #2c3e50',
              minWidth: '100px'
            }}>
              AtomicDEX
            </th>
            <th style={{
              padding: '0.75rem',
              textAlign: 'center',
              borderBottom: '1px solid #2c3e50',
              minWidth: '100px'
            }}>
              ThorDEX<br/>(Thorchain)
            </th>
            <th style={{
              padding: '0.75rem',
              textAlign: 'center',
              borderBottom: '1px solid #2c3e50',
              minWidth: '100px'
            }}>
              BISQ
            </th>
            <th style={{
              padding: '0.75rem',
              textAlign: 'center',
              borderBottom: '1px solid #2c3e50',
              minWidth: '100px'
            }}>
              Haveno
            </th>
            <th style={{
              padding: '0.75rem',
              textAlign: 'center',
              borderBottom: '1px solid #2c3e50',
              minWidth: '100px',
              backgroundColor: 'rgba(59, 130, 246, 0.1)'
            }}>
              Basicswap
            </th>
          </tr>
        </thead>
        <tbody>
          {/* Order Books */}
          <tr>
            <td style={{ padding: '0.75rem', borderBottom: '1px solid #2c3e50', backgroundColor: '#1b2431' }}>Order Books</td>
            <td style={{ padding: '0.75rem', borderBottom: '1px solid #2c3e50', textAlign: 'center' }}>
              <span style={{ color: '#10b981', fontSize: '1.25rem' }}>✓</span>
            </td>
            <td style={{ padding: '0.75rem', borderBottom: '1px solid #2c3e50', textAlign: 'center' }}>
              <span style={{ color: '#ef4444', fontSize: '1.25rem' }}>✗</span>
            </td>
            <td style={{ padding: '0.75rem', borderBottom: '1px solid #2c3e50', textAlign: 'center' }}>
              <span style={{ color: '#10b981', fontSize: '1.25rem' }}>✓</span>
            </td>
            <td style={{ padding: '0.75rem', borderBottom: '1px solid #2c3e50', textAlign: 'center' }}>
              <span style={{ color: '#ef4444', fontSize: '1.25rem' }}>✗</span>
            </td>
            <td style={{ padding: '0.75rem', borderBottom: '1px solid #2c3e50', textAlign: 'center' }}>
              <span style={{ color: '#10b981', fontSize: '1.25rem' }}>✓</span>
            </td>
            <td style={{ padding: '0.75rem', borderBottom: '1px solid #2c3e50', textAlign: 'center' }}>
              <span style={{ color: '#10b981', fontSize: '1.25rem' }}>✓</span>
            </td>
            <td style={{ padding: '0.75rem', borderBottom: '1px solid #2c3e50', textAlign: 'center' }}>
              <span style={{ color: '#10b981', fontSize: '1.25rem' }}>✓</span>
            </td>
            <td style={{ padding: '0.75rem', borderBottom: '1px solid #2c3e50', textAlign: 'center' }}>
              <span style={{ color: '#10b981', fontSize: '1.25rem' }}>✓</span>
            </td>
            <td style={{ padding: '0.75rem', borderBottom: '1px solid #2c3e50', textAlign: 'center', backgroundColor: 'rgba(59, 130, 246, 0.1)' }}>
              <span style={{ color: '#10b981', fontSize: '1.25rem' }}>✓</span>
            </td>
          </tr>

          {/* No KYC, AML or Other Invasive Requirements */}
          <tr>
            <td style={{ padding: '0.75rem', borderBottom: '1px solid #2c3e50', backgroundColor: '#1b2431' }}>No KYC, AML or Other Invasive Requirements</td>
            <td style={{ padding: '0.75rem', borderBottom: '1px solid #2c3e50', textAlign: 'center' }}>
              <span style={{ color: '#ef4444', fontSize: '1.25rem' }}>✗</span>
            </td>
            <td style={{ padding: '0.75rem', borderBottom: '1px solid #2c3e50', textAlign: 'center' }}>
              <span style={{ color: '#10b981', fontSize: '1.25rem' }}>✓</span>
            </td>
            <td style={{ padding: '0.75rem', borderBottom: '1px solid #2c3e50', textAlign: 'center' }}>
              <span style={{ color: '#10b981', fontSize: '1.25rem' }}>✓</span>
            </td>
            <td style={{ padding: '0.75rem', borderBottom: '1px solid #2c3e50', textAlign: 'center' }}>
              <span style={{ color: '#f59e0b', fontSize: '1.25rem' }}>⚠<sup>1</sup></span>
            </td>
            <td style={{ padding: '0.75rem', borderBottom: '1px solid #2c3e50', textAlign: 'center' }}>
              <span style={{ color: '#f59e0b', fontSize: '1.25rem' }}>⚠<sup>2</sup></span>
            </td>
            <td style={{ padding: '0.75rem', borderBottom: '1px solid #2c3e50', textAlign: 'center' }}>
              <span style={{ color: '#10b981', fontSize: '1.25rem' }}>✓</span>
            </td>
            <td style={{ padding: '0.75rem', borderBottom: '1px solid #2c3e50', textAlign: 'center' }}>
              <span style={{ color: '#10b981', fontSize: '1.25rem' }}>✓</span>
            </td>
            <td style={{ padding: '0.75rem', borderBottom: '1px solid #2c3e50', textAlign: 'center' }}>
              <span style={{ color: '#10b981', fontSize: '1.25rem' }}>✓</span>
            </td>
            <td style={{ padding: '0.75rem', borderBottom: '1px solid #2c3e50', textAlign: 'center', backgroundColor: 'rgba(59, 130, 246, 0.1)' }}>
              <span style={{ color: '#10b981', fontSize: '1.25rem' }}>✓</span>
            </td>
          </tr>

          {/* Financial Privacy */}
          <tr>
            <td style={{ padding: '0.75rem', borderBottom: '1px solid #2c3e50', backgroundColor: '#1b2431' }}>Financial Privacy</td>
            <td style={{ padding: '0.75rem', borderBottom: '1px solid #2c3e50', textAlign: 'center' }}>
              <span style={{ color: '#ef4444', fontSize: '1.25rem' }}>✗</span>
            </td>
            <td style={{ padding: '0.75rem', borderBottom: '1px solid #2c3e50', textAlign: 'center' }}>
              <span style={{ color: '#ef4444', fontSize: '1.25rem' }}>✗</span>
            </td>
            <td style={{ padding: '0.75rem', borderBottom: '1px solid #2c3e50', textAlign: 'center' }}>
              <span style={{ color: '#10b981', fontSize: '1.25rem' }}>✓</span>
            </td>
            <td style={{ padding: '0.75rem', borderBottom: '1px solid #2c3e50', textAlign: 'center' }}>
              <span style={{ color: '#10b981', fontSize: '1.25rem' }}>✓</span>
            </td>
            <td style={{ padding: '0.75rem', borderBottom: '1px solid #2c3e50', textAlign: 'center' }}>
              <span style={{ color: '#10b981', fontSize: '1.25rem' }}>✓</span>
            </td>
            <td style={{ padding: '0.75rem', borderBottom: '1px solid #2c3e50', textAlign: 'center' }}>
              <span style={{ color: '#10b981', fontSize: '1.25rem' }}>✓</span>
            </td>
            <td style={{ padding: '0.75rem', borderBottom: '1px solid #2c3e50', textAlign: 'center' }}>
              <span style={{ color: '#10b981', fontSize: '1.25rem' }}>✓</span>
            </td>
            <td style={{ padding: '0.75rem', borderBottom: '1px solid #2c3e50', textAlign: 'center' }}>
              <span style={{ color: '#10b981', fontSize: '1.25rem' }}>✓</span>
            </td>
            <td style={{ padding: '0.75rem', borderBottom: '1px solid #2c3e50', textAlign: 'center', backgroundColor: 'rgba(59, 130, 246, 0.1)' }}>
              <span style={{ color: '#10b981', fontSize: '1.25rem' }}>✓✓✓</span>
            </td>
          </tr>

          {/* No Fees */}
          <tr>
            <td style={{ padding: '0.75rem', borderBottom: '1px solid #2c3e50', backgroundColor: '#1b2431' }}>No Fees</td>
            <td style={{ padding: '0.75rem', borderBottom: '1px solid #2c3e50', textAlign: 'center' }}>
              <span style={{ color: '#ef4444', fontSize: '1.25rem' }}>✗</span>
            </td>
            <td style={{ padding: '0.75rem', borderBottom: '1px solid #2c3e50', textAlign: 'center' }}>
              <span style={{ color: '#ef4444', fontSize: '1.25rem' }}>✗</span>
            </td>
            <td style={{ padding: '0.75rem', borderBottom: '1px solid #2c3e50', textAlign: 'center' }}>
              <span style={{ color: '#ef4444', fontSize: '1.25rem' }}>✗</span>
            </td>
            <td style={{ padding: '0.75rem', borderBottom: '1px solid #2c3e50', textAlign: 'center' }}>
              <span style={{ color: '#ef4444', fontSize: '1.25rem' }}>✗</span>
            </td>
            <td style={{ padding: '0.75rem', borderBottom: '1px solid #2c3e50', textAlign: 'center' }}>
              <span style={{ color: '#ef4444', fontSize: '1.25rem' }}>✗</span>
            </td>
            <td style={{ padding: '0.75rem', borderBottom: '1px solid #2c3e50', textAlign: 'center' }}>
              <span style={{ color: '#ef4444', fontSize: '1.25rem' }}>✗</span>
            </td>
            <td style={{ padding: '0.75rem', borderBottom: '1px solid #2c3e50', textAlign: 'center' }}>
              <span style={{ color: '#ef4444', fontSize: '1.25rem' }}>✗</span>
            </td>
            <td style={{ padding: '0.75rem', borderBottom: '1px solid #2c3e50', textAlign: 'center' }}>
              <span style={{ color: '#ef4444', fontSize: '1.25rem' }}>✗</span>
            </td>
            <td style={{ padding: '0.75rem', borderBottom: '1px solid #2c3e50', textAlign: 'center', backgroundColor: 'rgba(59, 130, 246, 0.1)' }}>
              <span style={{ color: '#10b981', fontSize: '1.25rem' }}>✓</span>
            </td>
          </tr>

          {/* Monero Support */}
          <tr>
            <td style={{ padding: '0.75rem', borderBottom: '1px solid #2c3e50', backgroundColor: '#1b2431' }}>Monero Support</td>
            <td style={{ padding: '0.75rem', borderBottom: '1px solid #2c3e50', textAlign: 'center' }}>
              <span style={{ color: '#10b981', fontSize: '1.25rem' }}>✓</span>
            </td>
            <td style={{ padding: '0.75rem', borderBottom: '1px solid #2c3e50', textAlign: 'center' }}>
              <span style={{ color: '#ef4444', fontSize: '1.25rem' }}>✗</span>
            </td>
            <td style={{ padding: '0.75rem', borderBottom: '1px solid #2c3e50', textAlign: 'center' }}>
              <span style={{ color: '#ef4444', fontSize: '1.25rem' }}>✗</span>
            </td>
            <td style={{ padding: '0.75rem', borderBottom: '1px solid #2c3e50', textAlign: 'center' }}>
              <span style={{ color: '#10b981', fontSize: '1.25rem' }}>✓</span>
            </td>
            <td style={{ padding: '0.75rem', borderBottom: '1px solid #2c3e50', textAlign: 'center' }}>
              <span style={{ color: '#ef4444', fontSize: '1.25rem' }}>✗</span>
            </td>
            <td style={{ padding: '0.75rem', borderBottom: '1px solid #2c3e50', textAlign: 'center' }}>
              <span style={{ color: '#ef4444', fontSize: '1.25rem' }}>✗</span>
            </td>
            <td style={{ padding: '0.75rem', borderBottom: '1px solid #2c3e50', textAlign: 'center' }}>
              <span style={{ color: '#10b981', fontSize: '1.25rem' }}>✓</span>
            </td>
            <td style={{ padding: '0.75rem', borderBottom: '1px solid #2c3e50', textAlign: 'center' }}>
              <span style={{ color: '#10b981', fontSize: '1.25rem' }}>✓</span>
            </td>
            <td style={{ padding: '0.75rem', borderBottom: '1px solid #2c3e50', textAlign: 'center', backgroundColor: 'rgba(59, 130, 246, 0.1)' }}>
              <span style={{ color: '#10b981', fontSize: '1.25rem' }}>✓</span>
            </td>
          </tr>

          {/* Full Asset Ownership */}
          <tr>
            <td style={{ padding: '0.75rem', borderBottom: '1px solid #2c3e50', backgroundColor: '#1b2431' }}>Full Asset Ownership<br/>(Non-Custodian)</td>
            <td style={{ padding: '0.75rem', borderBottom: '1px solid #2c3e50', textAlign: 'center' }}>
              <span style={{ color: '#ef4444', fontSize: '1.25rem' }}>✗</span>
            </td>
            <td style={{ padding: '0.75rem', borderBottom: '1px solid #2c3e50', textAlign: 'center' }}>
              <span style={{ color: '#ef4444', fontSize: '1.25rem' }}>✗</span>
            </td>
            <td style={{ padding: '0.75rem', borderBottom: '1px solid #2c3e50', textAlign: 'center' }}>
              <span style={{ color: '#10b981', fontSize: '1.25rem' }}>✓</span>
            </td>
            <td style={{ padding: '0.75rem', borderBottom: '1px solid #2c3e50', textAlign: 'center' }}>
              <span style={{ color: '#10b981', fontSize: '1.25rem' }}>✓</span>
            </td>
            <td style={{ padding: '0.75rem', borderBottom: '1px solid #2c3e50', textAlign: 'center' }}>
              <span style={{ color: '#10b981', fontSize: '1.25rem' }}>✓</span>
            </td>
            <td style={{ padding: '0.75rem', borderBottom: '1px solid #2c3e50', textAlign: 'center' }}>
              <span style={{ color: '#10b981', fontSize: '1.25rem' }}>✓</span>
            </td>
            <td style={{ padding: '0.75rem', borderBottom: '1px solid #2c3e50', textAlign: 'center' }}>
              <span style={{ color: '#10b981', fontSize: '1.25rem' }}>✓</span>
            </td>
            <td style={{ padding: '0.75rem', borderBottom: '1px solid #2c3e50', textAlign: 'center' }}>
              <span style={{ color: '#10b981', fontSize: '1.25rem' }}>✓</span>
            </td>
            <td style={{ padding: '0.75rem', borderBottom: '1px solid #2c3e50', textAlign: 'center', backgroundColor: 'rgba(59, 130, 246, 0.1)' }}>
              <span style={{ color: '#10b981', fontSize: '1.25rem' }}>✓</span>
            </td>
          </tr>

          {/* Fiat or Stablecoin Support */}
          <tr>
            <td style={{ padding: '0.75rem', borderBottom: '1px solid #2c3e50', backgroundColor: '#1b2431' }}>Fiat or Stablecoin<br/>Support</td>
            <td style={{ padding: '0.75rem', borderBottom: '1px solid #2c3e50', textAlign: 'center' }}>
              <span style={{ color: '#10b981', fontSize: '1.25rem' }}>✓</span>
            </td>
            <td style={{ padding: '0.75rem', borderBottom: '1px solid #2c3e50', textAlign: 'center' }}>
              <span style={{ color: '#10b981', fontSize: '1.25rem' }}>✓</span>
            </td>
            <td style={{ padding: '0.75rem', borderBottom: '1px solid #2c3e50', textAlign: 'center' }}>
              <span style={{ color: '#ef4444', fontSize: '1.25rem' }}>✗</span>
            </td>
            <td style={{ padding: '0.75rem', borderBottom: '1px solid #2c3e50', textAlign: 'center' }}>
              <span style={{ color: '#10b981', fontSize: '1.25rem' }}>✓</span>
            </td>
            <td style={{ padding: '0.75rem', borderBottom: '1px solid #2c3e50', textAlign: 'center' }}>
              <span style={{ color: '#10b981', fontSize: '1.25rem' }}>✓</span>
            </td>
            <td style={{ padding: '0.75rem', borderBottom: '1px solid #2c3e50', textAlign: 'center' }}>
              <span style={{ color: '#10b981', fontSize: '1.25rem' }}>✓</span>
            </td>
            <td style={{ padding: '0.75rem', borderBottom: '1px solid #2c3e50', textAlign: 'center' }}>
              <span style={{ color: '#10b981', fontSize: '1.25rem' }}>✓</span>
            </td>
            <td style={{ padding: '0.75rem', borderBottom: '1px solid #2c3e50', textAlign: 'center' }}>
              <span style={{ color: '#10b981', fontSize: '1.25rem' }}>✓</span>
            </td>
            <td style={{ padding: '0.75rem', borderBottom: '1px solid #2c3e50', textAlign: 'center', backgroundColor: 'rgba(59, 130, 246, 0.1)' }}>
              <span style={{ color: '#ef4444', fontSize: '1.25rem' }}>✗</span>
            </td>
          </tr>

          {/* Availability */}
          <tr>
            <td style={{ padding: '0.75rem', borderBottom: '1px solid #2c3e50', backgroundColor: '#1b2431' }}>Availability</td>
            <td style={{ padding: '0.75rem', borderBottom: '1px solid #2c3e50', textAlign: 'center' }}>
              - Web<br/>- Mobile
            </td>
            <td style={{ padding: '0.75rem', borderBottom: '1px solid #2c3e50', textAlign: 'center' }}>
              - Web<br/>- Mobile
            </td>
            <td style={{ padding: '0.75rem', borderBottom: '1px solid #2c3e50', textAlign: 'center' }}>
              - Desktop
            </td>
            <td style={{ padding: '0.75rem', borderBottom: '1px solid #2c3e50', textAlign: 'center' }}>
              - Web
            </td>
            <td style={{ padding: '0.75rem', borderBottom: '1px solid #2c3e50', textAlign: 'center' }}>
              - Web<br/>- Mobile<br/>- Desktop
            </td>
            <td style={{ padding: '0.75rem', borderBottom: '1px solid #2c3e50', textAlign: 'center' }}>
              - Desktop
            </td>
            <td style={{ padding: '0.75rem', borderBottom: '1px solid #2c3e50', textAlign: 'center' }}>
              - Desktop
            </td>
            <td style={{ padding: '0.75rem', borderBottom: '1px solid #2c3e50', textAlign: 'center' }}>
              - Desktop
            </td>
            <td style={{ padding: '0.75rem', borderBottom: '1px solid #2c3e50', textAlign: 'center', backgroundColor: 'rgba(59, 130, 246, 0.1)' }}>
              - Desktop
            </td>
          </tr>

          {/* Startup and node sync time */}
          <tr>
            <td style={{ padding: '0.75rem', borderBottom: '1px solid #2c3e50', backgroundColor: '#1b2431' }}>Startup and<br/>node sync time</td>
            <td style={{ padding: '0.75rem', borderBottom: '1px solid #2c3e50', textAlign: 'center' }}>
              15 minutes to days<sup>3</sup>
            </td>
            <td style={{ padding: '0.75rem', borderBottom: '1px solid #2c3e50', textAlign: 'center' }}>
              Near-Instant
            </td>
            <td style={{ padding: '0.75rem', borderBottom: '1px solid #2c3e50', textAlign: 'center' }}>
              15 to 30 minutes
            </td>
            <td style={{ padding: '0.75rem', borderBottom: '1px solid #2c3e50', textAlign: 'center' }}>
              5 to 10 minutes
            </td>
            <td style={{ padding: '0.75rem', borderBottom: '1px solid #2c3e50', textAlign: 'center' }}>
              15 to 30 minutes
            </td>
            <td style={{ padding: '0.75rem', borderBottom: '1px solid #2c3e50', textAlign: 'center' }}>
              15 to 30 minutes
            </td>
            <td style={{ padding: '0.75rem', borderBottom: '1px solid #2c3e50', textAlign: 'center' }}>
              30 to 60 minutes
            </td>
            <td style={{ padding: '0.75rem', borderBottom: '1px solid #2c3e50', textAlign: 'center' }}>
              30 to 60 minutes
            </td>
            <td style={{ padding: '0.75rem', borderBottom: '1px solid #2c3e50', textAlign: 'center', backgroundColor: 'rgba(59, 130, 246, 0.1)' }}>
              ~ 60 minutes<sup>4</sup>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    
    <div style={{ fontSize: '0.9rem', marginTop: '1rem', color: '#64748b' }}>
      <p><sup>1</sup>: No KYC at the protocol level, but individual sellers can require IDs.</p>
      <p><sup>2</sup>: Uncertain position: https://komodoplatform.com/en/blog/community-update-on-atomicdex-kyc-aml/</p>
      <p><sup>3</sup>: Depending on KYC, AML, or source of income verification delays.</p>
      <p><sup>4</sup>: Mostly dependent on your internet connection speed. Significant improvements underway.</p>
    </div>
  );
}
```