import style from "./Band.module.css"

function AppBand() {
    return(
    <>
        <div className={style.bandContainer}>

            <div className={style.contentHere}>
                <div className={style.container}>
                    <p>--&gt; Content goes here &lt;--</p>
                </div>
            </div>

            <div className={style.productsContainer }>
                <div className={style.container}>
                    <div className={style.productCard}>
                        <img src="buy-comics-digital-comics.png" alt="" />
                        <p>Digital Comics</p>
                    </div>
                    <div className={style.productCard}>
                        <img src="buy-comics-merchandise.png" alt="" />
                        <p>DC merchandise</p>
                    </div>
                    <div className={style.productCard}>
                        <img src="buy-comics-subscriptions.png" alt="" />
                        <p>Subscriptions</p>
                    </div>
                    <div className={style.productCard}>
                        <img src="buy-comics-shop-locator.png" alt="" />
                        <p>Comic Shop Locator</p>
                    </div>
                    <div className={style.productCard}>
                        <img src="buy-dc-power-visa.svg" alt="" />
                        <p>DC power visa</p>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
  }
  
  export default AppBand
  