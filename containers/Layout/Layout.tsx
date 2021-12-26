import type { NextPage } from "next";

import Header from "../../common/Header";
import Footer from "../../common/Footer";
import layoutStyles from "./Layout.module.scss";

const Layout: NextPage = ({ children }) => (
  <div className={layoutStyles.container}>
    <Header />
    <main className={layoutStyles.main}>{children}</main>
    <Footer />
  </div>
);

export default Layout;
