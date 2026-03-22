import React, { useState, useMemo, useCallback, useEffect, useRef } from 'react';
import {
  brands, allCategories, allPlatforms, allSizes, allColors,
  priceRanges, discountRanges, sortOptions, carouselSlides, generateProducts
} from './data';
import './App.css';

// ============================================================
// ICONS
// ============================================================
const Icons = {
  Search: () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>,
  Filter: () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>,
  Star: ({ filled }) => <svg width="11" height="11" viewBox="0 0 24 24" fill={filled ? '#F59E0B' : 'none'} stroke="#F59E0B" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
  Heart: ({ filled }) => <svg width="14" height="14" viewBox="0 0 24 24" fill={filled ? '#EF4444' : 'none'} stroke={filled ? '#EF4444' : 'currentColor'} strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>,
  X: () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>,
  ChevDown: () => <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"/></svg>,
  ChevRight: () => <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"/></svg>,
  ChevLeft: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6"/></svg>,
  ChevRight2: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 6 15 12 9 18"/></svg>,
  External: () => <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>,
  ArrowLeft: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>,
  Tag: () => <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>,
  Cart: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>,
  Truck: () => <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>,
  Shield: () => <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
  Return: () => <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>,
  Share: () => <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>,
};

// Star rating component
function StarRating({ rating, count }) {
  return (
    <span className="bt-stars">
      {[1,2,3,4,5].map(i => <Icons.Star key={i} filled={i <= Math.round(rating)} />)}
      <span className="bt-stars-val">{rating}</span>
      {count != null && <span className="bt-stars-count">({count >= 1000 ? (count/1000).toFixed(1)+'k' : count})</span>}
    </span>
  );
}

// Product Card
function ProductCard({ product: p, onSelect, onWishlist, isWishlisted }) {
  return (
    <article className="bt-card" onClick={() => onSelect(p)}>
      <div className="bt-card-img">
        <div className="bt-card-grad" style={{ background: `linear-gradient(135deg, hsl(${p.imageHue1},45%,82%), hsl(${p.imageHue2},55%,72%))` }}>
          <span className="bt-card-cat">{p.category}</span>
          <span className="bt-card-bname">{p.brandName}</span>
        </div>
        {p.isNew && <span className="bt-card-badge" style={{ background: '#7C3AED' }}>NEW</span>}
        {p.isBestseller && <span className="bt-card-badge" style={{ background: '#F59E0B', left: 'auto', right: 5 }}>BEST</span>}
        {p.discount >= 50 && <span className="bt-card-badge" style={{ background: '#DC2626', top: 'auto', bottom: 5 }}>{p.discount}% OFF</span>}
        <button className="bt-card-wish" onClick={e => { e.stopPropagation(); onWishlist(p.id); }}>
          <Icons.Heart filled={isWishlisted} />
        </button>
        {p.alsoAvailable.length > 0 && (
          <div className="bt-card-cross"><Icons.Tag /> +{p.alsoAvailable.length}</div>
        )}
      </div>
      <div className="bt-card-info">
        <div className="bt-card-brand">{p.brandName}</div>
        <div className="bt-card-name">{p.name}</div>
        <div className="bt-card-pricing">
          <span className="bt-card-price">₹{p.sellingPrice.toLocaleString()}</span>
          <span className="bt-card-mrp">₹{p.mrp.toLocaleString()}</span>
          <span className="bt-card-discount">({p.discount}% OFF)</span>
        </div>
        <div style={{ marginBottom: 3 }}><StarRating rating={p.rating} count={p.ratingCount} /></div>
        <div className="bt-card-sizes">
          {p.sizes.slice(0,3).map(s => <span key={s} className="bt-size-chip">{s}</span>)}
          {p.sizes.length > 3 && <span className="bt-size-more">+{p.sizes.length - 3}</span>}
        </div>
      </div>
    </article>
  );
}

