import { Link } from 'react-router-dom'
import PostAuthor from '../components/PostAuthor'
import postdetailImg from '../assets/image1.jpeg'

export default function postdetail() {
  return (
    <section>
      <div className="container post-detail-container">
        <div className="post-detail-top">
          <PostAuthor />
          <div className="post-detail-button">
            <Link to={'/posts/werwer/edit'} className='btn btn-sm btn-primary'>
              Edit
            </Link>
            <Link to={'/posts/werwer/delete'} className='btn btn-sm btn-danger'>
              Delete
            </Link>
          </div>
        </div>
        <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, nesciunt.</h1>
        <div className="post-detail-img">
          <img src={postdetailImg} alt="" />
        </div>
        <div className="post-detail-para">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto tempore recusandae nulla, ipsa cumque libero, ducimus temporibus asperiores consequatur nihil quam labore sunt quidem maiores nam pariatur excepturi veritatis! Nostrum.
            Accusamus recusandae laboriosam nostrum officia vitae ullam optio deserunt cupiditate! Aliquid quia eligendi rerum ut delectus illo illum maiores quisquam minima blanditiis consectetur ducimus doloremque necessitatibus corporis repudiandae, reiciendis unde.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto tempore recusandae nulla, ipsa cumque libero, ducimus temporibus asperiores consequatur nihil quam labore sunt quidem maiores nam pariatur excepturi veritatis! Nostrum.
            Accusamus recusandae laboriosam nostrum officia vitae ullam optio deserunt cupiditate! Aliquid quia eligendi rerum ut delectus illo illum maiores quisquam minima blanditiis consectetur ducimus doloremque necessitatibus corporis repudiandae, reiciendis unde.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto tempore recusandae nulla, ipsa cumque libero, ducimus temporibus asperiores consequatur nihil quam labore sunt quidem maiores nam pariatur excepturi veritatis! Nostrum.
            Accusamus recusandae laboriosam nostrum officia vitae ullam optio deserunt cupiditate! Aliquid quia eligendi rerum ut delectus illo illum maiores quisquam minima blanditiis consectetur ducimus doloremque necessitatibus corporis repudiandae, reiciendis unde.
          </p>
        </div>
      </div>
    </section>
  )
}
