import React from 'react';
import { Link } from 'react-router-dom';

const WelcomeScreen = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#F7F8F9] p-4">
      <div className='absolute top-[549px] w-full'><h1 className="text-2xl  ml-[20px] w-[231px] h-[69px] font-bold [font:normal_normal_medium_28px/36px_Rubik] tracking-[0px] text-[#1D2226]">Welcome to PopX</h1>
      </div> 
      <div className='absolute top-[592px] left-[10px] w-[232px] h-[48px]'>
      <p className="text-center mb-8 text-[#1D2226] opacity-60">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <Link to="/create-account" className="absolute top-[669px] w-[335px] h-[46px] bg-[#6C25FF] text-[#FFFFFF] text-center px-6 py-2 rounded font-[normal_normal_medium_16px/17px_Rubik] tracking-[0px]">
        Create Account
      </Link>
  
        <Link to="/login" className="absolute top-[725px] w-[335px] h-[46px] bg-[#6C25FF4B] text-[#1D2226] text-center px-6 py-2 rounded font-[normal_normal_medium_16px/17px_Rubik] tracking-[0px]"> Already Registered? Login</Link>
     
    </div>
  );
};

export default WelcomeScreen;