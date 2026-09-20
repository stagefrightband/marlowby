import "@/globals.css";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Marlowby | Home Page',
  description: 'The main page of our website, where you can access all our resources.',
  openGraph: {
    title: 'Marlowby | Home Page',
    description: 'The main page of our website, where you can access all our resources.',
  },
};

const MainPage: React.FC = () => {
  return (
    <div className="mainpage-container zoom-in">
      <div className="welcome-text-container">
        <h1 className="mainpage-text">Welcome to Marlowby!</h1>
      </div>
      </div>
  );
};

export default MainPage;
