import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import { green, red } from "@material-ui/core/colors";
import Button from "./Button";

let time = new Date().toLocaleTimeString([], {
  hour: "2-digit",
  minute: "2-digit",
});

const Header = ({ title, onAdd, showAdd }) => {
  const location = useLocation();
  return (
    <header className="header">
      {location.pathname === "/" && (
        <Button
          style={{ backgroundColor: showAdd ? red[500] : green[700] }}
          text="Add"
          onClick={onAdd}
        ></Button>
      )}
      <div>
        <div className="headercontainer">
          <h1 style={{ fontSize: "20px" }}>{title}</h1>
          <p className="clock">{time}</p>
        </div>
      </div>
      <Button
        style={{ backgroundColor: green[700] }}
        text="Summary"
        onClick={() => {}}
      ></Button>
    </header>
  );
};

Header.defaultProps = {
  title: "Task Timer",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
