import style from "./Carousel.module.scss";

export default function CarouselComponent() {
    return (
        <div className={style.carousel}>
            <div className={style.carouselContainer}>

                <div className={style.carouselControls}>
                    <button className="control-button previous" onClick={() => { }}></button>
                </div>

                <p>Carrossel</p>

                <div className={style.carouselControls}>
                    <button className="control-button next" onClick={() => { }}></button>
                </div>
            </div>
        </div>
    );
}