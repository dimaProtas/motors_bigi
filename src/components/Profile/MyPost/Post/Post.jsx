import React from 'react';
import s from './Post.module.css';
import { AiOutlineHeart } from "react-icons/ai";


const Post = (props) => {
  return (
    <div>
      <div className={ s.item }>
      <img src='https://cdn.flamp.ru/b497df0c38f9d53c49e5c10665326e9c_1920.jpg' alt="ava" />
        <div>
          <div>
            <div className={s.name_user}>{props.name}</div>
            <div>{props.message}</div>
          </div>
          <div className={s.like_icon}>
            <AiOutlineHeart className={s.icon} />
            <div className={ s.num_like }>
              {props.likeCount}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post