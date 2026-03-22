// ============================================================
// DATA LAYER — brands, products, reviews, filters
// ============================================================

// --- BRAND CATALOGUE ---
export const brands = [
  {
    id: 'sztori',
    name: 'Sztori',
    tagline: 'Trendy Plus Size Fashion',
    description: 'One of India\'s leading plus-size fashion brands on Myntra, offering stylish dresses, tops, jeans and winter wear. Known for lasting quality and bold prints.',
    founded: 2018,
    sizeRange: 'XL – 8XL',
    priceRange: '₹799 – ₹2,999',
    rating: 4.3,
    reviewCount: 12400,
    categories: ['Dresses', 'Tops', 'Jeans', 'Trousers', 'Shirts', 'Winter Wear', 'Ethnic Wear'],
    platforms: ['Myntra', 'Ajio'],
    website: 'https://www.myntra.com/sztori',
    logo: null,
    accentColor: '#E85D75',
    popular: true,
    bannerText: 'Trending on Myntra — 4500+ styles',
    specialty: 'Western Wear'
  },
  {
    id: 'pluss',
    name: 'plusS',
    tagline: 'Style Has No Size',
    description: 'Economical plus-size brand with a wide range of dresses, tops, jeans and jackets. Popular for trendy western wear and great value for money.',
    founded: 2016,
    sizeRange: 'XL – 6XL',
    priceRange: '₹599 – ₹2,499',
    rating: 4.1,
    reviewCount: 9800,
    categories: ['Dresses', 'Tops', 'Jeans', 'Jackets', 'Co-ord Sets', 'Kurtas'],
    platforms: ['Myntra', 'Nykaa Fashion'],
    website: 'https://www.myntra.com/pluss',
    logo: null,
    accentColor: '#7C3AED',
    popular: true,
    bannerText: 'Best Value — 1900+ products',
    specialty: 'Casual Wear'
  },
  {
    id: 'lastinch',
    name: 'LASTINCH',
    tagline: 'Curves Are Beautiful',
    description: 'Dedicated plus-size brand offering dresses, kurtis, kurta palazzo sets, jumpsuits, co-ord sets, tops, jackets, and night suits from XXS to 8XL.',
    founded: 2017,
    sizeRange: 'XXS – 8XL',
    priceRange: '₹699 – ₹3,499',
    rating: 4.4,
    reviewCount: 7600,
    categories: ['Dresses', 'Kurtis', 'Kurta Sets', 'Jumpsuits', 'Co-ord Sets', 'Tops', 'Night Suits'],
    platforms: ['Own Website', 'Myntra', 'Ajio'],
    website: 'https://lastinch.in',
    logo: null,
    accentColor: '#EC4899',
    popular: true,
    bannerText: 'D2C Favourite — Couple Collection Available',
    specialty: 'Inclusive Fashion'
  },
  {
    id: 'amydus',
    name: 'Amydus',
    tagline: 'By Plus Size Women, For Plus Size Women',
    description: 'Created by plus-sized women for plus-sized women. Offers XXXL clothing including dresses, jeans, pants, tops, kurtis, and t-shirts with free shipping across India.',
    founded: 2019,
    sizeRange: 'L – 9XL',
    priceRange: '₹599 – ₹2,999',
    rating: 4.2,
    reviewCount: 5400,
    categories: ['Dresses', 'Jeans', 'Tops', 'Kurtis', 'T-Shirts', 'Ethnic Wear'],
    platforms: ['Own Website', 'Myntra', 'Amazon'],
    website: 'https://www.amydus.com',
    logo: null,
    accentColor: '#F59E0B',
    popular: true,
    bannerText: 'Made for Real Bodies — Upto 9XL',
    specialty: 'Western & Ethnic'
  },
  {
    id: 'thepinkmoon',
    name: 'The Pink Moon',
    tagline: 'Curve-Loving Style',
    description: 'Bengaluru-based dedicated plus-size store with trendy dresses, tops, and pants. Known for comfortable fabrics and flattering fits, from L to 10XL.',
    founded: 2020,
    sizeRange: 'L – 10XL',
    priceRange: '₹899 – ₹3,999',
    rating: 4.5,
    reviewCount: 3200,
    categories: ['Dresses', 'Tops', 'Pants', 'Co-ord Sets', 'Maxi Dresses'],
    platforms: ['Own Website', 'Myntra'],
    website: 'https://thepinkmoon.in',
    logo: null,
    accentColor: '#DB2777',
    popular: true,
    bannerText: 'Bengaluru\'s Own — Physical Store + Online',
    specialty: 'Contemporary Western'
  },
  {
    id: 'apella',
    name: 'Apella',
    tagline: 'India\'s First Designer Plus Size Brand',
    description: 'Leading designer plus-size brand with sizes XS to 10XL and free customization. Offers casual, ethnic, festive, and wedding wear for both men and women.',
    founded: 2015,
    sizeRange: 'XS – 10XL',
    priceRange: '₹1,299 – ₹8,999',
    rating: 4.6,
    reviewCount: 4800,
    categories: ['Kurtas', 'Sarees', 'Anarkali', 'Lehenga Sets', 'Co-ord Sets', 'Dresses', 'Wedding Wear'],
    platforms: ['Own Website'],
    website: 'https://www.apella.in',
    logo: null,
    accentColor: '#9333EA',
    popular: true,
    bannerText: 'Designer Wear — Free Customization',
    specialty: 'Designer Ethnic'
  },
  {
    id: 'meeras',
    name: "Meera's Plus Size",
    tagline: "India's Most Loved Plus Size Brand",
    description: 'Specializes in plus-size ethnic and fusion wear including kurtas, sarees, suit sets, anarkali, lehenga sets, and cape sets. Sizes from XS(36) to 10XL(62).',
    founded: 2018,
    sizeRange: 'XS(36) – 10XL(62)',
    priceRange: '₹1,499 – ₹12,999',
    rating: 4.7,
    reviewCount: 6200,
    categories: ['Kurtas', 'Sarees', 'Suit Sets', 'Anarkali', 'Lehenga Sets', 'Cape Sets', 'Sharara Sets'],
    platforms: ['Own Website'],
    website: 'https://www.meerasplussizestore.com',
    logo: null,
    accentColor: '#C2185B',
    popular: true,
    bannerText: 'Premium Ethnic — Wedding Specialists',
    specialty: 'Ethnic & Wedding'
  },
  {
    id: 'rustorange',
    name: 'RustOrange',
    tagline: 'Empowered by Fashion',
    description: 'Offers trendy plus-size ethnic clothing for women including kurtis, lehengas, party dresses, suit sets, and co-ord sets with premium fabrics.',
    founded: 2017,
    sizeRange: 'S – 7XL',
    priceRange: '₹999 – ₹5,999',
    rating: 4.3,
    reviewCount: 3800,
    categories: ['Kurtis', 'Lehengas', 'Dresses', 'Suit Sets', 'Co-ord Sets', 'Sarees'],
    platforms: ['Own Website', 'Myntra', 'Ajio'],
    website: 'https://www.rustorange.com',
    logo: null,
    accentColor: '#EA580C',
    popular: false,
    bannerText: 'Ethnic Elegance — Premium Fabrics',
    specialty: 'Ethnic Wear'
  },
  {
    id: 'desinoor',
    name: 'Desinoor',
    tagline: 'Fashion Knows No Size Limits',
    description: 'Online plus-size ethnic and western clothing store offering beautiful dresses and kurta sets at genuine prices, with sizes up to 8XL.',
    founded: 2019,
    sizeRange: 'L – 8XL',
    priceRange: '₹799 – ₹4,999',
    rating: 4.4,
    reviewCount: 2900,
    categories: ['Dresses', 'Kurta Sets', 'Gowns', 'Sarees', 'Western Wear', 'Ethnic Wear'],
    platforms: ['Own Website', 'Amazon'],
    website: 'https://desinoor.com',
    logo: null,
    accentColor: '#059669',
    popular: false,
    bannerText: 'Ethnic + Western — Drape Sarees Specialist',
    specialty: 'Fusion Wear'
  },
  {
    id: 'womenplus',
    name: 'Women Plus',
    tagline: 'Perfect Fit for Every Body',
    description: 'Wide range of stylish and comfortable plus-size clothing from sizes S to 10XL, focusing on everyday comfort and modern style.',
    founded: 2020,
    sizeRange: 'S – 10XL',
    priceRange: '₹599 – ₹2,499',
    rating: 4.0,
    reviewCount: 2100,
    categories: ['Tops', 'Dresses', 'Kurtis', 'Trousers', 'Leggings', 'Night Wear'],
    platforms: ['Own Website'],
    website: 'https://womenplusindia.com',
    logo: null,
    accentColor: '#0891B2',
    popular: false,
    bannerText: 'Comfort First — Upto 10XL',
    specialty: 'Everyday Comfort'
  },
  {
    id: 'qurvii',
    name: 'Qurvii',
    tagline: 'Designed for Curves',
    description: 'Dedicated plus-size brand on Myntra known for trendy dresses, tops, and ethnic wear. Bold prints and contemporary silhouettes.',
    founded: 2018,
    sizeRange: 'XL – 6XL',
    priceRange: '₹699 – ₹2,999',
    rating: 4.2,
    reviewCount: 8100,
    categories: ['Dresses', 'Tops', 'Kurtis', 'Ethnic Dresses', 'Shirts'],
    platforms: ['Myntra', 'Ajio', 'Nykaa Fashion'],
    website: 'https://www.myntra.com/qurvii',
    logo: null,
    accentColor: '#6366F1',
    popular: true,
    bannerText: 'Myntra Bestseller — Bold Prints',
    specialty: 'Trendy Western'
  },
  {
    id: 'therebelinme',
    name: 'theRebelinme',
    tagline: 'Rebel in Style',
    description: 'Rapidly growing plus-size brand with strong presence on Myntra, offering diverse western and ethnic collections with modern aesthetics.',
    founded: 2020,
    sizeRange: 'XL – 5XL',
    priceRange: '₹499 – ₹2,299',
    rating: 4.0,
    reviewCount: 7200,
    categories: ['Dresses', 'Tops', 'Shirts', 'Kurtis', 'Trousers', 'Jumpsuits'],
    platforms: ['Myntra'],
    website: 'https://www.myntra.com/therebelinme',
    logo: null,
    accentColor: '#DC2626',
    popular: false,
    bannerText: 'Fast Growing — 1800+ Styles',
    specialty: 'Budget Fashion'
  },
  {
    id: 'indietoga',
    name: 'Indietoga',
    tagline: 'Indie Plus Fashion',
    description: 'Indie plus-size fashion brand available on Myntra with a focus on maxi dresses, ethnic dresses, and statement western pieces.',
    founded: 2019,
    sizeRange: 'XL – 7XL',
    priceRange: '₹599 – ₹2,799',
    rating: 4.1,
    reviewCount: 5600,
    categories: ['Dresses', 'Maxi Dresses', 'Ethnic Dresses', 'Tops', 'Kurtas'],
    platforms: ['Myntra', 'Ajio'],
    website: 'https://www.myntra.com/indietoga',
    logo: null,
    accentColor: '#8B5CF6',
    popular: false,
    bannerText: 'Maxi Dress Specialists',
    specialty: 'Maxi & Ethnic'
  },
  {
    id: 'misschaseaplus',
    name: 'Miss Chase A+',
    tagline: 'Chase Your Curves',
    description: 'Plus-size extension of the popular Miss Chase brand, specializing in trendy maxi dresses, party wear, and statement western pieces.',
    founded: 2019,
    sizeRange: 'XL – 5XL',
    priceRange: '₹799 – ₹3,499',
    rating: 4.3,
    reviewCount: 4100,
    categories: ['Maxi Dresses', 'Party Dresses', 'Jumpsuits', 'Co-ord Sets', 'Tops'],
    platforms: ['Myntra', 'Nykaa Fashion'],
    website: 'https://www.myntra.com/miss-chase-a-plus',
    logo: null,
    accentColor: '#F472B6',
    popular: false,
    bannerText: 'Party Wear Favourites',
    specialty: 'Party & Western'
  },
  {
    id: 'sassafrascurve',
    name: 'SASSAFRAS Curve',
    tagline: 'Curve-Confident Fashion',
    description: 'Plus-size line from SASSAFRAS offering on-trend dresses, tops and co-ord sets in inclusive sizing with a focus on contemporary global styles.',
    founded: 2020,
    sizeRange: 'XL – 4XL',
    priceRange: '₹699 – ₹2,499',
    rating: 4.2,
    reviewCount: 3400,
    categories: ['Dresses', 'Tops', 'Co-ord Sets', 'Jumpsuits', 'Shirts'],
    platforms: ['Myntra'],
    website: 'https://www.myntra.com/sassafras-curve',
    logo: null,
    accentColor: '#14B8A6',
    popular: false,
    bannerText: 'Global Trends — Indian Sizing',
    specialty: 'Trendy Western'
  },
  {
    id: 'oxolloxo',
    name: 'Oxolloxo',
    tagline: 'Fashion Without Boundaries',
    description: 'Plus-size fashion brand offering tops, shirts, dresses, jeans, jackets and sweaters with unique prints and contemporary designs.',
    founded: 2017,
    sizeRange: 'XL – 5XL',
    priceRange: '₹699 – ₹2,799',
    rating: 4.1,
    reviewCount: 3000,
    categories: ['Tops', 'Shirts', 'Dresses', 'Jeans', 'Jackets', 'Sweaters'],
    platforms: ['Myntra', 'Ajio'],
    website: 'https://www.myntra.com/oxolloxo',
    logo: null,
    accentColor: '#0EA5E9',
    popular: false,
    bannerText: 'Print Masters — Unique Designs',
    specialty: 'Printed Fashion'
  },
  {
    id: 'berrylushcurve',
    name: 'Berrylush Curve',
    tagline: 'Trendy & Inclusive',
    description: 'Plus-size collection from Berrylush designed to be stylish yet comfortable, celebrating every body type with contemporary styles.',
    founded: 2021,
    sizeRange: 'XL – 4XL',
    priceRange: '₹599 – ₹2,299',
    rating: 4.0,
    reviewCount: 2200,
    categories: ['Dresses', 'Tops', 'Co-ord Sets', 'Maxi Dresses'],
    platforms: ['Own Website', 'Myntra'],
    website: 'https://www.berrylush.com/en-us/collections/berrylush-curve',
    logo: null,
    accentColor: '#A855F7',
    popular: false,
    bannerText: 'Fresh & Trendy Styles',
    specialty: 'Contemporary'
  },
  {
    id: 'plusindia',
    name: 'Pluss',
    tagline: 'Plus Size For All',
    description: 'One of India\'s first dedicated plus-size brands offering clothing for men and women from S to 10XL including jeans, co-ords, t-shirts and more.',
    founded: 2015,
    sizeRange: 'S – 10XL',
    priceRange: '₹690 – ₹2,799',
    rating: 4.1,
    reviewCount: 4500,
    categories: ['Jeans', 'Co-ord Sets', 'T-Shirts', 'Trousers', 'Shirts'],
    platforms: ['Own Website', 'Myntra', 'Ajio'],
    website: 'https://pluss.in',
    logo: null,
    accentColor: '#2563EB',
    popular: false,
    bannerText: 'Pioneer Brand — Since 2015',
    specialty: 'Basics & Denim'
  },
  {
    id: 'etraana',
    name: 'Etraana',
    tagline: 'Playful Plus Prints',
    description: 'Specialises in playful prints and bold colour combinations across A-line dresses, fit-and-flare silhouettes, and georgette gowns in extended sizes.',
    founded: 2021,
    sizeRange: 'XL – 5XL',
    priceRange: '₹799 – ₹2,999',
    rating: 4.0,
    reviewCount: 1800,
    categories: ['Dresses', 'A-Line Dresses', 'Gowns', 'Fit & Flare'],
    platforms: ['Ajio'],
    website: 'https://www.ajio.com/etraana',
    logo: null,
    accentColor: '#F97316',
    popular: false,
    bannerText: 'AJIO Exclusive — Bold Prints',
    specialty: 'Print Dresses'
  },
  {
    id: 'bighello',
    name: 'Big Hello — The Plus Life',
    tagline: 'Hello to Plus Life',
    description: 'Fast-growing plus-size brand on Myntra offering affordable casual and ethnic wear with a youthful, vibrant aesthetic.',
    founded: 2020,
    sizeRange: 'XL – 6XL',
    priceRange: '₹499 – ₹1,999',
    rating: 3.9,
    reviewCount: 5100,
    categories: ['Tops', 'Kurtis', 'Dresses', 'Shirts', 'Trousers'],
    platforms: ['Myntra'],
    website: 'https://www.myntra.com/big-hello-the-plus-life',
    logo: null,
    accentColor: '#10B981',
    popular: false,
    bannerText: 'Budget Friendly — 1200+ Styles',
    specialty: 'Affordable Fashion'
  },
];

