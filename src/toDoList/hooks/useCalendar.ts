import { useState } from 'react';
import dayjs from 'dayjs';

export const useCalendar = (now: dayjs.Dayjs) => {
    const [selectedDate, setSelectedDate] = useState(now);

    const onPressArrow = (direction: 'left' | 'right') => {
        const newSelectedDate =
            direction === 'left' ? dayjs(selectedDate).subtract(1, 'month') : dayjs(selectedDate).add(1, 'month');
        setSelectedDate(newSelectedDate);
    };

    return {
        selectedDate,
        setSelectedDate,
        onPressArrow,
    };
};
