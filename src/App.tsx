import React, { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm.tsx';
import TaskList from './components/TaskList.tsx';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, fetchTasks, toggleTask, deleteTask } from './components/taskSlice';
import './App.css';

const App: React.FC = () => {
    const [localTasks, setLocalTasks] = useState<{ id: number; title: string; completed: boolean }[]>([
        { id: 1, title: 'Task 1', completed: false },
        { id: 2, title: 'Task 2', completed: true },
    ]);
    const dispatch = useDispatch();
    const tasks = useSelector((state: any) => state.tasks);

    const handleAddTask = (newTask: string) => {
        const newTaskItem: { completed: boolean; id: number; title: string } = {
            completed: false,
            id: Math.random(),
            title: newTask,
        };
        setLocalTasks(prevTasks => [...prevTasks, newTaskItem]);
        dispatch(addTask(newTaskItem));
    };

    const toggleTaskCompletion = (taskId: number) => {
        setLocalTasks(prevTasks => {
            return prevTasks.map(task => {
                if (task.id === taskId) {
                    return { ...task, completed: !task.completed };
                }
                return task;
            });
        });
        dispatch(toggleTask(taskId));
    };

    const handleDeleteTask = (taskId: number) => {
        setLocalTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
        dispatch(deleteTask(taskId));
    };

    useEffect(() => {
        dispatch(fetchTasks());
    }, [dispatch]);

    return (
        <div className="AppContainer">
            <h1>TODO App</h1>
            <TaskForm onAddTask={handleAddTask} />
            <TaskList tasks={localTasks} onToggleTask={toggleTaskCompletion} onDeleteTask={handleDeleteTask} />
        </div>
    );
};

export default App;
