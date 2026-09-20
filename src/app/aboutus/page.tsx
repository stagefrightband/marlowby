import "@/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marlowby | About Us",
  description: "Learn more about us, what we stand for, and what we do.",
  openGraph: {
    title: "Marlowby | About Us",
    description: "Learn more about us, what we stand for, and what we do.",
  },
};

const AboutUs: React.FC = () => {
  return (
    <div className="aboutus-container fade-in">
      <div className="about-section">
        <h1>About Us</h1>
        <p className="about-section-text">
          Marlowby is a new subscrption service allowing people from all over
          the United States of America to experience products and cultures from
          different cities.
        </p>
      </div>
    </div>
  );
};
export default AboutUs;
