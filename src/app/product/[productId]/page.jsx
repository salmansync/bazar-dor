
import Breadcrumb from '@/components/Breadcrumb';
import { notFound } from 'next/navigation';

const ProductDetailsPage = async ({ params }) => {

    const { productId } = await params;

    // Fetch Product
    const response = await fetch(
        `https://api.api-store.workers.dev/api/bazardor/products/${productId}`
    );

    // API Error Check
    if (!response.ok) {
        notFound();
    }

    const product = await response.json();

    // Product Not Found Check
    if (!product || !product.id) {
        notFound();
    }

    // Product Price
    const currentPrice = Number(product.today || 0);
    const previousPrice = Number(product.yesterday || 0);

    const priceDifference = currentPrice - previousPrice;

    const percentage = product.change?.pct ?? 0;
    const direction = product.change?.dir;

    // Market Data
    const markets = (product.markets ?? []).map((item) => ({
        ...item,
        average: (Number(item.min) + Number(item.max)) / 2,
    }));

    // Lowest and Highest Price
    const lowestPrice = markets.length
        ? Math.min(...markets.map((item) => item.min))
        : 0;

    const highestPrice = markets.length
        ? Math.max(...markets.map((item) => item.max))
        : 0;

    // Average Price
    const averagePrice = markets.length
        ? markets.reduce((total, item) => total + item.average, 0) / markets.length
        : 0;

    // Sort Markets
    const sortedMarkets = [...markets].sort(
        (a, b) => a.average - b.average
    );

    // Bengali Number Format
    const formatPrice = (price) =>
        Number(price || 0).toLocaleString('bn-BD', {
            maximumFractionDigits: 2,
        });

    return (
        <div className="bg-[#F1F5F1] mb-10">
            <div className="max-w-7xl mx-auto px-5 py-5">

                <Breadcrumb product={product} />

                {/* Product Card */}
                <div className="bg-white/80 border border-[#E1E9E1] rounded-2xl p-5 flex items-center justify-between gap-4 mt-5">

                    {/* Product Information */}
                    <div className="flex items-center gap-4 min-w-0">

                        <div className="w-20 h-20 bg-[#F1F5F1] rounded-2xl flex items-center justify-center shrink-0">
                            <span className="text-4xl">
                                {product.image}
                            </span>
                        </div>

                        <div className="min-w-0">
                            <h2 className="text-2xl font-bold text-[#202B23]">
                                {product.nameBn}
                            </h2>

                            <p className="text-sm text-gray-500 mt-1">
                                {product.categoryNameBn}
                            </p>

                            <p className="text-sm text-[#344238] mt-2">
                                {direction === 'up'
                                    ? `গতকালের তুলনায় আজ দাম বেড়েছে : ${formatPrice(priceDifference)} টাকা`
                                    : direction === 'down'
                                        ? `গতকালের তুলনায় আজ দাম কমেছে : ${formatPrice(Math.abs(priceDifference))} টাকা`
                                        : 'গতকালের তুলনায় আজ দাম অপরিবর্তিত'}
                            </p>
                        </div>
                    </div>

                    {/* Current Price */}
                    <div className="bg-[#F1F5F1] rounded-2xl px-6 py-4 text-center shrink-0">

                        <p className="text-xs text-gray-500">
                            আজকের দাম
                        </p>

                        <h3 className="text-3xl font-bold text-[#202B23]">
                            {formatPrice(currentPrice)}
                        </h3>

                        <p className="text-xs text-gray-500">
                            টাকা / {product.unit === 'kg' ? 'কেজি' : product.unit}
                        </p>

                        <p className={`text-xs font-semibold mt-1 ${direction === 'up'
                                ? 'text-red-500'
                                : direction === 'down'
                                    ? 'text-green-600'
                                    : 'text-gray-500'
                            }`}>
                            {direction === 'up' ? '▲' : direction === 'down' ? '▼' : '—'}
                            {' '}{percentage}%
                        </p>
                    </div>
                </div>

                {/* Price Summary and Market Prices */}
                <div className="bg-white/80 border border-[#E1E9E1] rounded-2xl p-5 mt-5">

                    {/* Price Summary */}
                    <h3 className="text-base font-bold text-[#202B23] mb-3">
                        দামের সারসংক্ষেপ
                    </h3>

                    <div className="grid grid-cols-3 gap-3">

                        {/* Lowest Price */}
                        <div className="border border-[#E1E9E1] rounded-2xl p-4">
                            <p className="text-xs text-gray-500">
                                সর্বনিম্ন দাম
                            </p>

                            <h2 className="text-xl font-bold text-green-600 mt-1">
                                {formatPrice(lowestPrice)} টাকা
                            </h2>

                            <p className="text-xs text-gray-600 mt-1">
                                সবচেয়ে কম দামের বাজার
                            </p>
                        </div>

                        {/* Highest Price */}
                        <div className="border border-[#E1E9E1] rounded-2xl p-4">
                            <p className="text-xs text-gray-500">
                                সর্বোচ্চ দাম
                            </p>

                            <h2 className="text-xl font-bold text-red-500 mt-1">
                                {formatPrice(highestPrice)} টাকা
                            </h2>

                            <p className="text-xs text-gray-600 mt-1">
                                সবচেয়ে বেশি দামের বাজার
                            </p>
                        </div>

                        {/* Average Price */}
                        <div className="border border-[#E1E9E1] rounded-2xl p-4">
                            <p className="text-xs text-gray-500">
                                গড় দাম
                            </p>

                            <h2 className="text-xl font-bold text-green-600 mt-1">
                                {formatPrice(averagePrice)} টাকা
                            </h2>

                            <p className="text-xs text-gray-600 mt-1">
                                প্রতি {product.unit === 'kg' ? 'কেজি' : product.unit}-এর হিসাবে
                            </p>
                        </div>

                    </div>

                    {/* Market Wise Price */}
                    <h3 className="text-base font-bold text-[#202B23] mt-6 mb-3">
                        বাজারভিত্তিক আজকের দাম
                    </h3>

                    <div className="overflow-x-auto border border-[#E1E9E1] rounded-2xl">

                        <table className="w-full text-sm text-left whitespace-nowrap">

                            <thead className="bg-[#F8FAF8] text-gray-500">
                                <tr>
                                    <th className="px-4 py-3 font-semibold">
                                        বাজার
                                    </th>

                                    <th className="px-4 py-3 font-semibold">
                                        বিভাগ
                                    </th>

                                    <th className="px-4 py-3 font-semibold text-right">
                                        সর্বনিম্ন
                                    </th>

                                    <th className="px-4 py-3 font-semibold text-right">
                                        সর্বোচ্চ
                                    </th>

                                    <th className="px-4 py-3 font-semibold text-right">
                                        গড়
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                {sortedMarkets.map((item, index) => (
                                    <tr
                                        key={`${item.market}-${index}`}
                                        className="border-t border-[#E1E9E1] hover:bg-[#F1F5F1] transition-colors"
                                    >
                                        <td className="px-4 py-3 text-[#344238]">
                                            {item.market}
                                        </td>

                                        <td className="px-4 py-3 text-gray-600">
                                            {item.division}
                                        </td>

                                        <td className="px-4 py-3 text-right text-[#344238]">
                                            {formatPrice(item.min)} টাকা
                                        </td>

                                        <td className="px-4 py-3 text-right text-[#344238]">
                                            {formatPrice(item.max)} টাকা
                                        </td>

                                        <td className="px-4 py-3 text-right font-bold text-[#202B23]">
                                            {formatPrice(item.average)} টাকা
                                        </td>
                                    </tr>
                                ))}

                                {sortedMarkets.length === 0 && (
                                    <tr>
                                        <td colSpan="5" className="text-center py-6 text-gray-500">
                                            কোনো বাজারের তথ্য পাওয়া যায়নি।
                                        </td>
                                    </tr>
                                )}
                            </tbody>

                        </table>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProductDetailsPage;
