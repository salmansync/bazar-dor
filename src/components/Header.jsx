'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import image from '../assets/logo-icon.png'
import Link from 'next/link';
import { useSession, signOut } from '@/lib/auth-client';
import { IoIosArrowDown } from 'react-icons/io';
import { FaUser, FaReply } from "react-icons/fa";
import { ImReply } from "react-icons/im";
import { useRouter } from 'next/navigation';


const Header = () => {
    const date = new Date().toLocaleDateString("bn-BD", {
        dateStyle: "full",
    });
    const { data: session, isPending } = useSession()
    const [toggle, setToggle] = useState(false)
    const router = useRouter();
    // console.log(session);
    return (
        <div className="mx-auto w-full max-w-7xl px-5 my-5 relative">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <Link href={'/'}>
                        <div className="rounded-md bg-green-600 px-8 py-6">
                            <Image src={image} alt="logo" />
                        </div>
                    </Link>

                    <div>
                        <h1 className="text-2xl font-extrabold">
                            বাজার দর
                        </h1>
                        <p>{date}</p>
                    </div>
                </div>
                <div className="flex shrink-0 items-center gap-3">

                    <div
                        onClick={() => setToggle(!toggle)}
                        className="flex items-center gap-3">

                        {isPending ? (
                            <p>অপেক্ষা করুন...</p>
                        ) : session?.user ? (
                            <>
                                {session.user.image ? (
                                    <Image
                                        src={session.user.image}
                                        alt={session.user.name || "User"}
                                        width={40}
                                        height={40}
                                        className="h-10 w-10 rounded-full object-cover border border-green-600"
                                    />
                                ) : (
                                    <div className="flex items-center justify-center rounded-md bg-green-600 px-8 py-6 text-xl font-bold">
                                        {session.user.name
                                            ? session.user.name.charAt(0).toUpperCase()
                                            : "U"}
                                    </div>
                                )}

                                <span className="font-bold text-black text-xl">
                                    {session.user.name}
                                </span>

                                <IoIosArrowDown size={18} />
                            </>
                        ) : (
                            <>
                                <div className="flex items-center gap-3">
                                    <Link
                                        href="/sign-in"
                                        className="rounded-lg border border-green-600 px-5 py-2.5 font-medium text-green-700 transition hover:bg-green-50"
                                    >
                                        সাইন ইন
                                    </Link>

                                    <Link
                                        href="/sign-up"
                                        className="rounded-lg bg-green-600 px-5 py-2.5 font-medium text-white shadow-md transition hover:bg-green-700"
                                    >
                                        সাইন আপ
                                    </Link>
                                </div>
                            </>
                        )}

                    </div>
                </div>
            </div>
            {
                toggle && session?.user &&
                <div className="absolute right-5 top-full z-50 mt-3 w-72 rounded-2xl border border-gray-200 bg-[#FAFCFA] p-6 text-left shadow-xl">

                    <div className="mb-1 flex items-center gap-3">

                        {/* User Image */}
                        {session.user.image ? (
                            <Image
                                src={session.user.image}
                                alt={session.user.name || "User"}
                                width={45}
                                height={45}
                                className="h-11 w-11 rounded-full object-cover"
                            />
                        ) : (
                            /* First Letter */
                            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-green-600 text-lg font-bold text-white">
                                {session.user.name?.charAt(0).toUpperCase() || "U"}
                            </div>
                        )}

                        {/* User Name & Email */}
                        <div className="min-w-0">
                            <h3 className="truncate text-base font-bold text-gray-800">
                                {session.user.name}
                            </h3>

                            <p className="truncate text-sm text-gray-500">
                                {session.user.email}
                            </p>
                        </div>

                    </div>

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
                            onClick={() => {
                                signOut()
                                router.push("/");
                                router.refresh();
                            }}
                            className="flex items-center gap-2 text-red-500 hover:text-red-600"
                        >
                            <ImReply />
                            <span>সাইন আউট</span>
                        </button>

                    </div>
                </div>
            }
        </div>
    );
};

export default Header;