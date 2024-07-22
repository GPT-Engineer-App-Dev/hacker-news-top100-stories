import { Outlet, useLocation } from "react-router-dom";

const Layout = () => {
  const location = useLocation();
  const isArticlePage = location.pathname.startsWith('/article/');

  return (
    <main className={`min-h-screen w-full flex ${isArticlePage ? 'flex-col' : ''}`}>
      <Outlet />
    </main>
  );
};

export default Layout;