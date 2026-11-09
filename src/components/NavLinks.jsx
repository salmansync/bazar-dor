import React from 'react';
import Nav from './Nav';

const NavLinks = async () => {
    const fetchLinks = await fetch(
        'https://api.api-store.workers.dev/api/bazardor/categories'
    );

    const links = await fetchLinks.json();

    return (
        <div className="bg-white border border-gray-100 shadow">
            <div className="max-w-7xl mx-auto px-3 sm:px-5 md:px-6">
                <nav className="overflow-x-auto scrollbar-hide">
                    <ul className="flex items-center gap-4 sm:gap-5 md:gap-7 py-3 sm:py-4 w-max min-w-full">
                        <Nav links={links} />
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default NavLinks;