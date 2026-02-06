"use client";

import { useState } from "react";

export default function Controls() {
  const [spread, setSpread] = useState(0.2);

  async function startMarketMaker() {
    await fetch("/api/market-maker", {
      method: "POST",
      body: JSON.stringify({ spread }),
    });
  }

  return (
    <section className="controls">
      <label>
        Spread (%)
        <input
          type="number"
          value={spread}
          step="0.1"
          onChange={(e) => setSpread(Number(e.target.value))}
        />
      </label>

      <button onClick={startMarketMaker}>Start Market Maker</button>
    </section>
  );
}
