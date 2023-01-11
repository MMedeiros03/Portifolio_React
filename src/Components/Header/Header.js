import './Header.css'
import { Link } from "react-router-dom";
function Header() {

    return (
      <div className="Header">
        <h1 className='ativaModal'>==</h1>
        <h2>
        <Link to='/'>
          MMedeiros03
        </Link>
        </h2>
      </div>
    );
  }
  
  export default Header;
  