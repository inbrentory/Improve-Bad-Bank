function NavBar(){
  return(

    // <nav className="navbar navbar-expand-lg navbar-light bg-light">
    //   <a className="navbar-brand" href="#">BadBank</a>
    //   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    //     <span className="navbar-toggler-icon"></span>
    //   </button>
    //   <div className="collapse navbar-collapse" id="navbarNav">
    //     <ul className="navbar-nav">
    //       <li className="nav-item">
    //         <a className="nav-link" href="#/CreateAccount/">Create Account</a>
    //       </li>
    //       <li className="nav-item">
    //         <a className="nav-link" href="#/login/">Login</a>
    //       </li>
    //       <li className="nav-item">
    //         <a className="nav-link" href="#/deposit/">Deposit</a>
    //       </li>
    //       <li className="nav-item">
    //         <a className="nav-link" href="#/withdraw/">Withdraw</a>
    //       </li>
    //       <li className="nav-item">
    //         <a className="nav-link" href="#/balance/">Balance</a>
    //       </li>
    //       <li className="nav-item">
    //         <a className="nav-link" href="#/alldata/">AllData</a>
    //       </li>          
    //     </ul>
    //   </div>
    // </nav>
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
        {/* <a className="navbar-brand" href="#">BAD BANK</a> */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
            <li className="nav-item">
              <a type="button" className="nav-link active" aria-current="page" href="#/" data-toggle="tooltip" data-placement="top" title="Landing Page">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a type="button" className="nav-link active" aria-current="page" href='#/CreateAccount' data-toggle="tooltip" data-placement="top" title="Sign up for a new account">
                Create Account
              </a>

            </li>            
            <li className="nav-item">
              <a type="button" className="nav-link active" aria-current="page" href='#/login' data-toggle="tooltip" data-placement="top" title="Sign in to your account">
                Login
              </a>
            </li>                
            <li className="nav-item">
              <a type="button" className="nav-link active" aria-current="page" href='#/deposit' data-toggle="tooltip" data-placement="top" title="Adding fund to your balance">
                Deposit
              </a>
            </li>
              <a type="button" className="nav-link active" aria-current="page" href='#/withdraw' data-toggle="tooltip" data-placement="top" title="Retrieving fund from your balance">
                Withdraw
              </a>
            <li className="nav-item">
            <a type="button" className="nav-link active" aria-current="page" href='#/allData' data-toggle="tooltip" data-placement="top" title="Back of House Data">
            All Data
            </a>
            </li>

        </ul>
        </div>
    </div>
    </nav>
    </>

  );
}