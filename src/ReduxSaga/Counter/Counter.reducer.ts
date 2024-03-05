import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../RootReducer';
import {PersistConfig, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Define a type for the slice state
interface CounterState {
  value: number;
}

// Define the initial state using that type
const initialState: CounterState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    incrementSaga: () => {},
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

const persistConfig: PersistConfig<ReturnType<typeof counterSlice.reducer>> = {
  key: 'counter',
  storage: AsyncStorage,
  whitelist: ['value'],
};

export const CounterActions = counterSlice.actions;
export const CounterReducer = persistReducer(
  persistConfig,
  counterSlice.reducer,
);

// Other code such as selectors can use the imported `RootState` type
export const CounterReducerSelectors = {
  selectCount: (state: RootState) => state.counter.value,
};
