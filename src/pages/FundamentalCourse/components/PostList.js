import React, {memo} from 'react';
import classes from '../styles.module.scss';
import PostItem from "./PostItem";

const PostList = ({post,postTitle,removePost}) => {
  return (
    <>
      <h2>dynamic : {postTitle}</h2>
      {post.map((item , index) =>
        <PostItem
          key={item.id}
          index={index}
          id={item.id}
          title={item.title}
          body={item.body}
          removePost={removePost}
        />
      )}

    </>
  );
};

export default memo(PostList);