import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { Link } from "react-router-dom";

const fetchStory = async (id) => {
  const response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
  return response.json();
};

const ArticleIframe = () => {
  const { id } = useParams();
  const { data: story, isLoading, error } = useQuery({
    queryKey: ['story', id],
    queryFn: () => fetchStory(id),
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading article</div>;

  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-between items-center p-4 bg-background border-b">
        <h2 className="text-xl font-semibold">{story.title}</h2>
        <Button variant="ghost" size="icon" asChild>
          <Link to="/">
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </Link>
        </Button>
      </div>
      <iframe
        src={story.url}
        className="flex-grow w-full"
        title={story.title}
      />
    </div>
  );
};

export default ArticleIframe;