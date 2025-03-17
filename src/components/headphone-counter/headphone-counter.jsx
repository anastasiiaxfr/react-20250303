import { useEffect } from "react";
import { Counter } from "../counter/counter";
import { useCount } from "./use-counter";

export const HeadphoneCounter = () => {
  const { value, increment, decrement } = useCount();

  // useEffect(() => {
  //   console.log("mount");

  //   return () => {
  //     console.log("unmount");
  //   };
  // }, []);

  // useEffect(() => {
  //   const onScroll = () => {
  //     console.log("scroll");
  //   };

  //   window.addEventListener("scroll", onScroll);

  //   return () => {
  //     window.removeEventListener("sroll", onScroll);
  //   };
  // }, []);

  console.log("rerender");

  useEffect(() => {
    console.log(`effect - ${value}`);

    return () => {
      console.log(`cleanup - ${value}`);
    };
  }, [value]);

  useEffect(() => {
    increment();
  }, [increment]);

  return <Counter value={value} increment={increment} decrement={decrement} />;
};
