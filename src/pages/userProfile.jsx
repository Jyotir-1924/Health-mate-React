import { Link } from 'react-router-dom'
import author2 from '../../src/assets/author2.jpeg'
import { FaRegEdit } from "react-icons/fa";
import { useState } from 'react';
import { FaCheckCircle } from "react-icons/fa";

export default function userProfile() {

  const [profileImage,setProfileImage] = useState('')

  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [currPassword, setCurrPassword] = useState()
  const [newPassword, setNewPassword] = useState()
  const [confirmPassword, setConfirmPassword] = useState()

  return (
    <section>
      <div className="container form-container profile-container">
        <Link to={'/myposts/:id'}>My Posts</Link>
        <div className="profile-details">
          <div className="profile-wrapper">
            <div className="profile-image">
              <img src={author2} alt="" />
            </div>
            <form className="profile-image-form">
              <input type="file" name='profile-image' id='profile-image' accept='png,jpg,jpeg' onChange={tag => setProfileImage(tag.target.files[0])}/>
              <label htmlFor="profile-image"></label>
              {/* <FaRegEdit /> */}
            </form>
            <button className="profile-image-button">
            <FaCheckCircle />
            </button>
          </div>
          <h2>Christine P.</h2>
          <form action="" className="form profile-data-form">
                {/* <p className="form-message">Invalid message !</p> */}
                <input type="text" name="name" placeholder="Full Name" value={name} onChange={tag => setName(tag.target.value)} />
                <input type="email" name="email" placeholder="Email Id" value={email} onChange={tag => setEmail(tag.target.value)} />
                <input type="password" name="currPassword" placeholder="Current password" value={currPassword} onChange={tag => setCurrPassword(tag.target.value)} />
                <input type="password" name="newPassword" placeholder="New password" value={newPassword} onChange={tag => setNewPassword(tag.target.value)} />
                <input type="password" name="confirmPassword" placeholder="Confirm password" value={confirmPassword} onChange={tag => setConfirmPassword(tag.target.value)} />
                <button type="submit" className="btn btn-primary">Update profile</button>
            </form>
        </div>
      </div>
    </section>
  )
}
