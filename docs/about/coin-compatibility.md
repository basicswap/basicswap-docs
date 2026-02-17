---
sidebar_position: 3
title: Coin Compatibility Matrix
description: "Complete matrix showing which coins can be swapped with each other and supported swap types"
---

<style>{`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

  .compat-root {
    font-family: 'Inter', ui-sans-serif, system-ui, -apple-system, sans-serif;
    --bs-blue: #3B82F6;
    --bs-blue-light: #60A5FA;
    --bs-blue-dark: #2563EB;
    --color-adaptor: #3B82F6;
    --color-hash: #10B981;
    --color-ves: #F59E0B;
    --color-none: #94a3b8;
    margin: -1rem -2rem 0 -2rem;
    padding: 0;
  }

  [data-theme='dark'] .compat-root {
    --color-adaptor: #60A5FA;
    --color-hash: #34D399;
    --color-ves: #FBBF24;
    --color-none: #64748b;
  }

  .legend-bar {
    margin-top: 2rem;
    display: flex;
    gap: 2rem;
    padding: 2rem 3rem;
    background: var(--ifm-background-surface-color);
    border-bottom: 1px solid var(--ifm-color-emphasis-200);
    flex-wrap: wrap;
    justify-content: center;
  }

  .legend-item {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  .legend-dot {
    width: 12px;
    height: 12px;
    border-radius: 3px;
    flex-shrink: 0;
  }

  .legend-label {
    font-family: 'Inter', ui-sans-serif, system-ui;
    font-size: 0.85rem;
    font-weight: 600;
    color: var(--ifm-color-emphasis-800);
  }

  .legend-desc {
    font-size: 0.8rem;
    color: var(--ifm-color-emphasis-600);
    font-weight: 400;
  }

  .matrix-container {
    padding: 0;
    background: var(--ifm-background-color);
    overflow-x: visible;
    position: relative;
  }

  .matrix-scroll {
    overflow-x: auto;
    overflow-y: visible;
  }

  .matrix-table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0;
    font-size: 0.75rem;
    table-layout: fixed;
  }

  .matrix-table th,
  .matrix-table td {
    padding: 0;
    margin: 0;
    border: 1px solid var(--ifm-color-emphasis-200);
    position: relative;
  }

  .matrix-table th {
    background: var(--ifm-color-emphasis-100);
    color: var(--ifm-color-emphasis-900);
    font-weight: 700;
    text-align: center;
    font-family: 'Inter', ui-sans-serif, system-ui;
    font-size: 0.7rem;
    letter-spacing: 0.02em;
    text-transform: uppercase;
  }

  .corner-cell {
    width: 40px;
    background: transparent !important;
    border: none !important;
  }

  .axis-label {
    font-size: 0.7rem;
    font-weight: 800;
    padding: 0.75rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  .maker-axis {
    background: linear-gradient(135deg, #3B82F6 0%, #2563EB 100%) !important;
    color: white;
  }

  .taker-axis {
    background: linear-gradient(135deg, #3B82F6 0%, #60A5FA 100%) !important;
    color: white;
    writing-mode: vertical-rl;
    text-orientation: mixed;
  }

  .coin-header {
    padding: 0.6rem 0.3rem;
    width: 60px;
    min-width: 60px;
    max-width: 60px;
  }

  .row-label {
    text-align: left !important;
    padding-left: 1rem !important;
    width: 120px;
    min-width: 120px;
    font-weight: 700;
    background: var(--ifm-color-emphasis-100) !important;
    position: sticky;
    left: 0;
    z-index: 10;
  }

  .matrix-cell {
    width: 60px;
    min-width: 60px;
    max-width: 60px;
    height: 60px;
    cursor: help;
    transition: all 0.15s ease;
    position: relative;
    background: var(--ifm-background-surface-color);
  }

  .matrix-cell:hover:not(.diagonal-cell) {
    z-index: 100;
    box-shadow: 0 0 0 2px var(--ifm-color-emphasis-400);
  }

  .cell-inner {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    font-family: 'Inter', ui-sans-serif, system-ui;
    font-weight: 700;
    font-size: 0.85rem;
    letter-spacing: 0.05em;
  }

  .diagonal-cell .cell-inner {
    background:
      repeating-linear-gradient(
        45deg,
        var(--ifm-color-emphasis-100) 0px,
        var(--ifm-color-emphasis-100) 8px,
        var(--ifm-color-emphasis-200) 8px,
        var(--ifm-color-emphasis-200) 16px
      );
    color: var(--color-none);
  }

  .swap-a { color: var(--color-adaptor); }
  .swap-h { color: var(--color-hash); }
  .swap-v { color: var(--color-ves); }
  .swap-none { color: var(--color-none); }
  .swap-mixed {
    background: linear-gradient(135deg, #3B82F6 0%, #10B981 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .cell-tooltip {
    position: absolute;
    bottom: calc(100% + 12px);
    left: 50%;
    transform: translateX(-50%);
    background: #18181b;
    color: white !important;
    padding: 1rem 1.25rem;
    border-radius: 8px;
    font-size: 0.8rem;
    white-space: normal;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.2s ease;
    z-index: 1000;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
    font-family: 'Inter', ui-sans-serif, system-ui, sans-serif;
    font-weight: 500;
    min-width: 240px;
    max-width: 280px;
    text-align: center;
  }

  .cell-tooltip * {
    color: #ffffff !important;
    -webkit-text-fill-color: #ffffff !important;
    background-clip: border-box !important;
    -webkit-background-clip: border-box !important;
  }

  .cell-tooltip::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    border: 6px solid transparent;
    border-top-color: #18181b;
  }

  .matrix-cell:hover .cell-tooltip {
    opacity: 1;
  }

  /* Left edge cells - align tooltip to left */
  tbody tr td.matrix-cell:nth-child(2) .cell-tooltip,
  tbody tr td.matrix-cell:nth-child(3) .cell-tooltip {
    left: -10px;
    transform: translateX(0);
  }

  tbody tr td.matrix-cell:nth-child(2) .cell-tooltip::after,
  tbody tr td.matrix-cell:nth-child(3) .cell-tooltip::after {
    left: 30px;
    transform: translateX(0);
  }

  /* Right edge cells - align tooltip to right */
  tbody tr td.matrix-cell:nth-last-child(1) .cell-tooltip,
  tbody tr td.matrix-cell:nth-last-child(2) .cell-tooltip {
    left: auto;
    right: -10px;
    transform: translateX(0);
  }

  tbody tr td.matrix-cell:nth-last-child(1) .cell-tooltip::after,
  tbody tr td.matrix-cell:nth-last-child(2) .cell-tooltip::after {
    left: auto;
    right: 30px;
    transform: translateX(0);
  }

  /* Top row - flip tooltip to bottom */
  tbody tr:first-child td.matrix-cell .cell-tooltip {
    bottom: auto;
    top: calc(100% + 12px);
  }

  tbody tr:first-child td.matrix-cell .cell-tooltip::after {
    top: auto;
    bottom: 100%;
    border-top-color: transparent;
    border-bottom-color: #18181b;
  }

  /* Top row left edge - flip and align left */
  tbody tr:first-child td.matrix-cell:nth-child(2) .cell-tooltip,
  tbody tr:first-child td.matrix-cell:nth-child(3) .cell-tooltip {
    left: -10px;
    transform: translateX(0);
  }

  tbody tr:first-child td.matrix-cell:nth-child(2) .cell-tooltip::after,
  tbody tr:first-child td.matrix-cell:nth-child(3) .cell-tooltip::after {
    left: 30px;
    transform: translateX(0);
  }

  /* Top row right edge - flip and align right */
  tbody tr:first-child td.matrix-cell:nth-last-child(1) .cell-tooltip,
  tbody tr:first-child td.matrix-cell:nth-last-child(2) .cell-tooltip {
    left: auto;
    right: -10px;
    transform: translateX(0);
  }

  tbody tr:first-child td.matrix-cell:nth-last-child(1) .cell-tooltip::after,
  tbody tr:first-child td.matrix-cell:nth-last-child(2) .cell-tooltip::after {
    left: auto;
    right: 30px;
    transform: translateX(0);
  }

  .tooltip-pair {
    font-weight: 700;
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
    color: #60A5FA !important;
  }

  .tooltip-badges {
    display: flex;
    gap: 0.5rem;
    justify-content: center;
    margin-top: 0.5rem;
    flex-wrap: wrap;
  }

  .tooltip-badge {
    background: rgba(59, 130, 246, 0.3);
    padding: 0.3rem 0.6rem;
    border-radius: 4px;
    font-family: 'Inter', ui-sans-serif, system-ui;
    font-size: 0.7rem;
    font-weight: 700;
    border: 1px solid rgba(59, 130, 246, 0.5);
    color: #ffffff !important;
    -webkit-text-fill-color: #ffffff !important;
    background-clip: border-box !important;
    -webkit-background-clip: border-box !important;
  }

  .categories-section {
    padding: 4rem 3rem;
    background: var(--ifm-background-surface-color);
  }

  .categories-title {
    font-size: 2rem;
    font-weight: 800;
    margin-bottom: 2.5rem;
    text-align: center;
  }

  .categories-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;
  }

  .category-card {
    background: var(--ifm-background-color);
    border: 2px solid var(--ifm-color-emphasis-200);
    border-radius: 12px;
    padding: 2rem;
    transition: all 0.2s ease;
  }

  .category-card:hover {
    border-color: var(--cat-color);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  }

  .category-header {
    margin-bottom: 1.25rem;
    padding-bottom: 1rem;
    border-bottom: 3px solid #3B82F6;
  }

  .category-title {
    font-size: 1.5rem;
    font-weight: 800;
    margin: 0;
    color: #1F2937;
    letter-spacing: -0.02em;
  }

  [data-theme='dark'] .category-title {
    color: #F3F4F6;
  }

  .category-coins {
    font-family: 'Inter', ui-sans-serif, system-ui, sans-serif;
    font-size: 0.85rem;
    font-weight: 600;
    color: var(--ifm-color-emphasis-900);
    margin-bottom: 1rem;
    padding: 0.6rem 0.8rem;
    background: var(--ifm-color-emphasis-100);
    border-radius: 6px;
  }

  .category-desc {
    font-size: 0.9rem;
    line-height: 1.6;
    color: var(--ifm-color-emphasis-700);
  }

  @media (max-width: 996px) {
    .legend-bar {
      padding: 1.5rem 2rem;
      gap: 1.5rem;
    }

    .categories-grid {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }

    .coin-header,
    .matrix-cell {
      width: 50px;
      min-width: 50px;
      max-width: 50px;
    }

    .matrix-cell {
      height: 50px;
    }

    .cell-inner {
      font-size: 0.75rem;
    }
  }

  @media (max-width: 768px) {
    .matrix-scroll {
      overflow-x: auto;
    }

    .categories-section {
      padding: 3rem 1.5rem;
    }
  }
`}</style>

