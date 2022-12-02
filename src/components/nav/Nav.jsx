import { NavLink } from "react-router-dom";
import "./nav.css";
import { useEffect, useState } from "react";
import { MdTableRows } from "react-icons/md";
import { GiCancel } from "react-icons/gi";

const Nav = () => {
  const [offSet, setOffSet] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      setOffSet(window.pageYOffset);
    };
  }, []);

  return (
    <div className={offSet > 50 ? "nav__container1" : "nav__container"}>
      <div class="nav__head">
        <h1>St.Matia Mulumba Eucharistic Fellowship</h1>
      </div>
      <div className={`${"nav__links"} ${open ? "active" : ""}`}>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active1" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active1" : "")}
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/sermons"
              className={({ isActive }) => (isActive ? "active1" : "")}
            >
              Sermons
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/events"
              className={({ isActive }) => (isActive ? "active1" : "")}
            >
              Events
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/giving"
              className={({ isActive }) => (isActive ? "active1" : "")}
            >
              Giving
            </NavLink>
          </li>
        </ul>
      </div>
      {open ? (
        <div className="iconContainer" onClick={() => setOpen(false)}>
          <GiCancel className="toggleIcon" />
        </div>
      ) : (
        <div className="iconContainer" onClick={() => setOpen(true)}>
          <MdTableRows className="toggleIcon" />
        </div>
      )}
    </div>
  );
};

export default Nav;
