import React from 'react'
import { Link } from 'react-router-dom'
import author1 from '../assets/author1.jpeg'

export default function PostAuthor() {
  return (
    <Link to={`/posts/user/:id`} className='post-author'>
        <div className="post-author-img">
            <img src={author1} alt="" />
        </div>
        <div className="post-author-info">
            <h5>Finn Allen</h5>
            <small>Just now</small>
        </div>
    </Link>
  )
}
