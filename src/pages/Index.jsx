import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Input } from "@/components/ui/input";
import StoryList from './StoryList';
import SkeletonPlaceholder from './SkeletonPlaceholder';

const fetchTopStories = async () => {
  const response = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json');
  const storyIds = await response.json();
  return storyIds.slice(0, 100);
};

const Index = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { data: storyIds, isLoading, error } = useQuery({
    queryKey: ['topStories'],
    queryFn: fetchTopStories
  });

  if (error) {
    return <div className="text-center text-red-500">Error fetching stories. Please try again later.</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Hacker News Top 100 Stories</h1>
      <Input
        type="text"
        placeholder="Search stories..."
        className="mb-6"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {isLoading ? (
        <SkeletonPlaceholder />
      ) : (
        <StoryList storyIds={storyIds} searchTerm={searchTerm} />
      )}
    </div>
  );
};

export default Index;