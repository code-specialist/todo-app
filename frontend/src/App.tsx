import React, {useEffect, useState} from 'react';
import './App.css';
import InputComponent from "./components/InputComponent";
import TaskListComponent from "./components/TaskListComponent";
import {API_BASE_URL} from "./config";
import {Container} from "react-bootstrap";

export interface ITask {
    id: number
    content: string
    done: boolean
}

const App: React.FC = () => {
    const [tasks, setTasks] = useState<ITask[]>([])

    useEffect(() => {
        const options = {method: 'GET'}

        fetch(`${API_BASE_URL}/tasks`, options)
            .then(response => response.json())
            .then(fetchedTasks => setTasks(fetchedTasks))
            .catch(error => {
                console.log(error)
                alert("couldn't fetch tasks")
            })
    }, [])

    return (
        <div className="App">
            <main>
                <Container>
                    <h1 className={"display-1 text-center"}>Todo App</h1>
                    <InputComponent setTask={setTasks}/>
                    <TaskListComponent setTasks={setTasks} tasks={tasks}/>
                </Container>
            </main>
        </div>
    );
}

export default App;
