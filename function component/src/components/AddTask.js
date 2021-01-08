import React, { useState, useContext } from "react";
import TaskContext from "../context";

function AddTask(props) {
    const [inputTask, setInputTask] = useState("");
    const { allIds, setAllIds, byIds, setByIds } = useContext(TaskContext);

    //change input field
    const updateInput = (value) => setInputTask(value);

    //click "add task" button
    const handleAddTask = () => {
        const cloneallIds = [...allIds];
        let taskCount = cloneallIds.length + 1;
        cloneallIds.push(taskCount);
        setAllIds(cloneallIds);

        let taskElement = {
            id: taskCount,
            content: inputTask,
            status: "todo"
        };
        const clonebyIds = [...byIds];
        clonebyIds[taskCount] = taskElement;
        setByIds(clonebyIds);
        setInputTask("");
    };

    return (
        <div>
            <input
                onChange={(e) => updateInput(e.target.value)}
                value={inputTask}
            />
            <button className="add-todo" onClick={handleAddTask}>
                Add Task
            </button>
        </div>
    ); 
}

// export default AddTask;
export default AddTask;
