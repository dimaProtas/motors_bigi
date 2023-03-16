import React from 'react';
import style from './Messages.module.css'


const MessagesUser = (props) => {
    return (
        <div className={style.message}>
            <div>
                <img src='https://cdn.flamp.ru/b497df0c38f9d53c49e5c10665326e9c_1920.jpg' />
            </div>
            <div>{props.message}</div>
        </div>
    )
}


export default MessagesUser;