import { Link } from "react-router-dom"

export default function logout() {
  return (
    <section>
      <div className="error-center">
        <h1>Logged out !</h1>
        <Link to={'/login'} className="btn btn-primary">
          Login
        </Link>
      </div>
    </section>
  )
}
