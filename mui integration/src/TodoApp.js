import React, { useState } from "react";
import  AddTask  from "./components/AddTask";
import TaskList from "./components/TaskList";
import TaskContext from "./context";
import Container from "@material-ui/core/Container";
import "./styles.css";
import { Typography } from "@material-ui/core";

export default function TodoApp() {
    const [allIds, setAllIds] = useState([]);
    const [byIds, setByIds] = useState({});
    console.log("render start");
    console.log(byIds);

    return (
        <TaskContext.Provider value={{ allIds, setAllIds, byIds, setByIds }}>
            <Container component="main" maxWidth="sm">
                <div className="todo-app">
                    <Typography component="h1" variant="h8"></Typography>
                    <AddTask />
                    <TaskList status="todo" />
                    <TaskList status="doing" />
                    <TaskList status="done" />
                </div>
            </Container>
            
        </TaskContext.Provider>
    );
}
