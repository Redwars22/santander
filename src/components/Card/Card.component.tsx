import { useState, useEffect } from "react";
import { IAccountDataModel } from "../../model/accountDataModel";
import { getAccountData } from "../../modules/accountData";
import LogoWhiteComponent from "../Logo/LogoWhite.component";
import style from "./Card.module.scss";

export default function CardComponent() {
    const [accountData, setAccountData] = useState<IAccountDataModel>({
        name: "Darth Vader",
        account: {
            agency: "0002",
            number: "00.000000-0",
        },
        card: {
            limit: 0,
            number: "0000"
        }
    });

    useEffect(()=>{
        async function getData(){
            const data = await getAccountData();
            setAccountData((s) => ({
                ...s,
                name: data?.name,
                account: {
                    ...s.account,
                    agency: data?.account?.agency,
                    number: data?.account?.number
                },
                card: {
                    ...s.card,
                    limit: data?.card?.limit,
                    number: data?.card?.number
                }
            }))
        }

        getData();
    })

    return (
        <div className={`${style.cardContainer} ${style.shadowBox}`}>
            <div className={style.cardLogo}>
                <LogoWhiteComponent width="120px" height="auto" />
            </div>

            <div className={style.cardMiddle}>
                <img src="../../assets/chip.png" alt="" width="60px" />
                <div className={style.cardNumber}>
                    <p>{accountData.card.number}</p>
                </div>
            </div>

            <div className={style.cardFooter}>
                <p>Olá, {accountData.name}</p>
                <p>Ag {accountData.account.agency}</p>
                <p>CC {accountData.account.number}</p>
            </div>

            <div className={style.cardLimit}>
                <p>Limite: {accountData.card.limit}</p>
            </div>
        </div>
    )
}