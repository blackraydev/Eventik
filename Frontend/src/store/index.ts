import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import authReducer from './Auth';
import usersReducer from './Users';
import notificationReducer from './Notification';

const reducers = combineReducers({
  authReducer,
  usersReducer,
  notificationReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;

export type IReduxState = ReturnType<typeof reducers>;
export type AppDispatch = typeof store.dispatch;
