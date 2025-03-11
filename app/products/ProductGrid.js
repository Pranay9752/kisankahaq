// import React from 'react';
// import Image from 'next/image';

// // Product category data
// const productCategories = [
//   {
//     id: 'wheat',
//     name: 'Wheat',
//     variants: [
//       { id: 'w1', name: 'Premium Lokwan', image: '/images/wheat/lokwan.jpg' },
//       { id: 'w2', name: 'Sharbati Wheat', image: '/images/wheat/sharbati.jpg' },
//       { id: 'w3', name: 'Durum Wheat', image: '/images/wheat/durum.jpg' },
//       { id: 'w4', name: 'Emmer Wheat (Khapli)', image: '/images/wheat/emmer.jpg' },
//       { id: 'w5', name: 'MP Wheat', image: '/images/wheat/mp-wheat.jpg' },
//       { id: 'w6', name: 'Organic Wheat', image: 'https://m.media-amazon.com/images/I/91nBm7ilp9L._SL1500_.jpg' },
//     ]
//   },
//   {
//     id: 'rice',
//     name: 'Rice',
//     variants: [
//       { id: 'r1', name: 'Traditional 1121 Basmati', image: '/images/rice/basmati-1121.jpg' },
//       { id: 'r2', name: 'Sona Masoori', image: '/images/rice/sona-masoori.jpg' },
//       { id: 'r3', name: 'Govind Bhog', image: '/images/rice/govind-bhog.jpg' },
//       { id: 'r4', name: 'Brown Rice', image: '/images/rice/brown-rice.jpg' },
//       { id: 'r5', name: 'Red Rice', image: '/images/rice/red-rice.jpg' },
//       { id: 'r6', name: 'Black Rice', image: '/images/rice/black-rice.jpg' },
//       { id: 'r7', name: 'Ambemohar', image: '/images/rice/ambemohar.jpg' },
//       { id: 'r8', name: 'Ponni Rice', image: '/images/rice/ponni.jpg' },
//       { id: 'r9', name: 'Indrayani Rice', image: '/images/rice/indrayani.jpg' },
//       { id: 'r10', name: 'Kolam Rice', image: '/images/rice/kolam.jpg' },
//     ]
//   },
//   {
//     id: 'vegetables',
//     name: 'Vegetables',
//     variants: [
//       { id: 'v1', name: 'Kufri Jyoti Potatoes', image: '/images/potatoes.jpg' },
//       { id: 'v2', name: 'Hybrid F1 Tomatoes', image: '/images/tomatoes.jpg' },
//     ]
//   }
// ];

// // ProductCard component
// const ProductCard = ({ product, onViewDetails }) => {
//   return (
//     <div className="overflow-hidden bg-white border border-gray-200 rounded-lg shadow-sm">
//       <div className="relative h-48">
//         <Image
//           src={product.image}
//           alt={product.name}
//           layout="fill"
//           objectFit="cover"
//           // Fallback image if the product image fails to load
//           onError={(e) => {
//             e.target.onerror = null;
//             // e.target.src = "/images/placeholder.jpg";
//           }}
//         />
//       </div>
//       <div className="p-4">
//         <h3 className="mb-2 text-lg font-bold text-gray-800">
//          {product.name}
//         </h3>
//         <div className="flex items-center mb-2">
//           <p className="text-sm text-gray-600">
//             Variety: {product.name}
//           </p>
//         </div>
//         <button 
//           className="w-full px-4 py-2 text-white transition-all duration-300 bg-emerald-600 rounded-lg hover:bg-emerald-700"
//           onClick={() => onViewDetails(product)}
//         >
//           View Details
//         </button>
//       </div>
//     </div>
//   );
// };

