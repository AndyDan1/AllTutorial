import React, {memo,useState} from 'react';
import classes from '../styles.module.scss';
import AllButtonCourse from "../../../component/AllButtonCourse";

const PostForm = ({createPost,setPost , post}) => {
  const[titleValue,setTitleValue]=useState('')
  const[bodyValue,setBodyValue]=useState('')

  const addPost = (e)=>{
    e.preventDefault()
    if((titleValue ==='')||(bodyValue==='')){
      return null
    }
const newPost= {
        id:Date.now(),
        title:titleValue,
        body: bodyValue
      }
    createPost(newPost)
     // setPost([
     //  ...post,
     //  {
     //    id:Date.now(),
     //    title:titleValue,
     //    body: bodyValue
     //  }])

    setTitleValue('')
    setBodyValue('')
  }
  return (
    <form>
      <input
        placeholder='Название поста'
        type="text"
        value={titleValue}
        onChange={(e) => setTitleValue(e.target.value)}
      />
      <input
        placeholder='Описание поста'
        type="text"
        value={bodyValue}
        onChange={(e) => setBodyValue(e.target.value)}
      />
      <AllButtonCourse
        bgGreen
        className={classes.btn}
        onClick={addPost}
      >
        Добавить пост
      </AllButtonCourse>
    </form>
  );
};

export default memo(PostForm);