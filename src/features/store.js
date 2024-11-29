import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from './api/userSlice';
import authSlice from "./auth/authSlice"
import { adminApi } from './admin/adminApi';

const store = configureStore({
  reducer: {
    [userSlice.reducerPath]: userSlice.reducer, 
    [adminApi.reducerPath]: adminApi.reducer,
    auth:authSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userSlice.middleware).concat(adminApi.middleware), 
});

const initializeApp = async()=>{
    await store.dispatch(userSlice.endpoints.loadUser.initiate({},{forceRefetch:true}));
}

initializeApp();

export default store;
