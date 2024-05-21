import { useState } from "react"
import { Link } from "react-router-dom"

export default function login() {
  const [userData, setUserData] = useState({
    name: '',
    emailID: '',
  })

  const changeInputHandle = (tag) => {
    setUserData(prevState => {
        return{...prevState, [tag.target.name] : tag.target.value}
    })
  }
  return (
    <section className="login">
      <div className="container register-container form-container">
            <h2>Login</h2>
            <form action="" className="form register-form">
                <p className="form-message">Invalid message !</p>
                <input type="email" name="emailID" placeholder="Email Id" value={userData.emailID} onChange={changeInputHandle} />
                <input type="password" name="password" placeholder="Password" value={userData.password} onChange={changeInputHandle} />
                <button type="submit" className="btn btn-primary">Log In</button>
            </form>
            <medium>Don't have an account ? <Link to={'/register'}>Sign Up</Link></medium>
        </div>
    </section>
  )
}
