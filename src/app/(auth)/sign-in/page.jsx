
'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import Link from 'next/link';
import { BsArrowLeft } from "react-icons/bs";
import { signIn } from '@/lib/auth-client';
import { toast } from 'react-hot-toast';

const SignInPage = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const onSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const userData = Object.fromEntries(formData.entries());

        setLoading(true);

        try {
            const { data, error } = await signIn.email({
                email: userData.email,
                password: userData.password
            });

            console.log('login data ', data, error);

            if (error) {
                toast.error(error.message || "Login failed!", {
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

                setLoading(false);
                return;
            }

            toast.success("সফলভাবে লগইন হয়েছে! আবারও আপনাকে স্বাগতম।", {
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

            setTimeout(() => {
                router.push("/");
            }, 2000);

        } catch (error) {
            toast.error(error.message || "Something went wrong!");
            setLoading(false);
        }
    };

    const loginWithGoogle = async () => {
        const data = await signIn.social({
            provider: 'google'
        });

        console.log('google data is here ', data);
    };

    const loginWithGitHub = async () => {
        const data = await signIn.social({
            provider: 'github'
        });

        console.log('github data is here ', data);
    };

    return (
        <div className="max-w-7xl mx-auto px-3 sm:px-5 md:px-6 my-6 sm:my-8 md:my-10">

            {/* Heading */}
            <div className="flex flex-col items-center justify-center text-center">
                <h1 className="text-2xl sm:text-3xl font-bold">
                    সাইন ইন
                </h1>

                <p className="text-gray-500 mt-2 text-sm sm:text-base max-w-xl">
                    বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।
                </p>
            </div>

            {/* Sign In Card */}
            <div className="flex flex-col items-center justify-center w-full max-w-xl mx-auto bg-white p-4 sm:p-6 md:p-8 mt-5 mb-8 sm:mb-10 rounded-xl shadow-md">

                <Form className="flex w-full flex-col gap-4" onSubmit={onSubmit}>

                    {/* Email */}
                    <TextField
                        isRequired
                        name="email"
                        type="email"
                        className="w-full"
                        validate={(value) => {
                            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                return "Please enter a valid email address";
                            }
                            return null;
                        }}
                    >
                        <Label className="font-bold text-sm sm:text-[15px]">
                            ইমেইল
                        </Label>

                        <Input
                            className="w-full rounded-md p-3 font-medium"
                            placeholder="you@example.com"
                        />

                        <FieldError />
                    </TextField>

                    {/* Password */}
                    <TextField
                        isRequired
                        name="password"
                        type="password"
                        minLength={8}
                        className="w-full"
                        validate={(value) => {
                            if (value.length < 8) {
                                return "Password must be at least 8 characters";
                            }

                            if (!/[A-Z]/.test(value)) {
                                return "Password must contain at least one uppercase letter";
                            }

                            if (!/[0-9]/.test(value)) {
                                return "Password must contain at least one number";
                            }

                            return null;
                        }}
                    >
                        <Label className="font-bold text-sm sm:text-[15px]">
                            পাসওয়ার্ড
                        </Label>

                        <Input
                            className="w-full rounded-md p-3 font-medium"
                            placeholder="কমপক্ষে ৮ অক্ষর"
                        />

                        <FieldError />
                    </TextField>

                    {/* Submit Button */}
                    <Button
                        className="w-full bg-green-700 rounded-md text-white disabled:opacity-100 disabled:bg-green-700 text-sm sm:text-base"
                        type="submit"
                        isDisabled={loading}
                    >
                        {loading ? "সাইন ইন হচ্ছে..." : "সাইন ইন"}
                    </Button>

                    {/* Divider */}
                    <div className="flex items-center gap-3 sm:gap-4 w-full">
                        <div className="flex-1 h-0.5 bg-gray-200"></div>

                        <span className="text-gray-600 text-xs sm:text-sm">
                            অথবা
                        </span>

                        <div className="flex-1 h-0.5 bg-gray-200"></div>
                    </div>

                    {/* Social Login */}
                    <div className="flex flex-col sm:flex-row gap-2 w-full">

                        <button
                            type="button"
                            onClick={loginWithGoogle}
                            className="w-full flex items-center justify-center gap-2 border border-gray-300 shadow p-3 rounded-md hover:bg-gray-50 transition"
                        >
                            <FcGoogle size={22} />

                            <span className="text-black font-bold text-sm sm:text-base">
                                Google দিয়ে চালিয়ে যান
                            </span>
                        </button>

                        <button
                            type="button"
                            onClick={loginWithGitHub}
                            className="w-full flex items-center justify-center gap-2 border border-gray-300 shadow p-3 rounded-md hover:bg-gray-50 transition"
                        >
                            <FaGithub size={22} />

                            <span className="text-black font-bold text-sm sm:text-base">
                                GitHub দিয়ে চালিয়ে যান
                            </span>
                        </button>

                    </div>

                    {/* Sign Up */}
                    <p className="text-gray-700 text-center text-sm sm:text-base">
                        অ্যাকাউন্ট নেই?

                        <Link
                            className="pl-1 text-green-700 font-medium"
                            href="/sign-up"
                        >
                            সাইন আপ করুন
                        </Link>
                    </p>

                </Form>
            </div>

            {/* Back to Home */}
            <div className="flex justify-center">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-gray-500 text-sm sm:text-base hover:text-green-700 transition"
                >
                    <BsArrowLeft />

                    <span>
                        হোম পেজে ফিরে যান
                    </span>
                </Link>
            </div>

        </div>
    );
};

export default SignInPage;