// --- PRODUCT CATEGORIES ---
export const allCategories = [
  'Dresses', 'Maxi Dresses', 'Party Dresses', 'Ethnic Dresses',
  'Tops', 'T-Shirts', 'Shirts', 'Kurtis', 'Kurtas', 'Kurta Sets',
  'Suit Sets', 'Anarkali', 'Lehenga Sets', 'Sarees', 'Sharara Sets',
  'Cape Sets', 'Co-ord Sets', 'Jumpsuits', 'Jeans', 'Trousers',
  'Jackets', 'Sweaters', 'Winter Wear', 'Night Suits', 'Gowns',
  'A-Line Dresses', 'Fit & Flare', 'Wedding Wear', 'Pants',
  'Leggings', 'Night Wear', 'Shrugs'
];

export const allPlatforms = ['Myntra', 'Ajio', 'Nykaa Fashion', 'Amazon', 'Own Website'];

export const allSizes = ['XL', '2XL', '3XL', '4XL', '5XL', '6XL', '7XL', '8XL', '9XL', '10XL'];

export const allColors = [
  'Black', 'Blue', 'Green', 'White', 'Pink', 'Red', 'Navy Blue',
  'Maroon', 'Yellow', 'Orange', 'Purple', 'Grey', 'Beige', 'Brown',
  'Teal', 'Coral', 'Mustard', 'Peach', 'Lavender', 'Wine'
];

