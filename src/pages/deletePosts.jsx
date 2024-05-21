import { Link } from "react-router-dom"

export default function deletePosts() {
  return (
    <section>
      <div className="error-center">
        <h1>Deleted</h1>
        <Link to={'/'} className="btn btn-primary">
          Go Back Home
        </Link>
      </div>
    </section>
  )
}
