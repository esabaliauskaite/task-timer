import { useState } from "react";

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [description, setDescription] = useState("");
  const [project, setProject] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    onAdd({ text, description, project });

    setText("");
    setDescription("");
    setProject("");
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Task</label>
        <input
          required
          type="text"
          placeholder="Add Task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Description</label>
        <input
          type="text"
          placeholder="Add Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
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
        </select>
      </div>

      <input type="submit" value="Save Task" className="btn btn-block" />
    </form>
  );
};

export default AddTask;
