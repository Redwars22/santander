import LogoWhiteComponent from "../Logo/LogoWhite.component";
import style from "./Card.module.scss";

export default function CardComponent(){
    return(
        <div className={`${style.cardContainer} ${style.shadowBox}`}>
            <div className={style.cardLogo}>
                <LogoWhiteComponent width="120px" height="auto"/>
            </div>

            <div className={style.cardMiddle}>
                <img src="../../assets/chip.png" alt="" width="60px"/>
                <div>
                    <p>XXXX</p>
                    <p>XXXX</p>
                    <p>XXXX</p>
                    <p>1111</p>
                </div>
            </div>

            <div className={style.cardFooter}>
                <p>Olá, Andrew</p>
                <p>Ag 000</p>
                <p>CC 1111111111</p>
            </div>

            <div className={style.cardLimit}>
                <p>Limite: 10000</p>
            </div>
        </div>
    )
}