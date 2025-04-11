import Link from 'next/link';
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className='flex items-center justify-between h-24 border-b border-divider'>
      <Link href="/">
        <span className="text-xl font-medium">onigiri.w2</span>
      </Link>
    </header>
  );
};

export default Header;