// Filter Section (collapsible)
function FilterSection({ title, sectionKey, options, filters, onToggle, expanded }) {
  return (
    <div className="bt-fs">
      <button className="bt-fs-btn" onClick={() => expanded.toggle(sectionKey)}>
        <span>{title}</span>
        <span style={{ transform: expanded.is(sectionKey) ? 'rotate(180deg)' : 'none', transition: '.15s', display: 'inline-flex' }}>
          <Icons.ChevDown />
        </span>
      </button>
      {expanded.is(sectionKey) && (
        <div className="bt-fs-opts">
          {options.map(opt => {
            const val = typeof opt === 'string' ? opt : opt.label;
            const isActive = (filters[sectionKey] || []).includes(val);
            return (
              <div key={val} className={`bt-fopt ${isActive ? 'active' : ''}`} onClick={() => onToggle(sectionKey, val)}>
                <div className={`bt-fchk ${isActive ? 'active' : ''}`}>{isActive ? '✓' : ''}</div>
                <span>{val}</span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

// ============================================================
// MAIN APP
// ============================================================
export default function App() {
  const [page, setPage] = useState('home');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [wishlist, setWishlist] = useState(new Set());
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('recommended');
  const [filterOpen, setFilterOpen] = useState(false);
  const [filters, setFilters] = useState({
    categories: [], brands: [], price: [], sizes: [], colors: [],
    discount: [], occasion: [], fabric: [], pattern: [], fit: [], platforms: []
  });
  const [visibleCount, setVisibleCount] = useState(24);
  const [selectedSize, setSelectedSize] = useState(null);
  const [detailTab, setDetailTab] = useState('details');
  const [expandedSections, setExpandedSections] = useState({
    categories: true, brands: true, price: true, sizes: true,
    colors: false, discount: false, occasion: false, fabric: false,
    pattern: false, fit: false, platforms: false
  });
  const [carouselIdx, setCarouselIdx] = useState(0);
  const carouselTimer = useRef(null);

  // Carousel auto-advance
  useEffect(() => {
    carouselTimer.current = setInterval(() => setCarouselIdx(i => (i + 1) % carouselSlides.length), 4500);
    return () => clearInterval(carouselTimer.current);
  }, []);

  const goSlide = (i) => {
    setCarouselIdx(i);
    clearInterval(carouselTimer.current);
    carouselTimer.current = setInterval(() => setCarouselIdx(j => (j + 1) % carouselSlides.length), 4500);
  };

  const allProducts = useMemo(() => generateProducts(), []);

  // FILTERING
  const filteredProducts = useMemo(() => {
    let result = [...allProducts];
    const q = searchQuery.toLowerCase().trim();
    if (q) result = result.filter(p =>
      p.name.toLowerCase().includes(q) || p.brandName.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) || p.color.toLowerCase().includes(q)
    );
    if (selectedBrand) result = result.filter(p => p.brandId === selectedBrand.id);
    if (filters.categories.length) result = result.filter(p => filters.categories.includes(p.category));
    if (filters.brands.length) result = result.filter(p => filters.brands.includes(p.brandName));
    if (filters.colors.length) result = result.filter(p => filters.colors.includes(p.color));
    if (filters.occasion.length) result = result.filter(p => filters.occasion.includes(p.occasion));
    if (filters.fabric.length) result = result.filter(p => filters.fabric.includes(p.fabric));
    if (filters.pattern.length) result = result.filter(p => filters.pattern.includes(p.pattern));
    if (filters.fit.length) result = result.filter(p => filters.fit.includes(p.fit));
    if (filters.sizes.length) result = result.filter(p => p.sizes.some(s => filters.sizes.includes(s)));
    if (filters.platforms.length) result = result.filter(p => p.platforms.some(pl => filters.platforms.includes(pl)));
    if (filters.price.length) result = result.filter(p =>
      filters.price.some(label => { const r = priceRanges.find(x => x.label === label); return r && p.sellingPrice >= r.min && p.sellingPrice <= r.max; })
    );
    if (filters.discount.length) {
      const minD = Math.max(...filters.discount.map(label => { const r = discountRanges.find(x => x.label === label); return r ? r.min : 0; }));
      result = result.filter(p => p.discount >= minD);
    }
    switch (sortBy) {
      case 'popularity': result.sort((a,b) => b.ratingCount - a.ratingCount); break;
      case 'discount': result.sort((a,b) => b.discount - a.discount); break;
      case 'price_asc': result.sort((a,b) => a.sellingPrice - b.sellingPrice); break;
      case 'price_desc': result.sort((a,b) => b.sellingPrice - a.sellingPrice); break;
      case 'rating': result.sort((a,b) => b.rating - a.rating); break;
      default: result.sort((a,b) => (b.isPopular?1:0) - (a.isPopular?1:0) || b.rating - a.rating);
    }
    return result;
  }, [allProducts, searchQuery, filters, sortBy, selectedBrand]);

  const visibleProducts = useMemo(() => filteredProducts.slice(0, visibleCount), [filteredProducts, visibleCount]);
  useEffect(() => { setVisibleCount(24); }, [filters, searchQuery, sortBy, selectedBrand]);

  const toggleWishlist = useCallback(id => {
    setWishlist(prev => { const n = new Set(prev); if (n.has(id)) n.delete(id); else n.add(id); return n; });
  }, []);

  const goPage = (p) => { setPage(p); setSelectedBrand(null); setVisibleCount(24); };
  const goShopBrand = (b) => { setSelectedBrand(b); setPage('shop'); setVisibleCount(24); };

  const toggleFilter = (key, val) => {
    setFilters(prev => {
      const cur = prev[key] || [];
      return { ...prev, [key]: cur.includes(val) ? cur.filter(v => v !== val) : [...cur, val] };
    });
  };

  const clearFilters = () => setFilters({
    categories: [], brands: [], price: [], sizes: [], colors: [],
    discount: [], occasion: [], fabric: [], pattern: [], fit: [], platforms: []
  });

  const activeFilterCount = Object.values(filters).flat().length;
  const wishlistProducts = useMemo(() => allProducts.filter(p => wishlist.has(p.id)), [allProducts, wishlist]);

  const expandedHelper = {
    is: (key) => expandedSections[key],
    toggle: (key) => setExpandedSections(prev => ({ ...prev, [key]: !prev[key] }))
  };

  return (
    <div style={{ overflowX: 'hidden', width: '100%' }}>
      {/* NAVBAR */}
      <nav className="bt-nav">
        <div className="bt-nav-in">
          <div className="bt-logo" onClick={() => goPage('home')}>
            <span className="bt-logo-icon">B</span>
            <span className="bt-logo-text">Better</span>
          </div>
          <div className="bt-nav-links">
            <button className={`bt-navl ${page === 'home' ? 'active' : ''}`} onClick={() => goPage('home')}>Home</button>
            <button className={`bt-navl ${page === 'shop' ? 'active' : ''}`} onClick={() => goPage('shop')}>Shop</button>
            <button className={`bt-navl ${page === 'brands' ? 'active' : ''}`} onClick={() => goPage('brands')}>Brands</button>
          </div>
          <div className="bt-search">
            <Icons.Search />
            <input placeholder="Search brands, products..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} onFocus={() => { if (page === 'home') setPage('shop'); }} />
          </div>
          <div className="bt-nav-acts">
            <button className="bt-nact" onClick={() => goPage('wishlist')}>
              <Icons.Heart filled={false} />
              {wishlist.size > 0 && <span className="bt-badge">{wishlist.size}</span>}
            </button>
            <button className="bt-nact"><Icons.Cart /></button>
          </div>
        </div>
      </nav>

      {/* ===== HOME ===== */}
      {page === 'home' && (
        <>
          {/* Hero Carousel */}
          <div className="bt-carousel">
            <div className="bt-carousel-track" style={{ transform: `translateX(-${carouselIdx * 100}%)` }}>
              {carouselSlides.map((slide, i) => (
                <div key={i} className="bt-carousel-slide" style={{ background: slide.bg }}>
                  <div className="bt-carousel-content">
                    <div className="bt-hero-badge">{slide.badge}</div>
                    <h1 className="bt-hero-title">{slide.title}<br /><em>{slide.titleEm}</em></h1>
                    <p className="bt-hero-sub">{slide.sub}</p>
                    <div className="bt-hero-cta">
                      <button className="bt-hero-btn-primary" onClick={() => goPage('shop')}>Shop Now</button>
                      <button className="bt-hero-btn-outline" onClick={() => goPage('brands')}>Brands</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button className="bt-carousel-nav prev" onClick={() => goSlide((carouselIdx - 1 + carouselSlides.length) % carouselSlides.length)}><Icons.ChevLeft /></button>
            <button className="bt-carousel-nav next" onClick={() => goSlide((carouselIdx + 1) % carouselSlides.length)}><Icons.ChevRight2 /></button>
            <div className="bt-carousel-dots">
              {carouselSlides.map((_, i) => <button key={i} className={`bt-dot ${i === carouselIdx ? 'active' : ''}`} onClick={() => goSlide(i)} />)}
            </div>
          </div>

          {/* Brand Logos */}
          <div className="bt-section">
            <div className="bt-section-header">
              <h2 className="bt-section-title">Shop by Brand</h2>
              <button className="bt-section-link" onClick={() => goPage('brands')}>All Brands <Icons.ChevRight /></button>
            </div>
            <div className="bt-brands-strip">
              {brands.filter(b => b.popular).concat(brands.filter(b => !b.popular).slice(0, 4)).map(b => (
                <div key={b.id} className="bt-brand-logo" onClick={() => goShopBrand(b)}>
                  <div className="bt-brand-logo-circle" style={{ background: b.accentColor }}>{b.name.charAt(0)}</div>
                  <span className="bt-brand-logo-name">{b.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Trending */}
          <div className="bt-section">
            <div className="bt-section-header">
              <h2 className="bt-section-title">Trending Now</h2>
              <button className="bt-section-link" onClick={() => goPage('shop')}>View All <Icons.ChevRight /></button>
            </div>
            <div className="bt-grid">
              {allProducts.filter(p => p.isPopular).slice(0, 8).map(p => (
                <ProductCard key={p.id} product={p} onSelect={prod => { setSelectedProduct(prod); setSelectedSize(null); setDetailTab('details'); }} onWishlist={toggleWishlist} isWishlisted={wishlist.has(p.id)} />
              ))}
            </div>
          </div>

          {/* Categories */}
          <div className="bt-section">
            <div className="bt-section-header"><h2 className="bt-section-title">Shop by Category</h2></div>
            <div className="bt-cats">
              {['Dresses','Kurtas','Tops','Jeans','Sarees','Co-ord Sets','Lehenga Sets','Party Dresses','Maxi Dresses','Jumpsuits','Kurtis','Gowns'].map(cat => (
                <button key={cat} className="bt-cat-chip" onClick={() => { setFilters(prev => ({ ...prev, categories: [cat] })); goPage('shop'); }}>{cat}</button>
              ))}
            </div>
          </div>

          {/* Deals */}
          <div className="bt-section">
            <div className="bt-section-header"><h2 className="bt-section-title">50%+ Off Deals</h2></div>
            <div className="bt-grid">
              {allProducts.filter(p => p.discount >= 50).slice(0, 4).map(p => (
                <ProductCard key={p.id} product={p} onSelect={prod => { setSelectedProduct(prod); setSelectedSize(null); setDetailTab('details'); }} onWishlist={toggleWishlist} isWishlisted={wishlist.has(p.id)} />
              ))}
            </div>
          </div>
        </>
      )}

      {/* ===== SHOP ===== */}
      {page === 'shop' && (
        <div style={{ maxWidth: 1440, margin: '0 auto', padding: '10px 12px' }}>
          <div className="bt-toolbar">
            <div className="bt-toolbar-left">
              {selectedBrand && <button style={{ display: 'flex', color: '#6B6580' }} onClick={() => setSelectedBrand(null)}><Icons.ArrowLeft /></button>}
              <h2>{selectedBrand ? selectedBrand.name : 'All Products'}</h2>
              <span style={{ fontSize: '.65rem', color: '#9B95A8', whiteSpace: 'nowrap' }}>{filteredProducts.length} items</span>
            </div>
            <div className="bt-toolbar-right">
              <button className="bt-filter-btn" onClick={() => setFilterOpen(true)}>
                <Icons.Filter /> Filters
                {activeFilterCount > 0 && <span className="bt-filter-count">{activeFilterCount}</span>}
              </button>
              <select className="bt-sort-select" value={sortBy} onChange={e => setSortBy(e.target.value)}>
                {sortOptions.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
              </select>
            </div>
          </div>

          {activeFilterCount > 0 && (
            <div className="bt-active-chips">
              {Object.entries(filters).map(([key, vals]) => vals.map(val => (
                <span key={`${key}-${val}`} className="bt-active-chip">
                  {val}
                  <button style={{ display: 'flex', color: '#B9375E' }} onClick={() => toggleFilter(key, val)}><Icons.X /></button>
                </span>
              )))}
              <button style={{ color: '#B9375E', fontWeight: 600, fontSize: '.58rem' }} onClick={clearFilters}>Clear All</button>
            </div>
          )}

          {visibleProducts.length === 0 ? (
            <div className="bt-empty">
              <h3 style={{ fontFamily: "'DM Serif Display', Georgia, serif", marginBottom: 4 }}>No products found</h3>
              <p style={{ marginBottom: 14, fontSize: '.78rem' }}>Try adjusting your filters.</p>
              <button className="bt-buy-btn" style={{ width: 'auto', display: 'inline-flex', padding: '8px 24px' }} onClick={clearFilters}>Clear Filters</button>
            </div>
          ) : (
            <>
              <div className="bt-grid">
                {visibleProducts.map(p => (
                  <ProductCard key={p.id} product={p} onSelect={prod => { setSelectedProduct(prod); setSelectedSize(null); setDetailTab('details'); }} onWishlist={toggleWishlist} isWishlisted={wishlist.has(p.id)} />
                ))}
              </div>
              {visibleCount < filteredProducts.length && (
                <div className="bt-load-more">
                  <button className="bt-buy-btn" style={{ width: 'auto', padding: '9px 28px' }} onClick={() => setVisibleCount(v => v + 24)}>
                    Load More ({filteredProducts.length - visibleCount} remaining)
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      )}

      {/* ===== BRANDS ===== */}
      {page === 'brands' && (
        <div style={{ maxWidth: 1440, margin: '0 auto', padding: '16px 12px 36px' }}>
          <div style={{ textAlign: 'center', marginBottom: 24 }}>
            <h1 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: 'clamp(1.3rem, 3.5vw, 2rem)', marginBottom: 3 }}>All Plus-Size Brands</h1>
            <p style={{ color: '#6B6580', fontSize: '.78rem' }}>{brands.length} curated brands across India</p>
          </div>
          <div className="bt-brands-grid">
            {brands.map(brand => {
              const prodCount = allProducts.filter(p => p.brandId === brand.id).length;
              return (
                <article key={brand.id} className="bt-bcard" onClick={() => goShopBrand(brand)}>
                  <div className="bt-bcard-logo" style={{ background: brand.accentColor }}>{brand.name.charAt(0)}</div>
                  <div className="bt-bcard-info">
                    <h3>{brand.name}</h3>
                    <p className="bt-bcard-tagline">{brand.tagline}</p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 3 }}>
                      <StarRating rating={brand.rating} count={brand.reviewCount} />
                      <span style={{ fontSize: '.58rem', color: '#9B95A8' }}>{prodCount} products</span>
                    </div>
                    <div className="bt-bcard-tags">
                      <span className="bt-btag">{brand.sizeRange}</span>
                      <span className="bt-btag">{brand.specialty}</span>
                      {brand.popular && <span className="bt-btag-hot">Popular</span>}
                    </div>
                    <div style={{ display: 'flex', gap: 3, flexWrap: 'wrap' }}>
                      {brand.platforms.map(p => <span key={p} className="bt-plat-chip">{p}</span>)}
                    </div>
                    <p className="bt-bcard-banner">{brand.bannerText}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      )}

      {/* ===== WISHLIST ===== */}
      {page === 'wishlist' && (
        <div style={{ maxWidth: 1440, margin: '0 auto', padding: '16px 12px' }}>
          <h1 style={{ fontFamily: "'DM Serif Display', Georgia, serif", marginBottom: 18, fontSize: '1.3rem' }}>My Wishlist ({wishlist.size})</h1>
          {wishlistProducts.length === 0 ? (
            <div className="bt-empty">
              <h3 style={{ fontFamily: "'DM Serif Display', Georgia, serif", marginBottom: 4 }}>Wishlist is empty</h3>
              <p style={{ marginBottom: 14, fontSize: '.78rem' }}>Add products you love!</p>
              <button className="bt-buy-btn" style={{ width: 'auto', display: 'inline-flex', padding: '8px 24px', margin: '0 auto' }} onClick={() => goPage('shop')}>Start Shopping</button>
            </div>
          ) : (
            <div className="bt-grid">
              {wishlistProducts.map(p => (
                <ProductCard key={p.id} product={p} onSelect={prod => { setSelectedProduct(prod); setSelectedSize(null); setDetailTab('details'); }} onWishlist={toggleWishlist} isWishlisted={true} />
              ))}
            </div>
          )}
        </div>
      )}

      {/* FILTER PANEL */}
      {filterOpen && <div className="bt-filter-overlay" onClick={() => setFilterOpen(false)} />}
      <div className={`bt-filter-panel ${filterOpen ? 'open' : ''}`}>
        <div className="bt-fp-header">
          <span style={{ fontWeight: 700, fontSize: '.75rem', display: 'flex', alignItems: 'center', gap: 4 }}>
            <Icons.Filter /> Filters
            {activeFilterCount > 0 && <span className="bt-filter-count">{activeFilterCount}</span>}
          </span>
          <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
            {activeFilterCount > 0 && <button style={{ color: '#B9375E', fontWeight: 600, fontSize: '.58rem', textTransform: 'uppercase' }} onClick={clearFilters}>Clear</button>}
            <button onClick={() => setFilterOpen(false)}><Icons.X /></button>
          </div>
        </div>
        <div className="bt-fp-body">
          <div style={{ padding: '0 14px 6px', fontSize: '.62rem', color: '#9B95A8' }}>{filteredProducts.length} products</div>
          <FilterSection title="Categories" sectionKey="categories" options={allCategories} filters={filters} onToggle={toggleFilter} expanded={expandedHelper} />
          <FilterSection title="Brands" sectionKey="brands" options={brands.map(b => b.name)} filters={filters} onToggle={toggleFilter} expanded={expandedHelper} />
          <FilterSection title="Price" sectionKey="price" options={priceRanges} filters={filters} onToggle={toggleFilter} expanded={expandedHelper} />
          <FilterSection title="Sizes" sectionKey="sizes" options={allSizes} filters={filters} onToggle={toggleFilter} expanded={expandedHelper} />
          <FilterSection title="Colors" sectionKey="colors" options={allColors} filters={filters} onToggle={toggleFilter} expanded={expandedHelper} />
          <FilterSection title="Discount" sectionKey="discount" options={discountRanges} filters={filters} onToggle={toggleFilter} expanded={expandedHelper} />
          <FilterSection title="Occasion" sectionKey="occasion" options={['Casual','Party','Festive','Wedding','Smart Casual']} filters={filters} onToggle={toggleFilter} expanded={expandedHelper} />
          <FilterSection title="Fabric" sectionKey="fabric" options={['Cotton','Rayon','Georgette','Crepe','Silk Blend','Denim','Polyester','Lycra']} filters={filters} onToggle={toggleFilter} expanded={expandedHelper} />
          <FilterSection title="Pattern" sectionKey="pattern" options={['Solid','Floral','Printed','Embroidered','Striped','Polka Dot','Block Printed']} filters={filters} onToggle={toggleFilter} expanded={expandedHelper} />
          <FilterSection title="Fit" sectionKey="fit" options={['A-Line','Straight','Flared','Bodycon','Regular','Oversized','Skinny','Wide Leg']} filters={filters} onToggle={toggleFilter} expanded={expandedHelper} />
          <FilterSection title="Platform" sectionKey="platforms" options={allPlatforms} filters={filters} onToggle={toggleFilter} expanded={expandedHelper} />
        </div>
      </div>

      {/* PRODUCT DETAIL MODAL */}
      {selectedProduct && (
        <div className="bt-modal-overlay" onClick={() => setSelectedProduct(null)}>
          <div className="bt-modal" onClick={e => e.stopPropagation()}>
            <button className="bt-modal-close" onClick={() => setSelectedProduct(null)}><Icons.X /></button>
            <div className="bt-modal-grid">
              <div className="bt-modal-imgs">
                <div className="bt-modal-main-img" style={{ background: `linear-gradient(135deg, hsl(${selectedProduct.imageHue1},45%,82%), hsl(${selectedProduct.imageHue2},55%,72%))` }}>
                  <span className="bt-card-cat">{selectedProduct.category}</span>
                  <span style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: '.8rem', color: 'rgba(0,0,0,.18)' }}>{selectedProduct.brandName}</span>
                </div>
                <div className="bt-modal-thumbs">
                  {[0,1,2,3].map(i => <div key={i} className="bt-modal-thumb" style={{ background: `linear-gradient(${135+i*20}deg, hsl(${(selectedProduct.imageHue1+i*30)%360},45%,82%), hsl(${(selectedProduct.imageHue2+i*30)%360},55%,72%))`, border: i===0 ? '2px solid #B9375E' : '2px solid #F0ECE6' }} />)}
                </div>
              </div>
              <div className="bt-modal-info">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 2 }}>
                  <span style={{ fontSize: '.6rem', fontWeight: 700, color: '#9B95A8', textTransform: 'uppercase', letterSpacing: '.04em' }}>{selectedProduct.brandName}</span>
                  <div style={{ display: 'flex', gap: 2 }}>
                    <button className="bt-nact" style={{ width: 28, height: 28 }} onClick={() => toggleWishlist(selectedProduct.id)}><Icons.Heart filled={wishlist.has(selectedProduct.id)} /></button>
                    <button className="bt-nact" style={{ width: 28, height: 28 }}><Icons.Share /></button>
                  </div>
                </div>
                <h2 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: '1.1rem', marginBottom: 8 }}>{selectedProduct.name}</h2>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, flexWrap: 'wrap', marginBottom: 2 }}>
                  <span style={{ fontWeight: 800, fontSize: '1.15rem' }}>₹{selectedProduct.sellingPrice.toLocaleString()}</span>
                  <span style={{ fontSize: '.78rem', color: '#9B95A8', textDecoration: 'line-through' }}>₹{selectedProduct.mrp.toLocaleString()}</span>
                  <span style={{ fontSize: '.62rem', fontWeight: 700, color: '#DC2626', background: '#FEF2F2', padding: '2px 6px', borderRadius: 100 }}>{selectedProduct.discount}% OFF</span>
                </div>
                <p style={{ fontSize: '.6rem', color: '#9B95A8', marginBottom: 10 }}>Inclusive of all taxes</p>
                <div style={{ marginBottom: 12 }}><StarRating rating={selectedProduct.rating} count={selectedProduct.ratingCount} /></div>

                <div style={{ marginBottom: 12 }}>
                  <h4 style={{ fontSize: '.72rem', fontWeight: 700, marginBottom: 5 }}>Select Size</h4>
                  <div style={{ display: 'flex', gap: 5, flexWrap: 'wrap' }}>
                    {selectedProduct.sizes.map(s => (
                      <button key={s} className={`bt-size-btn ${selectedSize === s ? 'active' : ''}`} onClick={() => setSelectedSize(s)}>{s}</button>
                    ))}
                  </div>
                </div>

                <a href={selectedProduct.productLink} target="_blank" rel="noopener noreferrer" className="bt-buy-btn">
                  <Icons.Cart /> Buy on {selectedProduct.platforms[0]} <Icons.External />
                </a>

                {selectedProduct.alsoAvailable.length > 0 && (
                  <div className="bt-cross-box">
                    <h4 style={{ fontSize: '.68rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: 3, marginBottom: 5 }}><Icons.Tag /> Also available on</h4>
                    {selectedProduct.alsoAvailable.map((av, i) => (
                      <a key={i} href={av.link} target="_blank" rel="noopener noreferrer" className="bt-cross-item">
                        <strong>{av.brandName}</strong>
                        <span style={{ fontSize: '.55rem', color: '#9B95A8' }}>{av.platform}</span>
                        <span style={{ marginLeft: 'auto', fontWeight: 800, color: '#B9375E' }}>₹{av.price.toLocaleString()}</span>
                        <Icons.External />
                      </a>
                    ))}
                  </div>
                )}

                <div style={{ display: 'flex', flexDirection: 'column', gap: 5, paddingTop: 10, borderTop: '1px solid #F0ECE6', marginTop: 10 }}>
                  <div className="bt-promise"><span style={{ color: '#059669' }}><Icons.Truck /></span> Free Delivery above ₹999</div>
                  <div className="bt-promise"><span style={{ color: '#059669' }}><Icons.Return /></span> 15-day easy returns</div>
                  <div className="bt-promise"><span style={{ color: '#059669' }}><Icons.Shield /></span> 100% authentic products</div>
                </div>
              </div>
            </div>

            <div className="bt-tabs">
              {['details','reviews','brand'].map(tab => (
                <button key={tab} className={`bt-tab ${detailTab === tab ? 'active' : ''}`} onClick={() => setDetailTab(tab)}>
                  {tab === 'details' ? 'Details' : tab === 'reviews' ? `Reviews (${selectedProduct.reviews.length})` : 'Brand'}
                </button>
              ))}
            </div>

            <div className="bt-tab-content">
              {detailTab === 'details' && (
                <div className="bt-detail-grid">
                  {[['Fabric', selectedProduct.fabric],['Pattern', selectedProduct.pattern],['Fit', selectedProduct.fit],['Sleeve', selectedProduct.sleeve],['Occasion', selectedProduct.occasion],['Color', selectedProduct.color],['Care', selectedProduct.careInstructions],['Returns', selectedProduct.returnPolicy]].map(([label, val]) => (
                    <div key={label}><div className="bt-detail-label">{label}</div><div className="bt-detail-value">{val}</div></div>
                  ))}
                  <p style={{ gridColumn: '1/-1', fontSize: '.72rem', lineHeight: 1.5, color: '#6B6580', marginTop: 6 }}>{selectedProduct.description}</p>
                </div>
              )}
              {detailTab === 'reviews' && (
                <div>
                  {selectedProduct.reviews.map((rev, i) => (
                    <div key={i} className="bt-review">
                      <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 3, flexWrap: 'wrap' }}>
                        <StarRating rating={rev.rating} />
                        <strong style={{ fontSize: '.65rem' }}>{rev.reviewer}</strong>
                        {rev.verified && <span style={{ fontSize: '.52rem', color: '#059669', fontWeight: 600 }}>✓ Verified</span>}
                        <span style={{ fontSize: '.52rem', color: '#9B95A8', marginLeft: 'auto' }}>{rev.date}</span>
                      </div>
                      <p style={{ fontSize: '.68rem', lineHeight: 1.4, color: '#6B6580', marginBottom: 3 }}>{rev.text}</p>
                      <div style={{ fontSize: '.52rem', color: '#9B95A8' }}>{rev.helpful} found helpful</div>
                    </div>
                  ))}
                </div>
              )}
              {detailTab === 'brand' && (() => {
                const brand = brands.find(b => b.id === selectedProduct.brandId);
                return brand ? (
                  <div>
                    <h3 style={{ fontFamily: "'DM Serif Display', Georgia, serif", marginBottom: 2 }}>{brand.name}</h3>
                    <p style={{ fontSize: '.68rem', color: '#B9375E', fontStyle: 'italic', marginBottom: 6 }}>{brand.tagline}</p>
                    <p style={{ fontSize: '.72rem', lineHeight: 1.5, color: '#6B6580', marginBottom: 10 }}>{brand.description}</p>
                    <div className="bt-detail-grid" style={{ marginBottom: 8 }}>
                      {[['Founded', brand.founded],['Sizes', brand.sizeRange],['Price', brand.priceRange],['Specialty', brand.specialty]].map(([l,v]) => (
                        <div key={l}><div className="bt-detail-label">{l}</div><div className="bt-detail-value">{v}</div></div>
                      ))}
                    </div>
                    <div style={{ marginBottom: 8 }}><StarRating rating={brand.rating} count={brand.reviewCount} /></div>
                    <div style={{ display: 'flex', gap: 3, flexWrap: 'wrap', marginBottom: 10 }}>
                      {brand.platforms.map(p => <span key={p} className="bt-plat-chip">{p}</span>)}
                    </div>
                    <a href={brand.website} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 4, padding: '7px 14px', border: '1.5px solid #B9375E', borderRadius: 8, color: '#B9375E', fontWeight: 600, fontSize: '.72rem', textDecoration: 'none' }}>
                      Visit {brand.name} <Icons.External />
                    </a>
                  </div>
                ) : null;
              })()}
            </div>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="bt-footer">
        <div className="bt-footer-grid">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 8, color: '#fff', fontFamily: "'DM Serif Display', Georgia, serif", fontSize: '1rem' }}>
              <span className="bt-logo-icon">B</span> Better
            </div>
            <p style={{ fontSize: '.68rem', lineHeight: 1.5 }}>India's largest plus-size fashion aggregator. 20+ brands, one destination.</p>
          </div>
          <div>
            <h4>Links</h4>
            <button className="bt-footer-link" onClick={() => goPage('shop')}>Shop All</button>
            <button className="bt-footer-link" onClick={() => goPage('brands')}>Brands</button>
            <button className="bt-footer-link" onClick={() => goPage('wishlist')}>Wishlist</button>
          </div>
          <div>
            <h4>Top Brands</h4>
            {brands.slice(0, 5).map(b => <button key={b.id} className="bt-footer-link" onClick={() => goShopBrand(b)}>{b.name}</button>)}
          </div>
          <div>
            <h4>Categories</h4>
            {['Dresses','Kurtas','Tops','Jeans','Sarees'].map(c => (
              <button key={c} className="bt-footer-link" onClick={() => { setFilters(prev => ({ ...prev, categories: [c] })); goPage('shop'); }}>{c}</button>
            ))}
          </div>
        </div>
        <div className="bt-footer-bottom">© 2025 Better. Product data sourced from respective brand websites. Better is an aggregator platform.</div>
      </footer>
    </div>
  );
}
