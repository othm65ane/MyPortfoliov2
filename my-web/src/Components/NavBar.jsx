import { Link } from "react-router-dom"
import ocharfao from '../assets/ocharfao.jpg'

function NavBar() {
    return (
    <nav  className="flex justify-between items-center">
        <div>
                <Link to="/" className="text-4xl font-semibold">Oc</Link>
        </div>
        <div className="flex text-[15px] text-[#878684]">
        <div>
            <Link to="/">
            Home
            </Link>
        </div>
        <div  className="ml-6">
            <Link to="about">
            About Me
            </Link>
        </div>
        <div>
            <Link to="projects" className="ml-6">
            Projects
            </Link>
        </div>
        <div>
            <Link to="contact" className="ml-6">
            Contact Me
            </Link>
        </div>
        <div  className="ml-[20vh]"onClick={() => window.location.assign("about")}>
            <Link to="about" 
            >
            <img src={ocharfao} alt="" 
            width={40}
            className="rounded-[50%]"
            />
            </Link>
        </div>
        </div>
    </nav>

    )
  }
  export default NavBar