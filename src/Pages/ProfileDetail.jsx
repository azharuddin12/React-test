import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { profiles } from "../data";

export const ProfileDetail = () => {
  const [profile, setProfile] = useState(null);
  const { username } = useParams();

  useEffect(() => {
    const profileData = profiles.find((p) => p.name === username);
    setProfile(profileData);
  }, [username]);

  if (!profile) {
    return (
      <div className="text-center text-black h-screen flex items-center justify-center">
        <h1 className="text-3xl font-bold">Profile not found</h1>
        <p>We couldn't find a profile for the username "{username}".</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen justify-center items-center  text-black">
      <div className="flex flex-col md:flex-row w-full max-w-6xl p-4 mx-auto">
        <div className="mr-10 flex-shrink-0">
          <img
            className="rounded-lg w-60 h-full"
            src={profile.profileImage}
            alt={profile.name}
          />
        </div>
        <div className="w-full flex flex-col justify-between py-5">
          <h1 className="font-bold text-5xl mb-4">{profile.name}</h1>
          <p className="mb-6 text-gray-900 text-2xl">{profile.description}</p>
          <div id="social" className="flex gap-4 mb-6">
            <a
              rel="noopener"
              target="_blank"
              href="https://github.com/iam-aydin"
            >
              <img
                src="/assets/images/facebook.png"
                width="40px"
                height="40px"
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
                width="40px"
                height="40px"
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
                width="40px"
                height="40px"
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
                src="/assets/images/twitter.png"
                width="40px"
                height="40px"
                alt="Twitter"
                className="hover:scale-105 transition duration-300 ease-in-out"
              />
            </a>
          </div>
          <a
            rel="noopener"
            target="_blank"
            href="https://www.buymeacoffee.com/yourusername"
            className="bg-white-500 rounded-lg p-3 w-max text-black font-bold flex items-center gap-2 hover:bg-green-300 transition duration-300"
          >
            <span>☕ Buy Me a Coffee</span>
          </a>
        </div>
      </div>
    </div>
  );
};
