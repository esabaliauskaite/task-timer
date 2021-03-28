import PropTypes from "prop-types";

const Fab = ({ color, onClick }) => {
  return (
    <Fab
      style={{ backgroundColor: color }}
      aria-label="add"
      className="btn"
      onClick={onClick}
    ></Fab>
  );
};

Fab.defaultProps = {
  color: "steelblue",
};

Fab.propTypes = {
  color: PropTypes.string,
};

export default Fab;