export const priceRanges = [
  { label: 'Under ₹500', min: 0, max: 500 },
  { label: '₹500 – ₹999', min: 500, max: 999 },
  { label: '₹1,000 – ₹1,999', min: 1000, max: 1999 },
  { label: '₹2,000 – ₹2,999', min: 2000, max: 2999 },
  { label: '₹3,000 – ₹4,999', min: 3000, max: 4999 },
  { label: '₹5,000+', min: 5000, max: 99999 },
];

export const discountRanges = [
  { label: '10% and above', min: 10 },
  { label: '20% and above', min: 20 },
  { label: '30% and above', min: 30 },
  { label: '40% and above', min: 40 },
  { label: '50% and above', min: 50 },
  { label: '60% and above', min: 60 },
  { label: '70% and above', min: 70 },
];

export const sortOptions = [
  { label: 'Recommended', value: 'recommended' },
  { label: 'What\'s New', value: 'newest' },
  { label: 'Popularity', value: 'popularity' },
  { label: 'Better Discount', value: 'discount' },
  { label: 'Price: Low to High', value: 'price_asc' },
  { label: 'Price: High to Low', value: 'price_desc' },
  { label: 'Customer Rating', value: 'rating' },
];

// --- PRODUCT GENERATOR ---
const productTemplates = [
  // DRESSES
  { name: 'Floral Print A-Line Midi Dress', category: 'Dresses', colors: ['Black', 'Blue', 'Pink', 'Green'], fabric: 'Crepe', occasion: 'Casual', pattern: 'Floral', sleeve: 'Short Sleeve', fit: 'A-Line' },
  { name: 'Solid Bodycon Party Dress', category: 'Party Dresses', colors: ['Black', 'Maroon', 'Red', 'Navy Blue'], fabric: 'Lycra', occasion: 'Party', pattern: 'Solid', sleeve: 'Sleeveless', fit: 'Bodycon' },
  { name: 'Floral Wrap Maxi Dress', category: 'Maxi Dresses', colors: ['Blue', 'Green', 'Pink', 'Mustard'], fabric: 'Georgette', occasion: 'Casual', pattern: 'Floral', sleeve: '3/4 Sleeve', fit: 'Flared' },
  { name: 'Printed Shirt Dress with Belt', category: 'Dresses', colors: ['White', 'Beige', 'Blue', 'Pink'], fabric: 'Cotton', occasion: 'Smart Casual', pattern: 'Printed', sleeve: 'Long Sleeve', fit: 'Straight' },
  { name: 'Embroidered Ethnic Maxi Dress', category: 'Ethnic Dresses', colors: ['Maroon', 'Teal', 'Purple', 'Wine'], fabric: 'Rayon', occasion: 'Festive', pattern: 'Embroidered', sleeve: '3/4 Sleeve', fit: 'Flared' },
  { name: 'Tiered Ruffle Midi Dress', category: 'Dresses', colors: ['Coral', 'Lavender', 'Yellow', 'Pink'], fabric: 'Cotton Blend', occasion: 'Casual', pattern: 'Solid', sleeve: 'Puff Sleeve', fit: 'Tiered' },
  { name: 'Sequin Embellished Cocktail Dress', category: 'Party Dresses', colors: ['Black', 'Gold', 'Red', 'Navy Blue'], fabric: 'Velvet', occasion: 'Party', pattern: 'Embellished', sleeve: 'Sleeveless', fit: 'Bodycon' },
  // TOPS
  { name: 'Polka Dot Peplum Top', category: 'Tops', colors: ['Black', 'White', 'Navy Blue', 'Red'], fabric: 'Crepe', occasion: 'Casual', pattern: 'Polka Dot', sleeve: 'Short Sleeve', fit: 'Peplum' },
  { name: 'Striped Oversized T-Shirt', category: 'T-Shirts', colors: ['White', 'Grey', 'Blue', 'Black'], fabric: 'Cotton', occasion: 'Casual', pattern: 'Striped', sleeve: 'Short Sleeve', fit: 'Oversized' },
  { name: 'Ruffle Trim Blouse', category: 'Tops', colors: ['Pink', 'White', 'Peach', 'Lavender'], fabric: 'Georgette', occasion: 'Smart Casual', pattern: 'Solid', sleeve: 'Short Sleeve', fit: 'Regular' },
  { name: 'Printed Kaftan Top', category: 'Tops', colors: ['Teal', 'Orange', 'Green', 'Blue'], fabric: 'Rayon', occasion: 'Casual', pattern: 'Printed', sleeve: 'Short Sleeve', fit: 'Kaftan' },
  { name: 'Lace Detail Cold Shoulder Top', category: 'Tops', colors: ['Black', 'Maroon', 'Navy Blue', 'Purple'], fabric: 'Polyester', occasion: 'Party', pattern: 'Lace', sleeve: 'Cold Shoulder', fit: 'Regular' },
  // ETHNIC WEAR
  { name: 'Embroidered Cotton Straight Kurta', category: 'Kurtas', colors: ['White', 'Blue', 'Mustard', 'Green'], fabric: 'Cotton', occasion: 'Casual', pattern: 'Embroidered', sleeve: '3/4 Sleeve', fit: 'Straight' },
  { name: 'Chanderi Silk Anarkali Set', category: 'Anarkali', colors: ['Pink', 'Teal', 'Maroon', 'Purple'], fabric: 'Chanderi Silk', occasion: 'Festive', pattern: 'Woven', sleeve: 'Long Sleeve', fit: 'Anarkali' },
  { name: 'Block Printed Kurta Palazzo Set', category: 'Kurta Sets', colors: ['Blue', 'Green', 'Mustard', 'Red'], fabric: 'Cotton', occasion: 'Casual', pattern: 'Block Printed', sleeve: '3/4 Sleeve', fit: 'Straight' },
  { name: 'Georgette Sharara Set with Dupatta', category: 'Sharara Sets', colors: ['Pink', 'Teal', 'Maroon', 'Lavender'], fabric: 'Georgette', occasion: 'Wedding', pattern: 'Embroidered', sleeve: '3/4 Sleeve', fit: 'Flared' },
  { name: 'Silk Blend Lehenga Choli Set', category: 'Lehenga Sets', colors: ['Red', 'Maroon', 'Wine', 'Pink'], fabric: 'Silk Blend', occasion: 'Wedding', pattern: 'Embellished', sleeve: 'Short Sleeve', fit: 'Flared' },
  { name: 'Floral Print Suit Set', category: 'Suit Sets', colors: ['Pink', 'Blue', 'Green', 'Peach'], fabric: 'Cotton', occasion: 'Casual', pattern: 'Floral', sleeve: '3/4 Sleeve', fit: 'Straight' },
  { name: 'Designer Saree with Blouse', category: 'Sarees', colors: ['Red', 'Green', 'Purple', 'Maroon'], fabric: 'Georgette', occasion: 'Festive', pattern: 'Embroidered', sleeve: 'Short Sleeve', fit: 'Drape' },
  { name: 'Embroidered Cape Set', category: 'Cape Sets', colors: ['Black', 'Navy Blue', 'Teal', 'Wine'], fabric: 'Georgette', occasion: 'Party', pattern: 'Embroidered', sleeve: 'Cape', fit: 'Flared' },
  // BOTTOMWEAR
  { name: 'High Rise Skinny Fit Jeans', category: 'Jeans', colors: ['Blue', 'Black', 'Grey', 'Navy Blue'], fabric: 'Denim', occasion: 'Casual', pattern: 'Solid', sleeve: 'N/A', fit: 'Skinny' },
  { name: 'Wide Leg Palazzo Pants', category: 'Trousers', colors: ['Black', 'White', 'Navy Blue', 'Beige'], fabric: 'Rayon', occasion: 'Casual', pattern: 'Solid', sleeve: 'N/A', fit: 'Wide Leg' },
  { name: 'Printed Straight Fit Trousers', category: 'Trousers', colors: ['Blue', 'Green', 'Brown', 'Beige'], fabric: 'Cotton', occasion: 'Smart Casual', pattern: 'Printed', sleeve: 'N/A', fit: 'Straight' },
  // CO-ORDS & JUMPSUITS
  { name: 'Printed Co-ord Set', category: 'Co-ord Sets', colors: ['Pink', 'Blue', 'Green', 'Orange'], fabric: 'Rayon', occasion: 'Casual', pattern: 'Printed', sleeve: 'Short Sleeve', fit: 'Regular' },
  { name: 'Solid Jumpsuit with Waist Tie', category: 'Jumpsuits', colors: ['Black', 'Navy Blue', 'Maroon', 'Teal'], fabric: 'Crepe', occasion: 'Party', pattern: 'Solid', sleeve: 'Sleeveless', fit: 'Regular' },
  // WINTER & NIGHT
  { name: 'Quilted Puffer Jacket', category: 'Jackets', colors: ['Black', 'Navy Blue', 'Brown', 'Beige'], fabric: 'Polyester', occasion: 'Winter', pattern: 'Solid', sleeve: 'Long Sleeve', fit: 'Regular' },
  { name: 'Printed Cotton Night Suit Set', category: 'Night Suits', colors: ['Pink', 'Blue', 'Lavender', 'Peach'], fabric: 'Cotton', occasion: 'Sleepwear', pattern: 'Printed', sleeve: 'Short Sleeve', fit: 'Regular' },
  { name: 'Knitted Wool Blend Sweater', category: 'Sweaters', colors: ['Grey', 'Beige', 'Brown', 'Maroon'], fabric: 'Wool Blend', occasion: 'Winter', pattern: 'Cable Knit', sleeve: 'Long Sleeve', fit: 'Regular' },
  // SHIRTS
  { name: 'Oversized Denim Shirt', category: 'Shirts', colors: ['Blue', 'Black', 'White', 'Grey'], fabric: 'Denim', occasion: 'Casual', pattern: 'Solid', sleeve: 'Long Sleeve', fit: 'Oversized' },
  { name: 'Floral Print Casual Shirt', category: 'Shirts', colors: ['White', 'Blue', 'Pink', 'Yellow'], fabric: 'Rayon', occasion: 'Casual', pattern: 'Floral', sleeve: 'Long Sleeve', fit: 'Regular' },
  // GOWNS
  { name: 'Georgette Floor Length Gown', category: 'Gowns', colors: ['Wine', 'Teal', 'Navy Blue', 'Maroon'], fabric: 'Georgette', occasion: 'Party', pattern: 'Embellished', sleeve: 'Long Sleeve', fit: 'Flared' },
  // KURTIS
  { name: 'Cotton Printed A-Line Kurti', category: 'Kurtis', colors: ['Blue', 'Green', 'Yellow', 'Red'], fabric: 'Cotton', occasion: 'Casual', pattern: 'Printed', sleeve: '3/4 Sleeve', fit: 'A-Line' },
  { name: 'Rayon Embroidered Straight Kurti', category: 'Kurtis', colors: ['Pink', 'White', 'Teal', 'Mustard'], fabric: 'Rayon', occasion: 'Casual', pattern: 'Embroidered', sleeve: '3/4 Sleeve', fit: 'Straight' },
];

