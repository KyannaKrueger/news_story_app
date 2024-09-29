import React, { useState } from 'react';
import Story from './components/Story'; 
import sampleNews from './sample_news_stories.json'; 

const App = () => {
  const [stories, setStories] = useState(sampleNews.results);

  const removeStory = (id) => {
    const updatedStories = stories.filter((_, index) => index !== id); 
    setStories(updatedStories);
  };

  return (
    <body>
      <div id="root">
        <div className="App">
          <h1>Random News Feed</h1>
          <div className="news-app">
            {stories.map((story, index) => (
              <Story
                key={index}
                story={story}
                removeStory={() => removeStory(index)}
              />
            ))}
          </div>
        </div>
        </div>
      </body>
  );
};

export default App;
