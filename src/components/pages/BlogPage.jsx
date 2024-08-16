import { blogs } from "../../data/blogs"
import Card from './../ui/Card';

export const BlogPage = () => {
  return (
    <div className="container-fluid d-flex justify-content-center">
      <div className="col-6  mt-5">
        <div className="row-9">
          <h1 style={{ textAlign : "center"}} className="intro-h1">
            Welcome to my blog
          </h1>
        </div>
        <div className="row-9 mt-4">
          <p> 
            I will be publishing content about quite interesting Software that can be very helpful! 
            I hope you like my content and more importantly, it helps you improve your skills.
          </p>
        </div>
      </div>
    </div>
  )
}
