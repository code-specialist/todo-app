import React, {DetailedHTMLProps, InputHTMLAttributes, useState} from "react";
import {API_BASE_URL} from "../config";
import {ITask} from "../App";
import {Button, Col, Row} from "react-bootstrap";


interface IProps {
    setTask: React.Dispatch<React.SetStateAction<ITask[]>>
}


const InputComponent: React.FC<IProps> = ({setTask}) => {
    const [newTaskInput, setNewTaskInput] = useState<string>("")

    const handleKeyPress = (event: DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>) => {
        if (event.key === 'Enter') {
            addTask()
            setNewTaskInput('')
        }
    }

    const addTask = () => {
        const options = {
            method: 'POST',
            body: newTaskInput,
        }

        fetch(`${API_BASE_URL}/tasks`, options)
            .then(response => response.json())
            .then(newTask => setTask(prevState => [...prevState, newTask]))
            .catch(error => {
                console.log(error)
                alert("couldn't add task")
            })
    }

    return (
        <Row className={"add-task-item mt-5 mb-5"}>
            <Col md={10}>
                <input
                    className={"w-100"}
                    type="text"
                    placeholder={"New Task"}
                    value={newTaskInput}
                    onChange={event => setNewTaskInput(event.target.value)}
                    onKeyPress={handleKeyPress}
                />
            </Col>
            <Col md={2}>
                <Button onClick={addTask}>Add</Button>
            </Col>
        </Row>
    )
}

export default InputComponent;