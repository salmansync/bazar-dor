
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
        <div className="max-w-7xl mx-auto my-10">


            <div className="bg-white/80 border border-[#E1E9E1] rounded-2xl p-5 flex items-center gap-4 mt-5">

                <div className="flex items-center gap-3">


                    <div className="w-12 h-12 flex items-center justify-center">
                        <span className="text-3xl">
                            {category.categoryIcon}
                        </span>
                    </div>


                    <div>
                        <h2 className="text-2xl font-bold text-[#202B23]">
                            {category.categoryNameBn}
                        </h2>

                        <p className="text-sm text-gray-500">
                            {products.length}টি পণ্যের আজকের দাম ও পরিবর্তন
                        </p>
                    </div>

                </div>

            </div>


            <Sort products={products} />

        </div>
    );
};

export default CategoryDetailsPage;
