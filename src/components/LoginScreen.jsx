import React from 'react';
import { Link } from 'react-router-dom';

const LoginScreen = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#F7F8F9] p-4">
      <div className='absolute top-[40px] w-full'><h1 className="text-2xl  ml-[20px] w-[188px] h-[69px] font-bold [font:normal_normal_medium_28px/36px_Rubik] tracking-[0px] text-[#1D2226]">Signin to your PopX account</h1>
      </div>
      <div className='absolute top-[123px] left-[20px] w-[232px] h-[48px]'>
      <p className='text-[#1D2226] opacity-60'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
    </div>
      <form className="w-full max-w-xs">
      <div className='mb-4 absolute top-[204px]'>
         <div className='relative'>
          <label className="absolute top-[0.2ex] left-[2em]  z-10 bg-[#F7F8F9] w-[96px] h-[17px]  px-[5px] py-[0] text-[#6C25FF] [font:normal_normal_normal_13px/17px_Rubik]">Email Address</label></div>
          <input type="text" placeholder="Enter email address" className="border-[1px] border-solid border-[#CBCBCB] rounded-[6px] relative w-[335px] h-[49px] m-[10px] pl-[16px] leading-[6ex]" />
        </div>

        <div className='mb-4 absolute top-[267px]'>
         <div className='relative'>
          <label className="absolute top-[0.2ex] left-[2em]  z-10 bg-[#F7F8F9] w-[96px] h-[17px]  px-[5px] py-[0] text-[#6C25FF] [font:normal_normal_normal_13px/17px_Rubik]">Password</label></div>
          <input type="text" placeholder="Enter password" className="border-[1px] border-solid border-[#CBCBCB] rounded-[6px] relative w-[335px] h-[49px] m-[10px] pl-[16px] leading-[6ex]" />
        </div>




        {/* <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Email Address</label>
          <input type="email" placeholder="Enter email address" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-bold mb-2">Password</label>
          <input type="password" placeholder="Enter password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div> */}
        <Link to="/account-settings" className="absolute top-[341px] w-[335px] h-[48px] bg-[#CBCBCB] text-white px-5 py-2 rounded block text-center">
          Login
        </Link>
      </form>
    </div>
  );
};

export default LoginScreen;