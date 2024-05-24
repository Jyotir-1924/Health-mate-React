import { useState } from "react"
import { Link } from "react-router-dom"



export default function register() {

  const [userData, setUserData] = useState({
    name: '',
    emailID: '',
    password: '',
    matchPassword: '',
  })

  const changeInputHandle = (tag) => {
    setUserData(prevState => {
        return{...prevState, [tag.target.name] : tag.target.value}
    })
  }
  return (
    <section className="register">
        <div className="container register-container form-container">
            <h2>Sign Up</h2>
            <form action="" className="form register-form">
                {/* <p className="form-message">Invalid message !</p> */}
                <input type="text" name="name" placeholder="Full name" value={userData.name} onChange={changeInputHandle} />
                <input type="email" name="emailID" placeholder="Email Id" value={userData.emailID} onChange={changeInputHandle} />
                <input type="password" name="password" placeholder="Password" value={userData.password} onChange={changeInputHandle} />
                <input type="password" name="matchPassword" placeholder="Confirm Password" value={userData.matchPassword} onChange={changeInputHandle} />
                <Link to={'/'} className="link-center">
                  <button type="submit" className="btn btn-primary">Sign Up</button>
                </Link>
            </form>
            <medium>Already have an account ? <Link to={'/login'}>Sign In</Link></medium>
        </div>
    </section>
  )
}
