import React from 'react';

const milestones = [
  { year: '2010', event: 'Zidio founded' },
  { year: '2015', event: 'First major project completed' },
  // More milestones
];

const Timeline = () => (
  <div className="timeline">
    {milestones.map((milestone, index) => (
      <div key={index} className="milestone">
        <h3>{milestone.year}</h3>
        <p>{milestone.event}</p>
      </div>
    ))}
  </div>
);

export default Timeline;
