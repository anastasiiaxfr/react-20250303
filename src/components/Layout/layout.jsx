import { Footer } from "../footer/footer";
import { Header } from "../header/header";
import { ProgressBar } from "../progress-bar/progress-bar";
import { CartContainer } from "../cart/cart-container";

import styles from "./layout.module.css";
import { Outlet } from "react-router";

export const Layout = () => {
  return (
    <div className={styles.root}>
      <ProgressBar />
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
      <CartContainer />
      <Footer />
    </div>
  );
};
