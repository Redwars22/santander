import AmountBoxComponent from "../../components/AmountBox/AmountBox.component";
import CardComponent from "../../components/Card/Card.component";
import HeaderComponent from "../../components/Header/Header.component";
import style from "../styles/Home.module.scss";

export default function Home(){
    return(
        <>
            <HeaderComponent/>
            <div className={style.contentContainer}>
                <div className={style.cardsBoxes}>
                    <div className={style.contentCard}>
                        <CardComponent/>
                    </div>
                    <div className={style.contentCard}>
                        <AmountBoxComponent/>
                    </div>
                </div>
                <div className={style.carousel}></div>
            </div>
        </>
    )
}