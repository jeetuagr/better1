// ============================================================
// DATA — brands, products, reviews, filters
// ============================================================

export const brands = [
  { id:'sztori', name:'Sztori', tagline:'Trendy Plus Size Fashion', description:'One of India\'s leading plus-size brands on Myntra with dresses, tops, jeans and winter wear. Known for lasting quality and bold prints.', founded:2018, sizeRange:'XL – 8XL', priceRange:'₹799 – ₹2,999', rating:4.3, reviewCount:12400, categories:['Dresses','Tops','Jeans','Trousers','Shirts','Winter Wear'], platforms:['Myntra','Ajio'], website:'https://www.myntra.com/sztori', accentColor:'#E85D75', popular:true, bannerText:'Trending on Myntra — 4500+ styles', specialty:'Western Wear' },
  { id:'pluss', name:'plusS', tagline:'Style Has No Size', description:'Economical plus-size brand with wide range of dresses, tops, jeans and jackets. Great value for money.', founded:2016, sizeRange:'XL – 6XL', priceRange:'₹599 – ₹2,499', rating:4.1, reviewCount:9800, categories:['Dresses','Tops','Jeans','Jackets','Co-ord Sets','Kurtas'], platforms:['Myntra','Nykaa Fashion'], website:'https://www.myntra.com/pluss', accentColor:'#7C3AED', popular:true, bannerText:'Best Value — 1900+ products', specialty:'Casual Wear' },
  { id:'lastinch', name:'LASTINCH', tagline:'Curves Are Beautiful', description:'Dedicated plus-size brand from XXS to 8XL with dresses, kurtis, jumpsuits, co-ord sets, tops, and night suits.', founded:2017, sizeRange:'XXS – 8XL', priceRange:'₹699 – ₹3,499', rating:4.4, reviewCount:7600, categories:['Dresses','Kurtis','Kurta Sets','Jumpsuits','Co-ord Sets','Tops','Night Suits'], platforms:['Own Website','Myntra','Ajio'], website:'https://lastinch.in', accentColor:'#EC4899', popular:true, bannerText:'D2C Favourite — Couple Collection Available', specialty:'Inclusive Fashion' },
  { id:'amydus', name:'Amydus', tagline:'By Plus Size Women, For Plus Size Women', description:'Created by plus-sized women. Offers XXXL clothing including dresses, jeans, tops, kurtis with free shipping across India.', founded:2019, sizeRange:'L – 9XL', priceRange:'₹599 – ₹2,999', rating:4.2, reviewCount:5400, categories:['Dresses','Jeans','Tops','Kurtis','T-Shirts','Ethnic Wear'], platforms:['Own Website','Myntra','Amazon'], website:'https://www.amydus.com', accentColor:'#F59E0B', popular:true, bannerText:'Made for Real Bodies — Upto 9XL', specialty:'Western & Ethnic' },
  { id:'thepinkmoon', name:'The Pink Moon', tagline:'Curve-Loving Style', description:'Bengaluru-based plus-size store with trendy dresses, tops and pants. Known for comfortable fabrics, from L to 10XL.', founded:2020, sizeRange:'L – 10XL', priceRange:'₹899 – ₹3,999', rating:4.5, reviewCount:3200, categories:['Dresses','Tops','Pants','Co-ord Sets','Maxi Dresses'], platforms:['Own Website','Myntra'], website:'https://thepinkmoon.in', accentColor:'#DB2777', popular:true, bannerText:'Bengaluru\'s Own — Physical Store + Online', specialty:'Contemporary Western' },
  { id:'apella', name:'Apella', tagline:'India\'s First Designer Plus Size Brand', description:'Leading designer plus-size brand with sizes XS to 10XL and free customization. Casual, ethnic, festive and wedding wear.', founded:2015, sizeRange:'XS – 10XL', priceRange:'₹1,299 – ₹8,999', rating:4.6, reviewCount:4800, categories:['Kurtas','Sarees','Anarkali','Lehenga Sets','Co-ord Sets','Dresses','Wedding Wear'], platforms:['Own Website'], website:'https://www.apella.in', accentColor:'#9333EA', popular:true, bannerText:'Designer Wear — Free Customization', specialty:'Designer Ethnic' },
  { id:'meeras', name:"Meera's Plus Size", tagline:"India's Most Loved Plus Size Brand", description:'Specializes in plus-size ethnic and fusion wear including kurtas, sarees, suit sets, anarkali, lehenga sets and sharara sets.', founded:2018, sizeRange:'XS(36) – 10XL(62)', priceRange:'₹1,499 – ₹12,999', rating:4.7, reviewCount:6200, categories:['Kurtas','Sarees','Suit Sets','Anarkali','Lehenga Sets','Cape Sets','Sharara Sets'], platforms:['Own Website'], website:'https://www.meerasplussizestore.com', accentColor:'#C2185B', popular:true, bannerText:'Premium Ethnic — Wedding Specialists', specialty:'Ethnic & Wedding' },
  { id:'rustorange', name:'RustOrange', tagline:'Empowered by Fashion', description:'Trendy plus-size ethnic clothing with premium fabrics for kurtis, lehengas, party dresses and suit sets.', founded:2017, sizeRange:'S – 7XL', priceRange:'₹999 – ₹5,999', rating:4.3, reviewCount:3800, categories:['Kurtis','Lehengas','Dresses','Suit Sets','Co-ord Sets','Sarees'], platforms:['Own Website','Myntra','Ajio'], website:'https://www.rustorange.com', accentColor:'#EA580C', popular:false, bannerText:'Ethnic Elegance — Premium Fabrics', specialty:'Ethnic Wear' },
  { id:'desinoor', name:'Desinoor', tagline:'Fashion Knows No Size Limits', description:'Online plus-size ethnic and western clothing store with beautiful dresses and kurta sets, sizes up to 8XL.', founded:2019, sizeRange:'L – 8XL', priceRange:'₹799 – ₹4,999', rating:4.4, reviewCount:2900, categories:['Dresses','Kurta Sets','Gowns','Sarees','Western Wear','Ethnic Wear'], platforms:['Own Website','Amazon'], website:'https://desinoor.com', accentColor:'#059669', popular:false, bannerText:'Ethnic + Western — Drape Sarees Specialist', specialty:'Fusion Wear' },
  { id:'qurvii', name:'Qurvii', tagline:'Designed for Curves', description:'Dedicated plus-size brand on Myntra with bold prints and contemporary silhouettes for dresses, tops and ethnic wear.', founded:2018, sizeRange:'XL – 6XL', priceRange:'₹699 – ₹2,999', rating:4.2, reviewCount:8100, categories:['Dresses','Tops','Kurtis','Ethnic Dresses','Shirts'], platforms:['Myntra','Ajio','Nykaa Fashion'], website:'https://www.myntra.com/qurvii', accentColor:'#6366F1', popular:true, bannerText:'Myntra Bestseller — Bold Prints', specialty:'Trendy Western' },
  { id:'therebelinme', name:'theRebelinme', tagline:'Rebel in Style', description:'Fast-growing plus-size brand with modern aesthetics and diverse western and ethnic collections.', founded:2020, sizeRange:'XL – 5XL', priceRange:'₹499 – ₹2,299', rating:4.0, reviewCount:7200, categories:['Dresses','Tops','Shirts','Kurtis','Trousers','Jumpsuits'], platforms:['Myntra'], website:'https://www.myntra.com/therebelinme', accentColor:'#DC2626', popular:false, bannerText:'Fast Growing — 1800+ Styles', specialty:'Budget Fashion' },
  { id:'indietoga', name:'Indietoga', tagline:'Indie Plus Fashion', description:'Indie plus-size brand with a focus on maxi dresses, ethnic dresses and statement western pieces.', founded:2019, sizeRange:'XL – 7XL', priceRange:'₹599 – ₹2,799', rating:4.1, reviewCount:5600, categories:['Dresses','Maxi Dresses','Ethnic Dresses','Tops','Kurtas'], platforms:['Myntra','Ajio'], website:'https://www.myntra.com/indietoga', accentColor:'#8B5CF6', popular:false, bannerText:'Maxi Dress Specialists', specialty:'Maxi & Ethnic' },
  { id:'misschaseaplus', name:'Miss Chase A+', tagline:'Chase Your Curves', description:'Plus-size extension of Miss Chase specializing in trendy maxi dresses, party wear and statement pieces.', founded:2019, sizeRange:'XL – 5XL', priceRange:'₹799 – ₹3,499', rating:4.3, reviewCount:4100, categories:['Maxi Dresses','Party Dresses','Jumpsuits','Co-ord Sets','Tops'], platforms:['Myntra','Nykaa Fashion'], website:'https://www.myntra.com/miss-chase-a-plus', accentColor:'#F472B6', popular:false, bannerText:'Party Wear Favourites', specialty:'Party & Western' },
  { id:'sassafrascurve', name:'SASSAFRAS Curve', tagline:'Curve-Confident Fashion', description:'On-trend dresses, tops and co-ord sets in inclusive sizing with contemporary global styles.', founded:2020, sizeRange:'XL – 4XL', priceRange:'₹699 – ₹2,499', rating:4.2, reviewCount:3400, categories:['Dresses','Tops','Co-ord Sets','Jumpsuits','Shirts'], platforms:['Myntra'], website:'https://www.myntra.com/sassafras-curve', accentColor:'#14B8A6', popular:false, bannerText:'Global Trends — Indian Sizing', specialty:'Trendy Western' },
  { id:'oxolloxo', name:'Oxolloxo', tagline:'Fashion Without Boundaries', description:'Unique prints and contemporary designs for plus-size tops, shirts, dresses, jeans and jackets.', founded:2017, sizeRange:'XL – 5XL', priceRange:'₹699 – ₹2,799', rating:4.1, reviewCount:3000, categories:['Tops','Shirts','Dresses','Jeans','Jackets','Sweaters'], platforms:['Myntra','Ajio'], website:'https://www.myntra.com/oxolloxo', accentColor:'#0EA5E9', popular:false, bannerText:'Print Masters — Unique Designs', specialty:'Printed Fashion' },
  { id:'berrylushcurve', name:'Berrylush Curve', tagline:'Trendy & Inclusive', description:'Stylish yet comfortable designs celebrating every body type with contemporary styles.', founded:2021, sizeRange:'XL – 4XL', priceRange:'₹599 – ₹2,299', rating:4.0, reviewCount:2200, categories:['Dresses','Tops','Co-ord Sets','Maxi Dresses'], platforms:['Own Website','Myntra'], website:'https://www.berrylush.com', accentColor:'#A855F7', popular:false, bannerText:'Fresh & Trendy Styles', specialty:'Contemporary' },
  { id:'plusindia', name:'Pluss', tagline:'Plus Size For All', description:'One of India\'s first dedicated plus-size brands offering clothing from S to 10XL.', founded:2015, sizeRange:'S – 10XL', priceRange:'₹690 – ₹2,799', rating:4.1, reviewCount:4500, categories:['Jeans','Co-ord Sets','T-Shirts','Trousers','Shirts'], platforms:['Own Website','Myntra','Ajio'], website:'https://pluss.in', accentColor:'#2563EB', popular:false, bannerText:'Pioneer Brand — Since 2015', specialty:'Basics & Denim' },
  { id:'etraana', name:'Etraana', tagline:'Playful Plus Prints', description:'Playful prints and bold colour combinations across A-line dresses, fit-and-flare and georgette gowns.', founded:2021, sizeRange:'XL – 5XL', priceRange:'₹799 – ₹2,999', rating:4.0, reviewCount:1800, categories:['Dresses','A-Line Dresses','Gowns'], platforms:['Ajio'], website:'https://www.ajio.com/etraana', accentColor:'#F97316', popular:false, bannerText:'AJIO Exclusive — Bold Prints', specialty:'Print Dresses' },
  { id:'bighello', name:'Big Hello', tagline:'Hello to Plus Life', description:'Affordable casual and ethnic wear with a youthful, vibrant aesthetic.', founded:2020, sizeRange:'XL – 6XL', priceRange:'₹499 – ₹1,999', rating:3.9, reviewCount:5100, categories:['Tops','Kurtis','Dresses','Shirts','Trousers'], platforms:['Myntra'], website:'https://www.myntra.com/big-hello-the-plus-life', accentColor:'#10B981', popular:false, bannerText:'Budget Friendly — 1200+ Styles', specialty:'Affordable Fashion' },
  { id:'womenplus', name:'Women Plus', tagline:'Perfect Fit for Every Body', description:'Comfortable plus-size clothing from sizes S to 10XL focusing on everyday comfort.', founded:2020, sizeRange:'S – 10XL', priceRange:'₹599 – ₹2,499', rating:4.0, reviewCount:2100, categories:['Tops','Dresses','Kurtis','Trousers','Leggings','Night Wear'], platforms:['Own Website'], website:'https://womenplusindia.com', accentColor:'#0891B2', popular:false, bannerText:'Comfort First — Upto 10XL', specialty:'Everyday Comfort' },
];

