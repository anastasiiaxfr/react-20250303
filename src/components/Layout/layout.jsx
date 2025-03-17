import { Footer } from "../footer/footer";
import { Header } from "../header/header";
import { Timer } from "../timer/timer";

export const Layout = ({ children }) => {
  return (
    <div>
      <Timer />
      <Header />
      {children}
      <Footer />
    </div>
  );
};
