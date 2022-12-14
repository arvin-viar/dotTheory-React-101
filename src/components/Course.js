import React from 'react';
import StarRating from './StarRating';

const Course = ({url, name, desc}) => {
  return (
    <div className="card">
      <div>
        <img src={url} alt={name} />
      </div>
      <h2>{ name }</h2>
      <p>{ desc }</p>
      <h3>Course Rating</h3>
      {/* A self-contained star rating component */}
      <StarRating />
    </div>
  );
}

export default Course;
