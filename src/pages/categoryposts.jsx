import React from 'react'
import { dummyPosts } from '../data/data'
import { useState } from 'react'
import PostItem from '../components/PostItem'


export default function categoryposts() {
  const [posts, setPosts] = useState(dummyPosts)
  return (
    <section className="category-posts">
      <h1 className='page-title'>Category Posts</h1>
      {
        posts.length > 0 ? 
        <div className="container category-posts-container">
        {
          posts.map(({id,Image,authorId,category,title,des},index) => <PostItem key={index} Image={Image} category={category} authorId={authorId} title={title} des={des} postId={id}/>)
        }
        </div> :
        <h2 className='error-center'>No posts available.</h2>
      }
        
    </section>
  )
}
