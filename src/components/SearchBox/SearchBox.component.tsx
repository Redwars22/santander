import SearchIconComponent from "../SearchIcon/SearchIcon.component";
import style from "./SearchBox.module.scss";

export default function SearchBox() {
    return (
        <div className={style.searchBox}>
            <div className={style.searchBoxText}>
                <input type="text" id="search-box-input" placeholder="Digite aqui sua busca" />
                <SearchIconComponent/>
            </div>
        </div>
    )
}