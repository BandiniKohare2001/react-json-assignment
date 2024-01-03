// src/App.js
import React from 'react';
import CoursePage from './CoursePage';

const App = () => {
 
  const data = require('./data.json');

  return (
    <div>
      <CoursePage data={data} />
    </div>
  );
};

export default App;
