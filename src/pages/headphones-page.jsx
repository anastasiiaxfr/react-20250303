import { Tabs } from "../components/tabs/tabs";
import { Outlet } from "react-router";
import { useGetHeadphonesQuery } from "../redux/services/api";
import { TabLink } from "../components/tab-link/tab-link";

export const HeadphonesPage = () => {
  const { data, isLoading, isError } = useGetHeadphonesQuery();

  if (isLoading) {
    return "loading...";
  }

  if (isError) {
    return "ERROR";
  }

  return (
    <div>
      <h1>Headphones Page</h1>

      <Tabs>
        {data.map(({ id, name }) => (
          <TabLink key={id} to={`/headphones/${id}`}>
            {name}
          </TabLink>
        ))}
      </Tabs>

      <Outlet />
    </div>
  );
};
