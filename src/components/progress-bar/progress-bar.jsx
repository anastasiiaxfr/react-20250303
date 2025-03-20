import { useProgress } from "./use-progress";

import styles from "./progress-bar.module.css";

export const ProgressBar = () => {
  const progress = useProgress();

  return (
    <div
      className={styles.progress}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: "5px",
        backgroundColor: "green",
        width: progress,
      }}
    />
  );
};
