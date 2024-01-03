import "./CourcePage.css"
import React from 'react';

const CoursePage = ({ data }) => {
  return (
    <>
    {/* <div className='poster'>


    </div> */}
    <div>
      <h1>{data.course.title}</h1>
     
    </div>
    </>
  );
};

export default CoursePage;
