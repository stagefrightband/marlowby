import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marlowby | Featured Cities",
  description: "Learn more about featured cities we think you'll enjoy!",
  openGraph: {
    title: "Marlowby | Featured Cities",
    description: "Learn more about featured cities we think you'll enjoy!",
  },
};

export default function FeaturedCities() {
    const profileItems = [
    { id: 2, title: "Featured City 2", text: "Featured City 2" },
    { id: 3, title: "Featured City 3", text: "Featured City 3" },
    { id: 4, title: "Featured City 4", text: "Featured City 4" },
  ];
  return (
    <div className="max-w-300 mx-auto my-0 p-[2vh] animate-fade-in">
      <div className="text-center mb-[4vh] [&_h1]:text-[2rem] [&_h1]:mt-0 [&_p]:text-[1.2rem] [&_p]:leading-relaxed [&_p]:text-[#555]">
        <h1>Featured City 1</h1>
        <p>Featured City 1 Text</p>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-[2vh] ">
       {profileItems.map((item) => (
        <div key={item.id} className="rounded-[1.565vh] border-[0.156vh] border-solid border-gray-400 p-[2vh] text-center mb-[2vh] bg-[#f9f9f9] transition-all duration-300 ease-in-out hover:translate-y-[-0.7825vh] hover:shadow-[0_0.626vh_1.8779vh_rgba(0,0,0,0.1)] animate-fade-in">
          <h2 className="text-2xl mb-[0.5vh]">{item.title}</h2>
          <p className="text-base text-[#666]">{item.text}</p>
        </div>
      ))}
      </div>
    </div>
  );
};

