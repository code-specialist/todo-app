import React from "react";
import {ITask} from "../App";
import {Container} from "react-bootstrap";
import TaskComponent from "./TaskComponent";


interface IProps {
    tasks: ITask[]
    setTasks: React.Dispatch<React.SetStateAction<ITask[]>>
}

 
const TaskListComponent: React.FC<IProps> = ({tasks, setTasks}) => {
    return (
        <Container>
            <hr/>
            <h2 className={"display-4"}>Tasks</h2>
            {
                tasks.map(task => <TaskComponent setTasks={setTasks} task={task}/>)
            }
        </Container>
    )
}

export default TaskListComponent;