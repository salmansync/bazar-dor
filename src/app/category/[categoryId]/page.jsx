import Sort from '@/components/Sort';
import { notFound } from 'next/navigation';

const CategoryDetailsPage = async ({ params }) => {
    const { categoryId } = await params;

    const fetchCategory = await fetch(
        `https://api.api-store.workers.dev/api/bazardor/products?category=${categoryId}`
    );

    // API Error Check
    if (!fetchCategory.ok) {
        notFound();
    }

    const data = await fetchCategory.json();

    // Product Array Check
    const products = Array.isArray(data)
        ? data
        : data.data ?? [];

    // Category না থাকলে Not Found
    if (
        products.length === 0 ||
        !products.some(product => product.category === categoryId)
    ) {
        notFound();
    }

    const category = products[0];

    return (
        <div className="max-w-7xl mx-auto my-5 sm:my-7 md:my-10 px-3 sm:px-5 md:px-6">

            {/* Category Header */}
            <div className="bg-white/80 border border-[#E1E9E1] rounded-xl sm:rounded-2xl p-3 sm:p-5 flex items-center gap-3 sm:gap-4 mt-3 sm:mt-5">

                <div className="flex items-center gap-2 sm:gap-3 min-w-0">

                    {/* Category Icon */}
                    <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 flex items-center justify-center">
                        <span className="text-2xl sm:text-3xl">
                            {category.categoryIcon}
                        </span>
                    </div>

                    {/* Category Information */}
                    <div className="min-w-0">
                        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-[#202B23]">
                            {category.categoryNameBn}
                        </h2>

                        <p className="text-xs sm:text-sm text-gray-500 mt-1">
                            {products.length}টি পণ্যের আজকের দাম ও পরিবর্তন
                        </p>
                    </div>

                </div>

            </div>

            {/* Product Sorting */}
            <div className="mt-3 sm:mt-5">
                <Sort products={products} />
            </div>

        </div>
    );
};

export default CategoryDetailsPage;