import React, { useState } from 'react';
import TaskForm from './components/TaskForm.tsx';
import TaskList from './components/TaskList.tsx';
import './App.css';

interface Task {
    id: number;
    title: string;
    completed: boolean;
}

const App: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>([]);

    const handleAddTask = (newTask: string) => {
        const newTaskItem: Task = {
            id: Math.random(),
            title: newTask,
            completed: false,
        };
        setTasks([...tasks, newTaskItem]);
    };

    return (
        <div>
            <h1>TODO App</h1>
            <TaskForm onAddTask={handleAddTask} />
            <TaskList tasks={tasks} />
        </div>
    );
};

export default App;
