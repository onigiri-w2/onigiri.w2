import React from 'react';
import { Github } from "lucide-react";
import SocialNavigation from './SocialNavigation';

export default function Footer() {
  return (
    <footer className='py-2xl flex flex-col items-center space-y-sm'>
      <SocialNavigation />
      <CopyRight />
    </footer>
  );
};


function CopyRight() {
  const siteSourceURL = "https://github.com/onigiri-w2/onigiri.w2.git";
  return (
    <div className="flex items-center justify-center space-x-2 text-text-tertiary text-sm">
      <p>© {new Date().getFullYear()}</p>
      <a href={siteSourceURL} target='_blank' className='text-link hover:underline'>View Source</a>
    </div>
  );
}


