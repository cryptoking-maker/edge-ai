export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      background: "#06100c",
      color: "#ffffff",
      fontFamily: "Arial, sans-serif",
      textAlign: "center",
      padding: "40px 20px"
    }}>
      <header style={{
        color: "#00cf96",
        fontWeight: "bold",
        fontSize: "24px",
        textAlign: "left"
      }}>
        EDGE-AI
      </header>

      <section style={{ padding: "100px 0 60px" }}>
        <p style={{ color: "#00cf96", letterSpacing: "3px" }}>
          YOUR TRADING ANALYSIS
        </p>
        <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>
          Read the Market.<br />
          <span style={{ color: "#00cf96" }}>Find Your Edge.</span>
        </h1>
        <p style={{ color: "#a1aab8", lineHeight: "1.6" }}>
          Explore charts, rule-based signals, and estimated liquidity
          levels for BTC, ETH, and PAXG.
        </p>
        <p style={{ color: "#a1aab8", marginTop: "40px" }}>
          Login and analysis tools are coming soon.
        </p>
      </section>

      <footer style={{ color: "#a1aab8", fontSize: "14px" }}>
        For educational purposes only. Not financial advice.
      </footer>
    </main>
  );
                     }
