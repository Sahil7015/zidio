import React from 'react';

const teamMembers = [
  { name: 'John Doe', role: 'CEO', expertise: 'Business Strategy', videoUrl: '...' },
  // More team members
];

const TeamProfiles = () => (
  <div className="team-profiles">
    {teamMembers.map((member, index) => (
      <div key={index} className="team-member">
        <h4>{member.name}</h4>
        <p>{member.role}</p>
        <p>{member.expertise}</p>
        <video src={member.videoUrl} controls />
      </div>
    ))}
  </div>
);

export default TeamProfiles;
