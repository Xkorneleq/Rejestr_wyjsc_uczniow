

const Login = ({setLogged})=>{


    return(
       <main className="d-flex  flex-fill vh-100 flex-column" style={{background: "#001da1",
background: "linear-gradient(138deg, rgba(0, 29, 161, 1) 0%, rgba(105, 145, 240, 1) 100%)"}}>
        
           <div className="container-fluid d-flex p-5 align-items-center flex-column ">
            <div className="row">
                  <div className="col-12 p-3 rounded-4 card bg-secondary bg-opacity-25 border-secondary ">
                <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide text-white lucide-school preview-icon"><path d="M14 21v-3a2 2 0 0 0-4 0v3"/><path d="M18 4.933V21"/><path d="m4 6 7.106-3.79a2 2 0 0 1 1.788 0L20 6"/><path d="m6 11-3.52 2.147a1 1 0 0 0-.48.854V19a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a1 1 0 0 0-.48-.853L18 11"/><path d="M6 4.933V21"/><circle cx="12" cy="9" r="2"/></svg>
            </div>
           
            </div> 
            <div className="row">
                <p className="fs-1 mb-0 text-white fw-bold pt-3">
                    Rejestr Wyjśc
                </p>
            </div>
            <div className="row">
                <p className="fs-6 text-white text-opacity-75">Zespół Szkół nr 4 im. J. Groszkowskiego w Tychach, Technikum nr 3</p>    
            </div>
            <div className="row w-100 justify-content-center align-items-center">
                 <div className="card mt-3 col-12 col-md-6 col-lg-3 bg-white rounded-4 border-0">
                  <div className="p-3">
                      <div className="row mb-0">
                        <p className="fs-4 mb-0 fw-bold">Zaloguj się</p>
                    </div>
                    <div className="row ">
                        <p className="fs-6 text-black text-opacity-50">Wprowadź swoje dane</p>
                    </div>
                    <div className="row">
                        <form className="border-0">
                        <div className="d-flex align-items-center">
                            <label htmlFor="login" className="me-3">
                                 Login
                            </label>

                        <input
                        id="login"
                        type="text"
                        className="form-control"
                        />
                        </div>
                        <div className="d-flex align-items-center pt-3">
                            <label htmlFor="haslo" className="me-3">
                                 Hasło
                            </label>

                        <input
                        id="haslo"
                        type="password"
                        className="form-control"
                        />
                        </div>
                        <div className="d-flex align-items-center pt-3">
                            
                             <button
                            type="button"
                            className="btn  w-100 mt-4 py-2 text-center p-5 text-white fw-semibold"
                            style={{background: "rgba(30, 58, 138)"}}
                            onClick={()=>setLogged(true)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="me-1 lucide-log-out"><path d="m16 17 5-5-5-5"/><path d="M21 12H9"/><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/></svg>
                            Kontynuuj
                        </button>
</div>
                        </form>
                </div>

                  </div>
                 </div>
            </div>
           </div>

       </main>
    );
}

export default Login;