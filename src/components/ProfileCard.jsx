import React from "react";
import { Link } from "react-router-dom";
const ProfileCard = ({ profile }) => {
  return (
    <div className="max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-white shadow-xl rounded-lg text-gray-900">
      <div className="rounded-t-lg h-32 overflow-hidden">
        <img
          className="object-cover object-top w-full"
          src={profile.background} // Set dynamic background image
          alt="Background"
        />
      </div>
      <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
        <img
          className="object-cover object-center h-32"
          src={profile.profileImage} // Set dynamic profile image
          alt={profile.name}
        />
      </div>
      <div className="text-center mt-2">
        <h2 className="font-semibold text-2xl">{profile.name}</h2>{" "}
        {/* Set dynamic name */}
        <p className="my-3 text-blue-950">{profile.profession}</p>
        <p className="text-gray-500 px-4">{profile.description}</p>
      </div>
      <div id="social" className="flex justify-between mb-6 w-full px-20 my-5 ">
        <a rel="noopener" target="_blank" href="https://github.com/iam-aydin">
          <img
            src="/assets/images/facebook.png"
            width="30px"
            height="30px"
            alt="GitHub"
            className="hover:scale-105 transition duration-300 ease-in-out"
          />
        </a>
        <a
          rel="noopener"
          target="_blank"
          href="https://www.linkedin.com/in/aydin-vesali-moghaddam-82a860275/"
        >
          <img
            src="/assets/images/linkedin.png"
            width="30px"
            height="30px"
            alt="LinkedIn"
            className="hover:scale-105 transition duration-300 ease-in-out"
          />
        </a>

        <a
          rel="noopener"
          target="_blank"
          href="https://www.instagram.com/your_instagram_handle/"
        >
          <img
            src="/assets/images/instagram.png"
            width="30px"
            height="30px"
            alt="Instagram"
            className="hover:scale-105 transition duration-300 ease-in-out"
          />
        </a>
        <a
          rel="noopener"
          target="_blank"
          href="https://twitter.com/ichbinaydin"
        >
          <img
            src="/assets/images/youtube.png"
            width="30px"
            height="30px"
            alt="Twitter"
            className="hover:scale-105 transition duration-300 ease-in-out"
          />
        </a>
        <a
          rel="noopener"
          target="_blank"
          href="https://twitter.com/ichbinaydin"
        >
          <img
            src="/assets/images/twitter.png"
            width="30px"
            height="30px"
            alt="Twitter"
            className="hover:scale-105 transition duration-300 ease-in-out"
          />
        </a>
      </div>
      <div className="p-4 bord mx-8 mt-2">
        <Link to={`/profile/${profile.name}`}>
          <button className="w-max px-10 block mx-auto rounded-md bg-[#3D7793] hover:shadow-lg font-semibold text-white p-4">
            View Profile
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProfileCard;
