import { Footer } from "../footer/footer";
import { Header } from "../header/header";
import { ProgressBar } from "../progress-bar/progress-bar";
import { ToggleTheme } from "../toggle-theme/toggle-theme";

export const Layout = ({ children, sidebar }) => {
  return (
    <div>
      <ToggleTheme />
      <ProgressBar />
      <Header />
      {children}
      <Footer />
    </div>
  );
};
