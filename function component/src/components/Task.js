import React, { useContext } from "react";
import TaskContext from "../context";

//task component
function Task({ task }) {
    const { byIds, setByIds } = useContext(TaskContext);
    
    const toggleTodo = (taskId) => {
        const clonebyIds = { ...byIds };    
        if (clonebyIds[taskId].status == "todo") {
            clonebyIds[taskId].status = "doing";
        }
        else {
            clonebyIds[taskId].status = "done";
        }
        setByIds(clonebyIds);
    };
    
    return (
        <li className="todo-item" onClick={() => toggleTodo(task.id)}>
            <span className="todo-item__text">{task.content}</span>
        </li>
    );
}
        
// export default Todo;
export default Task;
