import comics from "../data/comics.js";
import style from "./ComicsRender.module.css";

function ComicsRender() {
  return (
    <div className={style.container}>
        <div className={style.jumbo}></div>
        <div className={style.Cardscontainer}>
        {comics.map((currComic, index) => (
            <li key={index} className={style.card}>
                <img src={currComic.thumb} alt={currComic.series} />
                <p>{currComic.series}</p>
            </li>
        ))}
        </div>
        <button>LOAD MORE</button>
    </div>
  );
}

export default ComicsRender;