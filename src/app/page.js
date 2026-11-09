import Image from 'next/image';
import Link from 'next/link';
import image from '../assets/bazar-hero.png';

export default async function Home() {
  const date = new Date().toLocaleDateString('bn-BD', {
    dateStyle: 'full',
  });

  const fetchAllProducts = await fetch(
    'https://api.api-store.workers.dev/api/bazardor/products',
  );

  const products = await fetchAllProducts.json();

  const increasedProducts = products
    .filter((product) => product.change?.dir === 'up')
    .slice(0, 6);

  const decreasedProducts = products
    .filter((product) => product.change?.dir === 'down')
    .slice(0, 6);

  const formatPrice = (price) => Number(price || 0).toLocaleString('bn-BD');

  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-5 md:px-6 mb-8 sm:mb-10">
      {/* Hero Section */}
      <div className="bg-[#F1F5F1] p-3 sm:p-5">
        <div className="bg-white/80 border border-[#E1E9E1] rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-5">
            {/* Left Content */}
            <div className="flex-1 w-full">
              <p className="inline-block bg-[#E2F3E9] text-green-700 text-xs sm:text-sm font-medium px-3 py-1 rounded-full mb-3">
                {date}
              </p>

              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#202B23] leading-snug">
                আজকের বাজারের দাম এক নজরে
              </h1>

              <p className="text-gray-500 text-sm sm:text-base leading-relaxed mt-3 sm:mt-4 max-w-xl">
                চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক
                বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
              </p>

              <Link
                href="#all-products"
                className="inline-block bg-green-700 hover:bg-green-800 text-white text-sm font-semibold px-5 py-2.5 rounded-lg shadow-md transition-all mt-5 sm:mt-6"
              >
                সব পণ্য দেখুন
              </Link>
            </div>

            {/* Right Image */}
            <div className="flex items-center justify-center w-full md:w-56 lg:w-64 shrink-0">
              <Image
                src={image}
                alt="বাজারের পণ্যের ছবি"
                width={250}
                height={200}
                priority
                className="w-40 sm:w-52 md:w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Increased Products */}
      <div className="mt-7 sm:mt-9">
        <div className="pl-1 sm:pl-3">
          <h2 className="font-extrabold text-xl sm:text-2xl mb-4">
            আজ দাম বেড়েছে
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {increasedProducts.map((product) => (
            <Link
              href={`/product/${product.id}`}
              key={product.id}
              className="w-full min-w-0 bg-white/80 border border-[#E1E9E1] rounded-2xl p-3 sm:p-4 hover:shadow-md transition-shadow"
            >
              {/* Product Information */}
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#F1F5F1] rounded-xl flex items-center justify-center shrink-0">
                  <span className="text-xl sm:text-2xl">
                    {product.image || product.categoryIcon}
                  </span>
                </div>

                <div className="min-w-0">
                  <h3 className="text-sm sm:text-base font-bold text-[#202B23] wrap-break-word">
                    {product.nameBn}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-500 mt-1">
                    প্রতি {product.unit === 'kg' ? 'কেজি' : product.unit}
                  </p>
                </div>
              </div>

              {/* Product Price */}
              <div className="flex flex-wrap items-end justify-between gap-2 mt-4">
                <div>
                  <p className="text-xs text-gray-500">আজকের দাম</p>

                  <h2 className="text-base sm:text-xl font-bold text-[#202B23] mt-1">
                    {formatPrice(product.today)} টাকা
                  </h2>
                </div>

                {/* Price Change */}
                <div
                  className={`px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-semibold whitespace-nowrap ${
                    product.change?.dir === 'up'
                      ? 'bg-red-50 text-red-500'
                      : product.change?.dir === 'down'
                        ? 'bg-green-50 text-green-600'
                        : 'bg-gray-100 text-gray-500'
                  }`}
                >
                  {product.change?.dir === 'up'
                    ? '▲'
                    : product.change?.dir === 'down'
                      ? '▼'
                      : '—'}{' '}
                  {formatPrice(product.change?.pct)}%
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Decreased Products */}
      <div className="my-7 sm:my-9">
        <div className="pl-1 sm:pl-3">
          <h2 className="font-extrabold text-xl sm:text-2xl mb-4">
            আজ দাম কমেছে
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {decreasedProducts.map((product) => (
            <Link
              href={`/product/${product.id}`}
              key={product.id}
              className="w-full min-w-0 bg-white/80 border border-[#E1E9E1] rounded-2xl p-3 sm:p-4 hover:shadow-md transition-shadow"
            >
              {/* Product Information */}
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#F1F5F1] rounded-xl flex items-center justify-center shrink-0">
                  <span className="text-xl sm:text-2xl">
                    {product.image || product.categoryIcon}
                  </span>
                </div>

                <div className="min-w-0">
                  <h3 className="text-sm sm:text-base font-bold text-[#202B23] wrap-break-word">
                    {product.nameBn}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-500 mt-1">
                    প্রতি {product.unit === 'kg' ? 'কেজি' : product.unit}
                  </p>
                </div>
              </div>

              {/* Product Price */}
              <div className="flex flex-wrap items-end justify-between gap-2 mt-4">
                <div>
                  <p className="text-xs text-gray-500">আজকের দাম</p>

                  <h2 className="text-base sm:text-xl font-bold text-[#202B23] mt-1">
                    {formatPrice(product.today)} টাকা
                  </h2>
                </div>

                {/* Price Change */}
                <div
                  className={`px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-semibold whitespace-nowrap ${
                    product.change?.dir === 'up'
                      ? 'bg-red-50 text-red-500'
                      : product.change?.dir === 'down'
                        ? 'bg-green-50 text-green-600'
                        : 'bg-gray-100 text-gray-500'
                  }`}
                >
                  {product.change?.dir === 'up'
                    ? '▲'
                    : product.change?.dir === 'down'
                      ? '▼'
                      : '—'}{' '}
                  {formatPrice(product.change?.pct)}%
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* All Products */}
      <div id="all-products">
        <div className="pl-1 sm:pl-3">
          <h2 className="font-extrabold text-xl sm:text-2xl">সব পণ্য</h2>

          <p className="my-3 text-sm sm:text-base text-gray-600">
            মোট {products.length} টি পণ্য দেখানো হচ্ছে
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {products.map((product) => (
            <Link
              href={`/product/${product.id}`}
              key={product.id}
              className="w-full min-w-0 bg-white/80 border border-[#E1E9E1] rounded-2xl p-3 sm:p-4 hover:shadow-md transition-shadow"
            >
              {/* Product Information */}
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#F1F5F1] rounded-xl flex items-center justify-center shrink-0">
                  <span className="text-xl sm:text-2xl">
                    {product.image || product.categoryIcon}
                  </span>
                </div>

                <div className="min-w-0">
                  <h3 className="text-sm sm:text-base font-bold text-[#202B23] wrap-break-word">
                    {product.nameBn}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-500 mt-1">
                    প্রতি {product.unit === 'kg' ? 'কেজি' : product.unit}
                  </p>
                </div>
              </div>

              {/* Product Price */}
              <div className="flex flex-wrap items-end justify-between gap-2 mt-4">
                <div>
                  <p className="text-xs text-gray-500">আজকের দাম</p>

                  <h2 className="text-base sm:text-xl font-bold text-[#202B23] mt-1">
                    {formatPrice(product.today)} টাকা
                  </h2>
                </div>

                {/* Price Change */}
                <div
                  className={`px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-semibold whitespace-nowrap ${
                    product.change?.dir === 'up'
                      ? 'bg-red-50 text-red-500'
                      : product.change?.dir === 'down'
                        ? 'bg-green-50 text-green-600'
                        : 'bg-gray-100 text-gray-500'
                  }`}
                >
                  {product.change?.dir === 'up'
                    ? '▲'
                    : product.change?.dir === 'down'
                      ? '▼'
                      : '—'}{' '}
                  {formatPrice(product.change?.pct)}%
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
