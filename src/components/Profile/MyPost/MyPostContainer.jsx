import { connect } from 'react-redux';
import { addPostActionCreated, updatePostActionCreated } from '../../../reducer/profile-reduser.js';
import MyPost from './MyPost';


// const MyPostContainer = (props) => {

//   let store = props.store.getState()

//   const addPost = () => { 
//     // const text = newPostElement.current.value;
//     props.store.dispatch(addPostActionCreated());
//     // props.updateTextPost('');  // Обнуляет строку ввода
//   }

//   const onPostChange = (text) => {
//     let action = updatePostActionCreated(text);
//     props.store.dispatch(action)
//   }

//   return (
//     <MyPost updatePostActionCreated={onPostChange} addPost={addPost} post={store.ProfilePage.post} newText={store.ProfilePage.newPostText} />
//   )
// }

const mapStateToProps = (state) => {
  return {
    post: state.ProfilePage.post,
    newText: state.ProfilePage.newPostText
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updatePostActionCreated: (text) => {
      let action = updatePostActionCreated(text);
      dispatch(action)
    },
    addPost: () => {
      dispatch(addPostActionCreated());
    }
  }
}


const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost);

export default MyPostContainer