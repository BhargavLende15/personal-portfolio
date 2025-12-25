import React from 'react';
import NavLinks from './NavLinks';
import Logo from './Logo';
import { MdFileDownload } from 'react-icons/md';
import Link from 'next/link';

const MainNav = () => {
  return (
    <nav className='w-full pt-16'>
      <div className='flex flex-col h-full items-center justify-between gap-8'>
        <Logo />
        <NavLinks containerStyles="flex flex-col gap-6 text-left"
        />
        <div className="flex flex-col items-center gap-4 mb-16">
          <Link href="/contact" className="btn btn-lg btn-tertiary">
            <div className="flex items-center gap-3">
                <span>Let's Talk</span>
             </div>
          </Link>
          
        </div>
      </div>
        
    </nav>
  )
}

export default MainNav