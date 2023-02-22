import React from 'react';
import dayjs from 'dayjs';
import { SlArrowRight, SlArrowLeft } from 'react-icons/sl';
import { getDayColor, getDayText } from './utils';
import { ToDoList } from '../hooks/useToDoList';

const columnSize = 40;

const Column = ({
    disabled,
    text,
    color,
    opacity,
    onPress,
    isSelected,
    hasToDo,
}: {
    disabled?: boolean;
    text: number | string;
    color: string;
    opacity: number;
    onPress?: React.MouseEventHandler<HTMLButtonElement>;
    isSelected?: boolean;
    hasToDo?: boolean;
}) => {
    return (
        <button
            disabled={disabled}
            onClick={onPress}
            style={{
                display: 'flex',
                width: `${columnSize}px`,
                height: `${columnSize}px`,
                alignItems: 'center',
                justifyContent: 'center',
                background: isSelected ? '#C2C2C2' : 'transparent',
                borderColor: 'transparent',
                borderRadius: columnSize / 2,
                color: color,
                opacity: opacity,
                fontWeight: hasToDo ? 'bold' : 'normal',
                cursor: disabled ? undefined : 'pointer',
            }}>
            {text}
        </button>
    );
};

const ArrowButton = ({
    iconName,
    onPress,
}: {
    iconName: string;
    onPress?: React.MouseEventHandler<HTMLSpanElement>;
}) => {
    return (
        <button
            style={{
                display: 'flex',
                margin: '30px 40px',
                borderColor: 'transparent',
                background: 'transparent',
                cursor: 'pointer',
            }}
            onClick={onPress}>
            {iconName === 'arrow-right' && <SlArrowRight size="1rem" color="#404040" />}
            {iconName === 'arrow-left' && <SlArrowLeft size="1rem" color="#404040" />}
        </button>
    );
};

export const Calendar = ({
    columns,
    selectedDate,
    toDoList,
    onPressArrow,
    onPressDate,
}: {
    columns: dayjs.Dayjs[];
    selectedDate?: dayjs.Dayjs;
    toDoList: ToDoList[];
    onPressArrow: (direction: 'left' | 'right') => void;
    onPressDate: (date: dayjs.Dayjs) => void;
}) => {
    const CalendarHeader = () => {
        const currentDateText = dayjs(selectedDate).format('YYYY.MM.DD');

        return (
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                {/* YYYY.MM.DD. */}
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <ArrowButton iconName="arrow-left" onPress={() => onPressArrow('left')} />
                    <div
                        style={{
                            display: 'flex',
                            fontSize: 20,
                            color: '#404040',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                        {currentDateText}
                    </div>
                    <ArrowButton iconName="arrow-right" onPress={() => onPressArrow('right')} />
                </div>
                {/* 일 월 화 수 목 금 토 */}
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    {[0, 1, 2, 3, 4, 5, 6].map(day => {
                        const dayText = getDayText(day);
                        const color = getDayColor(day);
                        return (
                            <Column key={`day-${dayText}`} text={dayText} color={color} opacity={1} disabled={true} />
                        );
                    })}
                </div>
            </div>
        );
    };

    const DateColumn = ({ item: date }: { item: dayjs.Dayjs }) => {
        const dateText = dayjs(date).get('date');
        const day = dayjs(date).get('day');
        const color = getDayColor(day);
        const isCurrentMonth = dayjs(date).isSame(selectedDate, 'month');
        const onPress = () => {
            onPressDate(date);
        };
        const isSelected = dayjs(date).isSame(selectedDate, 'date');
        const hasToDo = toDoList.find(toDo => dayjs(toDo.date).isSame(dayjs(date), 'date')) !== undefined;

        return (
            <Column
                text={dateText}
                color={color}
                opacity={isCurrentMonth ? 1 : 0.4}
                onPress={onPress}
                isSelected={isSelected}
                hasToDo={hasToDo}
            />
        );
    };

    const CalendarDate = () => {
        const dates = [];
        let week = [];
        for (const date of columns) {
            week.push(<DateColumn key={'date-' + date} item={date} />);
            if (week.length === 7) {
                dates.push(
                    <div key={'week-' + date} style={{ display: 'flex', flexDirection: 'row' }}>
                        {week}
                    </div>,
                );
                week = [];
            }
        }

        return (
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                {dates}
            </div>
        );
    };

    return (
        <div style={{ marginBottom: '20px' }}>
            <CalendarHeader />
            <CalendarDate />
        </div>
    );
};
