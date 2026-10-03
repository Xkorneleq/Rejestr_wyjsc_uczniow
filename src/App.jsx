import "bootstrap/dist/css/bootstrap.css"
import Login from "./components/Logsite.jsx"
import MainSite from "./components/MainSite.jsx"
import { useState } from "react"
function App() {
  
  const [logged, setLogged] = useState(false);  

  return (
    <>
       {!logged ? (<Login logged={logged} setLogged={setLogged} />) : (<MainSite></MainSite>)}
    <div></div>
    </>
  )
}

export default App
