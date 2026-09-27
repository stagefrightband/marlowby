import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marlowby | About Us",
  description: "Learn more about us, what we stand for, and what we do.",
  openGraph: {
    title: "Marlowby | About Us",
    description: "Learn more about us, what we stand for, and what we do.",
  },
};

export default function WhatsIncluded() {
  return (
    <div className="animate-fade-in mx-auto my-0 max-w-300 p-[2vh]">
      <div className="mb-[4vh] text-center [&_h1]:mt-0 [&_h1]:text-[2rem] [&_p]:text-[1.2rem] [&_p]:leading-relaxed [&_p]:text-[#555]">
        <h1>About Us</h1>
        <p>Marlowby is a new subscrption service allowing people from all over the United States of America to experience products and cultures from different cities.</p>
      </div>
    </div>
  );
}
