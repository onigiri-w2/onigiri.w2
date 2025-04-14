import Link from 'next/link';
import React from 'react';
import { ThemeToggle } from '../theme/ThemeToggle';

const Header: React.FC = () => {
  return (
    <header className='flex items-center justify-between h-10'>
      <Link href="/">
        <span className="text-xl font-medium">onigiri.w2</span>
      </Link>
      <ThemeToggle />
    </header>
  );
};

export default Header;
