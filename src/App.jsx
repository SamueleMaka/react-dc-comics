import AppHeader from "./components/Header.jsx"
import AppBand from "./components/Band.jsx"
import AppMain from "./components/Main.jsx"
import AppFooter from "./components/Footer.jsx"
import ComicsRender from "./components/ComicsRender.jsx"
import "./index.css"
function App() {
  return(
    <>
        <AppHeader />
        <ComicsRender />
        <AppBand />
        <AppMain /> 
        <AppFooter />
    </>
  )
}

export default App
