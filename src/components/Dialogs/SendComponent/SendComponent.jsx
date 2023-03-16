import React from 'react';
import style from './SendComponent.module.css';
import { Formik, Field, Form } from "formik";
import * as Yup from 'yup';
 

 const SignupSchema = Yup.object().shape({
  textarea: Yup.string()
     .max(250, 'Too Long!')
     .required('Required'),
 });


const SendComponent = (props) => {

    return (
        <div className={style.send}>
            {/* <textarea onChange={ onMessageChange } value={ props.newMessage.new_message } ref={ newMessage } placeholder='Yours message...'></textarea>
            <button onClick={ sendMessage }>Send</button> */}
            <MessageForm sendMessage={props.sendMessage} onMessageChange={props.onMessageChange} />
        </div>
    )
}

export const MessageForm = (props) => {

    return (
        <Formik
        initialValues={{ textarea: '' }}
        onSubmit={async (values) => {
          props.onMessageChange(values['textarea'])
          props.sendMessage()
        }}
        validationSchema={SignupSchema}
      >
        {({ errors, touched }) => (
        <Form>
            {errors.textarea && touched.textarea ? (
             <div className={style.errors}>{errors.textarea}</div>
           ) : null}
            <div className={errors.textarea && touched.textarea ? style.errors : null}>
                <Field placeholder='Yours message...' name='textarea' type='textarea' />
            </div>
            
            <div>
                <button type="submit">Send</button>
            </div>
        </Form>
        )}
        </Formik>
    )
}

export default SendComponent;