import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marlowby | What's Included",
  description: "Learn about what is included with our different subscriptions.",
  openGraph: {
    title: "Marlowby | What's Included",
    description:
      "Learn about what is included with our different subscriptions.",
  },
};
const AboutUs: React.FC = () => {
  return (
    <div className="aboutus-container animate-fade-in">
      <div className="about-section">
        <h1>Whats Included 1</h1>
        <p className="about-section-text">Whats Included 1</p>
      </div>
      <div className="profiles-grid">
        <div className="profile animate-fade-in">
          <h2>Whats Included 2</h2>
          <p className="profile-text">Whats Included 2</p>
        </div>
        <div className="profile animate-fade-in">
          <h2>Whats Included 3</h2>
          <p className="profile-text">Whats Included 3</p>
        </div>
        <div className="profile animate-fade-in">
          <h2>Whats Included 4</h2>
          <p className="profile-text">Whats Included 4</p>
        </div>
      </div>
    </div>
  );
};
export default AboutUs;
