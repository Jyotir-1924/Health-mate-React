import React from 'react'
import { Link } from 'react-router-dom'

export default function error() {
  return (
    <section>
        <div className="error-center">
            <h2>404</h2>
            <h3>Page not found.</h3>
            <Link to={'/'} className='btn btn-primary' >Back to home</Link>
        </div>
    </section>
  )
}
