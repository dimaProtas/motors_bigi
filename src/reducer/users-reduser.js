import userAPI from '../api/api.js';
import updateObjectInArray from '../utils/object-halpers.js'

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT"
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS"


let initialState = {
    users: [ ],
    pageSize: 10,
    totalCountUsers: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}

const UsersReducer = (state = initialState, action) => {

    switch (action.type) {

        case FOLLOW:
            return {
                ...state, 
                users: updateObjectInArray(state.users, action.userID, "id", {followed: true})
                // users: state.users.map(u => {
                //     if (u.id === action.userID) {
                //         return {...u, followed: true}
                //     }
                //     return u
                // })
                }
        case UNFOLLOW:
            return {
                ...state, 
                users: updateObjectInArray(state.users, action.userID, "id", {followed: false}) 
                // Заменил код вспомогательной функцией, которая работает автоматически
                // users: state.users.map(u => {
                //     if (u.id === action.userID) {
                //         return {...u, followed: false}
                //     }
                //     return u
                // })
                }
        case SET_USERS:
            return {
                ...state,
                users: [...action.users], //...state.users, убрал потому что дублируются пользователи
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage,
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalCountUsers: action.count,
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching,
            }
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching 
                ? [...state.followingInProgress, action.userID]
                : state.followingInProgress.filter(id => id !== action.userID),
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

export default UsersReducer

//здесь код thunk(инкапсулировали код из User.jsx b UserContainer.jsx)
export const selectorUsers = (currentPage, pageSize) => {
    return async (dispatch) => {

        dispatch(toggelIsFetching(true))
        const data = await userAPI.getUser(currentPage, pageSize)
        dispatch(toggelIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
        dispatch(setCurrentPage(currentPage))
    }
}


const followunfollow = async (dispatch, userID, apiMethod, actionCreated) => { // рефакторинг обьеденил две функции в одну
    dispatch(toggelFollowingProgress(true, userID))

    let response = await apiMethod(userID)

    if (response.data.resultCode === 0) {
        dispatch(actionCreated(userID)) 
    }
    dispatch(toggelFollowingProgress(false, userID));
}


export const unfollow = (userID) => {
    return async (dispatch) => {
        followunfollow(dispatch, userID, userAPI.unfollow.bind(userAPI), unfollowSuccess)
    }
}
export const follow = (userID) => {
    return async (dispatch) => {
        followunfollow(dispatch, userID, userAPI.follow.bind(userAPI), followSuccess)
    }
}


//Вывод стрелочной ф-и без return возможен, если функция только возвращает обьекты, после => нужно обернуть в ()
export const followSuccess = (userID) => ({ type: FOLLOW, userID })
export const unfollowSuccess = (userID) => ({ type: UNFOLLOW, userID })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setTotalUsersCount = (TotalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, count: TotalUsersCount })
export const toggelIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })
export const toggelFollowingProgress = (isFetching, userID) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userID })
