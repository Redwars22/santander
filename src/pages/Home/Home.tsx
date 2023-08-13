import AmountBoxComponent from "../../components/AmountBox/AmountBox.component";
import AndrewNationBadgeComponent from "../../components/AndrewNationBadge/AndrewNationBadge.component";
import CardComponent from "../../components/Card/Card.component";
import CarouselComponent from "../../components/Carousel/Carousel.component";
import HeaderComponent from "../../components/Header/Header.component";
import style from "../styles/Home.module.scss";

export default function Home(){
    return(
        <>
            <HeaderComponent/>
            
        </>
    )
}

/**
<div className={style.contentContainer}>
                <div className={style.cardsBoxers}>
                    <div className={style.contentCard}>
                        <CardComponent/>
                    </div>
                    <div className={style.contentCard}>
                        <AmountBoxComponent/>
                    </div>
                </div>
                <CarouselComponent/>
            </div>
            <AndrewNationBadgeComponent mode={"light"}/>
 */