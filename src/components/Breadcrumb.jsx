import Link from "next/link";
import { ChevronRight } from "lucide-react";

const Breadcrumb = ({ product }) => {
    return (
        <div className="bg-[#F1F5F1] mb-5 sm:mb-8 md:mb-10">
            <div className="max-w-7xl mx-auto px-3 sm:px-5 md:px-6 py-3 sm:py-4">
                <nav className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-700 overflow-x-auto whitespace-nowrap">

                    <Link
                        href="/"
                        className="shrink-0 hover:text-green-600 transition-colors"
                    >
                        হোম
                    </Link>

                    <ChevronRight size={14} className="shrink-0 sm:w-4 sm:h-4" />

                    <span className="font-medium shrink-0">
                        {product.categoryNameBn}
                    </span>

                    <ChevronRight size={14} className="shrink-0 sm:w-4 sm:h-4" />

                    <span className="font-medium truncate">
                        {product.nameBn}
                    </span>

                </nav>
            </div>
        </div>
    );
};

export default Breadcrumb;