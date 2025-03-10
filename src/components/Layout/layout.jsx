import { Header } from "../Header/header";

export const Layout = ({ children, sideBar }) => {
  return (
    <div>
      <meta name='description' content='react app' />
      <Header />
      {sideBar}
      <section>{children}</section>
      <footer>footer</footer>
    </div>
  );
};
