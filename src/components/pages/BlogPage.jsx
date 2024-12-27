
import { blogs } from "../../data/blogs";

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
            I hope you like my content and more importantly, it helps you improve your skills....
          </p>
        </div>
        <div className="row-9 mt-4">
          {
            blogs.map( ({ id, title, url, description }) => (
              <div key={ id } className="card">
                <div className="card-body">
                  <h5 className="card-title">{ title }</h5>
                  <a href={ url } className="card-link" target="_blank" rel="noopener noreferrer"> { url } </a>
                  <p className="card-text">{ description }</p>
                </div>
              </div>
            ))
          }
        </div>
        <div className="row-9 mt-4">
          <h2>What's next...</h2>
          <p>  My blog about my experience in a bootcamp is comming soon... </p>
          <p>  Be patient....! :) </p>
        </div>

      </div>
    </div>
  )
}
