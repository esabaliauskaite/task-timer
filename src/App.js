import Header from "./Components/Header";
import Tasks from "./Components/Tasks";
import Footer from "./Components/Footer";
import AddTask from "./Components/AddTask";
import Button from "./Components/Button";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [finished, setFinished] = useState([]);

  useEffect(() => {
    const getFinished = async () => {
      const finishedFromServer = await fetchFinished();
      setTasks(finishedFromServer);
    };

    getFinished();

    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    };

    getTasks();
  }, []);

  const fetchTasks = async () => {
    const res = await fetch("http://localhost:5000/tasks");
    const data = await res.json();

    return data;
  };
  const fetchFinished = async () => {
    const res = await fetch("http://localhost:5000/finished");
    const data = await res.json();

    return data;
  };

  //Add Task
  const addTask = async (task) => {
    const res = await fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(task),
    });

    const data = await res.json();

    setTasks([...tasks, data]);
  };

  //Add Task
  const addFinished = async (task) => {
    const res = await fetch("http://localhost:5000/finished", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(task),
    });

    const data = await res.json();

    setFinished([...finished, data]);
  };

  return (
    <Router>
      <div className="container">
        <Header
          onAdd={() => setShowAddTask(!showAddTask)}
          showAdd={showAddTask}
        />
        <Route
          path="/"
          exact
          render={(props) => (
            <>
              {showAddTask && <AddTask onAdd={addTask} />}
              {tasks.length > 0 ? <Tasks tasks={tasks} /> : "No Tasks To Show"}
            </>
          )}
        />

        <Footer />
      </div>
    </Router>
  );
}

export default App;
