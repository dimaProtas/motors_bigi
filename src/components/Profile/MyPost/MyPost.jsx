import React from 'react';
import s from './MyPost.module.css';
import Post from './Post/Post';
import { Formik, Field, Form } from "formik";
import * as Yup from 'yup';


const SignupSchema = Yup.object().shape({
  textarea: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});



const MyPost = React.memo((props) => {

  // Делает проверку на входящие пропсы, и не позволяет КЛАССОВОЙ компоненте рендарится повторно без новых пропсов.
  //Закоментил, потому что эту функцию теперь выполняет PureComponent (class MyPost extends PureComponent {})
  //В функциональной компоненте эту функцию выполняет React.memo
  // shouldComponentUpdate(nextProps, nextState) {
  //   return nextProps !== this.props || nextState !== this.state;
  // }



  //Закоментил, потому что этим теперь занимается Formik, и он использует локальный state
  // const newPostElement = React.createRef();

  // const onAddPost = () => { 
  //   // const text = newPostElement.current.value;
  //   props.addPost();
  //   // props.updateTextPost('');  // Обнуляет строку ввода
  // }

  // const onPostChange = () => {
  //   const text = newPostElement.current.value;
  //   props.updatePostActionCreated(text);
  // }
  return (
    <div>
      {/* <div className={s.posts}>
          My post
          <div>
            <textarea onChange={ onPostChange } value={props.newText } ref={ newPostElement } className={s.input_post} placeholder='your news...'></textarea>
          </div>
          <div>
            <button onClick={ onAddPost }>Send</button>
          </div>
        </div> */}
      <div className={s.posts}>
        <PostForm addPost={props.addPost} onPostChange={props.updatePostActionCreated} />
      </div>
      {[...props.post].reverse().map(p => <Post name={p.name} key={p.id} message={p.message} likeCount={p.likeCount} />)}
    </div>
  )
})


export const PostForm = (props) => {
  return (
    <Formik
      initialValues={{ textarea: "" }}
      onSubmit={async (values) => {
        props.onPostChange(values['textarea'])
        props.addPost()
      }}
      validationSchema={SignupSchema}
    >
      {({ errors, touched }) => (
        <Form>

          <div className={errors.textarea && touched.textarea ? s.errors : null}>
            <Field placeholder='your news...' name='textarea' type='textarea' />
          </div>

          {errors.textarea && touched.textarea ? (
            <div className={s.errors}>
              {errors.textarea}
            </div>
          ) : null}
          <div>
            <button type="submit">Send</button>
          </div>
        </Form>
      )}
    </Formik>
  )
}

export default MyPost