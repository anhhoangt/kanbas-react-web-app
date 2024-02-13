import { Link, useLocation } from "react-router-dom";
import "./index.css";
import {
  FaTachometerAlt,
  FaRegUserCircle,
  FaBook,
  FaRegCalendarAlt,
} from "react-icons/fa";
function KanbasNavigation() {
  const links = [
    { label: "Account", icon: <FaRegUserCircle className="fs-2" /> },
    { label: "Dashboard", icon: <FaTachometerAlt className="fs-2" /> },
    { label: "Courses", icon: <FaBook className="fs-2" /> },
    { label: "Calendar", icon: <FaRegCalendarAlt className="fs-2" /> },
  ];
  const { pathname } = useLocation();
  return (
    <>
      <div className="northeastern-icon">
        <img src="../../n-icon.ico" alt="icon" width="80px" />
      </div>
      <ul className="wd-kanbas-navigation">
        {links.map((link, index) => (
          <li
            key={index}
            className={pathname.includes(link.label) ? "wd-active" : ""}
          >
            <Link to={`/Kanbas/${link.label}`}>
              {" "}
              <span className="icon-red">{link.icon}</span> {link.label}{" "}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
export default KanbasNavigation;
