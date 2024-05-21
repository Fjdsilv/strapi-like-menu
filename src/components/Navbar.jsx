import { FaBars } from "react-icons/fa";
import { useGlobaContext } from "../context/Context";
import NavLinks from "./NavLinks";

const Navbar = () => {
  const { openSidebar, setPageId } = useGlobaContext()
  const handSubmenu = (e) => {
    // console.log(e.target)
    if (!e.target.classList.contains("nav-link")) {
      setPageId(null);
    }
  }
  return (
    <nav onMouseOver={handSubmenu}>
      <div className="nav-center">
        <h3 className="logo">strapi</h3>
        <button
          type="button"
          className="toggle-btn"
          onClick={openSidebar}
        >
          <FaBars/>
        </button>
        <NavLinks />
      </div>
    </nav>
  )
}
export default Navbar