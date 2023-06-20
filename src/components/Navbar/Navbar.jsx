import React, { useRef } from "react";
import "./Navbar.css";

const Navbar = ({ activeSection, sections }) => {
  console.log(activeSection);
  const listContainer = useRef(null);
  const list = useRef(null);
  const listNav = useRef(null);
  const btn = useRef(null);

  const showNavbar = () => {
    const listCont = listContainer.current;
    const listt = list.current;
    const btnn = btn.current;
    const listContHeight = listCont.getBoundingClientRect().height;
    const listHeight = listt.getBoundingClientRect().height;
    console.log(listContHeight, listHeight);
    if (listContHeight === 0) {
      listCont.style.height = `${listHeight}px`;
    } else {
      listCont.style.height = 0;
    }

    btnn.classList.toggle("active");
  };

  const scroll = (e) => {
    e.preventDefault(e);
    const id = e.currentTarget.getAttribute("href").slice(1);
    const btnn = btn.current;
    console.log(id);
    const element = document.getElementById(id);
    console.log(element);
    const listCont = listContainer.current;
    const navHeight = listNav.current.getBoundingClientRect().height;
    const listHeight = listCont.getBoundingClientRect().height;
    let position = element.offsetTop - navHeight;
    console.log(position);
    //  console.log(position-navHeight)
    if (navHeight > 82) {
      position = position + listHeight;
    }
    window.scrollTo({
      left: 0,
      top: position,
    });
    listCont.style.height = 0;
    // toggler.classList.remove("active");
    btnn.classList.remove("active");
  };

  return (
    <section>
      <div className="navbar-wrapper">
        <div className="container-xxl">
          <nav
            className="d-flex justify-content-between align-items-center p-md-3 p-2"
            ref={listNav}
          >
            <div className="nav-bar">
              <h2 className="nav-logo bold mb-0">
                Dav<span style={{ color: "var(--color-primary)" }}>X</span>
              </h2>
              <button className="btn mb-0" onClick={showNavbar} ref={btn}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
              </button>
            </div>
            <div class="list-container mb-0" ref={listContainer}>
              <ul class="list d-flex px-0" ref={list}>
                {sections.map((section) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className={activeSection === section.id ? "active" : ""}
                      onClick={(e) => scroll(e)}
                    >
                      {section.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
