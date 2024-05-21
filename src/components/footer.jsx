import React from 'react'
import { Link } from 'react-router-dom'

export default function footer() {
  return (
    // <div>
    //     Footer
    // </div>
    <footer>
        <div className="container footer-container">
            <ul className="footer-categories">
                <li><Link to={'/posts/categories/:Motivation'}>Motivation</Link></li>
                <li><Link to={'/posts/categories/:Peace'}>Peace</Link></li>
                <li><Link to={'/posts/categories/:Ideas'}>Ideas</Link></li>
                <li><Link to={'/posts/categories/:Thoughts'}>Thoughts</Link></li>
                <li><Link to={'/posts/categories/:Happiness'}>Happiness</Link></li>
                <li><Link to={'/posts/categories/:Positive'}>Positive</Link></li>
            </ul>
            <div className="footer-copyright">
                <small> CSE 445 ETP</small>
            </div>
        </div>
    </footer>
  )
}