// // ProductGrid component
// const ProductGrid = ({ 
//   categoryId = null, 
//   title = "Featured Products", 
//   description = "Discover quality produce from farms across the country.",
//   limit = 4, 
//   onViewDetails,
//   showViewAllButton = true,
//   onViewAll
// }) => {
//   // Get products based on categoryId or show products from all categories
//   const getProducts = () => {
//     if (categoryId) {
//       const category = productCategories.find(cat => cat.id === categoryId);
//       return category ? category.variants : [];
//     } else {
//       // Get a mix of products from all categories
//       return productCategories.flatMap(category => 
//         category.variants.slice(0, Math.min(2, category.variants.length))
//       );
//     }
//   };

//   const products = getProducts()//.slice(0, limit);

//   return (
//     <section className="py-16 bg-white">
//       <div className="container px-4 mx-auto">
//         <div className="mb-16 text-center">
//           <h2 className="mb-4 text-4xl font-bold text-gray-800 font-serif">
//            {title}
//           </h2>
//           <div className="w-24 h-1 mx-auto mb-6 bg-emerald-600"></div>
//           <p className="max-w-2xl mx-auto text-gray-600">
//             {description}
//           </p>
//         </div>

//         <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
//           {products.map(product => (
//             <ProductCard 
//               key={product.id} 
//               product={product} 
//               onViewDetails={onViewDetails} 
//             />
//           ))}
//         </div>

//         {showViewAllButton && (
//           <div className="mt-10 text-center">
//             <button 
//               className="px-8 py-3 text-lg font-medium text-white transition-all duration-300 bg-emerald-600 rounded-lg hover:bg-emerald-700"
//               onClick={onViewAll}
//             >
//              View All Products
//             </button>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default ProductGrid;

import React, { useState } from 'react';
import Image from 'next/image';

// Product category data
const productCategories = [
  {
    id: 'wheat',
    name: 'Wheat',
    emoji: '🌾',
    tagline: 'Flour Power!',
    variants: [
      { id: 'w1', name: 'PBW-373', image: 'https://5.imimg.com/data5/XG/FK/LA/SELLER-106815253/pbw-373-wheat-seed-250x250.jpg'},
      { id: 'w2', name: 'PBW-550', image: 'https://5.imimg.com/data5/FY/MC/DO/SELLER-9214536/pbw-550-wheat-seed-250x250.jpeg'},
      { id: 'w3', name: 'Dbw 187 Karan Vandana', image: 'https://m.media-amazon.com/images/I/714xCG6CxKL._SX679_.jpg'},
      { id: 'w4', name: 'HD 2967 Wheat Seeds', image: 'https://img3.exportersindia.com/product_images/bc-small/2023/9/12178559/hd-2967-wheat-seeds-1688553922-6968264.jpeg'},
      { id: 'w5', name: 'DBW 252 करण श्रिया गेहूं ', image: 'https://m.media-amazon.com/images/I/51AERbKrwKL.jpg'},
      { id: 'w6', name: 'Natural PBW-343', image: 'https://5.imimg.com/data5/SELLER/Default/2023/6/320097796/PG/UY/CO/117968197/pbw-343-wheat-seeds.jpg'},
    ]
  },
  {
    id: 'rice',
    name: 'Rice',
    emoji: '🍚',
    tagline: 'The Grain of Life!',
    variants: [
      { id: 'r1', name: '1121 Basmati rice', image: 'https://5.imimg.com/data5/EY/BS/KE/SELLER-84581150/1121-basmati-rice.jpg'},
      { id: 'r2', name: 'India Gate Basmati Rice', image: 'https://5.imimg.com/data5/SELLER/Default/2020/12/KP/EA/JD/23748315/india-gate-basmati-rice-500x500.jpg'},
      { id: 'r3', name: 'Sonam Basmati ', image: 'https://5.imimg.com/data5/SELLER/Default/2023/5/308565708/CP/FE/NS/135664713/sonam-rice-500x500.jpg'},
      { id: 'r4', name: 'White Kalanamak Rice', image: 'https://2.wlimg.com/product_images/bc-full/2023/12/10265808/white-kalanamak-rice-1703153717-7216302.jpg'},
      { id: 'r5', name: 'PUSA बासमती - 1121', image: 'https://m.media-amazon.com/images/I/91pxvJeYjhL._SX679_.jpg'},
      { id: 'r6', name: 'Pusa 1637', image: 'https://5.imimg.com/data5/QV/NV/KP/SELLER-40491313/pusa-1637-srajan-agro-rice-basmati-seed.jpg'},
      { id: 'r7', name: 'Katarni', image: 'https://sahasa.in/wp-content/uploads/2021/05/katarni-rice-e1621228187289.jpg?w=600'},
      { id: 'r8', name: 'Basmati Rice 386', image: 'https://5.imimg.com/data5/SELLER/Default/2021/7/VI/JM/JW/25494818/basmati-rice-500x500.jpeg'},
      
    ]
  },
  // {
  //   id: 'vegetables',
  //   name: 'Vegetables',
  //   emoji: '🥔',
  //   tagline: 'Farm Fresh Goodness!',
  //   variants: [
  //     { id: 'v1', name: 'Kufri Jyoti Potatoes', image: '/images/potatoes.jpg', origin: 'Himachal Pradesh', farmSize: 'Medium' },
  //     { id: 'v2', name: 'Hybrid F1 Tomatoes', image: '/images/tomatoes.jpg', origin: 'Karnataka', farmSize: 'Large' },
  //   ]
  // }
];

