export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';

export const incrementCounter = (countInput = 1) => {
  return { type: INCREMENT_COUNTER, payload: countInput }
}

export const decrementCounter = (countInput = 1) => {
  return { type: DECREMENT_COUNTER, payload: countInput }
}