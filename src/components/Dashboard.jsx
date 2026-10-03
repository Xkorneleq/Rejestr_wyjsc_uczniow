
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
    <div className="col">
        <div className="card border-0 shadow">
            <svg xmlns="http://www.w3.org/2000/svg" style={{color:"#3473fc"}} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" 
            stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="card border-0 bg-primary bg-opacity-10 p-3">
            <path d="M16 7h6v6"/><path d="m22 7-8.5 8.5-5-5L2 17"/></svg>
            wyjścia dziś
        </div>
    </div>

    <div className="col">
        <div className="card border-0 shadow">
            wyjścia dziś
        </div>
    </div>

    <div className="col">
        <div className="card border-0 shadow">
            wyjścia dziś
        </div>
    </div>

    <div className="col">
        <div className="card border-0 shadow">
            wyjścia dziś
        </div>
    </div>
</div>
            </div>
    )
}

export default Dashboard;