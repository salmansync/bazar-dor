
import Link from 'next/link';
import React from 'react';
import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";

const Marquee = async () => {
    const fetchAllProducts = await fetch(
        'https://api.api-store.workers.dev/api/bazardor/products'
    );

    const products = await fetchAllProducts.json();

    const formatNumber = (number) => {
        return new Intl.NumberFormat("bn-BD").format(number);
    };

    return (
        <div className='bg-white px-2 py-3 sm:p-4 md:p-5 border border-gray-100 shadow overflow-hidden'>

            <MarqueeText
                direction='right'
                duration={10}
                className=''
            >

                {products.map(product => (

                    <Link
                        key={product.id}
                        href={`/ product / ${ product.id } `}
                        className='inline-block'
                    >

                        <div className='flex items-center gap-1 sm:gap-2 whitespace-nowrap hover:underline px-1 sm:px-2'>

                            {/* Product Image */}
                            <span className='text-sm sm:text-base'>
                                {product.image}
                            </span>

                            {/* Product Name */}
                            <span className='text-xs sm:text-sm md:text-base font-medium'>
                                {product.nameBn}
                            </span>

                            {/* Product Price */}
                            <span className='text-xs sm:text-sm md:text-base font-bold'>
                                {formatNumber(product.today)}
                            </span>

                            <span className='text-xs sm:text-sm'>
                                /{product.unit}
                            </span>

                            {/* Price Change */}
                            <span
                                className={`pr - 2 sm: pr - 4 flex items - center gap - 1 text - [10px] sm: text - xs md: text - sm font - bold ${
    product.change.dir === "up"
        ? "text-red-600"
        : product.change.dir === "down"
            ? "text-green-600"
            : "text-gray-500"
} `}
                            >

                                {product.change.dir === "up"
                                    ? "▲"
                                    : product.change.dir === "down"
                                        ? "▼"
                                        : "—"
                                }

                                {formatNumber(Math.abs(product.change.pct))}%

                            </span>

                        </div>

                    </Link>

                ))}

            </MarqueeText>

        </div>
    );
};

export default Marquee;
