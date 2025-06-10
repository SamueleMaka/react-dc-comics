import comics from "../data/comics.js";
import style from "./ComicsRender.module.css";
import ProductCard  from "./ProductCard";

function ComicsRender() {
  return (
    <div className={style.container}>
        <div className={style.jumbo}></div>
        <div className={style.Cardscontainer}>
        {comics.map((currComic, index) => (
            <ProductCard key={index + " List Item"}
            thumb={currComic.thumb} series={currComic.series} />
        ))}
        </div>
        <button>LOAD MORE</button>
    </div>
  );
}

export default ComicsRender;