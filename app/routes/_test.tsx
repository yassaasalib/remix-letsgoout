import { Outlet } from "@remix-run/react";
import Footer from "~/components/Footer";
import Header from "~/components/Header";

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