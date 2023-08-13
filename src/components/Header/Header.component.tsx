import BellIconComponent from "../BellIcon/Bell.component";
import LogoWhiteComponent from "../Logo/LogoWhite.component";
import SearchBoxComponent from "../SearchBox/SearchBox.component";
import UserIconComponent from "../UserIcon/UserIcon.compoenent";
import styles from "./Header.module.scss";

export default function HeaderComponent(){
    return(
        <header>
            <div className={styles.logo}>
                <LogoWhiteComponent width={"180px"} height={"50px"}/>
            </div>
            <SearchBoxComponent/>
            <div className={styles.iconsBox}>
               <BellIconComponent/>
               <UserIconComponent/> 
            </div>
            <div className={styles.responsiveMenuIcon}>
                <i class="bi bi-menu-up"></i>
            </div>
        </header>
    )
}