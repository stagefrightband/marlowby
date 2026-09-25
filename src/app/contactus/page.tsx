import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marlowby | Contact Us",
  description: "Contact us to get more information!",
  openGraph: {
    title: "Marlowby | Contact Us",
    description: "Contact us to get more information!",
  },
};

const ContactUs: React.FC = () => {
  return (
    <>
      <h1 className="animate-fade-in" style={{ textAlign: "center", fontSize: "2rem" }}>
        Contact Us
      </h1>
      <div className="flex flex-row justify-center items-start gap-[4vh] p-[2vh] bg-[#f0f0f0] rounded-[1.5649vh] shadow-[0_0.626vh_1.252vh_rgba(0,0,0,0.1)] slide-in">
        <div className="w-[45%] bg-[#ffffff] p-[2vh] rounded-[1.252vh] flex flex-col animate-fade-in">
          <h2 className="text-3xl text-center mb-[1vh] self-center">Email Us/Customer Support</h2>
          <a
            className="text-base text-center self-center underline"
            href="mailto:stagefrightbandemail@gmail.com"
          >
            stagefrightbandemail@gmail.com
          </a>
        </div>
        <div className="w-[45%] bg-[#ffffff] p-[2vh] rounded-[1.252vh] flex flex-col animate-fade-in [&>div]:flex [&>div]:flex-col [&>div]:items-start [&>div]:gap-[0.5vh] [&>div]:mb-[1vh] [&>div]:p-[1vh] [&>div]:rounded-[0.7825vh] [&>div]:border-[0.1565vh] [&>div]:border-solid [&>div]:border-black [&_label]:text-base [&_label]:text-[#555] [&_label]:mb-[0.5vh] [&_input]:text-base [&_input]:transition-[border-color] [&_input]:duration-300 [&_input]:p-[0.8vh] [&_input]:rounded-[0.7825vh] [&_input]:border-[0.1565vh] [&_input]:border-solid [&_input]:border-[#ccc] [&_input]:resize-y focus:[&_input]:border-gray-500">
          <h2>Bookings</h2>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              autoComplete="name"
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              autoComplete="email"
              required
            />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              required
              className="h-[15.6495vh]"
            ></textarea>
          </div>
          <button type="submit" className="bg-[#aa0404] text-white px-[2.5vh] py-[0.8vh] border-none rounded-[0.7825vh] cursor-pointer text-base transition-colors duration-300 hover:bg-[#ff5722]">Submit</button>
        </div>
      </div>
    </>
  );
};
export default ContactUs;
