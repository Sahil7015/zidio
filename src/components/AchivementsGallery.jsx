import React from 'react';

const achievements = [
  { title: 'Best Company Award', year: '2021', imageUrl: '...' },
  // More achievements
];

const AchievementsGallery = () => (
  <div className="achievements-gallery">
    {achievements.map((achievement, index) => (
      <div key={index} className="achievement">
        <img src={achievement.imageUrl} alt={achievement.title} />
        <h4>{achievement.title}</h4>
        <p>{achievement.year}</p>
      </div>
    ))}
  </div>
);

export default AchievementsGallery;
