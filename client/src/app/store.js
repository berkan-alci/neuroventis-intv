import { configureStore } from '@reduxjs/toolkit';
import { reportsApi } from '../services/reportsApi';
export default configureStore({
    reducer: {
        [reportsApi?.reducerPath]: reportsApi.reducer,
    },
})