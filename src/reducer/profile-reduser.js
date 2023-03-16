import {profileAPI} from "../api/api.js"

const ADD_POST = "ADD-POST"
const UPDATE_POST = "UPDATE-POST"
const SET_USER_PROFILE = "SET_USER_PROFILE"
const SET_STATUS = "SET_STATUS"
const DELETE_POST = "DELETE_POST"

let initialState = {
    post: [
        { id: 1, name: 'Dima', message: "Hy, how are you?", likeCount: 14 },
        { id: 2, name: 'Dima', message: "I not Bot!", likeCount: 76 },
        { id: 3, name: 'Dima', message: "My first post", likeCount: '6k' },
    ],
    newPostText: '',
    profile: null,
    status: ''
}

export const ProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                name: 'Dima',
                message: state.newPostText,
                likeCount: 0,
            };

            return {
                ...state,
                newPostText: '',
                post: [...state.post, newPost]
            };
        case UPDATE_POST:
            return {
                ...state,
                newPostText: action.text,
            };
        case SET_USER_PROFILE:
            return{
                ...state, 
                profile: action.profile
            };

        case SET_STATUS:
            return{
                ...state, 
                status: action.status
            };

        case DELETE_POST:
            return{
                ...state, 
                post: state.post.filter(p => p.id !== action.postId)
            };

        default:
            return state;
    }
}
            //Переделали под switch
//     if (action.type === ADD_POST) {
//         let newPost = {
//             id: 5,
//             name: 'Dima',
//             message: state.newPostText,
//             likeCount: 0,
//         };

//         state.post.push(newPost);
//         state.newPostText = '' // обнуление строки в state

//     } else if (action.type === UPDATE_POST) {
//         state.newPostText = action.text;
//     } 
 
//     return state;
// }

export default ProfileReducer


export const profileUser = (userId) => {
    return async (dispatch) => {
        const response = await profileAPI.profile(userId)
        dispatch(setUserProfile(response.data));
    }
}

export const getStatus = (userId) => {
    return async (dispatch) => {
        const response = await profileAPI.getStatus(userId)
        dispatch(setStatus(response.data));
    }
}

export const updateUserStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status)
        .then(response => { // использумем .then, но можно async await как писал выше(короче код)
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status));
            }
          });

    }
}




//Вывод стрелочной ф-и без return возможен, если функция только возвращает обьекты, после => нужно обернуть в ()
export const addPostActionCreated = () => ({ type: ADD_POST })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile: profile })
export const updatePostActionCreated = (text) => ({ type: UPDATE_POST, text: text })
export const setStatus = (status) => ({ type: SET_STATUS, status: status })
export const deletePost = (postId) => ({ type: DELETE_POST, postId  })