// ProductCard component
const ProductCard = ({ product, onViewDetails }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="relative overflow-hidden bg-white rounded-xl shadow-lg transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl border-2 border-emerald-100"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute top-3 right-3 z-10">
        <div className="bg-yellow-400 text-emerald-800 font-bold px-3 py-1 rounded-full text-xs flex items-center">
          <span className="mr-1">{product.farmSize} Farm</span>
          {product.farmSize === 'Small' && <span>👨‍🌾</span>}
          {product.farmSize === 'Medium' && <span>👨‍👩‍🌾</span>}
          {product.farmSize === 'Large' && <span>👨‍👩‍👧‍👦</span>}
        </div>
      </div>
      
      <div className="relative h-56 overflow-hidden">
        <Image
          // src={'/rice.jpg'}
          src={product.image}
          alt={product.name}
          layout="fill"
          objectFit="cover"
          className={`transition-all duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`}
          onError={(e) => {
            e.target.onerror = null;
          }}
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-emerald-900/80 to-transparent transition-all duration-300 ${isHovered ? 'opacity-80' : 'opacity-0'}`}></div>
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-bold text-emerald-800">
            {product.name}
          </h3>
          <div className="flex items-center">
            <div className="px-2 py-1 text-xs bg-emerald-100 text-emerald-700 rounded-full">
              {product.origin}
            </div>
          </div>
        </div>
        <div className="mb-4">
          <div className={`h-1 bg-emerald-500 rounded-full transition-all duration-300 ${isHovered ? 'w-full' : 'w-12'}`}></div>
        </div>
        
        <button 
          className="w-full px-4 py-3 text-white font-medium transition-all duration-300 bg-emerald-600 rounded-lg hover:bg-emerald-500 flex items-center justify-center group"
          onClick={() => onViewDetails(product)}
        >
          <span>Farm to Table</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>
    </div>
  );
};

// CategoryTab component
const CategoryTab = ({ category, isActive, onClick }) => (
  <button
    className={`px-5 py-3 rounded-full text-lg font-bold transition-all duration-300 flex items-center ${
      isActive 
        ? 'bg-emerald-600 text-white shadow-md' 
        : 'bg-white text-emerald-700 hover:bg-emerald-50'
    }`}
    onClick={onClick}
  >
    <span className="mr-2 text-xl">{category.emoji}</span>
    {category.name}
  </button>
);

// ProductGrid component
const ProductGrid = ({ 
  categoryId = null, 
  title = "Straight From Our Fields", 
  description = "Handpicked by farmers who care, delivered straight to your kitchen!",
  limit = 4, 
  onViewDetails,
  showViewAllButton = true,
  onViewAll
}) => {
  const [activeCategory, setActiveCategory] = useState(categoryId || 'all');
  const [hoveredCategory, setHoveredCategory] = useState(null);
  
  // Get products based on activeCategory
  const getProducts = () => {
    if (activeCategory && activeCategory !== 'all') {
      const category = productCategories.find(cat => cat.id === activeCategory);
      return category ? category.variants : [];
    } else {
      // Get a mix of products from all categories
      return productCategories.flatMap(category => 
        category.variants.slice(0, Math.min(2, category.variants.length))
      );
    }
  };

  const products = getProducts()//.slice(0, limit);
  const activeTabCategory = activeCategory === 'all' 
    ? { name: 'All Goodies', emoji: '🌟', tagline: 'The Best of Everything!' }
    : productCategories.find(cat => cat.id === activeCategory);

  return (
    <section className="py-16 bg-gradient-to-b from-white to-emerald-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-5 pointer-events-none">
        <img src="/api/placeholder/400/400" alt="placeholder" className="absolute w-64 h-64 transform rotate-12 -top-20 -left-20" />
        <img src="/api/placeholder/400/400" alt="placeholder" className="absolute w-64 h-64 transform -rotate-12 -bottom-20 -right-20" />
      </div>
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="mb-12 text-center">
          <div className="mb-2">
            <span className="inline-block px-4 py-1 text-sm font-bold text-emerald-800 bg-yellow-300 rounded-full">
              Farm Fresh Guarantee
            </span>
          </div>
          
          <h2 className="mb-4 text-4xl font-bold text-emerald-800 font-display">
            {title} <span className="text-yellow-500">🚜</span>
          </h2>
          
          <p className="max-w-2xl mx-auto text-lg text-emerald-700">
            {description}
          </p>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          <CategoryTab 
            category={{ name: 'All Goodies', emoji: '🌟', id: 'all' }} 
            isActive={activeCategory === 'all'} 
            onClick={() => setActiveCategory('all')}
          />
          
          {productCategories.map(category => (
            <CategoryTab 
              key={category.id}
              category={category}
              isActive={activeCategory === category.id}
              onClick={() => setActiveCategory(category.id)}
            />
          ))}
        </div>
        
        {/* Category tagline */}
        <div className="mb-8 text-center">
          <div 
            className="inline-block px-6 py-2 text-xl font-bold text-emerald-700 bg-emerald-100 rounded-full transform -rotate-1"
            onMouseEnter={() => setHoveredCategory(activeCategory)}
            onMouseLeave={() => setHoveredCategory(null)}
          >
            <span className="mr-2 text-2xl">{activeTabCategory.emoji}</span>
            {activeTabCategory.tagline}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onViewDetails={onViewDetails} 
            />
          ))}
        </div>

        
        
        {/* Trust badges */}
        <div className="flex flex-wrap items-center justify-center gap-6 mt-16 p-6 bg-white rounded-xl shadow-md">
          <div className="flex items-center px-4 py-2">
            <span className="text-3xl mr-3">🌱</span>
            <div>
              <p className="font-bold text-emerald-800">Organic Options</p>
              <p className="text-sm text-gray-600">Chemical-free goodness</p>
            </div>
          </div>
          
          <div className="flex items-center px-4 py-2">
            <span className="text-3xl mr-3">🔄</span>
            <div>
              <p className="font-bold text-emerald-800">Farm Direct</p>
              <p className="text-sm text-gray-600">No middlemen markup</p>
            </div>
          </div>
          
          <div className="flex items-center px-4 py-2">
            <span className="text-3xl mr-3">👨‍🌾</span>
            <div>
              <p className="font-bold text-emerald-800">Farmer Stories</p>
              <p className="text-sm text-gray-600">Meet your growers</p>
            </div>
          </div>
          
          <div className="flex items-center px-4 py-2">
            <span className="text-3xl mr-3">🚚</span>
            <div>
              <p className="font-bold text-emerald-800">Fresh Delivery</p>
              <p className="text-sm text-gray-600">From farm to doorstep</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;