import { Link } from "react-router-dom"

export default function logout() {
  return (
    <section>
      <div className="error-center">
        <h1>Log out</h1>
        <Link to={'/'} className="btn btn-primary">
          Go Back Home
        </Link>
      </div>
    </section>
  )
}
