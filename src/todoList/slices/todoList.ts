import { createSlice } from '@reduxjs/toolkit';
import { TodoList } from '../hooks/useTodoList';

const initialState: TodoList[] = [];
const todoListSlice = createSlice({
    name: 'todoList',
    initialState,
    reducers: {
        addTodo(state, action) {
            state.push(action.payload.newTodo);
        },
        removeTodo(state, action) {
            return state.filter(todo => todo.id !== action.payload.id);
        },
        toggleTodo(state, action) {
            return state.map(todo => {
                if (todo.id !== action.payload.id) {
                    return todo;
                }

                return {
                    ...todo,
                    isSuccess: !todo.isSuccess,
                };
            });
        },
    },
    // extraReducer는 비동기 액션 생성시 필요
    // extraReducers: builder => {},
});

export default todoListSlice;
