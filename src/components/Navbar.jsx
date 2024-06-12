import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUsers, faBell, faNewspaper, faPlus, faSearch, faBriefcase} from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand">Facebook clone</a>
        <FontAwesomeIcon Icon={faHome} size="1px" />
        <FontAwesomeIcon Icon={faUsers} size="1px" />
        <FontAwesomeIcon Icon={faBell} size="1px" />
        <FontAwesomeIcon Icon={faNewspaper} size="1px" />
        <FontAwesomeIcon Icon={faPlus} size="1px" />
        <FontAwesomeIcon Icon={faSearch} size="1px" />
        <FontAwesomeIcon Icon={faBriefcase} size="1px" />
    </nav>
  );
}
export default Navbar;
