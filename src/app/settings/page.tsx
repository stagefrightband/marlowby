import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marlowby | Settings",
  description: "Adjust settings on our website to make your viewing experience more enjoyable.",
  openGraph: {
    title: "Marlowby | Settings",
    description: "Adjust settings on our website to make your viewing experience more enjoyable.",
  },
};
export default function Settings() {
  const profileItems = [
    { id: 2, title: "Setting 2", text: "Setting 2" },
    { id: 3, title: "Setting 3", text: "Setting 3" },
    { id: 4, title: "Setting 4", text: "Setting 4" },
  ];
  return (
    <div className="animate-fade-in mx-auto my-0 max-w-300 p-[2vh]">
      <div className="mb-[4vh] text-center [&_h1]:mt-0 [&_h1]:text-[2rem] [&_p]:text-[1.2rem] [&_p]:leading-relaxed [&_p]:text-[#555]">
        <h1>Setting 1</h1>
        <p>Setting 1 Text</p>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-[2vh]">
        {profileItems.map((item) => (
          <div key={item.id} className="animate-fade-in mb-[2vh] rounded-[1.565vh] border-[0.156vh] border-solid border-gray-400 bg-[#f9f9f9] p-[2vh] text-center transition-all duration-300 ease-in-out hover:translate-y-[-0.7825vh] hover:shadow-[0_0.626vh_1.8779vh_rgba(0,0,0,0.1)]">
            <h2 className="mb-[0.5vh] text-2xl">{item.title}</h2>
            <p className="text-base text-[#666]">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
