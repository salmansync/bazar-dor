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
    <div className="max-w-7xl mx-auto mb-10">
      <div className="bg-[#F1F5F1] p-5">
        <div className="bg-white/80 border border-[#E1E9E1] rounded-3xl p-8">
          <div className="flex items-center justify-between gap-5">
            <div className="flex-1">
              <p className="inline-block bg-[#E2F3E9] text-green-700 text-sm font-medium px-3 py-1 rounded-full mb-3">
                {date}
              </p>

              <h1 className="text-4xl font-bold text-[#202B23] leading-tight">
                আজকের বাজারের দাম এক নজরে
              </h1>

              <p className="text-gray-500 text-base leading-relaxed mt-4 max-w-xl">
                চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক
                বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
              </p>

              <button className="inline-block bg-green-700 hover:bg-green-800 text-white text-sm font-semibold px-5 py-2.5 rounded-lg shadow-md transition-all mt-6">
                সব পণ্য দেখুন
              </button>
            </div>

            {/* Right Image */}
            <div className="flex items-center justify-center w-64 shrink-0">
              <Image
                src={image}
                alt="বাজারের পণ্যের ছবি"
                width={250}
                height={200}
                priority
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="today-increase">
        <div className="pl-3">
          <h2 className="font-extrabold text-2xl mb-4">আজ দাম বেড়েছে</h2>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {increasedProducts.map((product) => (
            <Link
              href={`/product/${product.id}`}
              key={product.id}
              className="min-w-90 bg-white/80 border border-[#E1E9E1] rounded-2xl p-4 hover:shadow-md transition-shadow"
            >
              {/* Product Information */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#F1F5F1] rounded-xl flex items-center justify-center shrink-0">
                  <span className="text-2xl">
                    {product.image || product.categoryIcon}
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-bold text-[#202B23]">
                    {product.nameBn}
                  </h3>

                  <p className="text-sm text-gray-500 mt-1">
                    প্রতি {product.unit === 'kg' ? 'কেজি' : product.unit}
                  </p>
                </div>
              </div>

              {/* Product Price */}
              <div className="flex items-end justify-between mt-4">
                <div>
                  <p className="text-xs text-gray-500">আজকের দাম</p>

                  <h2 className="text-xl font-bold text-[#202B23] mt-1">
                    {formatPrice(product.today)} টাকা
                  </h2>
                </div>

                {/* Price Change */}
                <div
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${
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
      <div className="today decreased my-4">
        <div className="pl-3">
          <h2 className="font-extrabold text-2xl mb-4">আজ দাম কমেছে</h2>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {decreasedProducts.map((product) => (
            <Link
              href={`/product/${product.id}`}
              key={product.id}
              className="min-w-90 bg-white/80 border border-[#E1E9E1] rounded-2xl p-4 hover:shadow-md transition-shadow"
            >
              {/* Product Information */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#F1F5F1] rounded-xl flex items-center justify-center shrink-0">
                  <span className="text-2xl">
                    {product.image || product.categoryIcon}
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-bold text-[#202B23]">
                    {product.nameBn}
                  </h3>

                  <p className="text-sm text-gray-500 mt-1">
                    প্রতি {product.unit === 'kg' ? 'কেজি' : product.unit}
                  </p>
                </div>
              </div>

              {/* Product Price */}
              <div className="flex items-end justify-between mt-4">
                <div>
                  <p className="text-xs text-gray-500">আজকের দাম</p>

                  <h2 className="text-xl font-bold text-[#202B23] mt-1">
                    {formatPrice(product.today)} টাকা
                  </h2>
                </div>

                {/* Price Change */}
                <div
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${
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
      <div className="all-products">
        <div className="pl-3">
          <h2 className="font-extrabold text-2xl">সব পণ্য</h2>
          <p className="my-3 text-gray-600">
            মোট {products.length} টি পণ্য দেখানো হচ্ছে
          </p>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {products.map((product) => (
            <Link
              href={`/product/${product.id}`}
              key={product.id}
              className="min-w-90 bg-white/80 border border-[#E1E9E1] rounded-2xl p-4 hover:shadow-md transition-shadow"
            >
              {/* Product Information */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#F1F5F1] rounded-xl flex items-center justify-center shrink-0">
                  <span className="text-2xl">
                    {product.image || product.categoryIcon}
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-bold text-[#202B23]">
                    {product.nameBn}
                  </h3>

                  <p className="text-sm text-gray-500 mt-1">
                    প্রতি {product.unit === 'kg' ? 'কেজি' : product.unit}
                  </p>
                </div>
              </div>

              {/* Product Price */}
              <div className="flex items-end justify-between mt-4">
                <div>
                  <p className="text-xs text-gray-500">আজকের দাম</p>

                  <h2 className="text-xl font-bold text-[#202B23] mt-1">
                    {formatPrice(product.today)} টাকা
                  </h2>
                </div>

                {/* Price Change */}
                <div
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${
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
