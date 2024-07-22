import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUpCircle, ExternalLink } from "lucide-react";

const Story = ({ story }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <a href={story.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
            {story.title}
          </a>
          <span className="flex items-center text-sm text-muted-foreground">
            <ArrowUpCircle className="mr-1 h-4 w-4" />
            {story.score}
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Button variant="outline" size="sm" asChild>
          <a href={story.url} target="_blank" rel="noopener noreferrer" className="flex items-center">
            Read more <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </CardContent>
    </Card>
  );
};

export default Story;