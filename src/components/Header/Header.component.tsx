import LogoWhiteComponent from "../Logo/LogoWhite.component";
import styles from "./Header.module.scss";

export default function HeaderComponent(){
    return(
        <header>
            <div className={styles.logo}>
                <LogoWhiteComponent width={"180px"} height={"50px"}/>
            </div>
        </header>
    )
}