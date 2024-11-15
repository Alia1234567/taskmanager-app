import { NoteTile } from "../../components";
import { taskTileData } from "./utils";
import "./TaskDashboard.css";

function TaskDashboard() {

    const renderTaskNoteTile = (item, index) => {
        return(
            <NoteTile data={item.data} />
        )
    }

    return(
        <div className="task-dashboard-container">
            {taskTileData.map(renderTaskNoteTile)}
        </div>
    )
}

export default TaskDashboard;