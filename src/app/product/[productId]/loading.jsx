const LoadingPage = () => {
    return (
        <div className="bg-[#F1F5F1] min-h-screen">

            <div className="max-w-7xl mx-auto px-3 sm:px-5 md:px-6 py-4 sm:py-5 animate-pulse">

                {/* Product Information Card */}
                <div className="bg-white/80 border border-[#E1E9E1] rounded-xl sm:rounded-2xl p-3 sm:p-5 md:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-5">

                    {/* Product Icon */}
                    <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-[#F1F5F1] rounded-xl sm:rounded-2xl shrink-0 flex items-center justify-center">
                        <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gray-200 rounded-full"></div>
                    </div>

                    {/* Product Information */}
                    <div className="flex-1 w-full min-w-0">

                        <div className="h-6 sm:h-8 md:h-9 w-48 sm:w-64 md:w-80 max-w-full bg-gray-200 rounded"></div>

                        <div className="h-4 sm:h-5 w-20 sm:w-24 bg-gray-200 rounded mt-3"></div>

                        <div className="h-4 sm:h-5 w-48 sm:w-64 md:w-80 max-w-full bg-gray-200 rounded mt-3 sm:mt-4"></div>

                    </div>

                </div>

                {/* Price Summary */}
                <div className="bg-white/80 border border-[#E1E9E1] rounded-xl sm:rounded-2xl p-3 sm:p-5 md:p-6 mt-4 sm:mt-6">

                    <div className="h-6 sm:h-7 w-40 sm:w-52 bg-gray-200 rounded mb-4 sm:mb-5"></div>

                    {/* Summary Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">

                        {[1, 2, 3].map((item) => (

                            <div
                                key={item}
                                className="border border-[#E1E9E1] rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-5"
                            >

                                <div className="h-4 sm:h-5 w-24 sm:w-28 bg-gray-200 rounded"></div>

                                <div className="h-6 sm:h-7 md:h-8 w-28 sm:w-36 bg-gray-200 rounded mt-3"></div>

                                <div className="h-4 sm:h-5 w-32 sm:w-40 max-w-full bg-gray-200 rounded mt-3"></div>

                            </div>

                        ))}

                    </div>

                    {/* Market Wise Price */}
                    <div className="mt-6 sm:mt-8">

                        <div className="h-6 sm:h-7 w-52 sm:w-72 max-w-full bg-gray-200 rounded mb-4 sm:mb-5"></div>

                        <div className="border border-[#E1E9E1] rounded-xl sm:rounded-2xl overflow-hidden">

                            <div className="overflow-x-auto">

                                <div className="min-w-150">

                                    {/* Table Header */}
                                    <div className="bg-[#F8FAF8] grid grid-cols-5 gap-3 sm:gap-4 px-3 sm:px-5 py-3 sm:py-4">

                                        {[1, 2, 3, 4, 5].map((item) => (
                                            <div
                                                key={item}
                                                className="h-4 sm:h-5 w-16 sm:w-20 bg-gray-200 rounded"
                                            ></div>
                                        ))}

                                    </div>

                                    {/* Table Rows */}
                                    {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (

                                        <div
                                            key={item}
                                            className="grid grid-cols-5 gap-3 sm:gap-4 px-3 sm:px-5 py-4 sm:py-5 border-t border-[#E1E9E1]"
                                        >

                                            {[1, 2, 3, 4, 5].map((col) => (
                                                <div
                                                    key={col}
                                                    className="h-4 sm:h-5 w-20 sm:w-24 bg-gray-200 rounded"
                                                ></div>
                                            ))}

                                        </div>

                                    ))}

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default LoadingPage;