import React, { useState, useContext } from "react";
import TaskContext from "../context";
import Downshift from "downshift";
import items from "../downshiftItems";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Grid, TextField } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    addTask: {
        margin: theme.spacing(2, 2, 2),
        height: '54px',
    },
}));

function AddTask(props) {
    const classes = useStyles();

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
        <Grid container>
            <Grid item>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="inputTask"
                    label="Input Task"
                    name="inputTask"
                    autoComplete="inputTask"
                    autoFocus
                    value={inputTask}
                    onChange={(e) => updateInput(e.target.value)}
                />
            </Grid>
            <Grid item>
                <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.addTask}
                    onClick={handleAddTask}
                >
                    Add Task    
                </Button>
            </Grid>
        </Grid>
    ); 
}

// export default AddTask;
export default AddTask;
