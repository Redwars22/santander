import style from "./AndrewNationBadge.module.scss";

interface IAndrew {
    mode: "light" | "dark"
}

export default function AndrewNationBadgeComponent(props: IAndrew) {
    return (
        <div className={props.mode === "light" ? 
                        style.badgeContainerLight : 
                        style.badgeContainerDark
        }>
            <i className="bi bi-github"></i>
            <p>
                Um projeto do AndrewNation
            </p>
        </div>
    )
}