const reviewTexts = [
  'Amazing fit! Finally found plus size clothes that actually look good on me.',
  'The fabric quality is outstanding. Super comfortable and breathable.',
  'Perfect for the Indian summer. Light, airy, and looks stunning.',
  'I wore this to a wedding and got so many compliments!',
  'The sizing is accurate. First time I didn\'t have to return for wrong fit.',
  'Beautiful design, but slightly long. Had to get it altered.',
  'Best plus size brand I\'ve tried. The colours are exactly as shown.',
  'Value for money! Quality is much better than expected at this price.',
  'Comfortable enough for all-day wear. No irritation at all.',
  'The stitching quality could be better, but overall good product.',
  'I ordered 3XL and it fits perfectly. True to size chart.',
  'Gorgeous ethnic wear! The embroidery work is detailed and neat.',
  'Quick delivery and great packaging. Product matched the photos.',
  'This is my 5th purchase from this brand. Never disappointed!',
  'The material is premium quality. Doesn\'t fade after washing.',
  'Slightly overpriced for what it is, but the fit is impeccable.',
  'The kurta set is absolutely gorgeous. Museum-worthy prints!',
  'I\'m 4XL and this brand actually caters to my size beautifully.',
  'The dress flares beautifully. Feels like wearing a designer outfit.',
  'Return was smooth. Got a replacement that fit perfectly.',
];

