import dayjs from 'dayjs';
import AddToDoInput from './components/AddToDoInput';
import { Calendar } from './components/Calendar';
import { getCalendarColumns } from './components/utils';
import { useCalendar } from './hooks/useCalendar';
import { useToDoList } from './hooks/useToDoList';

export const ToDoList = () => {
    const now = dayjs();
    const { selectedDate, setSelectedDate, onPressArrow } = useCalendar(now);
    const { toDoList, filteredToDoList, input, setInput, addToDo, removeToDo, toggleToDo, resetInput } =
        useToDoList(selectedDate);
    const columns = getCalendarColumns(selectedDate);
    const onPressDate = (date: dayjs.Dayjs) => {
        setSelectedDate(date);
    };
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    };
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        addToDo();
        resetInput();
    };

    return (
        <>
            <Calendar
                columns={columns}
                selectedDate={selectedDate}
                onPressArrow={onPressArrow}
                onPressDate={onPressDate}
            />
            <AddToDoInput
                value={input}
                onChange={onChange}
                placeholder={`${dayjs(selectedDate).format('MM.DD')}에 추가할 ToDo`}
                onSubmit={onSubmit}
            />
        </>
    );
};
