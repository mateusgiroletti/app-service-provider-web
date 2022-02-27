import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const reducers = () => {
    const persistedReducer = persistReducer(
        {
            key: 'gobarber',
            storage,
            whitelist: ['auth', 'user'],
        },
        reducers
    );

    return persistedReducer;
};

export default reducers;