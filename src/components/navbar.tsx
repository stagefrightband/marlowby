const Navbar: React.FC = () => {
  const publicUrl = process.env.PUBLIC_URL || "";

  return (
    <header className="">
      <nav className="hidden rounded-lg relative z-1000 mb-[2vh] md:flex h-16 items-center justify-between bg-[#333] px-[3.13vh] py-0 [&>a]:float-left [&>a]:flex [&>a]:h-full [&>a]:items-center [&>a]:justify-center [&>a]:px-[2.504vh] [&>a]:py-0 [&>a]:text-center [&>a]:text-base [&>a]:text-[#f2f2f2] [&>a]:no-underline [&>a:hover]:bg-[#ddd] [&>a:hover]:text-black">
        <a href="/">
          <img
            src={`${publicUrl}/Media/FrightTitleIcon.webp`}
            alt="Marlowby Logo"
            className="box-content m-[0.313vh] h-[7.825vh] w-[7.825vh] p-[1.565vh]"
          />
        </a>
        <a className="grow" href="/aboutus">About Us</a>
        <a className="grow" href="/contactus">Contact Us</a>
        <a className="grow" href="/whatsincluded">Whats Included</a>
        <a className="grow" href="/subscriptionplans">Subscription Plans</a>
        <a className="grow" href="/featuredcities">Featured Cities</a>
        <a href="/settings">
          <img
            src={`${publicUrl}/Media/accessibilityicon.webp`}
            alt="Accessibility Settings"
            className="h-[10vh] w-[10vh]"
          />
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
