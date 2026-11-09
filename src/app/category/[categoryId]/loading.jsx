import React from 'react';

const LoadingPage = () => {
    return (
        <div className="bg-[#F3F4F6] min-h-screen">

            <div className="max-w-7xl mx-auto px-5 py-5 animate-pulse">

                {/* Category Header */}
                <div className="bg-white/80 border border-[#E1E9E1] rounded-2xl px-9 py-7 flex items-center gap-5">

                    <div className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center">
                        <div className="w-9 h-9 bg-gray-200 rounded-full"></div>
                    </div>

                    <div>
                        <div className="h-8 w-28 bg-gray-200 rounded mb-2"></div>
                        <div className="h-5 w-64 bg-gray-200 rounded"></div>
                    </div>

                </div>


                {/* Sorting Bar */}
                <div className="bg-white/80 border border-[#E1E9E1] rounded-2xl px-6 py-6 mt-6">

                    <div className="flex justify-end items-center gap-3">

                        <div className="h-5 w-12 bg-gray-200 rounded"></div>

                        <div className="h-11 w-36 bg-gray-200 rounded-xl"></div>

                    </div>

                </div>


                {/* Product Count */}
                <div className="h-5 w-48 bg-gray-200 rounded mt-6 mb-4"></div>


                {/* Product Cards */}
                <div className="grid grid-cols-3 gap-5">

                    {[1, 2, 3, 4, 5, 6].map((item) => (

                        <div
                            key={item}
                            className="bg-white border border-[#E1E9E1] rounded-2xl p-5"
                        >

                            {/* Product Information */}
                            <div className="flex items-center gap-4">

                                <div className="w-16 h-16 bg-[#F1F5F1] rounded-2xl flex items-center justify-center shrink-0">
                                    <div className="w-9 h-9 bg-gray-200 rounded-full"></div>
                                </div>

                                <div className="flex-1">

                                    <div className="h-6 w-32 bg-gray-200 rounded"></div>

                                    <div className="h-4 w-24 bg-gray-200 rounded mt-2"></div>

                                </div>

                            </div>


                            {/* Product Price */}
                            <div className="flex items-end justify-between mt-5">

                                <div>

                                    <div className="h-4 w-24 bg-gray-200 rounded"></div>

                                    <div className="h-7 w-28 bg-gray-200 rounded mt-2"></div>

                                </div>

                                <div className="h-8 w-20 bg-gray-200 rounded-full"></div>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </div>
    );
};

export default LoadingPage;