import { HeadphonesPage } from "../headphones-page/headphones-page";
import { Layout } from "../layout/layout";

import "./reset.css";
import "./app.css";
import { ThemeContextProvider } from "../theme-context/theme-context";
import { AuthContextProvider } from "../auth-context/auth-context";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import { BrowserRouter, Navigate, Outlet, Route, Routes } from "react-router";
import { HomePage } from "../../pages/home-page";
import { HeadphonePage } from "../../pages/headphone-page";

export const App = () => {
  return (
    <Provider store={store}>
      <AuthContextProvider>
        <ThemeContextProvider>
          <BrowserRouter>
            <Routes>
              <Route element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path='/headphones' element={<HeadphonesPage />}>
                  <Route path=':headphoneId' element={<HeadphonePage />} />
                </Route>
              </Route>
              <Route
                path='about'
                element={
                  <div>
                    about - <Outlet />
                  </div>
                }
              >
                <Route path='*' element={<div>not found about</div>} />
              </Route>
              {/* <Route path='*' element={<div>not found</div>} /> */}
              <Route path='*' element={<Navigate to='/' replace />} />
            </Routes>
          </BrowserRouter>
        </ThemeContextProvider>
      </AuthContextProvider>
    </Provider>
  );
};
