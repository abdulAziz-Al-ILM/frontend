import "./globals.css";

export const metadata = {
  title: "CyberStore",
  description: "Premium 3D E-commerce",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
