import styles from "./Time.module.scss";

const Time = ({ children }) => {
  return <div className={styles.root}>{children}</div>;
};

export default Time;
