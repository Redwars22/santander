import { useEffect, useState } from "react";
import IAmountDataModel from "../../model/amountDataModel";
import { getAccountData } from "../../modules/accountData";
import MoneyIconComponent from "../MoneyIcon/MoneyIcon.component";
import style from "./AmountBox.module.scss";

export default function AmountBoxComponent() {
    const [amountData, setAmountData] = useState<IAmountDataModel>();

    useEffect(()=>{
        async function getAmountData(){
            const data = await getAccountData();

            console.log(data)
        }

        getAmountData();
    })
    
    return (
        <div className={`${style.amountBoxContainer} shadow-box`}>

            <div className={style.amountTitle}>
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