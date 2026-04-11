import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";
import Brands from "../components/Brands";

import aboutUsImg1 from "../assets/about-us-img1.png";
import mobileVideo from "../assets/mobile-video.png";
import desktopVideo from "../assets/desktop-video.png";
import teamUser2 from "../assets/team-user-2.png";

const About = () => {
  return (
    <>
      <div className="flex flex-col items-center pt-50 gap-30 lg:grid lg:grid-cols-5 lg:px-15 lg:pt-0">
        <div className="flex flex-col items-center gap-3 px-10 lg:col-span-2 lg:px-0 lg:items-start">
          <p className="hidden lg:flex text-xl font-semibold text-detail-page pb-6">ABOUT COMPANY</p>
          <p className="text-4xl font-bold text-detail-page lg:text-6xl">ABOUT US</p>
          <p className="text-xl text-custom-gray text-center lg:text-start!">
            We know how large objects will act, but things on a small scale just do not act that way.
          </p>
          <button className="bg-sky-500 px-10 py-3 rounded-lg! text-white text-lg!">Get Quote Now</button>
        </div>
        <img src={aboutUsImg1} className="lg:col-span-3 w-full" alt="About Us" />
      </div>

      <div className="flex flex-col items-center px-10 py-25 gap-10 lg:grid lg:grid-cols-5 lg:px-20 lg:gap-20">
        <div className="flex flex-col items-center gap-2 lg:items-start lg:col-span-2">
          <p className="text-danger-color text-lg">Problems trying</p>
          <p className="text-3xl font-bold text-detail-page px-8 text-center lg:p-0 lg:text-start!">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          </p>
        </div>
        <p className="text-custom-gray text-md pt-15 lg:col-span-3 lg:pt-0 lg:text-lg">
          Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
        </p>
      </div>

      <div className="flex flex-col gap-20 px-15 py-30 font-bold lg:flex-row lg:justify-center lg:gap-30">
        <div className="flex flex-col items-center">
          <p className="text-6xl text-detail-page">15K</p>
          <p className="text-custom-gray text-lg">Happy Customers</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-6xl text-detail-page">150K</p>
          <p className="text-custom-gray text-lg">Monthly Visitors</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-6xl text-detail-page">15</p>
          <p className="text-custom-gray text-lg">Countries Worldwide</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-6xl text-detail-page">100+</p>
          <p className="text-custom-gray text-lg">Top Partners</p>
        </div>
      </div>

      <div className="flex items-center justify-center px-8 py-20">
        <img src={mobileVideo} className="rounded-xl lg:hidden" alt="Video Mobile" />
        <img src={desktopVideo} className="hidden lg:flex w-250 rounded-2xl" alt="Video Desktop" />
      </div>

      <div className="flex flex-col items-center px-10 py-20 gap-4">
        <p className="text-5xl text-detail-page font-bold text-center">Meet Our Team</p>
        <p className="text-center text-lg text-custom-gray lg:px-60 lg:pb-16">
          Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
        </p>
        <div className="lg:flex lg:flex-row lg:gap-10 lg:px-20">
          {[1, 2, 3].map((item) => (
            <div key={item} className="flex flex-col items-center pb-18">
              <img src={teamUser2} className="py-3 h-70 object-cover" alt="Team Member" />
              <p className="text-2xl font-bold lg:text-lg">Username</p>
              <p className="text-custom-gray font-semibold">Profession</p>
              <div className="flex flex-row gap-4 text-3xl lg:text-xl lg:gap-3!">
                <FaFacebook className="text-facebook-color" />
                <FaInstagram className="text-instagram-color" />
                <FaTwitter className="text-twitter-color" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-light-gray pt-20">
        <div className="flex flex-col items-center text-center gap-5 px-10 lg:px-70">
          <p className="text-5xl font-bold text-detail-page px-10">Big Companies Are Here</p>
          <p className="text-lg text-custom-gray lg:text-xl">
            Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
          </p>
        </div>
        <Brands />
      </div>
    </>
  );
};

export default About;