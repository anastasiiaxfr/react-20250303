import { Tabs } from "../components/tabs/tabs";
import { useDispatch, useSelector } from "react-redux";
import {
  selectHeadphonesIds,
  // selectRequestStatus,
} from "../redux/entities/headphones/slice";
import { HeadphoneTabContainer } from "../components/headphone-tab/headphone-tab-container";
import { Outlet } from "react-router";
import { useEffect } from "react";
import { getHeadphones } from "../redux/entities/headphones/get-headhones";
import { useRequest } from "../redux/hooks/use-request";

export const HeadphonesPage = () => {
  const requestStatus = useRequest(getHeadphones);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getHeadphones());
  // }, [dispatch]);

  const headphonesIds = useSelector(selectHeadphonesIds);
  // const requestStatus = useSelector(selectRequestStatus);

  if (requestStatus === "idle" || requestStatus === "pending") {
    return "loading...";
  }

  if (requestStatus === "rejected") {
    return "error";
  }

  return (
    <div>
      <h1>Headphones Page</h1>

      <Tabs>
        {headphonesIds.map((id) => (
          <HeadphoneTabContainer key={id} id={id} />
        ))}
      </Tabs>

      <Outlet />
    </div>
  );
};
