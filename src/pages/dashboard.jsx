import { dummyPosts } from "../data/data"
import { useState } from "react"
import { Link } from "react-router-dom";

export default function dashboard() {
  const [posts, setPosts] = useState(dummyPosts);
  return (
    <section className="dashboard">
    {
      posts.length > 0 ? 
      <div className="container dashboard-container">
      {
        posts.map(({id,Image,authorId,category,title,des},index) => {
          return <article key={index} className="dashboard-post">
            <div className="dashboard-post-info">
              <div className="dashboard-post-img">
                <img src={Image} alt="" />
              </div>
              <h4>{title}</h4>
            </div>
            <div className="dashboard-post-action">
              <Link to={`/posts/${authorId}`} className="btn btn-sm btn-primary">View</Link>
              <Link to={`/posts/${authorId}/edit`} className="btn btn-sm btn-primary">Edit</Link>
              <Link to={`/posts/${authorId}/delete`} className="btn btn-sm btn-danger">Delete</Link>
            </div>
          </article>
        })
      }
      </div> :
      <h2 className='error-center'>No posts available.</h2>
    }
    </section>
  )
}
