import { Link } from "react-router-dom"
import PostAuthor from "./PostAuthor"

export default function PostItem({postId,Image,authorId,category,title,des}) {

    const trimTitle = title.length > 30 ? title.substr(0,30) + '...' : title
    const trimDes = des.length > 150 ? des.substr(0,150) + '...' : des


  return (
    <article className="post">
        <div className="post-image">
            <img src={Image} alt="" />
        </div>
            <div className="post-content">
                <Link to={`posts/${postId}`}>
                    <h3>{trimTitle}</h3>
                </Link>
                <p>
                    {trimDes}
                </p>
                <div className="post-footer">
                    <PostAuthor />
                    <Link to={`/posts/categories/${category}`} className="btn btn-category">{category}</Link>
                </div>
            </div>
    </article>
  )
}