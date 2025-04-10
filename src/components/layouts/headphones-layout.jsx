import { Suspense } from "react";
import { HeadphonesTabsContainer } from "../headphones-tabs/headphones-tabs-container";

export const HeadphonesLayout = ({ children }) => {
  return (
    <div>
      <Suspense fallback='...loading'>
        <HeadphonesTabsContainer />
      </Suspense>
      {children}
    </div>
  );
};