export const allCategories = [
  'Dresses','Maxi Dresses','Party Dresses','Ethnic Dresses','Tops','T-Shirts',
  'Shirts','Kurtis','Kurtas','Kurta Sets','Suit Sets','Anarkali','Lehenga Sets',
  'Sarees','Sharara Sets','Co-ord Sets','Jumpsuits','Jeans','Trousers','Gowns'
];

export const allPlatforms = ['Myntra','Ajio','Nykaa Fashion','Amazon','Own Website'];
export const allSizes = ['XL','2XL','3XL','4XL','5XL','6XL','7XL','8XL','9XL','10XL'];
export const allColors = ['Black','Blue','Green','White','Pink','Red','Navy Blue','Maroon','Yellow','Orange','Purple','Grey','Beige','Teal','Mustard','Lavender','Wine'];

export const priceRanges = [
  { label: 'Under ₹500', min: 0, max: 500 },
  { label: '₹500 – ₹999', min: 500, max: 999 },
  { label: '₹1K – ₹2K', min: 1000, max: 1999 },
  { label: '₹2K – ₹3K', min: 2000, max: 2999 },
  { label: '₹3K+', min: 3000, max: 99999 },
];

export const discountRanges = [
  { label: '10%+', min: 10 },
  { label: '20%+', min: 20 },
  { label: '30%+', min: 30 },
  { label: '50%+', min: 50 },
];

