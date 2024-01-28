import "./globals.css";
export const metadata = {
  title: "Project Nirvoya",
  description: "Find your finest look!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
