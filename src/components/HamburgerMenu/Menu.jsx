import { useState } from "react";
import MenuButton from "./MenuButton";
import SideBar from "./SideBar";
import styles from './styles/Menu.module.css'

export default function Menu() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  
  function handleClick(){
    setIsSideBarOpen(prev => !prev);
  }

  return (
    <div className={styles.menuContainer}>
      <MenuButton handleClick={handleClick} isOpen={isSideBarOpen}/>
      <SideBar isOpen={isSideBarOpen} />
    </div>
  );
}
