import { useRef } from "react";
import { useGlobaContext } from "../context/Context"
import sublinks from "../data";

const Submenu = () => {
  const { pageId, setPageId } = useGlobaContext();
  const currentPage = sublinks.find((item) => item.pageId === pageId);
  
  const submenuContainer = useRef(null);

  const handMouseLeave = (e) => {
    const submenu = submenuContainer.current;
    const {left, right, bottom} = submenu.getBoundingClientRect();
    const { clientX, clientY } = e;
    console.log(clientX)
    // console.log(result);
    // console.log(submenu);
    if (clientX < left - 1 || clientX > right - 1 || clientY > bottom) {
      setPageId(null);
    }
  }

  return (
    <div 
      className={currentPage ? "submenu show-submenu" : "submenu"}
      onMouseLeave={handMouseLeave}
      ref={submenuContainer}
    >
      <h5>{currentPage?.page}</h5>
      <div 
        className="submenu-links"
        style={{gridTemplateColumns: currentPage?.links?.length > 3 ? "1fr 1fr" :  "1fr"}}
      >
        {
          currentPage?.links?.map((link) => {
            const { id, url, label, icon } = link;
            return (
              <a href={url} key={id}>{icon}{label}</a>
            )
          })
        }
      </div>
    </div>
  )
}
export default Submenu