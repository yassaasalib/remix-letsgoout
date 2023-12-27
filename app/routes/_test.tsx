import { Outlet } from "@remix-run/react";
import Footer from "~/components/Footer";
import Header from "~/components/Header";
import appStyles from "~/styles/index.css";
// import Button, { links as buttonLinks } from "~/components/Button";
import { LinksFunction } from "@remix-run/node";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: appStyles }];
};

export default function MktLayout() {
    return (
      <>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </>
    );
  }