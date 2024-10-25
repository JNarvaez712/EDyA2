import  { DECREMENT, INCREMENT_BY } from './actionTypes';

export const decrement = () => ({
    type: DECREMENT,
})

export const incrementBy = () => ({
    type: INCREMENT_BY,
    payload: value,
})