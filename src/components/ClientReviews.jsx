import React from 'react';

const reviews = [
  { client: 'ABC Corp', project: 'Website Development', testimonial: 'Amazing work!' },
  // More reviews
];

const ClientReviews = () => (
  <div className="client-reviews">
    {reviews.map((review, index) => (
      <div key={index} className="review">
        <h4>{review.client}</h4>
        <p>{review.project}</p>
        <p>{review.testimonial}</p>
      </div>
    ))}
  </div>
);

export default ClientReviews;
