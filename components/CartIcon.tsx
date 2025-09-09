'use client';

import { ShoppingBag } from 'lucide-react';
import useCartStore from './../store';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const CartIcon = () => {
  const [isClient, setIsClient] = useState(false);
  const groupedItems = useCartStore((state) => state.getGroupedItems());
  useEffect(() => {
    setIsClient(true);
  }, []);
  if (!isClient) {
    return null;
  }
  return (
    <Link href={'/cart'} className="group relative">
      <ShoppingBag className="w-5 h-5 group-hover:text-darkColor hoverEffect" />
      <span className="absolute -top-1 -right-1 bg-darkColor text-white h-3.5 w-3.5 text-xs font-semibold px-1.5 rounded-full flex items-center justify-center">
        {groupedItems?.length ? groupedItems.length : 0}
      </span>
      {/* <div className="flex flex-col">
        <p className="text-xs">
          <span className="font-semibold">
            {groupedItems?.length ? groupedItems.length : 0}{' '}
          </span>
          items
        </p>
        <p className="font-semibold">Cart</p>
      </div> */}
    </Link>
  );
};

export default CartIcon;
