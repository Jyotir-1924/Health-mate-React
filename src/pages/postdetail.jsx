import { Link } from 'react-router-dom'
import PostAuthor from '../components/PostAuthor'
import postdetailImg from '../assets/headpost.png'

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
        <h1>Unlocking Inner Peace: Practical Strategies for Enhancing Mental Health</h1>
        <div className="post-detail-img">
          <img src={postdetailImg} alt="" />
        </div>
        <div className="post-detail-para">
          <p>
            In the hustle and bustle of modern life, our mental health often takes a backseat, yet it's arguably more essential than ever to prioritize it. This post recognizes the pressing need for mental well-being and delves deep into practical strategies aimed at enhancing it. Drawing from a wealth of expert insights and real-world experiences, we offer a comprehensive guide to nurturing your mind in today's fast-paced world.
          </p>
          <br />
          <p>
            One key focus is on mindfulness practices, which have gained significant traction in recent years for their ability to ground us in the present moment and alleviate stress. By incorporating mindfulness techniques into your daily routine, such as meditation or deep breathing exercises, you can cultivate a greater sense of calm and clarity amidst the chaos.

            Additionally, we explore various stress management techniques tailored to suit different lifestyles and preferences. Whether it's carving out time for hobbies and relaxation, establishing healthy boundaries, or seeking professional support when needed, we emphasize the importance of finding what works best for you in managing stress effectively.
          </p>
          <br />
          <p>
            Furthermore, building emotional resilience emerges as a crucial component in navigating life's inevitable challenges. We discuss strategies for developing resilience, such as reframing negative thoughts, practicing self-compassion, and fostering supportive relationships. By honing these skills, you can bounce back stronger from setbacks and maintain a more balanced perspective in the face of adversity.

            Ultimately, this post serves as a beacon of hope and guidance for anyone seeking to safeguard their mental well-being amidst the frenetic pace of modern life. By embracing these practical strategies and cultivating a proactive approach to mental health, you can not only weather life's storms but also thrive in the process.
          </p>
        </div>
      </div>
    </section>
  )
}
