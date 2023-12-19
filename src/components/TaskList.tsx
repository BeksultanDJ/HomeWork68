import React from 'react';

interface TaskListProps {
    tasks: string[];
}

const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
    return (
        <div className="task-body">
            <ul>
                {tasks.map((task, index) => (
                    <li className="tasks" key={index}>{task}</li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;
