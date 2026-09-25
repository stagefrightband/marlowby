import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marlowby | Featured Cities",
  description: "Learn more about featured cities we think you'll enjoy!",
  openGraph: {
    title: "Marlowby | Featured Cities",
    description: "Learn more about featured cities we think you'll enjoy!",
  },
};

const AboutUs: React.FC = () => {
  return (
    <div className="aboutus-container animate-fade-in">
      <div className="about-section">
        <h1>City 1</h1>
        <p className="about-section-text">City 1</p>
      </div>
      <div className="profiles-grid">
        <div className="profile animate-fade-in">
          <h2>City 2</h2>
          <p className="profile-text">City 2</p>
        </div>
        <div className="profile animate-fade-in">
          <h2>City 3</h2>
          <p className="profile-text">City 3</p>
        </div>
        <div className="profile animate-fade-in">
          <h2>City 4</h2>
          <p className="profile-text">City 4</p>
        </div>
      </div>
    </div>
  );
};
export default AboutUs;
