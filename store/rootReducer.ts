import { combineReducers } from '@reduxjs/toolkit';
import { reducer as sideBarReducer } from 'src/slices/SideBar';
import {reducer as messengerReducer } from 'src/slices/messenger';

const rootReducer = combineReducers({
  sideBar:sideBarReducer,
  messages: messengerReducer
});

export default rootReducer;
