import React from 'react';

const LoadingPage = () => {
    return (
        <div className="bg-[#F3F4F6] min-h-screen">

            <div className="max-w-7xl mx-auto px-3 sm:px-5 md:px-6 py-4 sm:py-5 animate-pulse">

                {/* Category Header */}
                <div className="bg-white/80 border border-[#E1E9E1] rounded-xl sm:rounded-2xl p-4 sm:px-7 sm:py-6 md:px-9 md:py-7 flex items-center gap-3 sm:gap-5">

                    <div className="w-11 h-11 sm:w-14 sm:h-14 bg-gray-100 rounded-xl flex items-center justify-center shrink-0">
                        <div className="w-7 h-7 sm:w-9 sm:h-9 bg-gray-200 rounded-full"></div>
                    </div>

                    <div className="min-w-0 flex-1">
                        <div className="h-6 sm:h-8 w-24 sm:w-28 bg-gray-200 rounded mb-2"></div>
                        <div className="h-4 sm:h-5 w-40 sm:w-64 max-w-full bg-gray-200 rounded"></div>
                    </div>

                </div>

                {/* Sorting Bar */}
                <div className="bg-white/80 border border-[#E1E9E1] rounded-xl sm:rounded-2xl p-4 sm:px-6 sm:py-6 mt-4 sm:mt-6">

                    <div className="flex justify-end items-center gap-3">

                        <div className="h-4 sm:h-5 w-10 sm:w-12 bg-gray-200 rounded"></div>

                        <div className="h-9 sm:h-11 w-28 sm:w-36 bg-gray-200 rounded-lg sm:rounded-xl"></div>

                    </div>

                </div>

                {/* Product Count */}
                <div className="h-4 sm:h-5 w-36 sm:w-48 bg-gray-200 rounded mt-5 sm:mt-6 mb-3 sm:mb-4"></div>

                {/* Product Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5">

                    {[1, 2, 3, 4, 5, 6].map((item) => (

                        <div
                            key={item}
                            className="bg-white border border-[#E1E9E1] rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-5 min-w-0"
                        >

                            {/* Product Information */}
                            <div className="flex items-center gap-3 sm:gap-4">

                                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-[#F1F5F1] rounded-xl sm:rounded-2xl flex items-center justify-center shrink-0">
                                    <div className="w-7 h-7 sm:w-9 sm:h-9 bg-gray-200 rounded-full"></div>
                                </div>

                                <div className="flex-1 min-w-0">

                                    <div className="h-5 sm:h-6 w-28 sm:w-32 max-w-full bg-gray-200 rounded"></div>

                                    <div className="h-3 sm:h-4 w-20 sm:w-24 bg-gray-200 rounded mt-2"></div>

                                </div>

                            </div>

                            {/* Product Price */}
                            <div className="flex items-end justify-between gap-2 mt-4 sm:mt-5">

                                <div className="min-w-0">

                                    <div className="h-3 sm:h-4 w-20 sm:w-24 bg-gray-200 rounded"></div>

                                    <div className="h-6 sm:h-7 w-24 sm:w-28 bg-gray-200 rounded mt-2"></div>

                                </div>

                                <div className="h-7 sm:h-8 w-16 sm:w-20 bg-gray-200 rounded-full shrink-0"></div>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </div>
    );
};

export default LoadingPage;