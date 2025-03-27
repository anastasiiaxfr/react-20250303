import { useSelector } from "react-redux";
import { selectHeadphoneById } from "../../redux/entities/headphones/slice";
import { NavLink } from "react-router";
import classNames from "classnames";

import styles from "./headphone-tab.module.css";

export const HeadphoneTabContainer = ({ id }) => {
  const headhpone = useSelector((state) => selectHeadphoneById(state, id));

  if (!headhpone) {
    return;
  }

  return (
    <NavLink
      to={id}
      className={({ isActive }) => classNames(isActive && styles.isActive)}
    >
      {({ isActive }) => (isActive ? "active" : headhpone.name)}
    </NavLink>
  );
};
