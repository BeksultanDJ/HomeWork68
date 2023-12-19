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
    const [tasks, setTasks] = useState<{ id: number; title: string; completed: boolean }[]>([
        { id: 1, title: 'Task 1', completed: false },
        { id: 2, title: 'Task 2', completed: true },
    ]);

    const handleAddTask = (newTask: string) => {
        const newTaskItem: Task = {
            id: Math.random(),
            title: newTask,
            completed: false,
        };
        setTasks([...tasks, newTaskItem]);
    };

    const toggleTaskCompletion = (taskId: number) => {
        setTasks(prevTasks => {
            return prevTasks.map(task => {
                if (task.id === taskId) {
                    return { ...task, completed: !task.completed };
                }
                return task;
            });
        });
    };

    const handleDeleteTask = (taskId: number) => {
        setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
    };

    return (
        <div className="AppContainer">
            <h1>TODO App</h1>
            <TaskForm onAddTask={handleAddTask} />
            <TaskList tasks={tasks} onToggleTask={toggleTaskCompletion} onDeleteTask={handleDeleteTask} />
        </div>
    );
};

export default App;
