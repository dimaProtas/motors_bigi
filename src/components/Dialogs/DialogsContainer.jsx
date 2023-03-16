import React from 'react';
import Dialogs from './Dialogs';
import { sendMessageActionCreated, updateMessageActionCreated } from '../../reducer/dialogs-reduser.js';
import { connect } from 'react-redux';
import withAuthRedirectComponent from '../../hoc/withAuthRedirectComponent.jsx';
import { compose } from "redux";



// const DialogsContainer = (props) => {

//     let store = props.store.getState()

//     const sendMessage = () => {
//         // const text = newPostElement.current.value;
//         props.store.dispatch(sendMessageActionCreated());
//         // props.updateTextPost('');  // Обнуляет строку ввода
//     }

//     const onMessageChange = (text) => {
//         props.store.dispatch(updateMessageActionCreated(text));
//     }

//     return (
//         <Dialogs MessagesPage={store.MessagesPage} sendMessage={sendMessage} onMessageChange={onMessageChange} />
//     )
// }


//Используем react-redux
let mapStateToProps = (state) => {
    return {
        MessagesPage: state.MessagesPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageActionCreated());
        },
        onMessageChange: (text) => {
            dispatch(updateMessageActionCreated(text));
        }
    }
}
//сделал HOC компонет который оборачивает компонент и редиректит его
//этот код не нужен, так как теперь оборачивает compose
// let AuthRedirectComponent = withAuthRedirectComponent(Dialogs)


//connect позволяет передавать пропсы в компоненту
//этот код не нужен, так как теперь оборачивает compose
// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default compose (
    withAuthRedirectComponent,
    connect(mapStateToProps, mapDispatchToProps)
) (Dialogs)