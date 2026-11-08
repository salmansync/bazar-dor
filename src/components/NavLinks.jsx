
import React from 'react';
import Nav from './Nav';

const NavLinks = async () => {
    const fetchLinks = await fetch('https://api.api-store.workers.dev/api/bazardor/categories')
    const links = await fetchLinks.json()
    // console.log(links);

    return (
        <div className='bg-white border border-gray-100 shadow p-4'>
            <div className="max-w-7xl mx-auto">
                <ul className='flex gap-3'>
                    <Nav links={links} />
                </ul>
            </div>
        </div>
    );
};

export default NavLinks;