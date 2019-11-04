import api from "../api";

export const SUCCESS_LOGIN = 'SUCCESS_LOGIN';
export const SUCCESS_ERROR = 'SUCCESS_ERROR';

const initState = {
    error: null,
    isAuth: false
};

const AuthReducer = (state = initState, action) => {
    switch (action.type) {
        case SUCCESS_LOGIN: {
            return {
                ...state,
                isAuth: action.data
            }
        }
        case SUCCESS_ERROR:{
            return {
                ...state,
                isAuth: action.data.isAuth,
                error: action.data.messages
            }
        }
        default:
            return {...state}
    }
};
export const SuccessLogin = (data) => {
    return {type: SUCCESS_LOGIN, data}
};
export const SuccessError = (data) => {
    return {type: SUCCESS_ERROR, data}
};

export const logIn = (username, password) => async (dispatch) => {
debugger
    const res = await api.login(username, password)
        if (res.isAuth){
            debugger
            localStorage.setItem('name',JSON.stringify({isAuth:true}));
            dispatch(SuccessLogin(res.isAuth))
        }else {
            dispatch(SuccessError(res))
        }
};
export const logOut = () => async (dispatch) => {
    const res = await api.logout()
    if (!res.isAuth){
        localStorage.removeItem('name');
        debugger
        dispatch(SuccessLogin(res.isAuth))
    }
};

export default AuthReducer