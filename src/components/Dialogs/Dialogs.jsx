import React from 'react';
import s from './Dialogs.module.css';
import MessagesUser from './Messages/Messages.jsx';
import DialogItem from './DialogsItem/DialogItem.jsx';
import SendComponent from './SendComponent/SendComponent.jsx'


const Dialogs = (props) => {
    const sendMessages = props.MessagesPage.messages.map(m => <MessagesUser message={m.message} key={m.id} user={m.user} />)
    const dialogElements = props.MessagesPage.users.map(u => <DialogItem id={u.id} key={u.id} name={u.name} />) //вынес map, но можно и внутри писать
    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogElements}
                </div>
                <div className={s.messages}>
                    {sendMessages}
                </div>
            </div>
            <div>
                <SendComponent newMessage={props.MessagesPage} store={props.store} sendMessage={props.sendMessage} 
                onMessageChange={props.onMessageChange} />
            </div>
        </div>
    )
}

export default Dialogs;