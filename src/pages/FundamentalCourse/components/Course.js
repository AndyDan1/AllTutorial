import React, {memo, useState, useMemo} from 'react';
import classes from '../styles.module.scss';
import PostItem from "./PostItem";
import PostList from "./PostList";
import AllButtonCourse from "../../../component/AllButtonCourse";
import PostForm from "./PostForm";
import AllSelectNoStyle from "../../../component/AllSelectNoStyle";
import MyInput from "../../../component/MyInput";

const Course = () => {

  const [post, setPost] = useState([
    {id: 1, title: 'JavaScript1', body: 'aa'},
    {id: 2, title: 'Phyton1', body: 'cc'},
    {id: 3, title: 'C++', body: 'bb'},
    {id: 4, title: 'Java', body: 'll'}
  ])

  const [select, setSelect] = useState([

    {id: 1, value: 'title', name: 'По названию'},
    {id: 2, value: 'body', name: 'По описанию',},
  ])

  const [selectedSort, setSelectedSort] = useState('')

  const [searchQuery, setSearchQuery] = useState('')

  const sortedPost = useMemo(()=>{
    if(selectedSort){
      return [...post].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
    }
    return post
  },[selectedSort , post])


  const sortedAndSearchPosts = useMemo(()=>{
    return sortedPost.filter(item =>item.title.toLowerCase().includes(searchQuery))
  },[searchQuery , sortedPost])

  const createPost = (newPost) => {
    setPost([...post, newPost])
  }


  const removePost = (id) => {
    setPost(post.filter(item => item.id !== id))
  }


  const sortPost = (sort) => {
    setSelectedSort(sort)
  }

  return (
    <div className={classes.course}>
      <PostForm
        createPost={createPost}
        post={post}
        setPost={setPost}
      />


      <hr/>

      <MyInput
        placeholder={'Поиск....'}
        className={classes.test}
        value={searchQuery}
        onChange={e=>setSearchQuery(e.target.value)}
      />
      <AllSelectNoStyle
        defaultValue={'Сортировка'}
        option={select}
        value={selectedSort}
        sortPost={sortPost}
      />
      {sortedAndSearchPosts.length
        ?
        <PostList
          post={sortedAndSearchPosts}
          postTitle={'Dynamic Title'}
          removePost={removePost}
        />
        :
        <h2>Посты отстутствуют!!!</h2>
      }

    </div>
  );
};

export default memo(Course);