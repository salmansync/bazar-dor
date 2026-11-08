'use client'
import React, { useState } from 'react';
import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import Link from 'next/link';
import { BsArrowLeft } from "react-icons/bs";
import { signIn, signUp } from '@/lib/auth-client';
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";


const SignUpPage = () => {
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const userData = Object.fromEntries(formData.entries())
        console.log(userData);
        setLoading(true);
        const { data, error } = await signUp.email({
            name: userData.name,
            email: userData.email,
            password: userData.password,
            callbackURL: '/'
        })
        console.log('after sign up data', data, error);
        if (error) {
            toast.error(error.message || "Sign up failed!", {
                icon: "🚨",
                duration: 5000,
                style: {
                    width: "700px",
                    maxWidth: "90vw",
                    minHeight: "100px",
                    padding: "28px",
                    fontSize: "18px",
                    fontWeight: "800",
                    borderRadius: "18px",
                    background: "#991B1B",
                    color: "#FFFFFF",
                    border: "2px solid #DC2626",
                    boxShadow: "0 12px 40px rgba(220, 38, 38, 0.45)",
                },
            });

            setLoading(false);
            return;
        }
        toast.success("অ্যাকাউন্ট তৈরি সম্পন্ন হয়েছে!", {
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

    };

    const loginWithGoogle = async () => {
        const data = await signIn.social({
            provider: 'google'
        })
        console.log('google data is here ', data);
    }
    const loginWithGitHub = async () => {
        const data = await signIn.social({
            provider: 'github'
        })
        console.log('github data is here ', data);
    }
    return (
        <div className="max-w-7xl mx-auto my-10">
            <div className="flex flex-col items-center justify-center text-center">
                <h1 className="text-3xl font-bold">
                    অ্যাকাউন্ট তৈরি করুন
                </h1>

                <p className="text-gray-500 mt-2">
                    বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।
                </p>
            </div>
            <div className="flex flex-col items-center justify-center w-full max-w-xl mx-auto bg-white p-8 mt-5 mb-10 rounded-xl shadow-md">
                <Form className="flex w-full flex-col gap-4" onSubmit={onSubmit}>
                    {/* Name */}
                    <TextField
                        isRequired
                        name="name"
                        type="text"
                        validate={(value) => {
                            if (!value.trim()) {
                                return "Name is required";
                            }
                            return null;
                        }}
                    >
                        <Label
                            className='font-bold text-[15px]'
                        >নাম</Label>
                        <Input
                            className={'rounded-md p-3 font-medium'}
                            placeholder="যেমন: রহিম উদ্দিন" />
                        <FieldError />
                    </TextField>

                    {/* Email */}
                    <TextField
                        isRequired
                        name="email"
                        type="email"
                        validate={(value) => {
                            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                return "Please enter a valid email address";
                            }
                            return null;
                        }}
                    >
                        <Label
                            className='font-bold text-[15px]'
                        >ইমেইল</Label>
                        <Input
                            className={'rounded-md p-3 font-medium'}
                            placeholder="you@example.com" />
                        <FieldError />
                    </TextField>

                    {/* Password */}
                    <TextField
                        isRequired
                        minLength={8}
                        name="password"
                        type="password"
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
                        <Label
                            className='font-bold text-[15px]'
                        >পাসওয়ার্ড</Label>
                        <Input
                            className={'rounded-md p-3 font-medium'}
                            placeholder="কমপক্ষে ৮ অক্ষর" />
                        <FieldError />
                    </TextField>

                    {/* Confirm Password */}
                    <TextField
                        isRequired
                        name="confirmPassword"
                        type="password"
                    >
                        <Label
                            className='font-bold text-[15px]'
                        >পাসওয়ার্ড নিশ্চিত করুন</Label>
                        <Input
                            className={'rounded-md p-3 font-medium'}
                            placeholder="আবার লিখুন" />
                        <FieldError />
                    </TextField>

                    {/* Submit Button */}
                    <div className="">
                        <Button
                            className="w-full bg-green-700 rounded-md text-white disabled:opacity-100 disabled:bg-green-700"
                            type="submit"
                            isDisabled={loading}
                        >
                            {loading ? "অ্যাকাউন্ট তৈরি হচ্ছে..." : "অ্যাকাউন্ট তৈরি করুন"}
                        </Button>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="flex-1 h-0.5 bg-gray-200"></div>

                        <span className="text-gray-600 text-sm">
                            অথবা
                        </span>

                        <div className="flex-1 h-0.5 bg-gray-200"></div>
                    </div>
                    <div className="flex gap-2">
                        <div
                            onClick={loginWithGoogle}
                            className="w-full flex items-center gap-2 border border-gray-300 shadow p-3 rounded-md">
                            <FcGoogle size={22} />
                            <p className='text-black font-bold'>
                                Google দিয়ে চালিয়ে যান
                            </p>
                        </div>
                        <div
                            onClick={loginWithGitHub}
                            className="w-full flex items-center gap-2 border border-gray-300 shadow p-3 rounded-md">
                            <FaGithub size={22} />
                            <p className='text-black font-bold'>
                                GitHub দিয়ে চালিয়ে যান
                            </p>
                        </div>
                    </div>
                    <p className='text-gray-700 text-center'>
                        অ্যাকাউন্ট আছে?
                        <Link
                            className='pl-1 text-green-700'
                            href={'/sign-in'}>
                            সাইন ইন করুন</Link>
                    </p>
                </Form>
            </div>
            <div className="flex justify-center">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-gray-500"
                >
                    <BsArrowLeft />
                    <span>হোম পেজে ফিরে যান</span>
                </Link>
            </div>
        </div>
    );
};

export default SignUpPage;