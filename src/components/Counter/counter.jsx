import styles from "./counter.module.css";
import { Button } from "../button/button";
import { useEffect } from "react";

export const Counter = ({ value, increment, decrement }) => {
  return (
    <div>
      <Button title='+' onClick={increment} size='400' />
      <span className={styles.count}>{value}</span>
      <Button title='-' onClick={decrement} size='400' />
    </div>
  );
};
