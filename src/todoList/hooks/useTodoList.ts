import { useState } from 'react';
import { useSelector } from 'react-redux';
import dayjs from 'dayjs';
import { useAppDispatch } from '../store';
import { RootState } from '../store/reducer';
import todoSlice from '../slices/todoList';

export interface TodoList {
    id: number;
    content: string;
    date: dayjs.Dayjs;
    isSuccess: boolean;
}

export const useTodoList = (selectedDate: dayjs.Dayjs) => {
    const dispatch = useAppDispatch();
    const todoList = useSelector((state: RootState) => state.todoList);
    // const [todoList, setTodoList] = useState<TodoList[]>([]);
    const [input, setInput] = useState('');

    const addTodo = () => {
        const lastId = todoList.length === 0 ? 0 : todoList[todoList.length - 1].id;
        dispatch(
            todoSlice.actions.addTodo({
                newTodo: {
                    id: lastId + 1,
                    content: input,
                    date: selectedDate,
                    isSuccess: false,
                },
            }),
        );
        // const newTodoList: TodoList[] = [
        //     ...todoList,
        //     {
        //         id: lastId + 1,
        //         content: input,
        //         date: selectedDate,
        //         isSuccess: false,
        //     },
        // ];
        // setTodoList(newTodoList);
    };
    const removeTodo = (todoId: number) => {
        dispatch(
            todoSlice.actions.removeTodo({
                id: todoId,
            }),
        );
        // const newTodoList = todoList.filter(todo => todo.id !== todoId);
        // setTodoList(newTodoList);
    };
    const toggleTodo = (todoId: number) => {
        dispatch(
            todoSlice.actions.toggleTodo({
                id: todoId,
            }),
        );
        // const newTodoList = todoList.map(todo => {
        //     if (todo.id !== todoId) {
        //         return todo;
        //     }
        //     return {
        //         ...todo,
        //         isSuccess: !todo.isSuccess,
        //     };
        // });
        // setTodoList(newTodoList);
    };
    const resetInput = () => {
        setInput('');
    };
    const filteredTodoList = todoList.filter(todo => {
        const isSameDate = dayjs(todo.date).isSame(selectedDate, 'date');

        return isSameDate;
    });

    return {
        todoList,
        filteredTodoList,
        input,
        setInput,
        addTodo,
        removeTodo,
        toggleTodo,
        resetInput,
    };
};
