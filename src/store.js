import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import NewsReducer from "./NewsPage/NewsReducer";
import AuthReducer from "./LoginPage/auth-reducer";
import { reducer as formReducer } from 'redux-form'


let reducers = combineReducers({
        news: NewsReducer,
        auth: AuthReducer,
        form: formReducer
})


let store = createStore(reducers, applyMiddleware(thunk))


export default store