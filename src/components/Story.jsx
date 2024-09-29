import React from 'react';

const Story = ({ story, removeStory }) => {
  const { image_url, link, creator, description, title } = story;

  return (
    <div className="feed">
      <div className="story">
        <span className="delete" onClick={removeStory}>x</span>
        <div className="story_header">
          <div className="story_image">
            <img
              src={image_url ? image_url : 'https://placehold.co/125x100'}
              alt={title}
              className="story_image"
            />
          </div>
          <h2>
            <a href={link} target="_blank" rel="noopener noreferrer" className="story_title">
              {title}
            </a>
            <span className="story_creator">By: {creator ? creator.join(', ') : 'Unknown Author'}</span>
          </h2>
        </div>
        <p className="description">{description}</p>
      </div>
    </div>
  );
};

export default Story;

