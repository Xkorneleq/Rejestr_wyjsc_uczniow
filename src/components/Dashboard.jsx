
const Dashboard = ()=>{
    return(
         <div className="  " style={{maxWidth: "85%"}}>
                <div className="row w-100">
                    <div className="col-12 col-md-3">
                     <h2 className="fs-4 fw-bolder">Dzień dobry, Anna!</h2>
                     <span className="fs-6 text-black text-opacity-50">piątek, 25 września 2026</span>
                    </div>
                    <div className="col-12 col-md-9 text-end ">
                     <button className="btn text-white rounded-3 fs-6 p-2 fw-bold " style={{background: "#1E3A8A"}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="pe-2 lucide lucide-clock-3 preview-icon">
                        <circle cx="12" cy="12" r="10"/><path d="M12 6v6h4"/></svg>
                        Aktywna lekcja</button>
                     <button className="btn text-danger rounded-3 border-opacity-50 fs-6 p-2 fw-bold ms-3 bg-danger bg-opacity-25 border-1 border-danger ">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="pe-2 lucide lucide-square preview-icon">
                      <rect width="18" height="18" x="3" y="3" rx="2"/></svg>
                        Zakończ</button>
               
                    </div>
                </div>
           <div className="row w-100 mt-3 p-2 g-3">


<div className="col-6 col-md-4 col-lg-3">
        <div className="card border-0 shadow p-3 h-100"> 
            <div>
                <div className="d-inline-flex align-items-center justify-content-center p-2 rounded" 
                     style={{ backgroundColor: "#eef4ff" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" style={{color:"#3473fc"}} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" 
                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M16 7h6v6"/><path d="m22 7-8.5 8.5-5-5L2 17"/>
                    </svg>
                </div>
            </div>
            <div className="mt-2 fs-3 fw-bold text-dark">2</div>
            <div className="mt-1 fw-bold text-secondary text-uppercase small">wyjścia dziś</div>
        </div>
    </div>

  
    <div className="col-6 col-md-4 col-lg-3">
        <div className="card border-0 shadow p-3 h-100"> 
            <div>
                <div className="d-inline-flex align-items-center justify-content-center p-2 rounded" 
                     style={{ backgroundColor: "#fce5da" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style={{color:"#f6682a"}} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/></svg>
                </div>
            </div>
             <div className="mt-2 fs-3 fw-bold text-dark">1</div>
            <div className="mt-1 fw-bold text-secondary text-uppercase small">Poza salą</div>
        </div>
    </div>

 
    <div className="col-6 col-md-4 col-lg-3">
        <div className="card border-0 shadow p-3 h-100">
            <div>
                <div className="d-inline-flex align-items-center justify-content-center p-2 rounded" 
                     style={{ backgroundColor: "#f5e3ff" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" style={{color:"#ca26fc"}} height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                    <path d="M16 3.128a4 4 0 0 1 0 7.744"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><circle cx="9" cy="7" r="4"/></svg>
                </div>
            </div>
             <div className="mt-2 fs-3 fw-bold text-dark">4</div>
            <div className="mt-1 fw-bold text-secondary text-uppercase small">Moje wyjścia dziś</div>
        </div>
    </div>


    <div className="col-6 col-md-4 col-lg-3">
        <div className="card border-0 shadow p-3 h-100"> 
            <div>
                <div className="d-inline-flex align-items-center justify-content-center p-2 rounded" 
                     style={{ backgroundColor: "#ebebeb" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" style={{color:"#777777"}} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                </div>
            </div>
            <div className="mt-2  fs-3 fw-bold text-dark">6.34</div>
            <div className="mt-1  fw-bold text-secondary text-uppercase small">Śr. czas wyjścia</div>
        </div>
    </div>
   
<div className="col-12 col-lg-6 mt-4">
        <div className="card border-0 shadow p-3 h-100 "> 
            <div>
                <div className="d-flex align-items-center justify-content-between flex-row rounded" >
                       <div className=" fs-5 fw-bold text-dark">Aktywne wyjścia</div>
                       <div className="px-3 p-1 rounded-3 fw-bold small" style={{background:"#fae2bf", color:"#fc9330"}} >1 poza salą</div>
                </div>
                        <hr className="my-2 text-dark text-opacity-75 mt-3"/>
                <div className="w-100 rounded d-flex flex-column p-2  mt-3" style={{background:"#fcebd3"}}>
                    <span className=" text-dark fs-4">Gabriela Sęp</span>
                    <span className="text-dark text-opacity-50">Klasa 4C - 4 min temu</span>
                </div>
            </div>
            <div>

            </div>
        </div>
    </div>        
<div className="col-12 col-lg-6 mt-4">
        <div className="card border-0 shadow p-3 h-100"> 
            <div>
               
            </div>
            <div className="mt-2 fs-3 fw-bold text-dark">2</div>
            <div className="mt-1 fw-bold text-secondary text-uppercase small">wyjścia dziś</div>
        </div>
    </div>  
</div>
            </div>
    )
}

export default Dashboard;