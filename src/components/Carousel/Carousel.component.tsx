import { useEffect, useState } from "react";
import { IFeaturesDataModel } from "../../model/featuresDataModel";
import { getFeatures } from "../../modules/features";
import style from "./Carousel.module.scss";

export default function CarouselComponent() {
    const [items, setItems] = useState<IFeaturesDataModel[]>([]);
    const [visibleItems, setVisibleItems] = useState<IFeaturesDataModel[]>([]);
    let activeIndex: number = 0;

    const updateVisibleItems = () => {
        setVisibleItems(
            items.slice(activeIndex, activeIndex + 4));
    }

    const moveLeft = async () => {
        if (activeIndex > 0) {
            activeIndex--;
            updateVisibleItems();
        }
    }

    const moveRight = () => {
        if (activeIndex < items.length - 3) {
            activeIndex++;
            updateVisibleItems();
        }
    }

    useEffect(() => {
        async function getFeatureCards() {
            const data = await getFeatures();

            setItems(data);
            updateVisibleItems();
        }

        getFeatureCards();
    });

    return (
        <div className={style.carouselSection}>
            <div className={style.carouselContainer}>

                <div className={style.carouselControls}>
                    <button className={`${style.controlButton} ${style.previous}`} onClick={() => moveLeft()}></button>
                </div>


                {items!.length > 0 ? <div className={style.carousel}>{visibleItems!.map((i) =>
                    <div className={style.carouselItem}>
                        <div className={style.square}>
                            <img src={i.icon} alt={i.description} />
                            <p>{i.description}</p>
                        </div>
                    </div>
                )}</div> : <></>}

                <div className={style.carouselControls}>
                    <button className={`${style.controlButton} ${style.next}`} onClick={() => moveRight()}></button>
                </div>
            </div>
        </div>
    );
}