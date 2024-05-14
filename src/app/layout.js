import "@/assets/css/globals.scss";
import Loading from "@/components/UI/Loading";
import NavBar from "@/components/partials/Navbar";

export const metadata = {
  title: "Andre portfolio",
  description: "AAAAA",
};

export default function RootLayout({ children, isLoading }) {
  return (
    <html lang="en">
      <body>
        {children}
        <NavBar />
      </body>
    </html>
  );
}