const reviewerNames = [
  'Priya S.', 'Anjali M.', 'Sneha K.', 'Kavita R.', 'Pooja T.',
  'Divya P.', 'Meera L.', 'Ritu G.', 'Sunita B.', 'Ananya D.',
  'Nisha V.', 'Shalini A.', 'Rekha J.', 'Deepa N.', 'Swati H.',
  'Lakshmi C.', 'Aarti W.', 'Mansi E.', 'Ishita F.', 'Tanvi O.'
];

// pseudo-random seeded generator
function seededRandom(seed) {
  let s = seed;
  return function() {
    s = (s * 16807 + 0) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

export function generateProducts() {
  const products = [];
  let id = 1;
  const rng = seededRandom(42);

  for (const brand of brands) {
    const productCount = brand.popular ? Math.floor(rng() * 10) + 18 : Math.floor(rng() * 8) + 8;

    for (let i = 0; i < productCount; i++) {
      const template = productTemplates[Math.floor(rng() * productTemplates.length)];
      // Only generate if this brand supports this category (loosely)
      const color = template.colors[Math.floor(rng() * template.colors.length)];
      const mrp = Math.floor(rng() * 4000) + 599;
      const discountPct = Math.floor(rng() * 65) + 5;
      const sellingPrice = Math.round(mrp * (1 - discountPct / 100));
      const rating = Math.round((3.2 + rng() * 1.7) * 10) / 10;
      const ratingCount = Math.floor(rng() * 2000) + 10;
      const sizesAvailable = allSizes.slice(0, Math.floor(rng() * 6) + 3);
      const isPopular = rng() > 0.75;
      const isNew = rng() > 0.8;
      const isBestseller = rng() > 0.85;

      // Cross-platform availability
      const alsoAvailable = [];
      if (rng() > 0.65) {
        const otherBrands = brands.filter(b => b.id !== brand.id);
        const crossCount = Math.floor(rng() * 2) + 1;
        for (let c = 0; c < crossCount; c++) {
          const ob = otherBrands[Math.floor(rng() * otherBrands.length)];
          alsoAvailable.push({
            brandId: ob.id,
            brandName: ob.name,
            price: Math.round(sellingPrice * (0.85 + rng() * 0.3)),
            platform: ob.platforms[0],
            link: ob.website
          });
        }
      }

      // Generate reviews
      const reviewsCount = Math.floor(rng() * 4) + 1;
      const reviews = [];
      for (let r = 0; r < reviewsCount; r++) {
        reviews.push({
          reviewer: reviewerNames[Math.floor(rng() * reviewerNames.length)],
          rating: Math.round((3 + rng() * 2) * 10) / 10,
          text: reviewTexts[Math.floor(rng() * reviewTexts.length)],
          date: `${Math.floor(rng() * 28) + 1} ${['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'][Math.floor(rng() * 6)]} 2025`,
          verified: rng() > 0.3,
          helpful: Math.floor(rng() * 50)
        });
      }

      // Image placeholder — unique gradient per product
      const hue1 = Math.floor(rng() * 360);
      const hue2 = (hue1 + 40 + Math.floor(rng() * 80)) % 360;

      products.push({
        id: `prod_${id++}`,
        name: `${color} ${template.name}`,
        brandId: brand.id,
        brandName: brand.name,
        category: template.category,
        color,
        fabric: template.fabric,
        occasion: template.occasion,
        pattern: template.pattern,
        sleeve: template.sleeve,
        fit: template.fit,
        sizes: sizesAvailable,
        mrp,
        sellingPrice,
        discount: discountPct,
        rating: Math.min(rating, 5.0),
        ratingCount,
        reviews,
        isPopular,
        isNew,
        isBestseller,
        alsoAvailable,
        platforms: brand.platforms,
        productLink: brand.website,
        imageHue1: hue1,
        imageHue2: hue2,
        description: `${color} ${template.name.toLowerCase()} from ${brand.name}. Made with premium ${template.fabric.toLowerCase()} fabric, this ${template.fit.toLowerCase()} fit piece is perfect for ${template.occasion.toLowerCase()} occasions. Features ${template.pattern.toLowerCase()} design with ${template.sleeve.toLowerCase()} styling. Available in sizes ${sizesAvailable.join(', ')}.`,
        careInstructions: 'Machine wash cold. Tumble dry low. Do not bleach. Iron on low heat.',
        returnPolicy: '15-day easy returns. Free exchange within 7 days.',
      });
    }
  }
  return products;
}
