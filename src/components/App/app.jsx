import { HeadphonesPage } from "../headphones-page/headphones-page";
import { Layout } from "../layout/layout";

import "./app.css";
import { ThemeContext } from "../theme-context/theme-context";

export const App = () => {
  return (
    <ThemeContext>
      <Layout sidebar={<div />}>
        <HeadphonesPage title='headphones app' />
      </Layout>
    </ThemeContext>
  );
};
