import React from 'react';
import userImage from '../assets//user.png';
import camImage from '../assets/cam.svg'

const AccountSettings = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#F7F8F9] p-4">
     <div className='absolute top-0 w-full h-[68px] bg-[#FFFFFF]'> <h1 className="text-2xl pt-[27px] pl-[15px] mb-4">Account Settings</h1>
     </div>
      {/* <div className="absolute top-[98px] flex text-center"> */}
       <img src={userImage} alt="user image" className='absolute top-[98px] left-[20px] w-[76px] h-[76px]'/>
       <img src={camImage} alt="camera image" className='absolute top-[147px] left-[79px] w-[21px] h-[23px]'/>
       
       <h1 className='absolute top-[98px] text-xl left-[116px] text-[#1D2226]'>Marry Doe</h1>
        <p className='absolute top-[122px] left-[116px] text-[#1D2226]'>Marry@Gmail.Com</p>
        {/* </div> */}
        <p className='absolute top-[204px] w-[337px] h-[63px] text-[#1D2226] [font:normal_normal_normal_14px/22px_Rubik] tracking-[0px] capitalize font-semibold'>Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing  Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam</p>
       
      
    </div>
  );
};

export default AccountSettings;