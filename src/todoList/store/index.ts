import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import rootReducer from './reducer';

const store = configureStore({
    reducer: rootReducer,
});

// 타입스크립트에서 쓰기 위한 wrapper
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
