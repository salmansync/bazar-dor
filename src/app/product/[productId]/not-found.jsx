import Link from 'next/link';

const NotFoundPage = () => {
    return (
        <div className="min-h-[70vh] bg-[#F1F5F1] flex items-center justify-center px-3 sm:px-5 py-8 sm:py-10">

            <div className="bg-white border border-[#E1E9E1] rounded-xl sm:rounded-2xl p-5 sm:p-8 md:p-10 text-center max-w-lg w-full">

                <div className="text-5xl sm:text-6xl md:text-7xl mb-3 sm:mb-5">
                    🛒
                </div>

                <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#202B23]">
                    পণ্য পাওয়া যায়নি!
                </h1>

                <p className="text-sm sm:text-base text-gray-500 mt-3 leading-6 sm:leading-7">
                    দুঃখিত! আপনি যে পণ্যটি খুঁজছেন সেটি পাওয়া যায়নি।
                    অনুগ্রহ করে অন্য পণ্য নির্বাচন করুন।
                </p>

                <Link
                    href="/"
                    className="inline-block bg-green-600 hover:bg-green-700 text-white text-sm sm:text-base font-semibold px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl mt-5 sm:mt-6 transition-colors"
                >
                    হোম পেজে ফিরে যান
                </Link>

            </div>

        </div>
    );
};

export default NotFoundPage;