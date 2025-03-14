---
sidebar_position: 0
title: Documentation Style Guide
description: "Style guide for BasicSwap DEX documentation"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import React, { useEffect } from 'react';

# Documentation Style Guide

This guide demonstrates the styling elements used throughout the BasicSwap documentation.

## Section Headers

Use `##` for major sections and `###` for subsections.

## Tabbed Content

Use tabs to separate platform-specific instructions:

### Basic Tabs

<Tabs>
  <TabItem value="windows" label="Windows" default>
    <div style={{padding: '1.5rem', background: 'linear-gradient(135deg, #3b82f6, #1e40af)', color: 'white', borderRadius: '8px', marginBottom: '1rem'}}>
      <h3>Windows .exe Installer</h3>
      <p>Install BasicSwap on Windows effortlessly with a graphical installation wizard:</p>
      <ol>
        <li>Download the .exe installer from <a href="https://github.com/example/basicswap/releases" style={{color: 'white', textDecoration: 'underline'}}>GitHub</a></li>
        <li><strong>Run the installer as administrator</strong> (right-click → Run as administrator)</li>
        <li>Follow the on-screen instructions to complete the installation</li>
      </ol>
      <p>This intuitive installer streamlines the setup process via an easy-to-navigate menu.</p>
    </div>
  </TabItem>
  <TabItem value="linux" label="Linux">
    <div style={{padding: '1.5rem', background: 'linear-gradient(135deg, #3b82f6, #1e40af)', color: 'white', borderRadius: '8px', marginBottom: '1rem'}}>
      <h3>Linux Scripts Suite</h3>
      <p>For Linux users, the simplest installation method is through community-developed scripts:</p>
      <ol>
        <li>Download the scripts from GitHub</li>
        <li>Make the script executable:</li>
      </ol>
      
      ```bash title="Terminal"
      chmod +x basicswap-install.sh
      ```
      
      <ol start="3">
        <li>Run the installation script:</li>
      </ol>
      
      ```bash title="Terminal"
      ./basicswap-install.sh
      ```
    </div>
  </TabItem>
  <TabItem value="macos" label="macOS">
    <div style={{padding: '1.5rem', background: 'linear-gradient(135deg, #3b82f6, #1e40af)', color: 'white', borderRadius: '8px', marginBottom: '1rem'}}>
      <h3>macOS Installation</h3>
      <p>Install BasicSwap on macOS using the command line:</p>
      <ol>
        <li>Open Terminal</li>
        <li>Install dependencies using Homebrew:</li>
      </ol>
      
      ```bash title="Terminal"
      brew install python git gnupg pkg-config jq
      ```
    </div>
  </TabItem>
</Tabs>

### Tabs with Default Value

You can specify a default tab using the `defaultValue` prop:

<Tabs
  defaultValue="linux"
  values={[
    {label: 'Windows', value: 'windows'},
    {label: 'Linux', value: 'linux'},
    {label: 'macOS', value: 'macos'},
  ]}>
  <TabItem value="windows">
    ```bash title="Windows Command Prompt"
    basicswap-run.exe --datadir=%USERPROFILE%\coinswaps
    ```
  </TabItem>
  <TabItem value="linux">
    ```bash title="Linux Terminal"
    basicswap-run --datadir=$HOME/coinswaps
    ```
  </TabItem>
  <TabItem value="macos">
    ```bash title="macOS Terminal"
    basicswap-run --datadir=$HOME/coinswaps
    ```
  </TabItem>
</Tabs>

### Syncing Tab Choices

Tabs with the same `groupId` will sync their selections:

<Tabs groupId="operating-systems">
  <TabItem value="windows" label="Windows">
    ```bash title="Windows Command Prompt"
    dir
    ```
  </TabItem>
  <TabItem value="unix" label="Unix/macOS">
    ```bash title="Terminal"
    ls -la
    ```
  </TabItem>
</Tabs>

<Tabs groupId="operating-systems">
  <TabItem value="windows" label="Windows">
    ```bash title="Windows Command Prompt"
    copy source.txt destination.txt
    ```
  </TabItem>
  <TabItem value="unix" label="Unix/macOS">
    ```bash title="Terminal"
    cp source.txt destination.txt
    ```
  </TabItem>
</Tabs>

### Tabs with Query String

You can persist tab selection in the URL using the `queryString` prop:

<Tabs queryString="wallet-type">
  <TabItem value="hot" label="Hot Wallet">
    A hot wallet is connected to the internet and allows for quick transactions.
    
    ```bash
    basicswap-run --hotwallet
    ```
  </TabItem>
  <TabItem value="cold" label="Cold Wallet">
    A cold wallet is kept offline for maximum security.
    
    ```bash
    basicswap-run --coldwallet
    ```
  </TabItem>
</Tabs>

## Code Blocks

### Simple Command

```bash title="Terminal"
basicswap-run --datadir=$SWAP_DATADIR
```

### Multi-line Commands

```bash title="Terminal" showLineNumbers
export SWAP_DATADIR=$HOME/coinswaps
python3 -m venv "$SWAP_DATADIR/venv"
. $SWAP_DATADIR/venv/bin/activate && python3 -V
```

### Code with Highlighting

```javascript title="example.js" showLineNumbers {2,4-6}
function exampleFunction(param) {
  // This line is highlighted
  const value = param * 2;
  if (value > 10) {
    console.log('Value is greater than 10');
    return value;
  }
  return 'Value is less than or equal to 10';
}
```

You can also use comments to highlight specific lines:

```javascript title="highlight-example.js"
function highlightDemo() {
  // highlight-next-line
  const highlightedLine = 'This line will be highlighted';
  
  // highlight-start
  const multipleLines = [
    'All these lines',
    'will be highlighted',
    'together as a block'
  ];
  // highlight-end
  
  return { highlightedLine, multipleLines };
}
```

## Admonitions

### Standard Note

:::note

This is a standard note for providing additional information or tips to the user.

:::

### Tip

:::tip

Here's a helpful tip to improve your workflow when using BasicSwap.

:::

### Info

:::info

Important information about BasicSwap functionality and features.

:::

### Warning

:::warning

This is a warning message used to highlight important information that requires immediate attention.

:::

### Danger

:::danger

Critical information about actions that could cause data loss or security issues.

:::

## Additional Resources

:::info Additional Resources

For more information, check out these resources:
- [Example Documentation Link](/docs/example-link)
- [Another Documentation Link](/docs/another-link)

:::

## Multi-language Code Examples

<Tabs>
<TabItem value="js" label="JavaScript">

```js
function helloWorld() {
  console.log('Hello, world!');
}
```

</TabItem>
<TabItem value="py" label="Python">

```py
def hello_world():
  print("Hello, world!")
```

</TabItem>
<TabItem value="java" label="Java">

```java
class HelloWorld {
  public static void main(String args[]) {
    System.out.println("Hello, World");
  }
}
```

</TabItem>
</Tabs>

## NPM/Yarn Commands

```bash npm2yarn
npm install @docusaurus/remark-plugin-npm2yarn
```

## Interactive Code Editor

```jsx live
function Clock(props) {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);

    return function cleanup() {
      clearInterval(timerID);
    };
  });

  function tick() {
    setDate(new Date());
  }

  return (
    <div>
      <h2>It is {date.toLocaleTimeString()}.</h2>
    </div>
  );
}