export const sortOptions = [
  { label: 'Recommended', value: 'recommended' },
  { label: 'Popularity', value: 'popularity' },
  { label: 'Discount', value: 'discount' },
  { label: 'Price: Low→High', value: 'price_asc' },
  { label: 'Price: High→Low', value: 'price_desc' },
  { label: 'Rating', value: 'rating' },
];

export const carouselSlides = [
  { bg: 'linear-gradient(135deg, #1A1A2E 0%, #4A1942 50%, #B9375E 100%)', badge: "India's Largest Plus-Size Fashion Hub", title: 'Every Curve', titleEm: 'Deserves Style', sub: '20+ brands · 500+ styles · XL to 10XL — Myntra, Ajio, Nykaa & D2C brands in one place.' },
  { bg: 'linear-gradient(135deg, #0F172A 0%, #1E3A5F 50%, #2563EB 100%)', badge: 'New Arrivals Every Week', title: 'Trending', titleEm: 'Plus Size Picks', sub: 'From Sztori to Apella — discover the latest ethnic & western wear curated for curves.' },
  { bg: 'linear-gradient(135deg, #1A1A2E 0%, #3B1F2B 50%, #9333EA 100%)', badge: 'Wedding Season Specials', title: 'Designer', titleEm: 'Ethnic Wear', sub: "Lehengas, Anarkalis & Sarees from Meera's, Apella & RustOrange — sizes up to 10XL." },
  { bg: 'linear-gradient(135deg, #0C0C1D 0%, #1B3A4B 50%, #059669 100%)', badge: 'Upto 70% Off', title: 'Steal', titleEm: 'Deals', sub: "Best discounts on plusS, LASTINCH, Amydus & more. Shop now before they're gone!" },
];

