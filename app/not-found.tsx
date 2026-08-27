import Link from "next/link";

export default function NotFound() {
  return (
    <div style={{ minHeight: "100vh", display: "grid", placeItems: "center", padding: "2rem", textAlign: "center" }}>
      <div>
        <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>404 - Page Not Found</h1>
        <p style={{ marginBottom: "2rem", opacity: 0.8 }}>The page you are looking for does not exist.</p>
        <Link href="/" style={{ padding: "0.8rem 1.5rem", borderRadius: "999px", background: "var(--primary-color)", color: "#fff", textDecoration: "none" }}>
          Return Home
        </Link>
      </div>
    </div>
  );
}
