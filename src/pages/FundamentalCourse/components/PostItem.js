import React, {memo} from 'react';
import classes from '../styles.module.scss';
import AllButtonCourse from "../../../component/AllButtonCourse";

// const PostItem = ({post}) => {
const PostItem = ({id,body,title,index,removePost}) => {
  return (
    <div className={classes.post}>
      <div className={classes.post_content}>
        <strong>{index+1}.{title}</strong>
        <p>{body}</p>
      </div>
      <div className={classes.post_btn}>
        <AllButtonCourse
          bgRed
          className={classes.btn}
          onClick={()=>removePost(id)}
        >
          Удалить
        </AllButtonCourse>
        {/*<AllButtonCourse*/}
        {/*  bgRed*/}
        {/*  className={classes.btn}*/}
        {/*  onClick={()=>removePost(id)}*/}
        {/*>*/}
        {/*  изменить*/}
        {/*</AllButtonCourse>*/}
        {/*<AllButtonCourse*/}
        {/*  bgRed*/}
        {/*  className={classes.btn}*/}
        {/*  onClick={()=>removePost(id)}*/}
        {/*>*/}
        {/*  Поднять*/}
        {/*</AllButtonCourse>*/}
        {/*<AllButtonCourse*/}
        {/*  bgRed*/}
        {/*  className={classes.btn}*/}
        {/*  onClick={()=>removePost(id)}*/}
        {/*>*/}
        {/*  Опустить*/}
        {/*</AllButtonCourse>*/}
      </div>
    </div>
  );
};

export default memo(PostItem);