import Link from "next/link";
import { ChevronRight } from "lucide-react";

const Breadcrumb = ({ product }) => {
    // console.log(product);

    return (
        <div className="bg-[#F1F5F1] mb-10">
                <nav className="flex items-center gap-2 text-sm text-gray-700">

                    <Link href="/" className="hover:text-green-600">
                        হোম
                    </Link>

                    <ChevronRight size={16} />

                    <span className="font-medium">
                        {product.categoryNameBn}
                    </span>

                    <ChevronRight size={16} />

                    <span className="font-medium">
                        {product.nameBn}
                    </span>

                </nav>
        </div>
    );
};

export default Breadcrumb;