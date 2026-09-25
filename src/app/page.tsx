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
    <div className="flex flex-col items-center relative z-1 pt-12 p-[2vh] zoom-in">
      <div className="bg-[black] pt-[3vh] pb-[2vh] px-[2vh] rounded-[1.252vh]">
        <h1 className="text-[white] bg-[black] text-[2.5rem] text-center m-0 rounded-[1.252vh]">Welcome to Marlowby!</h1>
      </div>
      </div>
  );
};

export default MainPage;
