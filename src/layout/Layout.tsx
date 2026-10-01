import { type ReactNode } from "react";
import Footer from "./footer/Footer";
import Main from "./main/Main";
import Sidebar from "./sidebar/Sidebar";

function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      {/* ה-Sidebar מוצג אך ורק כשהמשתמש מחובר */}
      {<Sidebar />}

      <Main>{children}</Main>

      <Footer />
    </>
  );
}

export default Layout;
