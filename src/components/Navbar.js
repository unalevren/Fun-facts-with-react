import reactLogo from "../content/reactjs-icon.png";

const Navbar = () => {
    return (
        <nav>
           <img src={reactLogo} className="nav-icon"></img> 
           <h3 className="nav-logo-text">ReactFacts</h3>
           <h4 className="nav-title">React Course - Project 1</h4>
        </nav>
    )
}

export default Navbar;