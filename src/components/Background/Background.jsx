import styles from "./Background.module.css";

function Background() {
  return (
    <div>
      <div className={styles.purpleBlur} />
      <div className={styles.blueBlur} />
    </div>
  );
}

export default Background;