<div className="compat-root">

<div className="legend-bar">
  <div className="legend-item">
    <div className="legend-dot" style={{background: 'var(--color-adaptor)'}}></div>
    <div>
      <div className="legend-label">A · Adaptor Signature</div>
      <div className="legend-desc">Advanced cryptographic protocol</div>
    </div>
  </div>
  <div className="legend-item">
    <div className="legend-dot" style={{background: 'var(--color-hash)'}}></div>
    <div>
      <div className="legend-label">H · Secret Hash</div>
      <div className="legend-desc">Time-locked contract (HTLC)</div>
    </div>
  </div>
  <div className="legend-item">
    <div className="legend-dot" style={{background: 'var(--color-ves)'}}></div>
    <div>
      <div className="legend-label">V · VES Protocol</div>
      <div className="legend-desc">Verifiably encrypted signatures</div>
    </div>
  </div>
  <div className="legend-item">
    <div className="legend-dot" style={{background: 'var(--color-none)'}}></div>
    <div>
      <div className="legend-label">- · Not Compatible</div>
      <div className="legend-desc">Pair not supported</div>
    </div>
  </div>
</div>

<div className="matrix-container">
  <div className="matrix-scroll">
    <table className="matrix-table">
      <thead>
        <tr>
          <th className="corner-cell" rowSpan="2"></th>
          <th className="corner-cell" rowSpan="2"></th>
          <th className="axis-label maker-axis" colSpan="14">Maker · You Send</th>
        </tr>
        <tr>
          <th className="coin-header">BTC</th>
          <th className="coin-header">BCH</th>
          <th className="coin-header">DASH</th>
          <th className="coin-header">DCR</th>
          <th className="coin-header">DOGE</th>
          <th className="coin-header">FIRO</th>
          <th className="coin-header">LTC</th>
          <th className="coin-header">NMC</th>
          <th className="coin-header">PART</th>
          <th className="coin-header">PART ANON</th>
          <th className="coin-header">PART BLIND</th>
          <th className="coin-header">PIVX</th>
          <th className="coin-header">WOW</th>
          <th className="coin-header">XMR</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th className="axis-label taker-axis" rowSpan="14">Taker · You Receive</th>
          <th className="row-label">BTC</th>
          <td className="matrix-cell diagonal-cell"><div className="cell-inner">-</div></td>
          <td className="matrix-cell"><div className="cell-inner swap-a">A<div className="cell-tooltip"><div className="tooltip-pair">BTC ↔ BCH</div><div className="tooltip-badges"><span className="tooltip-badge">Adaptor Signature</span></div></div></div></td>
          <td className="matrix-cell"><div className="cell-inner swap-mixed">A,H<div className="cell-tooltip"><div className="tooltip-pair">BTC ↔ DASH</div><div className="tooltip-badges"><span className="tooltip-badge">Adaptor</span><span className="tooltip-badge">Hash</span></div></div></div></td>
          <td className="matrix-cell"><div className="cell-inner swap-mixed">A,H<div className="cell-tooltip"><div className="tooltip-pair">BTC ↔ DCR</div><div className="tooltip-badges"><span className="tooltip-badge">Adaptor</span><span className="tooltip-badge">Hash</span></div></div></div></td>
          <td className="matrix-cell"><div className="cell-inner swap-a">A<div className="cell-tooltip"><div className="tooltip-pair">BTC ↔ DOGE</div><div className="tooltip-badges"><span className="tooltip-badge">Adaptor Signature</span></div></div></div></td>
          <td className="matrix-cell"><div className="cell-inner swap-a">A<div className="cell-tooltip"><div className="tooltip-pair">BTC ↔ FIRO</div><div className="tooltip-badges"><span className="tooltip-badge">Adaptor Signature</span></div></div></div></td>
          <td className="matrix-cell"><div className="cell-inner swap-mixed">A,H<div className="cell-tooltip"><div className="tooltip-pair">BTC ↔ LTC</div><div className="tooltip-badges"><span className="tooltip-badge">Adaptor</span><span className="tooltip-badge">Hash</span></div></div></div></td>
          <td className="matrix-cell"><div className="cell-inner swap-mixed">A,H<div className="cell-tooltip"><div className="tooltip-pair">BTC ↔ NMC</div><div className="tooltip-badges"><span className="tooltip-badge">Adaptor</span><span className="tooltip-badge">Hash</span></div></div></div></td>
          <td className="matrix-cell"><div className="cell-inner swap-mixed">A,H<div className="cell-tooltip"><div className="tooltip-pair">BTC ↔ PART</div><div className="tooltip-badges"><span className="tooltip-badge">Adaptor</span><span className="tooltip-badge">Hash</span></div></div></div></td>
          <td className="matrix-cell"><div className="cell-inner swap-a">A<div className="cell-tooltip"><div className="tooltip-pair">BTC ↔ PART ANON</div><div className="tooltip-badges"><span className="tooltip-badge">Adaptor Signature</span></div></div></div></td>
          <td className="matrix-cell"><div className="cell-inner swap-a">A<div className="cell-tooltip"><div className="tooltip-pair">BTC ↔ PART BLIND</div><div className="tooltip-badges"><span className="tooltip-badge">Adaptor Signature</span></div></div></div></td>
          <td className="matrix-cell"><div className="cell-inner swap-mixed">A,H<div className="cell-tooltip"><div className="tooltip-pair">BTC ↔ PIVX</div><div className="tooltip-badges"><span className="tooltip-badge">Adaptor</span><span className="tooltip-badge">Hash</span></div></div></div></td>
          <td className="matrix-cell"><div className="cell-inner swap-a">A<div className="cell-tooltip"><div className="tooltip-pair">BTC ↔ WOW</div><div className="tooltip-badges"><span className="tooltip-badge">Adaptor Signature</span></div></div></div></td>
          <td className="matrix-cell"><div className="cell-inner swap-a">A<div className="cell-tooltip"><div className="tooltip-pair">BTC ↔ XMR</div><div className="tooltip-badges"><span className="tooltip-badge">Adaptor Signature</span></div></div></div></td>
        </tr>
        <tr>
          <th className="row-label">BCH</th>
          <td className="matrix-cell"><div className="cell-inner swap-a">A<div className="cell-tooltip"><div className="tooltip-pair">BCH ↔ BTC</div><div className="tooltip-badges"><span className="tooltip-badge">Adaptor Signature</span></div></div></div></td>
          <td className="matrix-cell diagonal-cell"><div className="cell-inner">-</div></td>
          <td className="matrix-cell"><div className="cell-inner swap-none">-<div className="cell-tooltip"><div className="tooltip-pair">BCH ↔ DASH</div><div className="tooltip-badges"><span className="tooltip-badge">Not Compatible</span></div></div></div></td>
          <td className="matrix-cell"><div className="cell-inner swap-a">A<div className="cell-tooltip"><div className="tooltip-pair">BCH ↔ DCR</div><div className="tooltip-badges"><span className="tooltip-badge">Adaptor Signature</span></div></div></div></td>
          <td className="matrix-cell"><div className="cell-inner swap-none">-<div className="cell-tooltip"><div className="tooltip-pair">BCH ↔ DOGE</div><div className="tooltip-badges"><span className="tooltip-badge">Not Compatible</span></div></div></div></td>
          <td className="matrix-cell"><div className="cell-inner swap-none">-<div className="cell-tooltip"><div className="tooltip-pair">BCH ↔ FIRO</div><div className="tooltip-badges"><span className="tooltip-badge">Not Compatible</span></div></div></div></td>
          <td className="matrix-cell"><div className="cell-inner swap-a">A<div className="cell-tooltip"><div className="tooltip-pair">BCH ↔ LTC</div><div className="tooltip-badges"><span className="tooltip-badge">Adaptor Signature</span></div></div></div></td>
          <td className="matrix-cell"><div className="cell-inner swap-a">A<div className="cell-tooltip"><div className="tooltip-pair">BCH ↔ NMC</div><div className="tooltip-badges"><span className="tooltip-badge">Adaptor Signature</span></div></div></div></td>
          <td className="matrix-cell"><div className="cell-inner swap-a">A<div className="cell-tooltip"><div className="tooltip-pair">BCH ↔ PART</div><div className="tooltip-badges"><span className="tooltip-badge">Adaptor Signature</span></div></div></div></td>
          <td className="matrix-cell"><div className="cell-inner swap-v">V<div className="cell-tooltip"><div className="tooltip-pair">BCH ↔ PART ANON</div><div className="tooltip-badges"><span className="tooltip-badge">VES Protocol</span></div></div></div></td>
          <td className="matrix-cell"><div className="cell-inner swap-a">A<div className="cell-tooltip"><div className="tooltip-pair">BCH ↔ PART BLIND</div><div className="tooltip-badges"><span className="tooltip-badge">Adaptor Signature</span></div></div></div></td>
          <td className="matrix-cell"><div className="cell-inner swap-none">-<div className="cell-tooltip"><div className="tooltip-pair">BCH ↔ PIVX</div><div className="tooltip-badges"><span className="tooltip-badge">Not Compatible</span></div></div></div></td>
          <td className="matrix-cell"><div className="cell-inner swap-v">V<div className="cell-tooltip"><div className="tooltip-pair">BCH ↔ WOW</div><div className="tooltip-badges"><span className="tooltip-badge">VES Protocol</span></div></div></div></td>
          <td className="matrix-cell"><div className="cell-inner swap-v">V<div className="cell-tooltip"><div className="tooltip-pair">BCH ↔ XMR</div><div className="tooltip-badges"><span className="tooltip-badge">VES Protocol</span></div></div></div></td>
        </tr>
        <tr>
          <th className="row-label">DASH</th>
          <td className="matrix-cell"><div className="cell-inner swap-mixed">A,H<div className="cell-tooltip"><div className="tooltip-pair">DASH ↔ BTC</div><div className="tooltip-badges"><span className="tooltip-badge">Adaptor</span><span className="tooltip-badge">Hash</span></div></div></div></td>
          <td className="matrix-cell"><div className="cell-inner swap-none">-<div className="cell-tooltip"><div className="tooltip-pair">DASH ↔ BCH</div><div className="tooltip-badges"><span className="tooltip-badge">Not Compatible</span></div></div></div></td>
          <td className="matrix-cell diagonal-cell"><div className="cell-inner">-</div></td>
          <td className="matrix-cell"><div className="cell-inner swap-mixed">A,H<div className="cell-tooltip"><div className="tooltip-pair">DASH ↔ DCR</div><div className="tooltip-badges"><span className="tooltip-badge">Adaptor</span><span className="tooltip-badge">Hash</span></div></div></div></td>
          <td className="matrix-cell"><div className="cell-inner swap-none">-<div className="cell-tooltip"><div className="tooltip-pair">DASH ↔ DOGE</div><div className="tooltip-badges"><span className="tooltip-badge">Not Compatible</span></div></div></div></td>
          <td className="matrix-cell"><div className="cell-inner swap-none">-<div className="cell-tooltip"><div className="tooltip-pair">DASH ↔ FIRO</div><div className="tooltip-badges"><span className="tooltip-badge">Not Compatible</span></div></div></div></td>
          <td className="matrix-cell"><div className="cell-inner swap-mixed">A,H<div className="cell-tooltip"><div className="tooltip-pair">DASH ↔ LTC</div><div className="tooltip-badges"><span className="tooltip-badge">Adaptor</span><span className="tooltip-badge">Hash</span></div></div></div></td>
          <td className="matrix-cell"><div className="cell-inner swap-mixed">A,H<div className="cell-tooltip"><div className="tooltip-pair">DASH ↔ NMC</div><div className="tooltip-badges"><span className="tooltip-badge">Adaptor</span><span className="tooltip-badge">Hash</span></div></div></div></td>
          <td className="matrix-cell"><div className="cell-inner swap-mixed">A,H<div className="cell-tooltip"><div className="tooltip-pair">DASH ↔ PART</div><div className="tooltip-badges"><span className="tooltip-badge">Adaptor</span><span className="tooltip-badge">Hash</span></div></div></div></td>
          <td className="matrix-cell"><div className="cell-inner swap-none">-<div className="cell-tooltip"><div className="tooltip-pair">DASH ↔ PART ANON</div><div className="tooltip-badges"><span className="tooltip-badge">Not Compatible</span></div></div></div></td>
          <td className="matrix-cell"><div className="cell-inner swap-a">A<div className="cell-tooltip"><div className="tooltip-pair">DASH ↔ PART BLIND</div><div className="tooltip-badges"><span className="tooltip-badge">Adaptor Signature</span></div></div></div></td>
          <td className="matrix-cell"><div className="cell-inner swap-h">H<div className="cell-tooltip"><div className="tooltip-pair">DASH ↔ PIVX</div><div className="tooltip-badges"><span className="tooltip-badge">Secret Hash</span></div></div></div></td>
          <td className="matrix-cell"><div className="cell-inner swap-none">-<div className="cell-tooltip"><div className="tooltip-pair">DASH ↔ WOW</div><div className="tooltip-badges"><span className="tooltip-badge">Not Compatible</span></div></div></div></td>
          <td className="matrix-cell"><div className="cell-inner swap-none">-<div className="cell-tooltip"><div className="tooltip-pair">DASH ↔ XMR</div><div className="tooltip-badges"><span className="tooltip-badge">Not Compatible</span></div></div></div></td>
        </tr>
        <tr>
          <th className="row-label">DCR</th>
          <td className="matrix-cell"><div className="cell-inner swap-mixed">A,H<div className="cell-tooltip"><div className="tooltip-pair">DCR ↔ BTC</div><div className="tooltip-badges"><span className="tooltip-badge">Adaptor</span><span className="tooltip-badge">Hash</span></div></div></div></td>
          <td className="matrix-cell"><div className="cell-inner swap-a">A<div className="cell-tooltip"><div className="tooltip-pair">DCR ↔ BCH</div><div className="tooltip-badges"><span className="tooltip-badge">Adaptor Signature</span></div></div></div></td>
          <td className="matrix-cell"><div className="cell-inner swap-mixed">A,H<div className="cell-tooltip"><div className="tooltip-pair">DCR ↔ DASH</div><div className="tooltip-badges"><span className="tooltip-badge">Adaptor</span><span className="tooltip-badge">Hash</span></div></div></div></td>
          <td className="matrix-cell diagonal-cell"><div className="cell-inner">-</div></td>
          <td className="matrix-cell"><div className="cell-inner swap-a">A<div className="cell-tooltip"><div className="tooltip-pair">DCR ↔ DOGE</div><div className="tooltip-badges"><span className="tooltip-badge">Adaptor Signature</span></div></div></div></td>
          <td className="matrix-cell"><div className="cell-inner swap-a">A<div className="cell-tooltip"><div className="tooltip-pair">DCR ↔ FIRO</div><div className="tooltip-badges"><span className="tooltip-badge">Adaptor Signature</span></div></div></div></td>
          <td className="matrix-cell"><div className="cell-inner swap-mixed">A,H<div className="cell-tooltip"><div className="tooltip-pair">DCR ↔ LTC</div><div className="tooltip-badges"><span className="tooltip-badge">Adaptor</span><span className="tooltip-badge">Hash</span></div></div></div></td>
          <td className="matrix-cell"><div className="cell-inner swap-mixed">A,H<div className="cell-tooltip"><div className="tooltip-pair">DCR ↔ NMC</div><div className="tooltip-badges"><span className="tooltip-badge">Adaptor</span><span className="tooltip-badge">Hash</span></div></div></div></td>
          <td className="matrix-cell"><div className="cell-inner swap-mixed">A,H<div className="cell-tooltip"><div className="tooltip-pair">DCR ↔ PART</div><div className="tooltip-badges"><span className="tooltip-badge">Adaptor</span><span className="tooltip-badge">Hash</span></div></div></div></td>
          <td className="matrix-cell"><div className="cell-inner swap-a">A<div className="cell-tooltip"><div className="tooltip-pair">DCR ↔ PART ANON</div><div className="tooltip-badges"><span className="tooltip-badge">Adaptor Signature</span></div></div></div></td>
          <td className="matrix-cell"><div className="cell-inner swap-a">A<div className="cell-tooltip"><div className="tooltip-pair">DCR ↔ PART BLIND</div><div className="tooltip-badges"><span className="tooltip-badge">Adaptor Signature</span></div></div></div></td>
          <td className="matrix-cell"><div className="cell-inner swap-mixed">A,H<div className="cell-tooltip"><div className="tooltip-pair">DCR ↔ PIVX</div><div className="tooltip-badges"><span className="tooltip-badge">Adaptor</span><span className="tooltip-badge">Hash</span></div></div></div></td>
          <td className="matrix-cell"><div className="cell-inner swap-a">A<div className="cell-tooltip"><div className="tooltip-pair">DCR ↔ WOW</div><div className="tooltip-badges"><span className="tooltip-badge">Adaptor Signature</span></div></div></div></td>
          <td className="matrix-cell"><div className="cell-inner swap-a">A<div className="cell-tooltip"><div className="tooltip-pair">DCR ↔ XMR</div><div className="tooltip-badges"><span className="tooltip-badge">Adaptor Signature</span></div></div></div></td>
        </tr>
        <tr>
          <th className="row-label">DOGE</th>
          <td className="matrix-cell"><div className="cell-inner swap-a">A<div className="cell-tooltip"><div className="tooltip-pair">DOGE ↔ BTC</div><div className="tooltip-badges"><span className="tooltip-badge">Adaptor Signature</span></div></div></div></td>
          <td className="matrix-cell"><div className="cell-inner swap-none">-<div className="cell-tooltip"><div className="tooltip-pair">DOGE ↔ BCH</div><div className="tooltip-badges"><span className="tooltip-badge">Not Compatible</span></div></div></div></td>
          <td className="matrix-cell"><div className="cell-inner swap-none">-<div className="cell-tooltip"><div className="tooltip-pair">DOGE ↔ DASH</div><div className="tooltip-badges"><span className="tooltip-badge">Not Compatible</span></div></div></div></td>
          <td className="matrix-cell"><div className="cell-inner swap-a">A<div className="cell-tooltip"><div className="tooltip-pair">DOGE ↔ DCR</div><div className="tooltip-badges"><span className="tooltip-badge">Adaptor Signature</span></div></div></div></td>
          <td className="matrix-cell diagonal-cell"><div className="cell-inner">-</div></td>
          <td className="matrix-cell"><div className="cell-inner swap-none">-<div className="cell-tooltip"><div className="tooltip-pair">DOGE ↔ FIRO</div><div className="tooltip-badges"><span className="tooltip-badge">Not Compatible</span></div></div></div></td>
          <td className="matrix-cell"><div className="cell-inner swap-a">A<div className="cell-tooltip"><div className="tooltip-pair">DOGE ↔ LTC</div><div className="tooltip-badges"><span className="tooltip-badge">Adaptor Signature</span></div></div></div></td>
          <td className="matrix-cell"><div className="cell-inner swap-a">A<div className="cell-tooltip"><div className="tooltip-pair">DOGE ↔ NMC</div><div className="tooltip-badges"><span className="tooltip-badge">Adaptor Signature</span></div></div></div></td>
          <td className="matrix-cell"><div className="cell-inner swap-a">A<div className="cell-tooltip"><div className="tooltip-pair">DOGE ↔ PART</div><div className="tooltip-badges"><span className="tooltip-badge">Adaptor Signature</span></div></div></div></td>
          <td className="matrix-cell"><div className="cell-inner swap-none">-<div className="cell-tooltip"><div className="tooltip-pair">DOGE ↔ PART ANON</div><div className="tooltip-badges"><span className="tooltip-badge">Not Compatible</span></div></div></div></td>
          <td className="matrix-cell"><div className="cell-inner swap-a">A<div className="cell-tooltip"><div className="tooltip-pair">DOGE ↔ PART BLIND</div><div className="tooltip-badges"><span className="tooltip-badge">Adaptor Signature</span></div></div></div></td>
          <td className="matrix-cell"><div className="cell-inner swap-none">-<div className="cell-tooltip"><div className="tooltip-pair">DOGE ↔ PIVX</div><div className="tooltip-badges"><span className="tooltip-badge">Not Compatible</span></div></div></div></td>
          <td className="matrix-cell"><div className="cell-inner swap-none">-<div className="cell-tooltip"><div className="tooltip-pair">DOGE ↔ WOW</div><div className="tooltip-badges"><span className="tooltip-badge">Not Compatible</span></div></div></div></td>
          <td className="matrix-cell"><div className="cell-inner swap-none">-<div className="cell-tooltip"><div className="tooltip-pair">DOGE ↔ XMR</div><div className="tooltip-badges"><span className="tooltip-badge">Not Compatible</span></div></div></div></td>
        </tr>
        <tr>
          <th className="row-label">FIRO</th>
          <td className="matrix-cell"><div className="cell-inner swap-a">A<div className="cell-tooltip"><div className="tooltip-pair">FIRO ↔ BTC</div><div className="tooltip-badges"><span className="tooltip-badge">Adaptor Signature</span></div></div></div></td>
          <td className="matrix-cell"><div className="cell-inner swap-none">-<div className="cell-tooltip"><div className="tooltip-pair">FIRO ↔ BCH</div><div className="tooltip-badges"><span className="tooltip-badge">Not Compatible</span></div></div></div></td>
          <td className="matrix-cell"><div className="cell-inner swap-none">-<div className="cell-tooltip"><div className="tooltip-pair">FIRO ↔ DASH</div><div className="tooltip-badges"><span className="tooltip-badge">Not Compatible</span></div></div></div></td>
          <td className="matrix-cell"><div className="cell-inner swap-a">A<div className="cell-tooltip"><div className="tooltip-pair">FIRO ↔ DCR</div><div className="tooltip-badges"><span className="tooltip-badge">Adaptor Signature</span></div></div></div></td>
          <td className="matrix-cell"><div className="cell-inner swap-none">-<div className="cell-tooltip"><div className="tooltip-pair">FIRO ↔ DOGE</div><div className="tooltip-badges"><span className="tooltip-badge">Not Compatible</span></div></div></div></td>
          <td className="matrix-cell diagonal-cell"><div className="cell-inner">-</div></td>
          <td className="matrix-cell"><div className="cell-inner swap-a">A<div className="cell-tooltip"><div className="tooltip-pair">FIRO ↔ LTC</div><div className="tooltip-badges"><span className="tooltip-badge">Adaptor Signature</span></div></div></div></td>
          <td className="matrix-cell"><div className="cell-inner swap-a">A<div className="cell-tooltip"><div className="tooltip-pair">FIRO ↔ NMC</div><div className="tooltip-badges"><span className="tooltip-badge">Adaptor Signature</span></div></div></div></td>
          <td className="matrix-cell"><div className="cell-inner swap-a">A<div className="cell-tooltip"><div className="tooltip-pair">FIRO ↔ PART</div><div className="tooltip-badges"><span className="tooltip-badge">Adaptor Signature</span></div></div></div></td>
          <td className="matrix-cell"><div className="cell-inner swap-none">-<div className="cell-tooltip"><div className="tooltip-pair">FIRO ↔ PART ANON</div><div className="tooltip-badges"><span className="tooltip-badge">Not Compatible</span></div></div></div></td>
          <td className="matrix-cell"><div className="cell-inner swap-a">A<div className="cell-tooltip"><div className="tooltip-pair">FIRO ↔ PART BLIND</div><div className="tooltip-badges"><span className="tooltip-badge">Adaptor Signature</span></div></div></div></td>
          <td className="matrix-cell"><div className="cell-inner swap-none">-<div className="cell-tooltip"><div className="tooltip-pair">FIRO ↔ PIVX</div><div className="tooltip-badges"><span className="tooltip-badge">Not Compatible</span></div></div></div></td>
          <td className="matrix-cell"><div className="cell-inner swap-none">-<div className="cell-tooltip"><div className="tooltip-pair">FIRO ↔ WOW</div><div className="tooltip-badges"><span className="tooltip-badge">Not Compatible</span></div></div></div></td>
          <td className="matrix-cell"><div className="cell-inner swap-none">-<div className="cell-tooltip"><div className="tooltip-pair">FIRO ↔ XMR</div><div className="tooltip-badges"><span className="tooltip-badge">Not Compatible</span></div></div></div></td>
        </tr>
        <tr>
          <th className="row-label">LTC</th>
          <td className="matrix-cell"><div className="cell-inner swap-mixed">A,H<div className="cell-tooltip"><div className="tooltip-pair">LTC ↔ BTC</div><div className="tooltip-badges"><span className="tooltip-badge">Adaptor</span><span className="tooltip-badge">Hash</span></div></div></div></td>
          <td className="matrix-cell"><div className="cell-inner swap-a">A<div className="cell-tooltip"><div className="tooltip-pair">LTC ↔ BCH</div><div className="tooltip-badges"><span className="tooltip-badge">Adaptor Signature</span></div></div></div></td>
          <td className="matrix-cell"><div className="cell-inner swap-mixed">A,H<div className="cell-tooltip"><div className="tooltip-pair">LTC ↔ DASH</div><div className="tooltip-badges"><span className="tooltip-badge">Adaptor</span><span className="tooltip-badge">Hash</span></div></div></div></td>
          <td className="matrix-cell"><div className="cell-inner swap-mixed">A,H<div className="cell-tooltip"><div className="tooltip-pair">LTC ↔ DCR</div><div className="tooltip-badges"><span className="tooltip-badge">Adaptor</span><span className="tooltip-badge">Hash</span></div></div></div></td>
          <td className="matrix-cell"><div className="cell-inner swap-a">A<div className="cell-tooltip"><div className="tooltip-pair">LTC ↔ DOGE</div><div className="tooltip-badges"><span className="tooltip-badge">Adaptor Signature</span></div></div></div></td>
          <td className="matrix-cell"><div className="cell-inner swap-a">A<div className="cell-tooltip"><div className="tooltip-pair">LTC ↔ FIRO</div><div className="tooltip-badges"><span className="tooltip-badge">Adaptor Signature</span></div></div></div></td>
          <td className="matrix-cell diagonal-cell"><div className="cell-inner">-</div></td>
          <td className="matrix-cell"><div className="cell-inner swap-mixed">A,H<div className="cell-tooltip"><div className="tooltip-pair">LTC ↔ NMC</div><div className="tooltip-badges"><span className="tooltip-badge">Adaptor</span><span className="tooltip-badge">Hash</span></div></div></div></td>
          <td className="matrix-cell"><div className="cell-inner swap-mixed">A,H<div className="cell-tooltip"><div className="tooltip-pair">LTC ↔ PART</div><div className="tooltip-badges"><span className="tooltip-badge">Adaptor</span><span className="tooltip-badge">Hash</span></div></div></div></td>
          <td className="matrix-cell"><div className="cell-inner swap-a">A<div className="cell-tooltip"><div className="tooltip-pair">LTC ↔ PART ANON</div><div className="tooltip-badges"><span className="tooltip-badge">Adaptor Signature</span></div></div></div></td>
          <td className="matrix-cell"><div className="cell-inner swap-a">A<div className="cell-tooltip"><div className="tooltip-pair">LTC ↔ PART BLIND</div><div className="tooltip-badges"><span className="tooltip-badge">Adaptor Signature</span></div></div></div></td>
          <td className="matrix-cell"><div className="cell-inner swap-mixed">A,H<div className="cell-tooltip"><div className="tooltip-pair">LTC ↔ PIVX</div><div className="tooltip-badges"><span className="tooltip-badge">Adaptor</span><span className="tooltip-badge">Hash</span></div></div></div></td>
          <td className="matrix-cell"><div className="cell-inner swap-a">A<div className="cell-tooltip"><div className="tooltip-pair">LTC ↔ WOW</div><div className="tooltip-badges"><span className="tooltip-badge">Adaptor Signature</span></div></div></div></td>
          <td className="matrix-cell"><div className="cell-inner swap-a">A<div className="cell-tooltip"><div className="tooltip-pair">LTC ↔ XMR</div><div className="tooltip-badges"><span className="tooltip-badge">Adaptor Signature</span></div></div></div></td>
        </tr>
        <tr>
          <th className="row-label">NMC</th>
          <td className="matrix-cell"><div className="cell-inner swap-mixed">A,H<div className="cell-tooltip"><div className="tooltip-pair">NMC ↔ BTC</div><div className="tooltip-badges"><span className="tooltip-badge">Adaptor</span><span className="tooltip-badge">Hash</span></div></div></div></td>
          <td className="matrix-cell"><div className="cell-inner swap-a">A<div className="cell-tooltip"><div className="tooltip-pair">NMC ↔ BCH</div><div className="tooltip-badges"><span className="tooltip-badge">Adaptor Signature</span></div></div></div></td>
          <td className="matrix-cell"><div className="cell-inner swap-mixed">A,H<div className="cell-tooltip"><div className="tooltip-pair">NMC ↔ DASH</div><div className="tooltip-badges"><span className="tooltip-badge">Adaptor</span><span className="tooltip-badge">Hash</span></div></div></div></td>
          <td className="matrix-cell"><div className="cell-inner swap-mixed">A,H<div className="cell-tooltip"><div className="tooltip-pair">NMC ↔ DCR</div><div className="tooltip-badges"><span className="tooltip-badge">Adaptor</span><span className="tooltip-badge">Hash</span></div></div></div></td>
          <td className="matrix-cell"><div className="cell-inner swap-a">A<div className="cell-tooltip"><div className="tooltip-pair">NMC ↔ DOGE</div><div className="tooltip-badges"><span className="tooltip-badge">Adaptor Signature</span></div></div></div></td>
          <td className="matrix-cell"><div className="cell-inner swap-a">A<div className="cell-tooltip"><div className="tooltip-pair">NMC ↔ FIRO</div><div className="tooltip-badges"><span className="tooltip-badge">Adaptor Signature</span></div></div></div></td>
          <td className="matrix-cell"><div className="cell-inner swap-mixed">A,H<div className="cell-tooltip"><div className="tooltip-pair">NMC ↔ LTC</div><div className="tooltip-badges"><span className="tooltip-badge">Adaptor</span><span className="tooltip-badge">Hash</span></div></div></div></td>
          <td className="matrix-cell diagonal-cell"><div className="cell-inner">-</div></td>
          <td className="matrix-cell"><div className="cell-inner swap-mixed">A,H<div className="cell-tooltip"><div className="tooltip-pair">NMC ↔ PART</div><div className="tooltip-badges"><span className="tooltip-badge">Adaptor</span><span className="tooltip-badge">Hash</span></div></div></div></td>
          <td className="matrix-cell"><div className="cell-inner swap-a">A<div className="cell-tooltip"><div className="tooltip-pair">NMC ↔ PART ANON</div><div className="tooltip-badges"><span className="tooltip-badge">Adaptor Signature</span></div></div></div></td>
          <td className="matrix-cell"><div className="cell-inner swap-a">A<div className="cell-tooltip"><div className="tooltip-pair">NMC ↔ PART BLIND</div><div className="tooltip-badges"><span className="tooltip-badge">Adaptor Signature</span></div></div></div></td>
          <td className="matrix-cell"><div className="cell-inner swap-mixed">A,H<div className="cell-tooltip"><div className="tooltip-pair">NMC ↔ PIVX</div><div className="tooltip-badges"><span className="tooltip-badge">Adaptor</span><span className="tooltip-badge">Hash</span></div></div></div></td>
          <td className="matrix-cell"><div className="cell-inner swap-a">A<div className="cell-tooltip"><div className="tooltip-pair">NMC ↔ WOW</div><div className="tooltip-badges"><span className="tooltip-badge">Adaptor Signature</span></div></div></div></td>
          <td className="matrix-cell"><div className="cell-inner swap-a">A<div className="cell-tooltip"><div className="tooltip-pair">NMC ↔ XMR</div><div className="tooltip-badges"><span className="tooltip-badge">Adaptor Signature</span></div></div></div></td>
        </tr>
        <tr>
          <th className="row-label">PART</th>
          <td className="matrix-cell"><div className="cell-inner swap-mixed">A,H<div className="cell-tooltip"><div className="tooltip-pair">PART ↔ BTC</div><div className="tooltip-badges"><span className="tooltip-badge">Adaptor</span><span className="tooltip-badge">Hash</span></div></div></div></td>
          <td className="matrix-cell"><div className="cell-inner swap-a">A<div className="cell-tooltip"><div className="tooltip-pair">PART ↔ BCH</div><div className="tooltip-badges"><span className="tooltip-badge">Adaptor Signature</span></div></div></div></td>
          <td className="matrix-cell"><div className="cell-inner swap-mixed">A,H<div className="cell-tooltip"><div className="tooltip-pair">PART ↔ DASH</div><div className="tooltip-badges"><span className="tooltip-badge">Adaptor</span><span className="tooltip-badge">Hash</span></div></div></div></td>
          <td className="matrix-cell"><div className="cell-inner swap-mixed">A,H<div className="cell-tooltip"><div className="tooltip-pair">PART ↔ DCR</div><div className="tooltip-badges"><span className="tooltip-badge">Adaptor</span><span className="tooltip-badge">Hash</span></div></div></div></td>
          <td className="matrix-cell"><div className="cell-inner swap-a">A<div className="cell-tooltip"><div className="tooltip-pair">PART ↔ DOGE</div><div className="tooltip-badges"><span className="tooltip-badge">Adaptor Signature</span></div></div></div></td>
          <td className="matrix-cell"><div className="cell-inner swap-a">A<div className="cell-tooltip"><div className="tooltip-pair">PART ↔ FIRO</div><div className="tooltip-badges"><span className="tooltip-badge">Adaptor Signature</span></div></div></div></td>
          <td className="matrix-cell"><div className="cell-inner swap-mixed">A,H<div className="cell-tooltip"><div className="tooltip-pair">PART ↔ LTC</div><div className="tooltip-badges"><span className="tooltip-badge">Adaptor</span><span className="tooltip-badge">Hash</span></div></div></div></td>
          <td className="matrix-cell"><div className="cell-inner swap-mixed">A,H<div className="cell-tooltip"><div className="tooltip-pair">PART ↔ NMC</div><div className="tooltip-badges"><span className="tooltip-badge">Adaptor</span><span className="tooltip-badge">Hash</span></div></div></div></td>
          <td className="matrix-cell diagonal-cell"><div className="cell-inner">-</div></td>
          <td className="matrix-cell"><div className="cell-inner swap-a">A<div className="cell-tooltip"><div className="tooltip-pair">PART ↔ PART ANON</div><div className="tooltip-badges"><span className="tooltip-badge">Adaptor Signature</span></div></div></div></td>
          <td className="matrix-cell"><div className="cell-inner swap-a">A<div className="cell-tooltip"><div className="tooltip-pair">PART ↔ PART BLIND</div><div className="tooltip-badges"><span className="tooltip-badge">Adaptor Signature</span></div></div></div></td>
          <td className="matrix-cell"><div className="cell-inner swap-mixed">A,H<div className="cell-tooltip"><div className="tooltip-pair">PART ↔ PIVX</div><div className="tooltip-badges"><span className="tooltip-badge">Adaptor</span><span className="tooltip-badge">Hash</span></div></div></div></td>
          <td className="matrix-cell"><div className="cell-inner swap-a">A<div className="cell-tooltip"><div className="tooltip-pair">PART ↔ WOW</div><div className="tooltip-badges"><span className="tooltip-badge">Adaptor Signature</span></div></div></div></td>
          <td className="matrix-cell"><div className="cell-inner swap-a">A<div className="cell-tooltip"><div className="tooltip-pair">PART ↔ XMR</div><div className="tooltip-badges"><span className="tooltip-badge">Adaptor Signature</span></div></div></div></td>
        </tr>
        <tr>
          <th className="row-label">PART ANON</th>
          <td className="matrix-cell"><div className="cell-inner swap-a">A<div className="cell-tooltip"><div className="tooltip-pair">PART ANON ↔ BTC</div><div className="tooltip-badges"><span className="tooltip-badge">Adaptor Signature</span></div></div></div></td>
          <td className="matrix-cell"><div className="cell-inner swap-v">V<div className="cell-tooltip"><div className="tooltip-pair">PART ANON ↔ BCH</div><div className="tooltip-badges"><span className="tooltip-badge">VES Protocol</span></div></div></div></td>
          <td className="matrix-cell"><div className="cell-inner swap-none">-<div className="cell-tooltip"><div className="tooltip-pair">PART ANON ↔ DASH</div><div className="tooltip-badges"><span className="tooltip-badge">Not Compatible</span></div></div></div></td>
          <td className="matrix-cell"><div className="cell-inner swap-a">A<div className="cell-tooltip"><div className="tooltip-pair">PART ANON ↔ DCR</div><div className="tooltip-badges"><span className="tooltip-badge">Adaptor Signature</span></div></div></div></td>
          <td className="matrix-cell"><div className="cell-inner swap-none">-<div className="cell-tooltip"><div className="tooltip-pair">PART ANON ↔ DOGE</div><div className="tooltip-badges"><span className="tooltip-badge">Not Compatible</span></div></div></div></td>
          <td className="matrix-cell"><div className="cell-inner swap-none">-<div className="cell-tooltip"><div className="tooltip-pair">PART ANON ↔ FIRO</div><div className="tooltip-badges"><span className="tooltip-badge">Not Compatible</span></div></div></div></td>
          <td className="matrix-cell"><div className="cell-inner swap-a">A<div className="cell-tooltip"><div className="tooltip-pair">PART ANON ↔ LTC</div><div className="tooltip-badges"><span className="tooltip-badge">Adaptor Signature</span></div></div></div></td>
          <td className="matrix-cell"><div className="cell-inner swap-a">A<div className="cell-tooltip"><div className="tooltip-pair">PART ANON ↔ NMC</div><div className="tooltip-badges"><span className="tooltip-badge">Adaptor Signature</span></div></div></div></td>
          <td className="matrix-cell"><div className="cell-inner swap-a">A<div className="cell-tooltip"><div className="tooltip-pair">PART ANON ↔ PART</div><div className="tooltip-badges"><span className="tooltip-badge">Adaptor Signature</span></div></div></div></td>
          <td className="matrix-cell diagonal-cell"><div className="cell-inner">-</div></td>
          <td className="matrix-cell"><div className="cell-inner swap-a">A<div className="cell-tooltip"><div className="tooltip-pair">PART ANON ↔ PART BLIND</div><div className="tooltip-badges"><span className="tooltip-badge">Adaptor Signature</span></div></div></div></td>
          <td className="matrix-cell"><div className="cell-inner swap-none">-<div className="cell-tooltip"><div className="tooltip-pair">PART ANON ↔ PIVX</div><div className="tooltip-badges"><span className="tooltip-badge">Not Compatible</span></div></div></div></td>
          <td className="matrix-cell"><div className="cell-inner swap-none">-<div className="cell-tooltip"><div className="tooltip-pair">PART ANON ↔ WOW</div><div className="tooltip-badges"><span className="tooltip-badge">Not Compatible</span></div></div></div></td>
          <td className="matrix-cell"><div className="cell-inner swap-none">-<div className="cell-tooltip"><div className="tooltip-pair">PART ANON ↔ XMR</div><div className="tooltip-badges"><span className="tooltip-badge">Not Compatible</span></div></div></div></td>
        </tr>
        <tr>
          <th className="row-label">PART BLIND</th>
          <td className="matrix-cell"><div className="cell-inner swap-a">A<div className="cell-tooltip"><div className="tooltip-pair">PART BLIND ↔ BTC</div><div className="tooltip-badges"><span className="tooltip-badge">Adaptor Signature</span></div></div></div></td>
          <td className="matrix-cell"><div className="cell-inner swap-a">A<div className="cell-tooltip"><div className="tooltip-pair">PART BLIND ↔ BCH</div><div className="tooltip-badges"><span className="tooltip-badge">Adaptor Signature</span></div></div></div></td>
          <td className="matrix-cell"><div className="cell-inner swap-a">A<div className="cell-tooltip"><div className="tooltip-pair">PART BLIND ↔ DASH</div><div className="tooltip-badges"><span className="tooltip-badge">Adaptor Signature</span></div></div></div></td>
          <td className="matrix-cell"><div className="cell-inner swap-a">A<div className="cell-tooltip"><div className="tooltip-pair">PART BLIND ↔ DCR</div><div className="tooltip-badges"><span className="tooltip-badge">Adaptor Signature</span></div></div></div></td>
          <td className="matrix-cell"><div className="cell-inner swap-a">A<div className="cell-tooltip"><div className="tooltip-pair">PART BLIND ↔ DOGE</div><div className="tooltip-badges"><span className="tooltip-badge">Adaptor Signature</span></div></div></div></td>
          <td className="matrix-cell"><div className="cell-inner swap-a">A<div className="cell-tooltip"><div className="tooltip-pair">PART BLIND ↔ FIRO</div><div className="tooltip-badges"><span className="tooltip-badge">Adaptor Signature</span></div></div></div></td>
          <td className="matrix-cell"><div className="cell-inner swap-a">A<div className="cell-tooltip"><div className="tooltip-pair">PART BLIND ↔ LTC</div><div className="tooltip-badges"><span className="tooltip-badge">Adaptor Signature</span></div></div></div></td>
          <td className="matrix-cell"><div className="cell-inner swap-a">A<div className="cell-tooltip"><div className="tooltip-pair">PART BLIND ↔ NMC</div><div className="tooltip-badges"><span className="tooltip-badge">Adaptor Signature</span></div></div></div></td>
          <td className="matrix-cell"><div className="cell-inner swap-a">A<div className="cell-tooltip"><div className="tooltip-pair">PART BLIND ↔ PART</div><div className="tooltip-badges"><span className="tooltip-badge">Adaptor Signature</span></div></div></div></td>
          <td className="matrix-cell"><div className="cell-inner swap-a">A<div className="cell-tooltip"><div className="tooltip-pair">PART BLIND ↔ PART ANON</div><div className="tooltip-badges"><span className="tooltip-badge">Adaptor Signature</span></div></div></div></td>
          <td className="matrix-cell diagonal-cell"><div className="cell-inner">-</div></td>
          <td className="matrix-cell"><div className="cell-inner swap-none">-<div className="cell-tooltip"><div className="tooltip-pair">PART BLIND ↔ PIVX</div><div className="tooltip-badges"><span className="tooltip-badge">Not Compatible</span></div></div></div></td>
          <td className="matrix-cell"><div className="cell-inner swap-a">A<div className="cell-tooltip"><div className="tooltip-pair">PART BLIND ↔ WOW</div><div className="tooltip-badges"><span className="tooltip-badge">Adaptor Signature</span></div></div></div></td>
          <td className="matrix-cell"><div className="cell-inner swap-a">A<div className="cell-tooltip"><div className="tooltip-pair">PART BLIND ↔ XMR</div><div className="tooltip-badges"><span className="tooltip-badge">Adaptor Signature</span></div></div></div></td>
        </tr>
        <tr>
          <th className="row-label">PIVX</th>
          <td className="matrix-cell"><div className="cell-inner swap-mixed">A,H<div className="cell-tooltip"><div className="tooltip-pair">PIVX ↔ BTC</div><div className="tooltip-badges"><span className="tooltip-badge">Adaptor</span><span className="tooltip-badge">Hash</span></div></div></div></td>
          <td className="matrix-cell"><div className="cell-inner swap-none">-<div className="cell-tooltip"><div className="tooltip-pair">PIVX ↔ BCH</div><div className="tooltip-badges"><span className="tooltip-badge">Not Compatible</span></div></div></div></td>
          <td className="matrix-cell"><div className="cell-inner swap-h">H<div className="cell-tooltip"><div className="tooltip-pair">PIVX ↔ DASH</div><div className="tooltip-badges"><span className="tooltip-badge">Secret Hash</span></div></div></div></td>
          <td className="matrix-cell"><div className="cell-inner swap-mixed">A,H<div className="cell-tooltip"><div className="tooltip-pair">PIVX ↔ DCR</div><div className="tooltip-badges"><span className="tooltip-badge">Adaptor</span><span className="tooltip-badge">Hash</span></div></div></div></td>
          <td className="matrix-cell"><div className="cell-inner swap-none">-<div className="cell-tooltip"><div className="tooltip-pair">PIVX ↔ DOGE</div><div className="tooltip-badges"><span className="tooltip-badge">Not Compatible</span></div></div></div></td>
          <td className="matrix-cell"><div className="cell-inner swap-none">-<div className="cell-tooltip"><div className="tooltip-pair">PIVX ↔ FIRO</div><div className="tooltip-badges"><span className="tooltip-badge">Not Compatible</span></div></div></div></td>
          <td className="matrix-cell"><div className="cell-inner swap-mixed">A,H<div className="cell-tooltip"><div className="tooltip-pair">PIVX ↔ LTC</div><div className="tooltip-badges"><span className="tooltip-badge">Adaptor</span><span className="tooltip-badge">Hash</span></div></div></div></td>
          <td className="matrix-cell"><div className="cell-inner swap-mixed">A,H<div className="cell-tooltip"><div className="tooltip-pair">PIVX ↔ NMC</div><div className="tooltip-badges"><span className="tooltip-badge">Adaptor</span><span className="tooltip-badge">Hash</span></div></div></div></td>
          <td className="matrix-cell"><div className="cell-inner swap-mixed">A,H<div className="cell-tooltip"><div className="tooltip-pair">PIVX ↔ PART</div><div className="tooltip-badges"><span className="tooltip-badge">Adaptor</span><span className="tooltip-badge">Hash</span></div></div></div></td>
          <td className="matrix-cell"><div className="cell-inner swap-none">-<div className="cell-tooltip"><div className="tooltip-pair">PIVX ↔ PART ANON</div><div className="tooltip-badges"><span className="tooltip-badge">Not Compatible</span></div></div></div></td>
          <td className="matrix-cell"><div className="cell-inner swap-none">-<div className="cell-tooltip"><div className="tooltip-pair">PIVX ↔ PART BLIND</div><div className="tooltip-badges"><span className="tooltip-badge">Not Compatible</span></div></div></div></td>
          <td className="matrix-cell diagonal-cell"><div className="cell-inner">-</div></td>
          <td className="matrix-cell"><div className="cell-inner swap-none">-<div className="cell-tooltip"><div className="tooltip-pair">PIVX ↔ WOW</div><div className="tooltip-badges"><span className="tooltip-badge">Not Compatible</span></div></div></div></td>
          <td className="matrix-cell"><div className="cell-inner swap-none">-<div className="cell-tooltip"><div className="tooltip-pair">PIVX ↔ XMR</div><div className="tooltip-badges"><span className="tooltip-badge">Not Compatible</span></div></div></div></td>
        </tr>
        <tr>
          <th className="row-label">WOW</th>
          <td className="matrix-cell"><div className="cell-inner swap-a">A<div className="cell-tooltip"><div className="tooltip-pair">WOW ↔ BTC</div><div className="tooltip-badges"><span className="tooltip-badge">Adaptor Signature</span></div></div></div></td>
          <td className="matrix-cell"><div className="cell-inner swap-v">V<div className="cell-tooltip"><div className="tooltip-pair">WOW ↔ BCH</div><div className="tooltip-badges"><span className="tooltip-badge">VES Protocol</span></div></div></div></td>
          <td className="matrix-cell"><div className="cell-inner swap-none">-<div className="cell-tooltip"><div className="tooltip-pair">WOW ↔ DASH</div><div className="tooltip-badges"><span className="tooltip-badge">Not Compatible</span></div></div></div></td>
          <td className="matrix-cell"><div className="cell-inner swap-a">A<div className="cell-tooltip"><div className="tooltip-pair">WOW ↔ DCR</div><div className="tooltip-badges"><span className="tooltip-badge">Adaptor Signature</span></div></div></div></td>
          <td className="matrix-cell"><div className="cell-inner swap-none">-<div className="cell-tooltip"><div className="tooltip-pair">WOW ↔ DOGE</div><div className="tooltip-badges"><span className="tooltip-badge">Not Compatible</span></div></div></div></td>
          <td className="matrix-cell"><div className="cell-inner swap-none">-<div className="cell-tooltip"><div className="tooltip-pair">WOW ↔ FIRO</div><div className="tooltip-badges"><span className="tooltip-badge">Not Compatible</span></div></div></div></td>
          <td className="matrix-cell"><div className="cell-inner swap-a">A<div className="cell-tooltip"><div className="tooltip-pair">WOW ↔ LTC</div><div className="tooltip-badges"><span className="tooltip-badge">Adaptor Signature</span></div></div></div></td>
          <td className="matrix-cell"><div className="cell-inner swap-a">A<div className="cell-tooltip"><div className="tooltip-pair">WOW ↔ NMC</div><div className="tooltip-badges"><span className="tooltip-badge">Adaptor Signature</span></div></div></div></td>
          <td className="matrix-cell"><div className="cell-inner swap-a">A<div className="cell-tooltip"><div className="tooltip-pair">WOW ↔ PART</div><div className="tooltip-badges"><span className="tooltip-badge">Adaptor Signature</span></div></div></div></td>
          <td className="matrix-cell"><div className="cell-inner swap-none">-<div className="cell-tooltip"><div className="tooltip-pair">WOW ↔ PART ANON</div><div className="tooltip-badges"><span className="tooltip-badge">Not Compatible</span></div></div></div></td>
          <td className="matrix-cell"><div className="cell-inner swap-a">A<div className="cell-tooltip"><div className="tooltip-pair">WOW ↔ PART BLIND</div><div className="tooltip-badges"><span className="tooltip-badge">Adaptor Signature</span></div></div></div></td>
          <td className="matrix-cell"><div className="cell-inner swap-none">-<div className="cell-tooltip"><div className="tooltip-pair">WOW ↔ PIVX</div><div className="tooltip-badges"><span className="tooltip-badge">Not Compatible</span></div></div></div></td>
          <td className="matrix-cell diagonal-cell"><div className="cell-inner">-</div></td>
          <td className="matrix-cell"><div className="cell-inner swap-none">-<div className="cell-tooltip"><div className="tooltip-pair">WOW ↔ XMR</div><div className="tooltip-badges"><span className="tooltip-badge">Not Compatible</span></div></div></div></td>
        </tr>
        <tr>
          <th className="row-label">XMR</th>
          <td className="matrix-cell"><div className="cell-inner swap-a">A<div className="cell-tooltip"><div className="tooltip-pair">XMR ↔ BTC</div><div className="tooltip-badges"><span className="tooltip-badge">Adaptor Signature</span></div></div></div></td>
          <td className="matrix-cell"><div className="cell-inner swap-v">V<div className="cell-tooltip"><div className="tooltip-pair">XMR ↔ BCH</div><div className="tooltip-badges"><span className="tooltip-badge">VES Protocol</span></div></div></div></td>
          <td className="matrix-cell"><div className="cell-inner swap-none">-<div className="cell-tooltip"><div className="tooltip-pair">XMR ↔ DASH</div><div className="tooltip-badges"><span className="tooltip-badge">Not Compatible</span></div></div></div></td>
          <td className="matrix-cell"><div className="cell-inner swap-a">A<div className="cell-tooltip"><div className="tooltip-pair">XMR ↔ DCR</div><div className="tooltip-badges"><span className="tooltip-badge">Adaptor Signature</span></div></div></div></td>
          <td className="matrix-cell"><div className="cell-inner swap-none">-<div className="cell-tooltip"><div className="tooltip-pair">XMR ↔ DOGE</div><div className="tooltip-badges"><span className="tooltip-badge">Not Compatible</span></div></div></div></td>
          <td className="matrix-cell"><div className="cell-inner swap-none">-<div className="cell-tooltip"><div className="tooltip-pair">XMR ↔ FIRO</div><div className="tooltip-badges"><span className="tooltip-badge">Not Compatible</span></div></div></div></td>
          <td className="matrix-cell"><div className="cell-inner swap-a">A<div className="cell-tooltip"><div className="tooltip-pair">XMR ↔ LTC</div><div className="tooltip-badges"><span className="tooltip-badge">Adaptor Signature</span></div></div></div></td>
          <td className="matrix-cell"><div className="cell-inner swap-a">A<div className="cell-tooltip"><div className="tooltip-pair">XMR ↔ NMC</div><div className="tooltip-badges"><span className="tooltip-badge">Adaptor Signature</span></div></div></div></td>
          <td className="matrix-cell"><div className="cell-inner swap-a">A<div className="cell-tooltip"><div className="tooltip-pair">XMR ↔ PART</div><div className="tooltip-badges"><span className="tooltip-badge">Adaptor Signature</span></div></div></div></td>
          <td className="matrix-cell"><div className="cell-inner swap-none">-<div className="cell-tooltip"><div className="tooltip-pair">XMR ↔ PART ANON</div><div className="tooltip-badges"><span className="tooltip-badge">Not Compatible</span></div></div></div></td>
          <td className="matrix-cell"><div className="cell-inner swap-a">A<div className="cell-tooltip"><div className="tooltip-pair">XMR ↔ PART BLIND</div><div className="tooltip-badges"><span className="tooltip-badge">Adaptor Signature</span></div></div></div></td>
          <td className="matrix-cell"><div className="cell-inner swap-none">-<div className="cell-tooltip"><div className="tooltip-pair">XMR ↔ PIVX</div><div className="tooltip-badges"><span className="tooltip-badge">Not Compatible</span></div></div></div></td>
          <td className="matrix-cell"><div className="cell-inner swap-none">-<div className="cell-tooltip"><div className="tooltip-pair">XMR ↔ WOW</div><div className="tooltip-badges"><span className="tooltip-badge">Not Compatible</span></div></div></div></td>
          <td className="matrix-cell diagonal-cell"><div className="cell-inner">-</div></td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<div className="categories-section">
  <h2 className="categories-title">Coin Categories</h2>
  <div className="categories-grid">
    <div className="category-card" style={{'--cat-color': '#3B82F6'}}>
      <div className="category-header">
        <h3 className="category-title">Scriptless</h3>
      </div>
      <div className="category-coins">XMR · WOW · PART_ANON · FIRO · DOGE</div>
      <p className="category-desc">
        Require adaptor signatures. Lack native scripting but participate through advanced cryptographic protocols. Cannot swap with other scriptless coins.
      </p>
    </div>

    <div className="category-card" style={{'--cat-color': '#3B82F6'}}>
      <div className="category-header">
        <h3 className="category-title">Adaptor-Only</h3>
      </div>
      <div className="category-coins">PART_BLIND · BCH</div>
      <p className="category-desc">
        Exclusively use adaptor signatures. Can swap with scriptless and regular coins. Require Segwit in counterparty coins.
      </p>
    </div>

    <div className="category-card" style={{'--cat-color': '#3B82F6'}}>
      <div className="category-header">
        <h3 className="category-title">No-Segwit</h3>
      </div>
      <div className="category-coins">PIVX · DASH</div>
      <p className="category-desc">
        Support both secret hash and adaptor signatures with compatible coins. Cannot swap with scriptless coins. Adaptor swaps not possible between no-segwit coins.
      </p>
    </div>

    <div className="category-card" style={{'--cat-color': '#3B82F6'}}>
      <div className="category-header">
        <h3 className="category-title">Regular</h3>
      </div>
      <div className="category-coins">PART · BTC · LTC · DCR · NMC</div>
      <p className="category-desc">
        Maximum flexibility with both adaptor signatures and secret hash swaps. Adapt to counterparty coin requirements automatically.
      </p>
    </div>
  </div>
</div>

</div>
