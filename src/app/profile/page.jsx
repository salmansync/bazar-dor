
'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import { useSession, signOut, updateUser } from '@/lib/auth-client';
import { FaReply } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import {
    FieldError,
    Input,
    TextField,
} from "@heroui/react";
import toast from "react-hot-toast";

const ProfilePage = () => {
    const [loading, setLoading] = useState(false);
    const { data: session } = useSession();
    const router = useRouter();

    const onSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const updateData = Object.fromEntries(formData.entries());

        console.log("Update Data:", updateData);

        setLoading(true);

        try {
            const { data, error } = await updateUser({
                name: updateData.name,
            });

            if (error) {
                toast.error(error.message || "Name update failed!", {
                    icon: "🚨",
                    style: {
                        width: "700px",
                        maxWidth: "90vw",
                        minHeight: "100px",
                        padding: "28px",
                        fontSize: "18px",
                        fontWeight: "700",
                        borderRadius: "18px",
                        background: "#991B1B",
                        color: "#FFFFFF",
                        border: "2px solid #DC2626",
                        boxShadow: "0 12px 40px rgba(220, 38, 38, 0.35)",
                    },
                });

                return;
            }

            toast.success("নাম সফলভাবে আপডেট হয়েছে!", {
                icon: "🎉",
                duration: 5000,
                style: {
                    width: "700px",
                    maxWidth: "90vw",
                    minHeight: "100px",
                    padding: "28px",
                    fontSize: "18px",
                    fontWeight: "800",
                    borderRadius: "18px",
                    background: "#065F46",
                    color: "#FFFFFF",
                    border: "2px solid #10B981",
                    boxShadow: "0 12px 40px rgba(5, 150, 105, 0.45)",
                },
            });

        }
        catch (error) {
            toast.error(error.message || "Something went wrong!", {
                icon: "🚨",
                style: {
                    width: "700px",
                    maxWidth: "90vw",
                    minHeight: "100px",
                    padding: "28px",
                    fontSize: "18px",
                    fontWeight: "700",
                    borderRadius: "18px",
                    background: "#991B1B",
                    color: "#FFFFFF",
                    border: "2px solid #DC2626",
                    boxShadow: "0 12px 40px rgba(220, 38, 38, 0.35)",
                },
            });
        } finally {
            setLoading(false);
        }
    };

    const handleSignOut = async () => {
        await signOut();
        router.push("/");
        router.refresh();
    };

    return (
        <div className="min-h-screen bg-[#F0F5F0] px-3 sm:px-5 md:px-6 py-6 sm:py-8">

            <div className="mx-auto max-w-3xl">

                {/* Heading */}
                <div className="mb-5 sm:mb-6">
                    <h2 className="text-xl sm:text-2xl font-bold text-[#253329]">
                        আমার প্রোফাইল
                    </h2>

                    <p className="mt-1 text-xs sm:text-sm text-gray-500">
                        আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।
                    </p>
                </div>

                {/* Profile Card */}
                <div className="mb-4 sm:mb-5 rounded-xl sm:rounded-2xl border border-[#DFE8DF] bg-[#FAFCFA] p-3 sm:p-5">

                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

                        {/* User Details */}
                        <div className="flex min-w-0 items-center gap-3 sm:gap-4">

                            {/* Profile Image */}
                            {session?.user.image ? (
                                <Image
                                    src={session.user.image}
                                    alt={session.user.name || "User"}
                                    width={70}
                                    height={70}
                                    className="h-14 w-14 sm:h-17.5 sm:w-17.5 shrink-0 rounded-xl sm:rounded-2xl object-cover"
                                />
                            ) : (
                                <div className="flex h-14 w-14 sm:h-17.5 sm:w-17.5 shrink-0 items-center justify-center rounded-xl sm:rounded-2xl bg-green-600 text-xl sm:text-2xl font-bold text-white">
                                    {session?.user.name?.charAt(0).toUpperCase() || "U"}
                                </div>
                            )}

                            <div className="min-w-0">
                                <h3 className="truncate text-base sm:text-lg font-semibold text-[#253329]">
                                    {session?.user.name}
                                </h3>

                                <p className="break-all text-xs sm:text-sm text-gray-500">
                                    {session?.user.email}
                                </p>
                            </div>

                        </div>

                        {/* Sign Out */}
                        <button
                            onClick={handleSignOut}
                            className="flex w-full sm:w-auto shrink-0 items-center justify-center gap-2 rounded-lg border border-red-400 px-4 py-2.5 text-sm text-red-500 transition hover:bg-red-50"
                        >
                            <FaReply />
                            সাইন আউট
                        </button>

                    </div>
                </div>

                {/* Information Card */}
                <div className="rounded-xl sm:rounded-2xl border border-[#DFE8DF] bg-[#FAFCFA] p-4 sm:p-5 md:p-6">

                    <h3 className="mb-5 sm:mb-8 text-base sm:text-lg font-bold text-[#253329]">
                        তথ্য
                    </h3>

                    <form
                        onSubmit={onSubmit}
                        className="space-y-4"
                    >

                        {/* Name */}
                        <div>
                            <label className="mb-2 block text-sm text-[#253329]">
                                নাম
                            </label>

                            <TextField
                                isRequired
                                name="name"
                                className="w-full"
                                validate={(value) => {
                                    if (value.length < 3) {
                                        return "Name must be at least 3 characters";
                                    }

                                    return null;
                                }}
                            >
                                <Input
                                    className="w-full rounded-md p-3"
                                    placeholder="John Doe"
                                />

                                <FieldError />
                            </TextField>
                        </div>

                        {/* Update Button */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full rounded-lg bg-[#078B43] py-2.5 sm:py-3 text-sm sm:text-base font-semibold text-white shadow-md transition hover:bg-[#067638] disabled:cursor-not-allowed disabled:opacity-70"
                        >
                            {loading ? "নাম আপডেট হচ্ছে..." : "আপডেট"}
                        </button>

                    </form>

                </div>

            </div>
        </div>
    );
};

export default ProfilePage;