const productTemplates = [
  { name:'Floral A-Line Midi Dress', category:'Dresses', colors:['Black','Blue','Pink','Green'], fabric:'Crepe', occasion:'Casual', pattern:'Floral', sleeve:'Short Sleeve', fit:'A-Line' },
  { name:'Solid Bodycon Party Dress', category:'Party Dresses', colors:['Black','Maroon','Red','Navy Blue'], fabric:'Lycra', occasion:'Party', pattern:'Solid', sleeve:'Sleeveless', fit:'Bodycon' },
  { name:'Floral Wrap Maxi Dress', category:'Maxi Dresses', colors:['Blue','Green','Pink','Mustard'], fabric:'Georgette', occasion:'Casual', pattern:'Floral', sleeve:'3/4 Sleeve', fit:'Flared' },
  { name:'Printed Shirt Dress', category:'Dresses', colors:['White','Beige','Blue','Pink'], fabric:'Cotton', occasion:'Smart Casual', pattern:'Printed', sleeve:'Long Sleeve', fit:'Straight' },
  { name:'Embroidered Ethnic Dress', category:'Ethnic Dresses', colors:['Maroon','Teal','Purple','Wine'], fabric:'Rayon', occasion:'Festive', pattern:'Embroidered', sleeve:'3/4 Sleeve', fit:'Flared' },
  { name:'Tiered Ruffle Midi Dress', category:'Dresses', colors:['Lavender','Yellow','Pink'], fabric:'Cotton Blend', occasion:'Casual', pattern:'Solid', sleeve:'Puff Sleeve', fit:'Tiered' },
  { name:'Polka Dot Peplum Top', category:'Tops', colors:['Black','White','Navy Blue','Red'], fabric:'Crepe', occasion:'Casual', pattern:'Polka Dot', sleeve:'Short Sleeve', fit:'Peplum' },
  { name:'Striped Oversized T-Shirt', category:'T-Shirts', colors:['White','Grey','Blue','Black'], fabric:'Cotton', occasion:'Casual', pattern:'Striped', sleeve:'Short Sleeve', fit:'Oversized' },
  { name:'Embroidered Cotton Kurta', category:'Kurtas', colors:['White','Blue','Mustard','Green'], fabric:'Cotton', occasion:'Casual', pattern:'Embroidered', sleeve:'3/4 Sleeve', fit:'Straight' },
  { name:'Chanderi Silk Anarkali Set', category:'Anarkali', colors:['Pink','Teal','Maroon','Purple'], fabric:'Chanderi Silk', occasion:'Festive', pattern:'Woven', sleeve:'Long Sleeve', fit:'Anarkali' },
  { name:'Block Printed Kurta Set', category:'Kurta Sets', colors:['Blue','Green','Mustard','Red'], fabric:'Cotton', occasion:'Casual', pattern:'Block Printed', sleeve:'3/4 Sleeve', fit:'Straight' },
  { name:'Georgette Sharara Set', category:'Sharara Sets', colors:['Pink','Teal','Maroon','Lavender'], fabric:'Georgette', occasion:'Wedding', pattern:'Embroidered', sleeve:'3/4 Sleeve', fit:'Flared' },
  { name:'Silk Blend Lehenga Set', category:'Lehenga Sets', colors:['Red','Maroon','Wine','Pink'], fabric:'Silk Blend', occasion:'Wedding', pattern:'Embellished', sleeve:'Short Sleeve', fit:'Flared' },
  { name:'High Rise Skinny Jeans', category:'Jeans', colors:['Blue','Black','Grey','Navy Blue'], fabric:'Denim', occasion:'Casual', pattern:'Solid', sleeve:'N/A', fit:'Skinny' },
  { name:'Printed Co-ord Set', category:'Co-ord Sets', colors:['Pink','Blue','Green','Orange'], fabric:'Rayon', occasion:'Casual', pattern:'Printed', sleeve:'Short Sleeve', fit:'Regular' },
  { name:'Solid Jumpsuit with Tie', category:'Jumpsuits', colors:['Black','Navy Blue','Maroon','Teal'], fabric:'Crepe', occasion:'Party', pattern:'Solid', sleeve:'Sleeveless', fit:'Regular' },
  { name:'Cotton A-Line Kurti', category:'Kurtis', colors:['Blue','Green','Yellow','Red'], fabric:'Cotton', occasion:'Casual', pattern:'Printed', sleeve:'3/4 Sleeve', fit:'A-Line' },
  { name:'Georgette Floor Gown', category:'Gowns', colors:['Wine','Teal','Navy Blue','Maroon'], fabric:'Georgette', occasion:'Party', pattern:'Embellished', sleeve:'Long Sleeve', fit:'Flared' },
  { name:'Cold Shoulder Top', category:'Tops', colors:['Black','Maroon','Navy Blue','Purple'], fabric:'Polyester', occasion:'Party', pattern:'Lace', sleeve:'Cold Shoulder', fit:'Regular' },
  { name:'Wide Leg Palazzo Pants', category:'Trousers', colors:['Black','White','Navy Blue','Beige'], fabric:'Rayon', occasion:'Casual', pattern:'Solid', sleeve:'N/A', fit:'Wide Leg' },
];

