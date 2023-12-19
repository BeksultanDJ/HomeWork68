import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface Task {
    id: number;
    title: string;
    completed: boolean;
}

export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
    try {
        const response = await axios.get('https://labwork-2a401-default-rtdb.europe-west1.firebasedatabase.app/tasks.json');
        return response.data;
    } catch (error) {
        throw Error('Failed to fetch tasks');
    }
});

export const addTask = createAsyncThunk('tasks/addTask', async (newTask: { completed: boolean; id: number; title: string }) => {
    const response = await axios.post('https://labwork-2a401-default-rtdb.europe-west1.firebasedatabase.app/tasks.json', newTask);
    return response.data;
});

export const toggleTask = createAsyncThunk('tasks/toggleTask', async (taskId: number) => {
    const response = await axios.patch(`https://labwork-2a401-default-rtdb.europe-west1.firebasedatabase.app/tasks/${taskId}.json`, { completed: true });
    return response.data;
});

export const deleteTask = createAsyncThunk('tasks/deleteTask', async (taskId: number) => {
    await axios.delete(`https://labwork-2a401-default-rtdb.europe-west1.firebasedatabase.app/tasks/${taskId}.json`);
    return taskId;
});

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: [] as Task[],
    reducers: {},

});

export default tasksSlice.reducer;
