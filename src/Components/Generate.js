import React from "react";
import { useState } from "react";
const Generate = ({ onGenerate }) => {
  const [project, setProject] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    onGenerate({ project });
    setProject("");
  };
  return (
    <form className="add-form" onSubmit={onSubmit}>
      {" "}
      <div className="form-control">
        <label>Project</label>
        <select
          name="project"
          id="project"
          required
          onChange={(e) => setProject(e.target.value)}
        >
          <option value="">None</option>
          <option value="Project 1">Project 1</option>
          <option value="Project 2">Project 2</option>
          <option value="Project 3">Project 3</option>
          <option value="Project 4">Project 4</option>
          <option value="All">All</option>
        </select>
      </div>
      <input type="submit" value="Generate Report" className="btn btn-block" />
    </form>
  );
};

export default Generate;
