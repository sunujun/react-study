import dayjs from 'dayjs';
import { Calendar } from './components/Calendar';
import { getCalendarColumns } from './components/utils';
import { useCalendar } from './hooks/useCalendar';

export const ToDoList = () => {
    const now = dayjs();
    const { selectedDate, setSelectedDate, onPressArrow } = useCalendar(now);
    const columns = getCalendarColumns(selectedDate);
    const onPressDate = (date: dayjs.Dayjs) => {
        setSelectedDate(date);
    };

    return (
        <Calendar columns={columns} selectedDate={selectedDate} onPressArrow={onPressArrow} onPressDate={onPressDate} />
    );
};
