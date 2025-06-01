import style from "./Header.module.css"

function AppHeader() {
    return(
    <>
    <div className={style.container}>
        <div className={style.headerContainer}>
            <div>
                <img src="dc-logo.png" alt="" />
            </div>
            <div className={style.linkContainer}>
                <ul>
                    <li><a href="">Character</a></li>
                    <li><a href="">Comics</a></li>
                    <li><a href="">Movies</a></li>
                    <li><a href="">TV</a></li>
                    <li><a href="">Games</a></li>
                    <li><a href="">Collectibles</a></li>
                    <li><a href="">Videos</a></li>
                    <li><a href="">Fans</a></li>
                    <li><a href="">News</a></li>
                    <li><a href="">Shop</a></li>
                </ul>
            </div>
        </div>
    </div>  
    </>
    )
  }
  
export default AppHeader
  