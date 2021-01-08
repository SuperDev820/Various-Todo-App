import React, { useContext, Fragment } from "react";
import Task from "./Task";
import TaskContext from "../context";

//todoList, doingList, doneList
function TaskList({ status }) {
    // get all tasks using hook
    const { allIds, byIds } = useContext(TaskContext);
    
    const tasks = getTasksArray(allIds, byIds);
    
    //get "all tasks" array
    function getTasksArray(allIds, byIds) {
        const tasks = [];
        allIds.map((id) => {
            tasks.push(byIds[id]);
        });
        // console.log(tasks);
        return tasks;
    }

    return (
        <Fragment>
            <h2>{status.charAt(0).toUpperCase() + status.slice(1)}</h2>
            <ul className="todo-list">
                {tasks && tasks.length
                    ? tasks.map((task, index) => {
                          if (task.status == status) {
                              return <Task key={`task-${task.id}`} task={task} />;
                          }
                      })
                    : null}
            </ul>
        </Fragment>
    );
}

// export default TodoList;
export default TaskList;
