import React from 'react';

const teamVideos = [
  { name: 'Jane Smith', videoUrl: '...' },
  // More videos
];

const MeetTheTeamVideos = () => (
  <div className="team-videos">
    {teamVideos.map((video, index) => (
      <div key={index} className="team-video">
        <h4>{video.name}</h4>
        <video src={video.videoUrl} controls />
      </div>
    ))}
  </div>
);

export default MeetTheTeamVideos;
