import { useState } from 'react';
import styled from 'styled-components';

const Title = styled.h1`
    font-size: 1.5em;
    color: palevioletred;
    text-align: center;
    width: 12rem;
`;

const Button = styled.button`
    /* 공통 스타일 */
    display: inline-flex;
    outline: none;
    border: none;
    border-radius: 4px;
    color: white;
    font-weight: bold;
    cursor: pointer;
    padding-left: 1rem;
    padding-right: 1rem;
    justify-content: center;
    align-items: center;
    margin-left: 1rem;

    /* 크기 */
    height: 2.25rem;
    width: 4.5rem;
    font-size: 1rem;

    /* 색상 */
    background: #228be6;
    &:hover {
        background: #339af0;
    }
    &:active {
        background: #1c7ed6;
    }

    /* 기타 */
    & + & {
        margin-left: 1rem;
        margin-right: 1rem;
    }
`;

export const Counter = () => {
    const [count, setCount] = useState(0);

    const onIncrease = () => {
        setCount(prevCount => prevCount + 1);
    };
    const onDecrease = () => {
        setCount(prevCount => prevCount - 1);
    };

    return (
        <>
            <Title>{count}</Title>
            <Button onClick={onIncrease}>+1</Button>
            <Button onClick={onDecrease}>-1</Button>
        </>
    );
};
