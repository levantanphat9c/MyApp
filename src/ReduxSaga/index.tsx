import {configureStore} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import sagas from './RootSagas';
import {RootState, reducers} from './RootReducer';
import {PersistConfig, persistReducer, persistStore} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const sagaMiddleware = createSagaMiddleware();

const persistConfig: PersistConfig<RootState> = {
  storage: AsyncStorage,
  key: 'root',
  whitelist: [],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(sagaMiddleware),
});
sagaMiddleware.run(sagas);

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch; // Export a hook that can be reused to resolve types

export const persistor = persistStore(store);
