import Header from "@/components/Header";
import OrderBook from "@/components/OrderBook";
import Controls from "@/components/Controls";

export default function Home() {
  return (
    <main className="container">
      <Header />
      <Controls />
      <OrderBook />
    </main>
  );
}
