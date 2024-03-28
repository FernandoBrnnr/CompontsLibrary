import styles from "./styles/SideBar.module.css";

export default function SideBar({ isOpen }) {
    console.log(isOpen)
  return (

    <aside className={`${styles.container} ${isOpen && styles.showNavBar}`}>
      {isOpen}
    </aside>
  );
}
