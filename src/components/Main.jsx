import style from "./Main.module.css"
function AppMain() {
    return(
    <>
        <div className={style.mainContainer}>

            <div className={style.container}>

                <div className={style.linkContainer}>

                     <div className={style.linkSection}>
                        <div className={style.linkList}>
                            <ul>
                                <li><a href="">dc comics</a></li>
                                <li><a href="">Characters</a></li>
                                <li><a href="">Comics</a></li>
                                <li><a href="">Movies</a></li>
                                <li><a href="">TV</a></li>
                                <li><a href="">Games</a></li>
                                <li><a href="">Videos</a></li>
                                <li><a href="">News</a></li>
                            </ul>
                        </div>
                        <div className={style.linkList}>
                            <ul>
                                <li><a href="">shop</a></li>
                                <li><a href="">Shop DC</a></li>
                                <li><a href="">Shop DC Collectibles</a></li>
                            </ul>
                        </div>
                     </div>
                     <div className={style.linkSection}>
                        <div className={style.linkList}>
                            <ul>
                                <li><a href="">dc</a></li>
                                <li><a href="">Terms Of Use</a></li>
                                <li><a href="">Privacy policy (new)</a></li>
                                <li><a href="">Ad Choices</a></li>
                                <li><a href="">Advertising</a></li>
                                <li><a href="">Jobs</a></li>
                                <li><a href="">Subscriptions</a></li>
                                <li><a href="">Talent WorkShops</a></li>
                                <li><a href="">CPSC Certificates</a></li>
                                <li><a href="">Ratings</a></li>
                                <li><a href="">Shop Help</a></li>
                                <li><a href="">Contact Us</a></li>
                            </ul>
                        </div>
                     </div>
                     <div className={style.linkSection}>
                        <div className={style.linkList}>
                            <ul>
                                <li><a href="">Sites</a></li>
                                <li><a href="">DC</a></li>
                                <li><a href="">MAD Magazine</a></li>
                                <li><a href="">DC kids</a></li>
                                <li><a href="">DC Universe</a></li>
                                <li><a href="">DC Power Visa</a></li>
                            </ul>
                        </div>
                     </div>
                </div>


                <div className={style.imageContainer}>
                    <img src="dc-logo-bg.png" alt="" />
                </div>
            </div>
        </div>
    </>
    )
  }
  
  export default AppMain
  