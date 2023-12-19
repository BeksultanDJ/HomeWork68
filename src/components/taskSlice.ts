import { createSlice } from '@reduxjs/toolkit';

interface Task {
    id: number;
    title: string;
    completed: boolean;
}

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: [] as Task[],
    reducers: {},
});

export default tasksSlice.reducer;
