import React, { useEffect } from 'react'
import postHooks from '../../hooks/postHook'
import { useAppSelector } from '../../hooks/reduxHook'
import TaskItem from './TaskItem'

export default function TaskWrapper():JSX.Element {
    const posts = useAppSelector((state => state.posts))
    const {getPostsActionHandler, removePostActionHandler, patchPostActionHandler} = postHooks()
    useEffect(()=>{
     getPostsActionHandler()
    },[])
  return (
    <>
    <h1>ssdf</h1>
    {posts.map((el) => <TaskItem patchHandler={patchPostActionHandler} deleteHandler={removePostActionHandler} key={el.id} post={el}/>)}
    </>
  )
}
