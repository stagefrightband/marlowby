import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marlowby | Home Page",
  description: "The main page of our website, where you can access all our resources.",
  openGraph: {
    title: "Marlowby | Home Page",
    description: "The main page of our website, where you can access all our resources.",
  },
};

export default function MainPage() {
  return (
    <div className="animate-fade-in relative z-1 flex flex-col items-center p-[2vh] pt-12">
      <div className="rounded-[1.252vh] bg-[black] px-[2vh] pt-[3vh] pb-[2vh]">
        <h1 className="m-0 rounded-[1.252vh] bg-[black] text-center text-[2.5rem] text-[white]">Welcome to Marlowby!</h1>
      </div>
    </div>
  );
}
