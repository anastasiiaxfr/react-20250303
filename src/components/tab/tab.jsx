import { Button } from "../button/button";

import styles from "./tab.module.css";

export const Tab = ({ title, onClick, isActive }) => {
  return (
    <Button disabled={isActive} onClick={onClick} className={styles.tab}>
      {title}
    </Button>
  );
};
