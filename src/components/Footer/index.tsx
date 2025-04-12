import React from 'react';
import { Github } from "lucide-react";
import SocialNavigation from './SocialNavigation';

export default function Footer() {
  return (
    <footer className='h-40 border-divider border-t flex flex-col items-center pt-4 space-y-4'>
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
      <a href={siteSourceURL} target='_blank' className='text-blue-500 hover:underline'>View Source</a>
    </div>
  );
}


