import React from 'react'
import { dummyPosts } from '../data/data'
import { useState } from 'react'
import PostItem from './PostItem'
import Headpost from './Headpost'

export default function Posts() {
  const [posts, setPosts] = useState(dummyPosts)
  return (
    <section className="posts">
      <div className="head-post-area">
        <Headpost />
      </div>
      {
        posts.length > 0 ? 
        <div className="container posts-container">
        {
          posts.map(({id,Image,authorId,category,title,des},index) => <PostItem key={index} Image={Image} category={category} authorId={authorId} title={title} des={des} postId={id}/>)
        }
        </div> :
        <h2 className='error-center'>No posts available.</h2>
      }
        
    </section>
  )
}