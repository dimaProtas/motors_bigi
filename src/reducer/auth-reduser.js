import userAPI from "../api/api.js";
import {authAPI}  from "../api/api.js";

const SET_AUTH_USER = "SET_AUTH_USER"
const RESET_USER_AUTH_DATA = "RESET_USER_AUTH_DATA"


let initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false
}

const AuthReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_AUTH_USER:
            return {
                ...state, 
                ...action.payload
                }

        case RESET_USER_AUTH_DATA:
            return {
                ...state,
                ...initialState
            }
        
        default:
            return state
    }
}
    
//     if (action.type === SEND_MESSAGE) {
//         let newMessage = {
//             id: 6,
//             user: 'Valera',
//             message: state.new_message,
//         };

//         state.messages.push(newMessage);
//         state.new_message = '' // обнуление строки в state
//     } else if (action.type === UPDATE_MESSAGE) {
//         state.new_message = action.text;
//     }

//     return state
// }

export default AuthReducer

export const authUser = () => {
    return async (dispatch) => {

        const responce = await userAPI.authMe()
            if (responce.data.resultCode === 0) {
                let {id, login, email} = responce.data.data
                dispatch(setAuthUser(id, login, email, true))
            }
    }
}

export const login = (email, password, rememberMe, setStatus) => {
    return async (dispatch) => {
        const responce = await authAPI.loginUser(email, password, rememberMe)
        if (responce.data.resultCode === 0) {
            dispatch(authUser())
        }
        else {
            setStatus(responce.data.messages)
        }
    }
}

export const logout = () => {
    return (dispatch) => {

        authAPI.logout()
        .then(responce => {  // можно писать через .zen, или через async await как написано выше
            if (responce.data.resultCode === 0) {
                dispatch(resetAuthDataAC())
            }
        });

    }
}

//Вывод стрелочной ф-и без return возможен, если функция только возвращает обьекты, после => нужно обернуть в ()
export const setAuthUser = (userId, login, email, isAuth) => ({ type: SET_AUTH_USER, payload: {userId, login, email, isAuth} })
export const resetAuthDataAC = () => {return { type: RESET_USER_AUTH_DATA }}
