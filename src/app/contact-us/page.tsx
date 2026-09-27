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
      <h1 className="animate-fade-in text-center text-3xl">Contact Us</h1>
      <div className="slide-in flex flex-row items-start justify-center gap-[4vh] rounded-[1.5649vh] bg-[#f0f0f0] p-[2vh] shadow-[0_0.626vh_1.252vh_rgba(0,0,0,0.1)]">
        <div className="animate-fade-in flex w-[45%] flex-col rounded-[1.252vh] bg-[#ffffff] p-[2vh]">
          <h2 className="mb-[1vh] w-fit max-w-full self-center text-center text-xl wrap-break-word md:text-2xl lg:text-3xl">Email Us/Customer Support</h2>
          <a className="w-fit max-w-full self-center text-center text-xs wrap-break-word underline md:text-sm lg:text-base" href="mailto:stagefrightbandemail@gmail.com">
            stagefrightbandemail@gmail.com
          </a>
        </div>
        <form className="animate-fade-in flex w-[45%] flex-col rounded-[1.252vh] bg-[#ffffff] p-[2vh]">
          <h2>Bookings</h2>
          <div className="mb-[1vh] flex flex-col items-start gap-[0.5vh] rounded-[0.7825vh] border-[0.1565vh] border-solid border-black p-[1vh]">
            <label className="mb-[0.5vh] text-base text-[#555]" htmlFor="name">
              Name
            </label>
            <input type="text" id="name" name="name" autoComplete="name" className="box-border w-full resize-y rounded-[0.7825vh] border-[0.1565vh] border-solid border-[#ccc] p-[0.8vh] text-base transition-[border-color] duration-300 focus:border-gray-500 md:w-auto" required />
          </div>
          <div className="mb-[1vh] flex flex-col items-start gap-[0.5vh] rounded-[0.7825vh] border-[0.1565vh] border-solid border-black p-[1vh]">
            <label className="mb-[0.5vh] text-base text-[#555]" htmlFor="email">
              Email
            </label>
            <input type="email" id="email" name="email" autoComplete="email" className="box-border w-full resize-y rounded-[0.7825vh] border-[0.1565vh] border-solid border-[#ccc] p-[0.8vh] text-base transition-[border-color] duration-300 focus:border-gray-500 md:w-auto" required />
          </div>
          <div className="mb-[1vh] flex flex-col items-start gap-[0.5vh] rounded-[0.7825vh] border-[0.1565vh] border-solid border-black p-[1vh]">
            <label className="mb-[0.5vh] text-base text-[#555]" htmlFor="message">
              Message
            </label>
            <textarea id="message" name="message" required className="box-border h-[15.6495vh] w-full resize-y rounded-[0.7825vh] border-[0.1565vh] border-solid border-[#ccc] p-[0.8vh] text-base transition-[border-color] duration-300 focus:border-gray-500 md:w-auto"></textarea>
          </div>
          <button type="submit" className="cursor-pointer rounded-[0.7825vh] border-none bg-[#aa0404] px-[2.5vh] py-[0.8vh] text-base text-white transition-colors duration-300 hover:bg-[#ff5722]">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}