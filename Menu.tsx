import { useState } from "react";
interface Props {
  items: string[];
  heading: string;
  link:string[];
}
useState;
function Menu({ items, heading, link }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          {heading}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
          id="navbarNav"
        >
          <ul className="navbar-nav">
            {items.map((item, index) => (
              <li
                /*className={`nav-item ${
                  selectedIndex === index ? "active" : ""
                }`}*/

                key={item}
                onClick={() => console.log(link[index])}
              >
                <a className="nav-link" href="#">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Menu;
