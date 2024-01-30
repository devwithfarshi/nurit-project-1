import "./globals.css";
import Navbar from "./components/Navbar";
export const metadata = {
  title: "Project Nirvoya",
  description: "Find your finest look!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
