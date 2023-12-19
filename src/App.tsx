import React, { useState } from 'react';
import TaskForm from './components/TaskForm.tsx';
import TaskList from './components/TaskList.tsx';
import './App.css';

const App: React.FC = () => {
    const [tasks, setTasks] = useState<string[]>([]);

    const handleAddTask = (newTask: string) => {
        setTasks([...tasks, newTask]);
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
