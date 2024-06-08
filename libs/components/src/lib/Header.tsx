'use client';
import Image from 'next/image';
import { UserCircleIcon } from '@heroicons/react/24/solid';
import flags from './flags.svg';
import { Marquee } from './Marquee';
import { ShoppingCartAccess } from './cart/ShoppingCartAccess';
import { useEffect, useState } from 'react';
import { ShoppingCartContainer } from './cart/ShoppingCartContainer';
import { fetchShoppingCart } from '@coba/redux-store';
import { useDispatch } from 'react-redux';

export function Header() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchShoppingCart() as any);
  }, []);

  return (
    <div className="mb-8">
      <div className="bg-gradient-to-r from-amber-500 to-[#cc5538]  h-14 flex items-center text-white p-2 px-4 justify-between">
        <div className="flex items-center">
          <Image
            className="mr-1 object-cover"
            src={flags}
            alt="Flags"
            width={64}
          />
          <div className="text-xl">
            <a href="/">Automotriz COBA</a>
          </div>
        </div>
        <div className="flex items-center">
          <ShoppingCartContainer  />
          <UserCircleIcon className="w-6 text-white" />
        </div>
      </div>
      <div className="bg-white h-10 flex items-center p-4 text-black">
        <span className=" flex text-sm">+56 9 9427-51-15</span>
      </div>
      <Marquee />
    </div>
  );
}
