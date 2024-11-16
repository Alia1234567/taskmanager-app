import { NoteTile } from "../../components";
import { taskTileData } from "./utils";
import { useEffect, useState } from "react";
import "./TaskDashboard.css";

function TaskDashboard() {

  const [task, setTask] = useState("");
  const [tastArr, setTaskArr] = useState([]);

  const handleAddTaskDashboard = (e) => {
    setTask(e.target.value);
  }

  const handleSubmitTaskBoard = () => {
    setTaskArr((prev)=>[...prev, {data:task}]);
    localStorage.setItem("taskArray", tastArr);
    setTask("");
  }

  const renderTaskNoteTile = (item, index) => {
    console.log(item);
    
    return (
      <NoteTile key={index} data={item.data} />
    )
  }

  const submittedData = localStorage.getItem("taskArray");
  console.log(submittedData);
  // useEffect(()=> {
    
  // },[localStorage.getItem("submittedTask")])

  return (
    <div className="task-dashboard-container">
      <div className="task-dashboard-search-container">
        <div className="task-dashboard-search-box">
          <span></span>
          <input value={task} className="task-dashboard-input" placeholder="Add your task" type="text" name="" id="" onChange={handleAddTaskDashboard} />
          <button className="task-dashboard-button" onClick={handleSubmitTaskBoard}>Add Task</button>
        </div>
      </div>
      <div className="task-board-list-container">{tastArr.map(renderTaskNoteTile)}</div>
    </div>
  )
}

export default TaskDashboard;