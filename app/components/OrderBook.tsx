import { Order } from "@/types/market";

const mockBids: Order[] = [
  { price: 99.8, size: 10 },
  { price: 99.5, size: 15 },
];

const mockAsks: Order[] = [
  { price: 100.2, size: 8 },
  { price: 100.6, size: 12 },
];

export default function OrderBook() {
  return (
    <section className="orderbook">
      <div>
        <h3>Bids</h3>
        {mockBids.map((b, i) => (
          <div key={i}>
            {b.price} × {b.size}
          </div>
        ))}
      </div>

      <div>
        <h3>Asks</h3>
        {mockAsks.map((a, i) => (
          <div key={i}>
            {a.price} × {a.size}
          </div>
        ))}
      </div>
    </section>
  );
}
