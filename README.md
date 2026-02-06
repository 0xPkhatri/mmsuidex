# 🧠 Sui Order Book Market Maker

An automated market maker built on **Sui’s native order book** using **limit orders**, designed to provide continuous, capital-efficient liquidity without relying on traditional AMM pricing curves.

---

## 🚩 Problem

Most decentralized liquidity today is dominated by **automated market makers (AMMs)**, which:

- Require large amounts of capital to minimize slippage
- Perform poorly in volatile or thin markets
- Do not leverage native order book infrastructure

On order-book–based blockchains like **Sui**, there is a gap in tooling for **autonomous market makers** that can continuously quote liquidity using limit orders.

---

## 💡 Solution

This project introduces an **order-book-based market maker** that:

- Programmatically places **bid and ask limit orders**
- Maintains a configurable spread around the mid-price
- Reacts to order fills by re-quoting liquidity
- Manages inventory exposure automatically

By providing liquidity **directly on the Sui order book**, the system enables better price discovery and improved capital efficiency compared to AMM-based designs.

---

## ⚙️ How It Works

1. Fetch the best bid and ask prices from the order book
2. Calculate the mid-price
3. Place symmetric limit orders around the mid-price
4. Monitor order fills and cancellations
5. Rebalance inventory and update open orders

The architecture supports:

- Dynamic spread adjustment based on market conditions
- Inventory and risk limits
- Extension to multiple trading pairs

---
