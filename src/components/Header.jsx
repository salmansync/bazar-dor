
'use client'

import Image from 'next/image';
import React, { useState } from 'react';
import image from '../assets/logo-icon.png';
import Link from 'next/link';
import { useSession, signOut } from '@/lib/auth-client';
import { IoIosArrowDown } from 'react-icons/io';
import { FaUser } from "react-icons/fa";
import { ImReply } from "react-icons/im";
import { useRouter } from 'next/navigation';

const Header = () => {
    const date = new Date().toLocaleDateString("bn-BD", {
        dateStyle: "full",
    });

    const { data: session, isPending } = useSession();
    const [toggle, setToggle] = useState(false);
    const router = useRouter();

    const handleSignOut = async () => {
        await signOut();
        setToggle(false);
        router.push("/");
        router.refresh();
    };

    return (
        <div className="mx-auto relative w-full max-w-7xl px-3 sm:px-5 my-4 sm:my-5">

            {/* Header */}
            <div className="flex items-center justify-between gap-2 sm:gap-4">

                {/* Logo & Title */}
                <div className="flex min-w-0 items-center gap-2 sm:gap-3">

                    <Link href="/" className="shrink-0">
                        <div className="rounded-md bg-green-600 p-3 sm:px-8 sm:py-6">
                            <Image
                                src={image}
                                alt="logo"
                                className="w-9 h-9 sm:w-auto sm:h-auto"
                            />
                        </div>
                    </Link>

                    <div className="min-w-0">
                        <h1 className="text-lg sm:text-2xl font-extrabold whitespace-nowrap">
                            বাজার দর
                        </h1>

                        <p className="text-[10px] sm:text-sm text-gray-600 leading-relaxed">
                            {date}
                        </p>
                    </div>

                </div>

                {/* Authentication */}
                <div className="relative flex shrink-0 items-center">

                    {isPending ? (
                        <p className="text-xs sm:text-sm">
                            অপেক্ষা করুন...
                        </p>
                    ) : session?.user ? (

                        <button
                            onClick={() => setToggle(!toggle)}
                            className="flex items-center gap-1.5 sm:gap-3"
                        >

                            {session.user.image ? (
                                <Image
                                    src={session.user.image}
                                    alt={session.user.name || "User"}
                                    width={40}
                                    height={40}
                                    className="h-9 w-9 sm:h-10 sm:w-10 rounded-full object-cover border border-green-600"
                                />
                            ) : (
                                <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-green-600 text-lg font-bold text-white">
                                    {session.user.name?.charAt(0).toUpperCase() || "U"}
                                </div>
                            )}

                            <span className="hidden sm:block max-w-32 truncate font-bold text-black text-base lg:text-xl">
                                {session.user.name}
                            </span>

                            <IoIosArrowDown size={18} />

                        </button>

                    ) : (

                        <div className="flex items-center gap-1.5 sm:gap-3">

                            <Link
                                href="/sign-in"
                                className="rounded-lg border border-green-600 px-2.5 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-base font-medium text-green-700 transition hover:bg-green-50"
                            >
                                সাইন ইন
                            </Link>

                            <Link
                                href="/sign-up"
                                className="rounded-lg bg-green-600 px-2.5 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-base font-medium text-white shadow-md transition hover:bg-green-700"
                            >
                                সাইন আপ
                            </Link>

                        </div>

                    )}

                </div>

            </div>

            {/* User Dropdown */}
            {toggle && session?.user && (

                <>
                    {/* Outside Click Area */}
                    <div
                        className="fixed inset-0 z-40"
                        onClick={() => setToggle(false)}
                    />

                    <div className="absolute right-0 top-full z-50 mt-3 w-[min(18rem,calc(100vw-1.5rem))] rounded-2xl border border-gray-200 bg-[#FAFCFA] p-4 sm:p-6 text-left shadow-xl">

                        {/* User Information */}
                        <div className="mb-1 flex items-center gap-3">

                            {session.user.image ? (
                                <Image
                                    src={session.user.image}
                                    alt={session.user.name || "User"}
                                    width={45}
                                    height={45}
                                    className="h-11 w-11 rounded-full object-cover"
                                />
                            ) : (
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-green-600 text-lg font-bold text-white">
                                    {session.user.name?.charAt(0).toUpperCase() || "U"}
                                </div>
                            )}

                            <div className="min-w-0">
                                <h3 className="truncate text-base font-bold text-gray-800">
                                    {session.user.name}
                                </h3>

                                <p className="truncate text-sm text-gray-500">
                                    {session.user.email}
                                </p>
                            </div>

                        </div>

                        {/* Dropdown Links */}
                        <div className="mt-4 flex flex-col gap-4">

                            <Link
                                href="/profile"
                                onClick={() => setToggle(false)}
                                className="flex items-center gap-2 text-gray-800 hover:text-green-600"
                            >
                                <FaUser />
                                <span>আমার প্রোফাইল</span>
                            </Link>

                            <button
                                onClick={handleSignOut}
                                className="flex items-center gap-2 text-red-500 hover:text-red-600"
                            >
                                <ImReply />
                                <span>সাইন আউট</span>
                            </button>

                        </div>

                    </div>

                </>
            )}

        </div>
    );
};

export default Header;