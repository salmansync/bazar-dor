import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
    return (
        <div className="min-h-[70vh] bg-[#F1F5F1] flex items-center justify-center px-5">

            <div className="bg-white border border-[#E1E9E1] rounded-2xl p-10 text-center max-w-lg w-full">

                <div className="text-7xl mb-5">
                    🔍
                </div>

                <h1 className="text-3xl font-extrabold text-[#202B23]">
                    ক্যাটাগরি পাওয়া যায়নি!
                </h1>

                <p className="text-gray-500 mt-3 leading-7">
                    দুঃখিত! আপনি যে ক্যাটাগরিটি খুঁজছেন সেটি পাওয়া যায়নি।
                    অনুগ্রহ করে অন্য ক্যাটাগরি নির্বাচন করুন।
                </p>

                <Link
                    href="/"
                    className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-xl mt-6 transition-colors"
                >
                    হোম পেজে ফিরে যান
                </Link>

            </div>

        </div>
    );
};

export default NotFoundPage;