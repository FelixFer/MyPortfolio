import React, { useState, useEffect } from "react";
import "../App.css";
import { SidebarData } from "./SidebarData";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Photo from "../images/photo.jpg";

function Sidebar() {
  const [screen, setScreen] = useState(window.screen.width);
  const [sidebar, setSidebar] = useState(true);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setScreen(window.screen.width);
    });
  });

  useEffect(() => {
    if (screen < 1024) {
      setSidebar(false);
    } else if (screen >= 1024) {
      setSidebar(true);
    }
  }, []);

  const toggleSidebar = () => setSidebar(!sidebar);

  const sidebarClick = () => {
    if (screen < 1024) {
      setSidebar(!sidebar);
    }
  };

  return (
    <>
      <div className="openbar-btn">
        <a className={sidebar ? "btnbar-nonactive" : "btnbar"}>
          <div id="icon">
            <MenuIcon onClick={toggleSidebar} />
          </div>
          <div id="title" className="noCopy">
            Felix Ferdinand
          </div>
        </a>
      </div>

      <div className={sidebar ? "Sidebar" : "Sidebar-nonactive"}>
        <a className="closeBtnBar">
          <div id="icon">
            <CloseIcon onClick={toggleSidebar} />
          </div>
          <div id="title" className="noCopy">
            Felix Ferdinand
          </div>
        </a>
        <img className="photoProfile noCopy" src={Photo} />
        <p className="email noCopy">
          Email me: <a href="mailto:felixfdnd@gmail.com">felixfdnd@gmail.com</a>
        </p>
        <p className="phone number noCopy">
          Phone Number: <a href="https://wa.me/082371176527">082371176527</a>
        </p>
        <ul className="SidebarList noCopy">
          {SidebarData.map((val, key) => {
            return (
              <li key={key} onClick={sidebarClick}>
                <a href={val.href} className="row">
                  <div id="icon">{val.icon}</div>{" "}
                  <div id="title">{val.title}</div>
                </a>
              </li>
            );
          })}
        </ul>
        <footer>
          <div className="social-icons">
            <a
              className="icons"
              href="https://www.instagram.com/felferdinand/"
              target="blank"
            >
              <InstagramIcon />
            </a>
            <a
              className="icons"
              href="https://www.linkedin.com/in/felix-ferdinand-46392a1b7/"
              target="blank"
            >
              <LinkedInIcon />
            </a>
            <a
              className="icons"
              href="https://github.com/FelixFer"
              target="blank"
            >
              <GitHubIcon />
            </a>
          </div>

          <div>
            <p className="noCopy">
              Copyright &copy;2022 All rights reserved by Felix Ferdinand.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Sidebar;
