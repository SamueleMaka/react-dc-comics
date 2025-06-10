import style from "./ComicsRender.module.css"

const ProductCard = ({thumb, series}) => {
    return (
        <li className={style.card}>
            <img src={thumb} alt={series} />
            <p>{series}</p>
        </li>
    )
    
}

export default ProductCard