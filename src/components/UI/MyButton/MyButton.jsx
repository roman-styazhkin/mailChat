import styles from "./MyButton.module.scss";

const MyButton = ({ props, backgroundImage, children }) => {
  return (
    <button
      className={styles.root}
      {...props}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {children}
    </button>
  );
};

export default MyButton;
