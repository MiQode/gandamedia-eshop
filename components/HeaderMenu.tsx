'use client';
import { headerData } from '@/constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const HeaderMenu = () => {
  const pathname = usePathname();

  return (
    <div className="hidden md:inline-flex w-1/3 items-center gap-5 text-sm capitalize font-semibold text-lightColor">
      {headerData.map((item) => (
        <Link
          key={item?.title}
          href={item?.href}
          className={`hover:text-darkColor hoverEffect relative group ${
            pathname === '/' && 'text-darkColor'
          }`}
        >
          {item?.title}
        </Link>
      ))}
    </div>
  );
};

export default HeaderMenu;
