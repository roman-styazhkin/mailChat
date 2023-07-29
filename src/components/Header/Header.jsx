import Title from "../UI/Title/Title";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.root}>
      <div className={styles.root__title}>
        <Title>Great Project</Title>
      </div>
    </header>
  );
};

export default Header;
