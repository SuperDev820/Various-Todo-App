import React, { useState } from "react";
import  AddTask  from "./components/AddTask";
import TaskList from "./components/TaskList";
import TaskContext from "./context";
import "./styles.css";

export default function TodoApp() {
    const [allIds, setAllIds] = useState([]);
    const [byIds, setByIds] = useState({});
    console.log("render start");
    console.log(byIds);

    return (
        <TaskContext.Provider value = {{allIds, setAllIds, byIds, setByIds}}>
            <div className="todo-app">
                <h1>Todo List</h1>
                <AddTask />
                <TaskList status="todo" />
                <TaskList status="doing" />
                <TaskList status="done" />
            </div>
        </TaskContext.Provider>
    );
}
