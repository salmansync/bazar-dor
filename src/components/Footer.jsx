import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-white border border-gray-100 shadow p-4 sm:p-5">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-5 text-gray-700 text-center sm:text-left">

                    <p className="text-xs sm:text-sm md:text-base">
                        বাজার দর — প্রয়োজনীয় পণ্যের দাম এক নজরে।
                    </p>

                    <p className="text-xs sm:text-sm md:text-base text-gray-500">
                        সকল দাম সম্ভাব্য; বাজার অবস্থার ওপর নির্ভর করে পরিবর্তিত হয়।
                    </p>

                </div>
            </div>
        </footer>
    );
};

export default Footer;