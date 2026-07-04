export const Navbar = () => {

    return (

        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
            <div className="container-fluid">


                <a className="navbar-brand text-light" href="#">Start Bootstrap</a>
                <button className="navbar-toggler " type="button" 
                data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" 
                aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active text-light" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link  disabled">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled">Contact</a>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    )
}