import React from 'react';

const jobs = [
  { title: 'Frontend Developer', description: 'React.js expert required', applyUrl: '...' },
  // More jobs
];

const JobListings = () => (
  <div className="job-listings">
    {jobs.map((job, index) => (
      <div key={index} className="job">
        <h4>{job.title}</h4>
        <p>{job.description}</p>
        <a href={job.applyUrl}>Apply Now</a>
      </div>
    ))}
  </div>
);

export default JobListings;
