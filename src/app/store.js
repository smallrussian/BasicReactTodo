import { configureStore,  } from '@reduxjs/toolkit';
import  todoReducer  from '../features/todo/todoSlice';
import contactReducer from '../features/contact/contactSlice';


export const store = configureStore({
  reducer: {
    todo: todoReducer,
  contact: contactReducer
  },
  

});