const reviewTexts = [
  'Amazing fit! Finally found plus size clothes that look great.',
  'Fabric quality is outstanding. Super comfortable and breathable.',
  'Perfect for summer. Light, airy, and looks stunning.',
  'I wore this to a wedding and got so many compliments!',
  'Sizing is accurate. First time I didn\'t need to return.',
  'Beautiful design. Colours are exactly as shown.',
  'Value for money! Quality better than expected at this price.',
  'Comfortable enough for all-day wear. No irritation at all.',
  'Gorgeous ethnic wear! Embroidery work is detailed and neat.',
  'Quick delivery and great packaging. Product matched photos.',
  'This is my 5th purchase from this brand. Never disappointed!',
  'Premium quality material. Doesn\'t fade after washing.',
  'I\'m 4XL and this brand caters to my size beautifully.',
  'The dress flares beautifully. Feels like wearing designer.',
];

const reviewerNames = [
  'Priya S.','Anjali M.','Sneha K.','Kavita R.','Pooja T.',
  'Divya P.','Meera L.','Ritu G.','Sunita B.','Ananya D.',
  'Nisha V.','Shalini A.','Rekha J.','Deepa N.','Swati H.',
];

function seededRandom(seed) {
  let s = seed;
  return function () {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

export function generateProducts() {
  const products = [];
  let id = 1;
  const rng = seededRandom(42);

  for (const brand of brands) {
    const productCount = brand.popular
      ? Math.floor(rng() * 8) + 14
      : Math.floor(rng() * 6) + 6;

    for (let i = 0; i < productCount; i++) {
      const template = productTemplates[Math.floor(rng() * productTemplates.length)];
      const color = template.colors[Math.floor(rng() * template.colors.length)];
      const mrp = Math.floor(rng() * 4000) + 599;
      const discountPct = Math.floor(rng() * 65) + 5;
      const sellingPrice = Math.round(mrp * (1 - discountPct / 100));
      const rating = Math.min(Math.round((3.2 + rng() * 1.7) * 10) / 10, 5.0);
      const ratingCount = Math.floor(rng() * 2000) + 10;
      const sizesAvailable = allSizes.slice(0, Math.floor(rng() * 6) + 3);
      const isPopular = rng() > 0.75;
      const isNew = rng() > 0.8;
      const isBestseller = rng() > 0.85;
      const hue1 = Math.floor(rng() * 360);
      const hue2 = (hue1 + 40 + Math.floor(rng() * 80)) % 360;

      // Cross-platform availability
      const alsoAvailable = [];
      if (rng() > 0.65) {
        const otherBrands = brands.filter((b) => b.id !== brand.id);
        const crossCount = Math.floor(rng() * 2) + 1;
        for (let c = 0; c < crossCount; c++) {
          const ob = otherBrands[Math.floor(rng() * otherBrands.length)];
          alsoAvailable.push({
            brandName: ob.name,
            price: Math.round(sellingPrice * (0.85 + rng() * 0.3)),
            platform: ob.platforms[0],
            link: ob.website,
          });
        }
      }

      // Reviews
      const revCount = Math.floor(rng() * 3) + 1;
      const reviews = [];
      for (let r = 0; r < revCount; r++) {
        reviews.push({
          reviewer: reviewerNames[Math.floor(rng() * reviewerNames.length)],
          rating: Math.round((3 + rng() * 2) * 10) / 10,
          text: reviewTexts[Math.floor(rng() * reviewTexts.length)],
          date: `${Math.floor(rng() * 28) + 1} ${['Jan', 'Feb', 'Mar', 'Apr', 'May'][Math.floor(rng() * 5)]} 2025`,
          verified: rng() > 0.3,
          helpful: Math.floor(rng() * 50),
        });
      }

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
        rating,
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
        description: `${color} ${template.name.toLowerCase()} from ${brand.name}. Premium ${template.fabric.toLowerCase()} fabric, ${template.fit.toLowerCase()} fit for ${template.occasion.toLowerCase()} occasions. ${template.pattern.toLowerCase()} design with ${template.sleeve.toLowerCase()} styling.`,
        careInstructions: 'Machine wash cold. Tumble dry low. Do not bleach.',
        returnPolicy: '15-day easy returns. Free exchange within 7 days.',
      });
    }
  }
  return products;
}
