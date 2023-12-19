    import React from 'react';

    interface TaskListProps {
        tasks: { id: number; title: string; completed: boolean }[];
        onToggleTask: (taskId: number) => void;
        onDeleteTask: (taskId: number) => void;
    }

    const TaskList: React.FC<TaskListProps> = ({ tasks, onToggleTask , onDeleteTask}) => {
        const handleToggle = (taskId: number) => {
            onToggleTask(taskId);
        };

        const handleDelete = (taskId: number) => {
            onDeleteTask(taskId)
        };

        return (
            <div className="task-body">
                <ul>
                    {tasks.map((task) => (
                        <li className="tasks" key={task.id}>
                            <input
                                type="checkbox"
                                checked={task.completed}
                                onChange={() => handleToggle(task.id)}
                            />
                            {task.title}
                            <button className="delBtn" onClick={() => handleDelete(task.id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            </div>
        );
    };

    export default TaskList;
