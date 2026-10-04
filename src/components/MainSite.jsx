import icon from "../assets/logo.png"
import "../css/MainSite.css"
import Dashboard from "../components/Dashboard.jsx"
import AktywnaLekcja from "../components/AktywnaLekcja.jsx"
import { useState } from "react";




const SideBar = ({page, setPage, Pages})=>{




    return(
      <aside
  className="vh-100 col-5 col-md-3 col-lg-2 p-2 flex-shrink-0 text-white"
  style={{
    background: "#1E3A8A",
    
  }}
>

     <div className="p-3 text-start d-flex flex-column
      gap-3 align-items-center  ">
                    <div className="d-flex 
      gap-3 align-items-center">
                        <img src={icon} className="img-fluid" style={{width: "20%"}}  />
                    <span class="fw-bold text-white fs-5 lh-sm">Rejestr Wyjść</span>
                    </div>
                    <span className="text-white text-opacity-50">Zespół Szkół nr 4 im</span>
                </div>
                <hr className="my-2"/>
              <div className="w-100 mx-auto p-3 mt-4 card bg-light bg-opacity-25 border-light border-1 border-opacity-25 text-white">
    <div className="d-flex mb-0 align-items-center gap-2">
        <span
            className="bg-success rounded-circle"
            style={{ width: "10px", height: "10px", background: "#28eb5c" }}
        ></span>

        <span className=" fw-bold fs-6" style={{color: "#28eb5c"}}>
            Aktywna lekcja
        </span>
    </div>

    <p className="fs-6 fw-semibold mb-0 mt-1">
        Matematyka
    </p>
    <p className="fs-6 fw-light text-white text-opacity-75 mb-0 mt-1">
        Klasa 5P - s. 202
    </p>
</div>
  <div className="d-flex flex-column">
    <button className="btn text-white d-flex mt-3 p-2 align-items-center tools" onClick={()=>setPage(Pages[0])}>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-layout-dashboard preview-icon">
    <rect width="7" height="9" x="3" y="3" rx="1"/>
    <rect width="7" height="5" x="14" y="3" rx="1"/>
    <rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg>
    <span style={{fontSize: "15px"}} className="ps-2">DASHBOARD</span>
  </button>
     <button className="btn text-white d-flex mt-3 p-2 align-items-center  tools" onClick={()=>setPage(Pages[1])}>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clock-4 preview-icon">
    <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
    <span className="ps-2">AKTYWNA LEKCJA</span>
  </button>
    <button className="btn text-white d-flex mt-3 p-2 align-items-center  tools">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-rotate-ccw-clock preview-icon">
    <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M12 7v5l4 2"/></svg>
    <span className="ps-2">HISTORIA WYJŚĆ</span>
  </button>

    <button className="btn text-white d-flex mt-3 p-2 align-items-center  tools">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chart-no-axes-column preview-icon">
   <path d="M5 21v-6"/><path d="M12 21V3"/>
   <path d="M19 21V9"/></svg>
    <span className="ps-2">STATYSKYKI</span>
    </button>
    
  </div> 

        </aside>
    );
}


const Main = ({page})=>{
  
    return(
        <main className="d-flex  flex-fill p-4 flex-column" style={{background: "#eceff1"}}>
           {page === "Dashboard" &&  <Dashboard/>}
           {page === "AktywnaLekcja" && <AktywnaLekcja/>}
        </main>
    );
}

const Header = ()=>{
    return(
        <header className="p-4">
        <span className="fs-6">Anna Nowak  {">"} Matematyka</span>
       
        </header>
    );
}
const MainSite = ()=>{

        const Pages = ["Dashboard", "AktywnaLekcja", "Historia", "Statystyki"];
        const [page, setPage] = useState(Pages[0]);

    return(
        
       <div className="d-flex  vw-100 vh-100">
        <SideBar page={page} setPage={setPage} Pages={Pages}/>
        <div className="d-flex flex-column  vw-100 vh-100">
        <Header/>
        <Main page={page}/>
        </div>
        </div>
    );
}
export default MainSite;