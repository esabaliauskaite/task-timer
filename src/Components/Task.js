import { FaStop, FaPlay, FaPause } from "react-icons/fa";
import PropTypes from "prop-types";
import { useState } from "react";
import { useStopwatch } from "react-timer-hook";

const Task = ({ task }) => {
  const { minutes, hours, start, pause } = useStopwatch({
    autoStart: false,
  });
  const [isClicked, setIsClicked] = useState(false);
  const [showTimer, setShowTimer] = useState("");

  return (
    <div className={`tasks`}>
      <div
        className={`task`}
        style={{
          backgroundColor: isClicked ? "#85FFBD" : "#f4f4f4",
        }}
      >
        <h3>
          {task.text}
          <div>
            <FaStop
              style={{ color: "red", cursor: "pointer" }}
              onClick={() => setShowTimer((prev) => !prev)}
            />
          </div>
        </h3>
        <h5>{task.description}</h5>{" "}
        <h6>
          {task.project}
          <div onClick={() => setIsClicked((prev) => !prev)}>
            {isClicked ? (
              <>
                <FaPlay size={15} onClick={pause}></FaPlay>
              </>
            ) : (
              <>
                <FaPause size={15} onClick={start}></FaPause>
              </>
            )}
          </div>
        </h6>
      </div>
      <div
        style={{
          textAlign: "center",
          visibility: !showTimer ? "visible" : "hidden",
        }}
      >
        <div className="time">
          <span>
            {" "}
            {hours > 9 ? hours : "0" + hours}:
            {minutes > 9 ? minutes : "0" + minutes}
          </span>
        </div>
      </div>
    </div>
  );
};

Task.defaultProps = {
  clicked: false,
};

Task.propTypes = {
  clicked: PropTypes.bool,
};

export default Task;
