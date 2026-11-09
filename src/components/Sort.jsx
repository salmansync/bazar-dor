'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const Sort = ({ products = [] }) => {

    const [sortType, setSortType] = useState('default');

    // Bengali Number Format
    const formatPrice = (price) =>
        Number(price || 0).toLocaleString('bn-BD');

    // Sorting Products
    const sortedProducts = [...products].sort((a, b) => {

        if (sortType === 'low-to-high') {
            return a.today - b.today;
        }

        if (sortType === 'high-to-low') {
            return b.today - a.today;
        }

        if (sortType === 'name') {
            return a.nameBn.localeCompare(b.nameBn, 'bn');
        }

        return 0;
    });

    return (
        <div className='max-w-7xl mx-auto px-3 sm:px-5 md:px-6'>

            {/* Sorting Bar */}
            <div className="bg-white/80 border border-[#E1E9E1] rounded-2xl p-3 sm:p-5 mt-4 sm:mt-5">

                <div className="flex items-center justify-between sm:justify-end gap-2">

                    <label className="text-xs sm:text-sm text-gray-500 shrink-0">
                        সাজান
                    </label>

                    <select
                        value={sortType}
                        onChange={(e) => setSortType(e.target.value)}
                        className="w-full sm:w-auto max-w-52 border border-gray-300 rounded-lg px-3 py-2 text-xs sm:text-sm text-gray-700 outline-none focus:border-green-600 cursor-pointer"
                    >
                        <option value="default">ডিফল্ট</option>
                        <option value="low-to-high">কম দাম</option>
                        <option value="high-to-low">বেশি দাম</option>
                        <option value="name">নাম অনুযায়ী</option>
                    </select>

                </div>

            </div>


            {/* Product Count */}
            <p className="text-xs sm:text-sm text-gray-500 mt-4 mb-3">
                মোট {sortedProducts.length.toLocaleString('bn-BD')}টি পণ্য দেখানো হচ্ছে
            </p>


            {/* Product Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">

                {sortedProducts.map((product) => (

                    <Link
                        href={`/product/${product.id}`}
                        key={product.id}
                        className="w-full min-w-0 bg-white border border-[#E1E9E1] rounded-2xl p-3 sm:p-4 hover:shadow-md transition-all"
                    >

                        {/* Product Information */}
                        <div className="flex items-center gap-3 min-w-0">

                            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#F1F5F1] rounded-xl flex items-center justify-center shrink-0">
                                <span className="text-xl sm:text-2xl">
                                    {product.image || product.categoryIcon}
                                </span>
                            </div>

                            <div className="min-w-0">
                                <h3 className="text-sm sm:text-base font-bold text-[#202B23] wrap-break-word">
                                    {product.nameBn}
                                </h3>

                                <p className="text-xs sm:text-sm text-gray-500 mt-1">
                                    প্রতি {product.unit === 'kg' ? 'কেজি' : product.unit}
                                </p>
                            </div>

                        </div>


                        {/* Product Price */}
                        <div className="flex flex-wrap items-end justify-between gap-2 mt-4">

                            <div>
                                <p className="text-xs text-gray-500">
                                    আজকের দাম
                                </p>

                                <h3 className="text-base sm:text-xl font-bold text-[#202B23] mt-1">
                                    {formatPrice(product.today)} টাকা
                                </h3>
                            </div>


                            {/* Price Change */}
                            <span
                                className={`px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-semibold whitespace-nowrap ${product.change?.dir === 'up'
                                        ? 'bg-red-50 text-red-500'
                                        : product.change?.dir === 'down'
                                            ? 'bg-green-50 text-green-600'
                                            : 'bg-gray-100 text-gray-500'
                                    }`}
                            >
                                {product.change?.dir === 'up'
                                    ? '▲'
                                    : product.change?.dir === 'down'
                                        ? '▼'
                                        : '—'
                                }

                                {' '}
                                {formatPrice(Math.abs(Number(product.change?.pct || 0)))}%
                            </span>

                        </div>

                    </Link>

                ))}

            </div>

        </div>
    );
};

export default Sort;