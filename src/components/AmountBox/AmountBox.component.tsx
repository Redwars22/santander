import { useEffect, useState } from "react";
import IAmountDataModel from "../../model/amountDataModel";
import { getAccountData } from "../../modules/accountData";
import MoneyIconComponent from "../MoneyIcon/MoneyIcon.component";
import style from "./AmountBox.module.scss";

export default function AmountBoxComponent() {
    const [amountData, setAmountData] = useState<IAmountDataModel>({
        amountValue: 0,
        totalAmount: 0,
        limit: 0
    });

    useEffect(()=>{
        async function getAmountData(){
            const data = await getAccountData();

            setAmountData((s)=>({
                amountValue: data?.account?.balance,
                totalAmount: data?.account?.limit,
                limit: data?.account?.balance + data?.account?.limit
            }))
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