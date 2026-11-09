
const LoadingPage = () => {
    return (
        <div className="bg-[#F1F5F1] min-h-screen">

            <div className="max-w-7xl mx-auto px-5 py-5 animate-pulse">

                {/* Product Information Card */}
                <div className="bg-white/80 border border-[#E1E9E1] rounded-2xl p-6 flex items-center gap-5">

                    {/* Product Icon */}
                    <div className="w-24 h-24 bg-[#F1F5F1] rounded-2xl shrink-0 flex items-center justify-center">
                        <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                    </div>

                    {/* Product Information */}
                    <div className="flex-1">

                        <div className="h-9 w-80 bg-gray-200 rounded"></div>

                        <div className="h-5 w-24 bg-gray-200 rounded mt-3"></div>

                        <div className="h-5 w-80 bg-gray-200 rounded mt-4"></div>

                    </div>

                </div>


                {/* Price Summary */}
                <div className="bg-white/80 border border-[#E1E9E1] rounded-2xl p-6 mt-6">

                    <div className="h-7 w-52 bg-gray-200 rounded mb-5"></div>

                    {/* Summary Cards */}
                    <div className="grid grid-cols-3 gap-4">

                        {[1, 2, 3].map((item) => (

                            <div
                                key={item}
                                className="border border-[#E1E9E1] rounded-2xl p-5"
                            >

                                <div className="h-5 w-28 bg-gray-200 rounded"></div>

                                <div className="h-8 w-36 bg-gray-200 rounded mt-3"></div>

                                <div className="h-5 w-40 bg-gray-200 rounded mt-3"></div>

                            </div>

                        ))}

                    </div>


                    {/* Market Wise Price */}
                    <div className="mt-8">

                        <div className="h-7 w-72 bg-gray-200 rounded mb-5"></div>

                        <div className="border border-[#E1E9E1] rounded-2xl overflow-hidden">

                            {/* Table Header */}
                            <div className="bg-[#F8FAF8] grid grid-cols-5 gap-4 px-5 py-4">

                                {[1, 2, 3, 4, 5].map((item) => (
                                    <div
                                        key={item}
                                        className="h-5 w-20 bg-gray-200 rounded"
                                    ></div>
                                ))}

                            </div>

                            {/* Table Rows */}
                            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (

                                <div
                                    key={item}
                                    className="grid grid-cols-5 gap-4 px-5 py-5 border-t border-[#E1E9E1]"
                                >

                                    {[1, 2, 3, 4, 5].map((col) => (
                                        <div
                                            key={col}
                                            className="h-5 w-24 bg-gray-200 rounded"
                                        ></div>
                                    ))}

                                </div>

                            ))}

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default LoadingPage;
