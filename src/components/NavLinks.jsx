import { useGlobaContext } from "../context/Context";
import sublinks from "../data"

const NavLinks = () => {
  const { setPageId } = useGlobaContext()
  return (
    <div className="nav-links">
      {
        sublinks.map((item) => {
          const { pageId, page } = item;
          return (
            <button 
              type="button"
              key={pageId}
              className="nav-link"
              onMouseEnter={() => setPageId(pageId)}
            >
              {page}
            </button>
          )
        })
      }
    </div>
  )
}
export default NavLinks