// import { configureStore } from '@reduxjs/toolkit'
import {configureStore} from '@reduxjs/toolkit';
import counterReducer from './features/CounterSlice';
import { logger } from './middleware/logger';
// import logger from 'redux-logger';
 export const store = configureStore({
    reducer:{
        // connect counterSlice
        counter:counterReducer,
    },
//    package middleware ... 

    // middleware: (getDefaultMiddleware) =>
    //     getDefaultMiddleware().concat(logger)
// 


// custome middleware 
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(logger)
})
// middlewares 

// type script 
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch