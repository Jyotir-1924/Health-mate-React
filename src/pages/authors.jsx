import { useState } from "react"
import { authorData } from "../data/data"
import { Link } from "react-router-dom"

export default function author() {
    const [author, setAuthor] = useState(authorData)
    return(
        <section className="author">
                {author.length > 0 ? <div className="container author-container">
                    {
                        author.map(({id,Image,name,posts}, index)=>{
                            return <Link to={`/posts/user/${id}`} key={index} className="author-avatar">
                                <div className="author-image">
                                    <img src={Image} alt="" />
                                </div>
                                <div className="author-info">
                                    <h4>{name}</h4>
                                    <p>{posts} posts.</p>
                                </div>
                            </Link>
                        })
                    }
                </div>
                :
                <h2>User not found.</h2>
            }
        </section>
    )
}
