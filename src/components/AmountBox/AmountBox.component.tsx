import MoneyIconComponent from "../MoneyIcon/MoneyIcon.component";
import style from "./AmountBox.module.scss";

export default function AmountBoxComponent() {
    return (
        <div className={`${style.amountBoxContainer} shadow-box`}>

            <div className={style.amoutTitle}>
                <MoneyIconComponent />
                <p>Saldo disponível</p>
            </div>

            <div className={style.amountCardMiddle}>
                <p className={style.amountValue}>R$ 0.00</p>
                <div className={style.divider}></div>
                <p className={style.amountTotal}>Saldo + Limite: 0</p>
            </div>

        </div>
    )
}