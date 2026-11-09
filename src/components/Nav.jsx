'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Nav = ({ links }) => {
    const pathName = usePathname();

    return (
        <>
            <li className="shrink-0">
                <Link
                    href="/"
                    className={`inline-flex items-center text-xs sm:text-sm md:text-base whitespace-nowrap transition-colors ${pathName === '/'
                            ? 'text-green-600 font-bold'
                            : 'text-gray-600 hover:text-green-600'
                        }`}
                >
                    হোম
                </Link>
            </li>

            {links.map(link => (
                <li key={link.id} className="shrink-0">
                    <Link
                        href={`/category/${link.id}`}
                        className={`inline-flex items-center gap-1 sm:gap-2 text-xs sm:text-sm md:text-base whitespace-nowrap transition-colors ${pathName === `/category/${link.id}`
                                ? 'text-green-600 font-bold'
                                : 'text-gray-600 hover:text-green-600'
                            }`}
                    >
                        <span>{link.icon}</span>
                        <span>{link.nameBn}</span>
                    </Link>
                </li>
            ))}
        </>
    );
};

export default Nav;