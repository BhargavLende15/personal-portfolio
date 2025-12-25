import React from 'react';
import NavLinks from './NavLinks';
import Logo from './Logo';
import { MdFileDownload } from 'react-icons/md';

const MainNav = () => {
  return (
    <nav className='w-full pt-16'>
      <div className='flex flex-col h-full items-center justfy-between'>
        <Logo />
        <NavLinks containerStyles="flex flex-col gap-6 w-[100px] mx-auto"
        />
        <button className="btn btn-lg btn-tertiary mb-16">
          <div className="flex items-center gap-3">
              <span>View CV</span>
              <MdFileDownload className="text-xl" />
           </div>
        </button>
      </div>
        
    </nav>
  )
}

export default MainNav