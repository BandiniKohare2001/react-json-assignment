import "./CourcePage.css"
import React from 'react';
import profile from "./asset/profile.jpeg"
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min";

const CoursePage = ({ data }) => {
  return (
    <>
    <div className='poster'>
    <div className="poster-text">
    <p className="poster-swami-name">{data.instructor.name}</p>
      <h1 className="poster-title">{data.course.title}</h1>
    </div>
    <div className="cource-card">
        <b><p>Course fees</p></b>
    <h1>₹{data.course.fee.amount}</h1>
    <button> Register today </button>
    </div>
    </div>
    <div className="main">
    <div className="nav">
       <span>ABOUT</span>
       <span>INSTRUCTOR</span>
       <span>REVIEWS</span>
    </div>
   
        <h2>About the course</h2>
        <p className="">{data.course.about.content}</p>
        <p className="">{data.course.about.content}</p>
        <p className="">{data.course.about.content}</p>
        <p className="">{data.course.about.content}</p>

        <h2>Key topics covered</h2>
        <ol>
            <li>{data.course.key_topics.html_content}</li>
        </ol>
   
       <h2>About the instructor</h2>
       <div className="profile">
        <img src={profile} alt=" profile" />
        <p>{data.about_instructor.html_content}</p>
       </div>
       <div className="review"><h2>{data.testimonial.text}</h2>
       <h3>{data.testimonial.reviewer_name}</h3>
       <p>{data.testimonial.reviewer_designation}</p>
       </div>
    </div>
    </>
  );
};

export default CoursePage;
