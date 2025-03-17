import { useState, useCallback } from "react";

export const useCount = ({ min = 0, max = 5 } = {}) => {
  const [value, setValue] = useState(min);

  const increment = useCallback(() => {
    return () => setValue((count) => Math.min(count + 1, max));
  }, [max]);

  const decrement = useCallback(() => {
    return () => setValue((count) => Math.max(count - 1, min));
  }, [min]);

  return {
    value,
    increment,
    decrement,
  };
};
