const SEND_MESSAGE = "SEND_MESSAGE"
const UPDATE_MESSAGE = "UPDATE_MESSAGE"

let initialState = {
    users: [
        { id: 1, name: "Dima" },
        { id: 2, name: "Ira" },
        { id: 3, name: "Petr" },
        { id: 4, name: "Vasiliy" },
        { id: 5, name: "Evgeniy" },
        { id: 6, name: "Alex" },
        { id: 7, name: "Yriy" },
    ],
    messages: [
        { id: 1, user: 'Dima', message: "Hi" },
        { id: 2, user: 'Ira', message: "Nice dekaration object" },
        { id: 3, user: 'Dima', message: "How are Your?" },
        { id: 4, user: 'Ira', message: "By" },
    ],
    new_message: '',
    nav_friends: [
        {id: 1, name: 'Dima', photo: 'https://cdn.flamp.ru/b497df0c38f9d53c49e5c10665326e9c_1920.jpg'},
        {id: 2, name: 'Ira', photo: 'https://sun9-4.userapi.com/impg/2E9MSQpcUX0r_MdCm_fVrsDcmKxvP50eso14xg/gxwZe7QU8KU.jpg?size=604x604&quality=95&sign=b0cebdf4ac651de7d636d928dd242196&type=album'},
        {id: 3, name: 'Petr', photo: 'https://i.pinimg.com/originals/39/3d/f1/393df1b167dfe31ee22081e6cafdaf62.jpg'},
    ]
}

export const DialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE: {
            let newMessage = {
                id: 6,
                user: 'Valera',
                message: state.new_message,
            };

            return {
                ...state,
                messages: [...state.messages, newMessage],
                new_message: '',
            }
        }
        case UPDATE_MESSAGE: {
            return {
                ...state,
                messages: [...state.messages],
                new_message: action.text,
            }
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

export default DialogsReducer

//Вывод стрелочной ф-и без return возможен, если функция только возвращает обьекты, после => нужно обернуть в ()
export const sendMessageActionCreated = () => ({ type: SEND_MESSAGE })
export const updateMessageActionCreated = (text) => ({ type: UPDATE_MESSAGE, text: text })