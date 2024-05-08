import "@/assets/css/globals.scss";
import NavBar from "@/components/partials/Navbar";

export const metadata = {
  title: "Andre portfolio",
  description: "AAAAA",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
