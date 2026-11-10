export const metadata = {
  title: "EDGE-AI",
  description: "Trading analysis for crypto and gold-backed tokens.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
