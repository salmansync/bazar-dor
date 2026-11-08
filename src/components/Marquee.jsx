import Link from 'next/link';
import React from 'react';
import MarqueeText from "react-marquee-text"
import "react-marquee-text/dist/styles.css"
const Marquee = async () => {
    const fetchAllProducts = await fetch('https://api.api-store.workers.dev/api/bazardor/products')
    const products = await fetchAllProducts.json()
    // console.log(products);
    const formatNumber = (number) => {
        return new Intl.NumberFormat("bn-BD").format(number);
    };
    return (
        <div className='bg-white p-5 border border-gray-100 shadow'>
            <MarqueeText
                direction='right'
                duration={10}
                className=''
            >
                {
                    products.map(product =>
                        <Link
                            key={product.id}
                            href={`/product/${product.id}`}>
                            <div
                                className='hover:underline flex items-center'
                            >
                                <span className='pl-2'>
                                    {product.image}
                                </span>
                                <span className='pl-1'>
                                    {product.nameBn}
                                </span>
                                <span className='pl-2'>
                                    {product.today}
                                </span>/
                                <span className=''>
                                    {product.unit}
                                </span>
                                <span
                                    className={`pr-4 flex items-center gap-1 text-sm font-bold ${product.change.dir === "up"
                                        ? "text-red-600"
                                        : product.change.dir === "down"
                                            ? "text-green-600"
                                            : "text-gray-500"
                                        }`}
                                >
                                    {product.change.dir === "up"
                                        ? "▲"
                                        : product.change.dir === "down"
                                            ? "▼"
                                            : "—"}

                                    {formatNumber(Math.abs(product.change.pct))}%
                                </span>
                            </div>
                        </Link>
                    )
                }
            </MarqueeText>
        </div>
    );
};

export default Marquee;