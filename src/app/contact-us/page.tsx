import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marlowby | Contact Us",
  description: "Contact us to get more information!",
  openGraph: {
    title: "Marlowby | Contact Us",
    description: "Contact us to get more information!",
  },
};

export default function ContactUs() {
  return (
    <>
      <h1 className="animate-fade-in text-center text-3xl">
        Contact Us
      </h1>
      <div className="flex flex-row justify-center items-start gap-[4vh] p-[2vh] bg-[#f0f0f0] rounded-[1.5649vh] shadow-[0_0.626vh_1.252vh_rgba(0,0,0,0.1)] slide-in">
        <div className="w-[45%] bg-[#ffffff] p-[2vh] rounded-[1.252vh] flex flex-col animate-fade-in">
          <h2 className="w-fit max-w-full wrap-break-word text-xl md:text-2xl lg:text-3xl text-center mb-[1vh] self-center">Email Us/Customer Support</h2>
          <a
            className="w-fit max-w-full wrap-break-word text-xs md:text-sm lg:text-base text-center self-center underline"
            href="mailto:stagefrightbandemail@gmail.com"
          >
            stagefrightbandemail@gmail.com
          </a>
        </div>
        <form className="w-[45%] bg-[#ffffff] p-[2vh] rounded-[1.252vh] flex flex-col animate-fade-in">
          <h2>Bookings</h2>
          <div className="flex flex-col items-start gap-[0.5vh] mb-[1vh] p-[1vh] rounded-[0.7825vh] border-[0.1565vh] border-solid border-black">
            <label className="text-base text-[#555] mb-[0.5vh]" htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              autoComplete="name"
              className="text-base transition-[border-color] duration-300 p-[0.8vh] rounded-[0.7825vh] border-[0.1565vh] border-solid border-[#ccc] box-border w-full md:w-auto resize-y focus:border-gray-500"
              required
            />
          </div>
          <div className="flex flex-col items-start gap-[0.5vh] mb-[1vh] p-[1vh] rounded-[0.7825vh] border-[0.1565vh] border-solid border-black">
            <label className="text-base text-[#555] mb-[0.5vh]" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              autoComplete="email"
              className="text-base transition-[border-color] duration-300 p-[0.8vh] rounded-[0.7825vh] border-[0.1565vh] border-solid border-[#ccc] box-border w-full md:w-auto resize-y focus:border-gray-500"
              required
            />
          </div>
          <div className="flex flex-col items-start gap-[0.5vh] mb-[1vh] p-[1vh] rounded-[0.7825vh] border-[0.1565vh] border-solid border-black">
            <label className="text-base text-[#555] mb-[0.5vh]" htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              required
              className="h-[15.6495vh] text-base transition-[border-color] duration-300 p-[0.8vh] rounded-[0.7825vh] border-[0.1565vh] border-solid border-[#ccc] box-border w-full md:w-auto resize-y focus:border-gray-500"
            ></textarea>
          </div>
          <button type="submit" className="bg-[#aa0404] text-white px-[2.5vh] py-[0.8vh] border-none rounded-[0.7825vh] cursor-pointer text-base transition-colors duration-300 hover:bg-[#ff5722]">Submit</button>
        </form>
      </div>
    </>
  );
};