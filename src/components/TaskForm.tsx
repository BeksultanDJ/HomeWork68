import React, { useState } from 'react';

interface TaskFormProps {
    onAddTask: (newTask: string) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onAddTask }) => {
    const [taskTitle, setTaskTitle] = useState('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTaskTitle(event.target.value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onAddTask(taskTitle);
        setTaskTitle('');
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter task title"
                    value={taskTitle}
                    onChange={handleInputChange}
                />
                <button type="submit">Add Task</button>
            </form>
        </div>
    );
};

export default TaskForm;
