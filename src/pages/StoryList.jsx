import { useQueries } from '@tanstack/react-query';
import Story from './Story';

const fetchStory = async (id) => {
  const response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
  return response.json();
};

const StoryList = ({ storyIds, searchTerm }) => {
  const storyQueries = useQueries({
    queries: storyIds.map(id => ({
      queryKey: ['story', id],
      queryFn: () => fetchStory(id),
    })),
  });

  const stories = storyQueries
    .filter(query => query.data && query.data.title.toLowerCase().includes(searchTerm.toLowerCase()))
    .map(query => query.data);

  return (
    <div className="space-y-4">
      {stories.map(story => (
        <Story key={story.id} story={story} />
      ))}
    </div>
  );
};

export default StoryList;