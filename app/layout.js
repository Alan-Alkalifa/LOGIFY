import "./globals.css";

export const metadata = {
  title: "Reheal Massage",
  description: "What a great experience getting a very satisfying massage service",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-body">{children}</body>
    </html>
  );
}
