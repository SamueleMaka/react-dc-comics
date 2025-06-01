import style from"./Footer.module.css"

function AppFooter() {
    return(
    <>
        <div className={style.footerContainer}>
            <div className={style.container}>
                <div className={buttonContainer}>
                    <button>SIGN-UP NOW!</button>
                </div>
                <div className={socialContainer}>
                    <a href="">FOLLOW US</a>
                    <a href=""><img src="footer-facebook.png" alt="" /></a>
                    <a href=""><img src="footer-twitter.png" alt="" /></a>
                    <a href=""><img src="footer-youtube.png" alt="" /></a>
                    <a href=""><img src="footer-pintrest.png" alt="" /></a>
                    <a href=""><img src="footer-periscope.png" alt="" /></a>
                </div>
            </div>
        </div>
    </>
    )
  }
  
  export default AppFooter
  