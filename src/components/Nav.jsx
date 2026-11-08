'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Nav = ({ links }) => {
    const pathName = usePathname()
    return (
        <>
            <Link
                href={'/'}
                className={`${pathName === '/' ? 'text-green-600 font-bold' : 'text-gray-600'}`}
            >
                হোম
            </Link>
            {
                links.map(link =>
                    <li key={link.id}>
                        <Link
                            href={`/category/${link.id}`}
                            className={`${pathName === `/category/${link.id}` ? 'text-green-600 font-bold' : 'text-gray-600'}`}
                        >
                            <span className='pl-3'>
                                {link.icon}
                            </span>
                            <span>
                                {link.nameBn}
                            </span>
                        </Link>
                    </li>)
            }
        </>
    );
};

export default Nav;