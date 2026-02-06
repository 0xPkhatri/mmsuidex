import "./globals.css";

export const metadata = {
  title: "Sui Order Book Market Maker",
  description: "ETHGlobal project – Order-book-based market maker on Sui",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
