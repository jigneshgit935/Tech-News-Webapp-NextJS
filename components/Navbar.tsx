'use client';

import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

export default function Navbar() {
  const { status, data: session } = useSession();

  const [isPopUp, setIsPopUp] = useState(false);
  const popupRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(e.target as Node))
        setIsPopUp(false);
    };
    document.addEventListener('click', handleClickOutside);

    if (!isPopUp) {
      document.removeEventListener('click', handleClickOutside);
    }
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isPopUp]);
  return (
    <div className="flex justify-between pb-4 border-b mb-4 relative">
      <div className="">
        <Link href="/">
          <h1 className="text-4xl font-bold tracking-tighter text-dark">
            Tech News
          </h1>
        </Link>
        <p className="text-sm ">
          Exploring Tommorrow&apos;s Innovations, <br /> One Byte at a Time.
        </p>
      </div>

      {status === 'authenticated' ? (
        <>
          <div
            ref={popupRef}
            className={`absolute z-30 right-0 top-20 bg-white p-6 shadow-lg rounded-md flex-col gap-2 text-right min-w-[160px] ${
              isPopUp ? 'flex' : 'hidden'
            }`}
          >
            <div className="font-bold ">{session.user?.name}</div>
            <Link
              href={'/dashboard'}
              className="hover:underline"
              onClick={() => setIsPopUp(false)}
            >
              Dashboard
            </Link>
            <Link
              href={'/create-post'}
              className="hover:underline"
              onClick={() => setIsPopUp(false)}
            >
              Create Post
            </Link>
            <button onClick={() => signOut()} className="btn">
              Sign Out
            </button>
          </div>
          <div className="flex gap-2 items-center">
            <Link
              href={'/create-post'}
              className="hidden  md:flex gap-2 items-center mr-6 "
            >
              <span className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </span>
              <span>Create new</span>
            </Link>
            <Image
              onClick={() => setIsPopUp((prev) => !prev)}
              src={session.user?.image || ''}
              width={36}
              height={36}
              alt="proifle image"
              className="rounded-full cursor-pointer"
            />
          </div>
        </>
      ) : (
        <div className="flex items-center ">
          <Link className="btn" href="/sign-in">
            Sign In
          </Link>
        </div>
      )}
    </div>
  );
}
