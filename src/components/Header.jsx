import style from "./Header.module.css"

function AppHeader() {
    const linkLabels = [
        "Character",
        "Comics",
        "Movies",
        "TV",
        "Games",
        "Collectibles",
        "Videos",
        "Fans",
        "News",
        "Shop"
      ];
      
    return(
    <>
    <div className={style.container}>
        <div className={style.headerContainer}>
            <div>
                <img src="dc-logo.png" alt="" />
            </div>
            <div className={style.linkContainer}>
                {linkLabels.map((currLink, index) => (
                    <li key={"linkHeade" + index}><a href="">{currLink}</a></li>
                ))}
            </div>
        </div>
    </div>  
    </>
    )
  }
  
export default AppHeader
