import { useCount } from "./use-count";

export const Counter = () => {
  const { count, increment, decrement } = useCount();

  return (
    <div>
      <button onClick={increment}>+</button>
      {count}
      <button onClick={decrement}>-</button>
    </div>
  );
};
