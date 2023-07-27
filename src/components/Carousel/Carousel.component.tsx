import { useEffect, useState } from "react";
import { getFeatures } from "../../modules/features";
import style from "./Carousel.module.scss";

export default function CarouselComponent() {
    const [items, setItems] = useState();

    useEffect(()=>{
        async function getFeatureCards(){
            const data = await getFeatures();

            console.log(data);
        }

        getFeatureCards();
    });
    
    return (
        <div className={style.carousel}>
            <div className={style.carouselContainer}>

                <div className={style.carouselControls}>
                    <button className={`${style.controlButton} ${style.previous}`} onClick={() => { }}></button>
                </div>

                <p>Carrossel</p>

                <div className={style.carouselControls}>
                    <button className={`${style.controlButton} ${style.next}`} onClick={() => { }}></button>
                </div>
            </div>
        </div>
    );
}