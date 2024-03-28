import styles from "./styles/MenuButton.module.css";

export default function MenuButton({ handleClick, isOpen }) {
  return (
    <div className={`${styles.hamburgerContainer}`} onClick={handleClick}>
      <span
        className={`${isOpen && styles.top + " " + styles.menuOpened}`}
      ></span>
      <span
        className={`${isOpen && styles.middle + " " + styles.menuOpened}`}
      ></span>
      <span
        className={`${isOpen && styles.bottom + " " + styles.menuOpened}`}
      ></span>
    </div>
  );
}
