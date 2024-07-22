import { Home } from "lucide-react";
import Index from "./pages/Index.jsx";
import ArticleIframe from "./pages/ArticleIframe.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Article",
    to: "/article/:id",
    page: <ArticleIframe />,
    hidden: true, // Hide from navigation
  },
];