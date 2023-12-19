    import React from 'react';

    interface TaskListProps {
        tasks: { id: number; title: string; completed: boolean }[];
        onToggleTask: (taskId: number) => void;
    }

    const TaskList: React.FC<TaskListProps> = ({ tasks, onToggleTask }) => {
        const handleToggle = (taskId: number) => {
            onToggleTask(taskId);
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
                        </li>
                    ))}
                </ul>
            </div>
        );
    };

    export default TaskList;
