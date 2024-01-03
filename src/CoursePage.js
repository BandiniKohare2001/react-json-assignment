import "./CourcePage.css"
import React from 'react';
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
    <div>
       
     
    </div>
    </>
  );
};

export default CoursePage;
