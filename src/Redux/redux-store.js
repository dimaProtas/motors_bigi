import {applyMiddleware, compose, combineReducers, createStore} from 'redux';
import ProfileReducer from '../reducer/profile-reduser.js';
import DialogsReducer from '../reducer/dialogs-reduser.js';
import UsersReducer from '../reducer/users-reduser.js';
import AuthReducer from '../reducer/auth-reduser.js';
import thunkMiddleware from 'redux-thunk';
import AppReducer from '../reducer/app-reduser.js';

let redusers = combineReducers({
    ProfilePage: ProfileReducer,
    MessagesPage: DialogsReducer,
    UsersPage: UsersReducer,
    auth: AuthReducer,
    app: AppReducer,

});


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(redusers, composeEnhancers(applyMiddleware(thunkMiddleware)));

//Добавил и установил applyMiddleware(thunkMiddleware), для работы thunk
// let store = createStore(redusers, applyMiddleware(thunkMiddleware));


export default store