import dayjs from 'dayjs';
import AddTodoInput from './components/AddTodoInput';
import { Calendar } from './components/Calendar';
import { TodoItem } from './components/TodoItem';
import { getCalendarColumns } from './components/utils';
import { useCalendar } from './hooks/useCalendar';
import { useTodoList } from './hooks/useTodoList';

export const TodoList = () => {
    const now = dayjs();
    const { selectedDate, setSelectedDate, onPressArrow } = useCalendar(now);
    const { todoList, filteredTodoList, input, setInput, addTodo, removeTodo, toggleTodo, resetInput } =
        useTodoList(selectedDate);
    const columns = getCalendarColumns(selectedDate);
    const onPressDate = (date: dayjs.Dayjs) => {
        setSelectedDate(date);
    };
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    };
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        addTodo();
        resetInput();
    };

    return (
        <>
            <Calendar
                columns={columns}
                selectedDate={selectedDate}
                onPressArrow={onPressArrow}
                onPressDate={onPressDate}
                todoList={todoList}
            />
            <AddTodoInput
                value={input}
                onChange={onChange}
                placeholder={`${dayjs(selectedDate).format('MM.DD')}에 추가할 Todo`}
                onSubmit={onSubmit}
            />
            {filteredTodoList.map(todo => (
                <TodoItem key={'Todo-' + todo.id} item={todo} removeTodo={removeTodo} toggleTodo={toggleTodo} />
            ))}
        </>
    );
};
