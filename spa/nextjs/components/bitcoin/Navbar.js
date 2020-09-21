import Link from "next/link";

const Navbar = () => (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
        <div className="container">
            <a href="#" className="navbar-brand">dotcomengineer</a>
            <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link href="/"><a className="nav-link">Home</a></Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
);

export default Navbar;