import React from 'react';
import { profiles } from '../data';
import ProfileCard from '../components/ProfileCard';

const Home = () => {
  return (
    <>
      
    <div className='w-full h-max flex flex-wrap'>
    {profiles.map((profile) => (
        <ProfileCard key={profile.name} profile={profile} />
      ))}
    </div>
    </>
  );
};

export default Home;
