import { useState, useMemo, useCallback, useEffect, useRef } from "react";

/* ─── BRAND DATA ─────────────────────────────────────────────────────────── */
const BRANDS = [
  { id:"sztori",    name:"Sztori",         tl:"Trendy Plus Size",      desc:"One of India's leading plus-size brands on Myntra with 4500+ styles.",   f:2018, sr:"XL–8XL",   pr:"₹799–₹2,999",  rt:4.3, rc:12400, pl:["Myntra","Ajio"],               ws:"https://www.myntra.com/sztori",       ac:"#E85D75", sp:"Western" },
  { id:"pluss",     name:"plusS",          tl:"Style Has No Size",     desc:"Economical plus-size brand with wide range of everyday Western wear.",     f:2016, sr:"XL–6XL",   pr:"₹599–₹2,499",  rt:4.1, rc:9800,  pl:["Myntra","Nykaa Fashion"],      ws:"https://www.myntra.com/pluss",        ac:"#7C3AED", sp:"Casual" },
  { id:"lastinch",  name:"LASTINCH",       tl:"Curves Are Beautiful",  desc:"XXS to 8XL — one of the widest size ranges in Indian fashion.",           f:2017, sr:"XXS–8XL",  pr:"₹699–₹3,499",  rt:4.4, rc:7600,  pl:["Own Site","Myntra","Ajio"],    ws:"https://lastinch.in",                 ac:"#EC4899", sp:"Inclusive" },
  { id:"amydus",    name:"Amydus",         tl:"By Plus Size Women",    desc:"Founded by plus-size women, for plus-size women. Sizes up to 9XL.",       f:2019, sr:"L–9XL",    pr:"₹599–₹2,999",  rt:4.2, rc:5400,  pl:["Own Site","Myntra","Amazon"],  ws:"https://www.amydus.com",              ac:"#F59E0B", sp:"Western & Ethnic" },
  { id:"pinkmoon",  name:"The Pink Moon",  tl:"Curve-Loving Style",    desc:"Bengaluru-based D2C brand catering to curves, L to 10XL.",               f:2020, sr:"L–10XL",   pr:"₹899–₹3,999",  rt:4.5, rc:3200,  pl:["Own Site","Myntra"],           ws:"https://thepinkmoon.in",              ac:"#DB2777", sp:"Contemporary" },
  { id:"apella",    name:"Apella",         tl:"Designer Plus Size",    desc:"Free customization on every outfit. XS to 10XL in ethnic & fusion.",      f:2015, sr:"XS–10XL",  pr:"₹1,299–₹8,999",rt:4.6, rc:4800,  pl:["Own Site"],                    ws:"https://www.apella.in",               ac:"#9333EA", sp:"Designer Ethnic" },
  { id:"meeras",    name:"Meera's Plus",   tl:"Most Loved Plus Size",  desc:"Top-rated ethnic and fusion wear brand for curvy women on Myntra.",       f:2014, sr:"XL–5XL",   pr:"₹899–₹4,999",  rt:4.4, rc:15600, pl:["Myntra"],                      ws:"https://www.myntra.com/meeras-plus",  ac:"#059669", sp:"Ethnic" },
  { id:"sassafras", name:"SASSAFRAS Curve",tl:"Bold Fashion Forward",  desc:"Vibrant prints and bold silhouettes for the fashion-forward plus woman.", f:2013, sr:"S–5XL",    pr:"₹699–₹3,199",  rt:4.3, rc:11200, pl:["Myntra","Ajio","Nykaa Fashion"],ws:"https://www.myntra.com/sassafras",    ac:"#D97706", sp:"Trendy Western" },
  { id:"oxolloxo",  name:"Oxolloxo",       tl:"Everyday Comfort Style",desc:"Affordable everyday fashion in plus sizes with a focus on comfort.",      f:2017, sr:"M–5XL",    pr:"₹499–₹1,999",  rt:4.0, rc:8900,  pl:["Myntra","Amazon","Flipkart"],  ws:"https://www.myntra.com/oxolloxo",     ac:"#0EA5E9", sp:"Budget Casual" },
  { id:"qurvii",    name:"Qurvii",         tl:"For the Bold & Curvy",  desc:"Trendy, bold designs for curvy women who refuse to compromise on style.", f:2021, sr:"L–7XL",    pr:"₹799–₹3,499",  rt:4.3, rc:2100,  pl:["Own Site","Instagram"],        ws:"https://qurvii.com",                  ac:"#F43F5E", sp:"Bold & Trendy" },
  { id:"indietoga", name:"Indietoga",      tl:"Indie Boho Curves",     desc:"Bohemian and indie-inspired plus-size fashion. Earthy tones and prints.", f:2018, sr:"XL–6XL",   pr:"₹999–₹4,499",  rt:4.2, rc:3800,  pl:["Myntra","Own Site"],           ws:"https://www.myntra.com/indietoga",    ac:"#78716C", sp:"Boho" },
  { id:"estraana",  name:"Estraana",       tl:"Ethnic Curves Redefined",desc:"Specializes in ethnic and fusion wear for plus-size women. Rich fabrics.",f:2016, sr:"XL–8XL",  pr:"₹1,199–₹6,999",rt:4.5, rc:6700,  pl:["Own Site","Ajio"],             ws:"https://estraana.com",                ac:"#B45309", sp:"Ethnic Fusion" },
];

/* ─── PRODUCT DATA GENERATOR ─────────────────────────────────────────────── */
const CATS   = ["Dresses","Tops","Jeans","Kurtas","Sarees","Palazzo","Leggings","Kurtis","Co-ord Sets","Blazers","Jumpsuits","Skirts","Tunics","Lehenga","Salwar Suits"];
const COLORS = ["Black","White","Pink","Red","Blue","Green","Yellow","Purple","Orange","Teal","Navy","Coral","Maroon","Beige","Olive"];
const FABRICS= ["Cotton","Polyester","Georgette","Chiffon","Rayon","Silk","Linen","Crepe","Net","Velvet","Denim","Jersey","Satin"];
const FITS   = ["Regular","Slim","Relaxed","Oversized","Fitted","A-Line","Flared","Straight"];
const OCCS   = ["Casual","Formal","Party","Wedding","Festive","Daily Wear","Office","Brunch","Vacation"];
const PATS   = ["Solid","Floral","Geometric","Striped","Abstract","Embroidered","Printed","Checks","Tie-Dye","Paisley"];
const SLEEVES= ["Sleeveless","Half Sleeve","Full Sleeve","3/4 Sleeve","Cap Sleeve","Bell Sleeve"];
const SIZES  = ["L","XL","2XL","3XL","4XL","5XL","6XL","7XL","8XL"];
const ADJECTIVES = ["Elegant","Flowy","Trendy","Classic","Bold","Chic","Effortless","Vibrant","Luxe","Soft","Radiant","Graceful"];
const NOUNS  = ["Kurta","Dress","Top","Set","Palazzo","Skirt","Tunic","Blazer","Jumpsuit","Saree"];

function rnd(arr){return arr[Math.floor(Math.random()*arr.length)];}
function rndInt(a,b){return a+Math.floor(Math.random()*(b-a+1));}

function genProducts(){
  const products=[];
  let id=1;
  BRANDS.forEach(br=>{
    const count=rndInt(22,30);
    for(let i=0;i<count;i++){
      const cat  = rnd(CATS);
      const col  = rnd(COLORS);
      const fab  = rnd(FABRICS);
      const fit  = rnd(FITS);
      const occ  = rnd(OCCS);
      const pat  = rnd(PATS);
      const slv  = rnd(SLEEVES);
      const mrp  = rndInt(799,6999);
      const disc = rnd([10,15,20,25,30,35,40,45,50]);
      const price= Math.round(mrp*(1-disc/100)/10)*10;
      const rt   = (3.5+Math.random()*1.4).toFixed(1);
      const rc   = rndInt(50,4200);
      const sizes= SIZES.slice(0, rndInt(3,9));
      const adj  = rnd(ADJECTIVES);
      const noun = rnd(NOUNS);
      const name = `${adj} ${col} ${cat}`;
      const bg   = br.ac;

      // cross-platform: 20% chance
      const hasAlt = Math.random()<0.2;
      const altPlatforms = hasAlt ? BRANDS.filter(b=>b.id!==br.id&&b.pl.some(p=>br.pl.includes(p))).slice(0,2).map(b=>({brand:b.name,price:Math.round(price*(0.9+Math.random()*0.2)/10)*10,platform:rnd(b.pl)})) : [];

      products.push({id:id++, name, brand:br.id, brandName:br.name, cat, col, fab, fit, occ, pat, slv, mrp, price, disc, rt:parseFloat(rt), rc, sizes, bg, altPlatforms, pl:br.pl, adj, noun});
    }
  });
  return products;
}

const ALL_PRODUCTS = genProducts();

/* ─── HELPERS ─────────────────────────────────────────────────────────────── */
const Stars = ({r,small})=>{
  const full=Math.floor(r), half=r%1>=0.5;
  const sz=small?10:12;
  return <span style={{display:"inline-flex",gap:1,alignItems:"center"}}>
    {[...Array(5)].map((_,i)=>(
      <span key={i} style={{fontSize:sz,color:i<full?"#F59E0B":half&&i===full?"#F59E0B":"#DDD"}}>{i<full?"★":half&&i===full?"½":"☆"}</span>
    ))}
  </span>;
};

const BrandAvatar = ({brand,size=42})=>(
  <div style={{width:size,height:size,borderRadius:"50%",background:`linear-gradient(135deg,${brand.ac}22,${brand.ac}55)`,border:`2px solid ${brand.ac}44`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:size*0.35,fontWeight:700,color:brand.ac,flexShrink:0}}>
    {brand.name[0]}
  </div>
);

/* ─── PRODUCT CARD ────────────────────────────────────────────────────────── */
function ProductCard({p, onView, wished, onWish}){
  const bgGrad = `linear-gradient(135deg,${p.bg}33,${p.bg}11)`;
  return(
    <div onClick={()=>onView(p)} style={{background:"#fff",borderRadius:16,overflow:"hidden",boxShadow:"0 2px 12px rgba(0,0,0,0.07)",cursor:"pointer",transition:"transform .2s,box-shadow .2s",position:"relative"}}
      onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-4px)";e.currentTarget.style.boxShadow="0 8px 24px rgba(0,0,0,0.13)";}}
      onMouseLeave={e=>{e.currentTarget.style.transform="";e.currentTarget.style.boxShadow="0 2px 12px rgba(0,0,0,0.07)";}}>
      {/* image placeholder */}
      <div style={{background:bgGrad,height:180,display:"flex",alignItems:"center",justifyContent:"center",position:"relative"}}>
        <div style={{textAlign:"center"}}>
          <div style={{fontSize:38,marginBottom:4}}>{p.cat==="Sarees"?"🥻":p.cat==="Dresses"||p.cat==="Jumpsuits"?"👗":p.cat==="Jeans"?"👖":p.cat==="Blazers"?"🧥":p.cat==="Lehenga"?"💃":"👚"}</div>
          <div style={{fontSize:11,color:p.bg,fontWeight:600,background:"#fff",borderRadius:20,padding:"2px 8px"}}>{p.cat}</div>
        </div>
        {/* discount badge */}
        <div style={{position:"absolute",top:10,left:10,background:p.bg,color:"#fff",borderRadius:20,padding:"2px 8px",fontSize:10,fontWeight:700}}>{p.disc}% OFF</div>
        {/* wishlist */}
        <button onClick={e=>{e.stopPropagation();onWish(p.id);}} style={{position:"absolute",top:8,right:8,width:30,height:30,borderRadius:"50%",background:"#fff",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 2px 8px rgba(0,0,0,0.12)",fontSize:15,color:wished?"#E85D75":"#ccc",transition:"color .2s"}}>
          {wished?"♥":"♡"}
        </button>
        {/* alt platform badge */}
        {p.altPlatforms.length>0&&<div style={{position:"absolute",bottom:8,left:8,background:"#fff",border:"1px solid #e0d0d8",borderRadius:8,padding:"2px 6px",fontSize:9,color:"#B9375E",fontWeight:600}}>Also on {p.altPlatforms[0].platform}</div>}
      </div>
      <div style={{padding:"10px 12px 12px"}}>
        <div style={{fontSize:11,color:p.bg,fontWeight:600,marginBottom:2}}>{p.brandName}</div>
        <div style={{fontSize:13,fontWeight:600,color:"#2D1B2E",marginBottom:4,lineHeight:1.3,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}}>{p.name}</div>
        <div style={{display:"flex",alignItems:"center",gap:6,marginBottom:6}}>
          <Stars r={p.rt} small/>
          <span style={{fontSize:10,color:"#9CA3AF"}}>({p.rc})</span>
        </div>
        <div style={{display:"flex",alignItems:"center",gap:6}}>
          <span style={{fontWeight:700,fontSize:15,color:"#2D1B2E"}}>₹{p.price.toLocaleString()}</span>
          <span style={{fontSize:11,color:"#9CA3AF",textDecoration:"line-through"}}>₹{p.mrp.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
}

/* ─── PRODUCT DETAIL MODAL ────────────────────────────────────────────────── */
function ProductModal({p, onClose, wished, onWish}){
  const [tab, setTab] = useState("details");
  const [selSize, setSelSize] = useState(null);
  const brand = BRANDS.find(b=>b.id===p.brand);
  const bg = p.bg;

  useEffect(()=>{
    document.body.style.overflow="hidden";
    return()=>{document.body.style.overflow="";};
  },[]);

  return(
    <div onClick={onClose} style={{position:"fixed",inset:0,background:"rgba(0,0,0,0.55)",zIndex:1000,display:"flex",alignItems:"flex-end",justifyContent:"center",padding:"0"}}>
      <div onClick={e=>e.stopPropagation()} style={{background:"#fff",borderRadius:"24px 24px 0 0",width:"100%",maxWidth:640,maxHeight:"90vh",overflow:"auto",padding:20}}>
        {/* header */}
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:16}}>
          <div style={{flex:1,minWidth:0,paddingRight:8}}>
            <div style={{fontSize:11,color:bg,fontWeight:700,marginBottom:2}}>{p.brandName} · {p.cat}</div>
            <div style={{fontFamily:"Playfair Display,Georgia,serif",fontSize:18,fontWeight:700,color:"#2D1B2E",lineHeight:1.3}}>{p.name}</div>
          </div>
          <button onClick={onClose} style={{width:32,height:32,borderRadius:"50%",background:"#f0e8e8",display:"flex",alignItems:"center",justifyContent:"center",fontSize:18,color:"#666",flexShrink:0}}>×</button>
        </div>

        {/* image area */}
        <div style={{background:`linear-gradient(135deg,${bg}33,${bg}11)`,borderRadius:16,height:180,display:"flex",alignItems:"center",justifyContent:"center",marginBottom:16}}>
          <div style={{fontSize:60}}>{p.cat==="Sarees"?"🥻":p.cat==="Dresses"||p.cat==="Jumpsuits"?"👗":p.cat==="Jeans"?"👖":p.cat==="Blazers"?"🧥":p.cat==="Lehenga"?"💃":"👚"}</div>
        </div>

        {/* price row */}
        <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:12}}>
          <span style={{fontWeight:800,fontSize:22,color:"#2D1B2E"}}>₹{p.price.toLocaleString()}</span>
          <span style={{fontSize:14,color:"#9CA3AF",textDecoration:"line-through"}}>₹{p.mrp.toLocaleString()}</span>
          <span style={{background:bg,color:"#fff",borderRadius:20,padding:"2px 10px",fontSize:12,fontWeight:700}}>{p.disc}% OFF</span>
          <span style={{marginLeft:"auto"}}><Stars r={p.rt}/> <span style={{fontSize:11,color:"#9CA3AF"}}>({p.rc})</span></span>
        </div>

        {/* sizes */}
        <div style={{marginBottom:14}}>
          <div style={{fontSize:12,fontWeight:600,marginBottom:6,color:"#666"}}>SELECT SIZE</div>
          <div style={{display:"flex",gap:6,flexWrap:"wrap"}}>
            {p.sizes.map(s=>(
              <button key={s} onClick={()=>setSelSize(s)} style={{padding:"4px 12px",borderRadius:8,border:`2px solid ${selSize===s?bg:"#e0d0d8"}`,background:selSize===s?bg:"#fff",color:selSize===s?"#fff":"#2D1B2E",fontSize:12,fontWeight:600,transition:"all .15s"}}>{s}</button>
            ))}
          </div>
        </div>

        {/* buy button */}
        <a href={p.pl[0]==="Own Site"?brand?.ws:`https://www.myntra.com/${p.brand}`} target="_blank" rel="noreferrer"
          style={{display:"block",textAlign:"center",background:bg,color:"#fff",borderRadius:12,padding:"12px",fontWeight:700,fontSize:14,marginBottom:12,textDecoration:"none"}}>
          Buy on {p.pl[0]} ↗
        </a>

        {/* alt platforms */}
        {p.altPlatforms.length>0&&(
          <div style={{marginBottom:14}}>
            <div style={{fontSize:11,fontWeight:600,color:"#666",marginBottom:6}}>ALSO AVAILABLE ON</div>
            <div style={{display:"flex",gap:8,flexWrap:"wrap"}}>
              {p.altPlatforms.map((ap,i)=>(
                <div key={i} style={{border:"1px solid #e0d0d8",borderRadius:10,padding:"6px 12px",fontSize:12}}>
                  <span style={{fontWeight:700}}>{ap.platform}</span> · ₹{ap.price.toLocaleString()} <span style={{color:"#999"}}>({ap.brand})</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* tabs */}
        <div style={{display:"flex",gap:0,borderBottom:"2px solid #f0e8e8",marginBottom:12}}>
          {["details","reviews","brand"].map(t=>(
            <button key={t} onClick={()=>setTab(t)} style={{flex:1,padding:"8px 4px",fontSize:12,fontWeight:600,color:tab===t?bg:"#999",borderBottom:tab===t?`2px solid ${bg}`:"2px solid transparent",marginBottom:-2,transition:"color .15s",textTransform:"capitalize"}}>
              {t==="reviews"?`Reviews (${Math.min(p.rc,12)})`:t}
            </button>
          ))}
        </div>

        {tab==="details"&&(
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8}}>
            {[["Fabric",p.fab],["Pattern",p.pat],["Fit",p.fit],["Sleeve",p.slv],["Occasion",p.occ],["Color",p.col]].map(([l,v])=>(
              <div key={l} style={{background:"#fdf7f4",borderRadius:10,padding:"8px 10px"}}>
                <div style={{fontSize:10,color:"#999",fontWeight:600,marginBottom:2}}>{l}</div>
                <div style={{fontSize:13,fontWeight:600,color:"#2D1B2E"}}>{v}</div>
              </div>
            ))}
          </div>
        )}
        {tab==="reviews"&&(
          <div style={{display:"flex",flexDirection:"column",gap:10}}>
            {[...Array(Math.min(p.rc,5))].map((_,i)=>{
              const names=["Priya","Anjali","Meera","Deepa","Kavita","Sunita","Rekha","Neha","Pooja","Divya"];
              const txts=["Absolutely love it! Fits perfectly and the fabric is so comfortable.","Great quality and true to size. Will definitely buy again.","Beautiful design, got many compliments. Packaging was also lovely.","Slightly different shade from photo but overall very happy with it.","The size chart is accurate, fits my curves perfectly. Very happy!"];
              return <div key={i} style={{borderBottom:"1px solid #f0e8e8",paddingBottom:8}}>
                <div style={{display:"flex",alignItems:"center",gap:6,marginBottom:4}}>
                  <Stars r={(3.5+Math.random()*1.4)} small/>
                  <span style={{fontSize:12,fontWeight:600}}>{names[i%names.length]} M.</span>
                  <span style={{marginLeft:"auto",fontSize:10,color:"#999"}}>Verified ✓</span>
                </div>
                <p style={{fontSize:12,color:"#555",lineHeight:1.5}}>{txts[i%txts.length]}</p>
              </div>;
            })}
          </div>
        )}
        {tab==="brand"&&brand&&(
          <div>
            <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:10}}>
              <BrandAvatar brand={brand} size={48}/>
              <div>
                <div style={{fontFamily:"Playfair Display,Georgia,serif",fontSize:16,fontWeight:700}}>{brand.name}</div>
                <div style={{fontSize:12,color:brand.ac,fontStyle:"italic"}}>{brand.tl}</div>
              </div>
            </div>
            <p style={{fontSize:13,color:"#555",lineHeight:1.6,marginBottom:10}}>{brand.desc}</p>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:6}}>
              {[["Founded",brand.f],["Sizes",brand.sr],["Price Range",brand.pr],["Specialty",brand.sp]].map(([l,v])=>(
                <div key={l} style={{background:"#fdf7f4",borderRadius:10,padding:"8px 10px"}}>
                  <div style={{fontSize:10,color:"#999",fontWeight:600,marginBottom:2}}>{l}</div>
                  <div style={{fontSize:12,fontWeight:600}}>{v}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

/* ─── HERO CAROUSEL ───────────────────────────────────────────────────────── */
const SLIDES = [
  {id:0, headline:"Fashion For Every Curve", sub:"India's biggest plus-size fashion aggregator — 12 brands, 300+ styles in one place.", cta:"Shop Now", bg:"linear-gradient(135deg,#B9375E,#7C3AED)", emoji:"✨"},
  {id:1, headline:"New Arrivals Just Landed", sub:"Fresh drops from Sztori, LASTINCH, Amydus and more. Sizes XL to 10XL.", cta:"View New Arrivals", bg:"linear-gradient(135deg,#EC4899,#F59E0B)", emoji:"🆕"},
  {id:2, headline:"Wedding Season Picks", sub:"Lehengas, sarees, salwar suits — look stunning at every celebration.", cta:"Shop Ethnic", bg:"linear-gradient(135deg,#B45309,#9333EA)", emoji:"💃"},
  {id:3, headline:"Steal Deals — Up to 50% Off", sub:"Biggest discounts on top plus-size brands. Limited time offer.", cta:"Shop Deals", bg:"linear-gradient(135deg,#059669,#0EA5E9)", emoji:"🏷️"},
];

function HeroCarousel({onShop,onShopCat}){
  const [cur,setCur]=useState(0);
  const timer=useRef();
  useEffect(()=>{
    timer.current=setInterval(()=>setCur(c=>(c+1)%SLIDES.length),4000);
    return()=>clearInterval(timer.current);
  },[]);
  const s=SLIDES[cur];
  return(
    <div style={{borderRadius:20,overflow:"hidden",marginBottom:24,position:"relative",userSelect:"none"}}>
      <div style={{background:s.bg,padding:"40px 28px 36px",color:"#fff",minHeight:200,display:"flex",flexDirection:"column",justifyContent:"center",transition:"background .6s"}}>
        <div style={{fontSize:48,marginBottom:8}}>{s.emoji}</div>
        <h1 style={{fontFamily:"Playfair Display,Georgia,serif",fontSize:"clamp(22px,5vw,34px)",fontWeight:700,marginBottom:8,lineHeight:1.2}}>{s.headline}</h1>
        <p style={{fontSize:14,opacity:.9,marginBottom:20,maxWidth:480,lineHeight:1.6}}>{s.sub}</p>
        <button onClick={()=>{ if(cur===2)onShopCat("Lehenga"); else onShop(); }}
          style={{alignSelf:"flex-start",background:"#fff",color:"#B9375E",borderRadius:12,padding:"10px 22px",fontWeight:700,fontSize:14}}>
          {s.cta} →
        </button>
      </div>
      {/* dots */}
      <div style={{position:"absolute",bottom:12,right:16,display:"flex",gap:6}}>
        {SLIDES.map((_,i)=>(
          <button key={i} onClick={()=>{setCur(i);clearInterval(timer.current);timer.current=setInterval(()=>setCur(c=>(c+1)%SLIDES.length),4000);}}
            style={{width:i===cur?20:8,height:8,borderRadius:4,background:i===cur?"#fff":"rgba(255,255,255,0.4)",transition:"width .3s",border:"none",cursor:"pointer",padding:0}}/>
        ))}
      </div>
      {/* arrows */}
      {["‹","›"].map((a,i)=>(
        <button key={a} onClick={()=>setCur(c=>(c+(i===0?-1:1)+SLIDES.length)%SLIDES.length)}
          style={{position:"absolute",top:"50%",transform:"translateY(-50%)",left:i===0?8:undefined,right:i===1?8:undefined,background:"rgba(255,255,255,0.25)",color:"#fff",borderRadius:"50%",width:32,height:32,fontSize:18,display:"flex",alignItems:"center",justifyContent:"center"}}>
          {a}
        </button>
      ))}
    </div>
  );
}

/* ─── NAVBAR ──────────────────────────────────────────────────────────────── */
function Navbar({page,setPage,wishCount,searchQ,setSearchQ}){
  return(
    <nav style={{position:"sticky",top:0,zIndex:100,background:"rgba(253,247,244,0.95)",backdropFilter:"blur(12px)",borderBottom:"1px solid #f0e0e6",padding:"12px 16px"}}>
      <div style={{maxWidth:1200,margin:"0 auto",display:"flex",alignItems:"center",gap:12}}>
        <button onClick={()=>setPage("home")} style={{display:"flex",alignItems:"center",gap:8,marginRight:"auto"}}>
          <div style={{width:32,height:32,borderRadius:10,background:"linear-gradient(135deg,#B9375E,#7C3AED)",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontFamily:"Playfair Display,Georgia,serif",fontWeight:700,fontSize:14}}>B</div>
          <span style={{fontFamily:"Playfair Display,Georgia,serif",fontSize:20,fontWeight:700,color:"#B9375E"}}>Better</span>
        </button>
        {/* search */}
        <div style={{flex:1,maxWidth:320,position:"relative"}}>
          <input value={searchQ} onChange={e=>setSearchQ(e.target.value)} placeholder="Search styles…"
            style={{width:"100%",padding:"8px 12px 8px 32px",borderRadius:10,border:"1px solid #e0d0d8",background:"#fff",fontSize:13,outline:"none"}}/>
          <span style={{position:"absolute",left:10,top:"50%",transform:"translateY(-50%)",color:"#ccc",fontSize:14}}>🔍</span>
        </div>
        {/* nav links */}
        {[["home","Home"],["shop","Shop"],["brands","Brands"],["wishlist",`♥ ${wishCount}`]].map(([p,l])=>(
          <button key={p} onClick={()=>setPage(p)}
            style={{fontSize:13,fontWeight:600,color:page===p?"#B9375E":"#666",padding:"6px 10px",borderRadius:8,background:page===p?"#fde8ee":"transparent",display:p==="wishlist"&&wishCount===0?"none":undefined}}>
            {l}
          </button>
        ))}
      </div>
    </nav>
  );
}

/* ─── FILTER PANEL ────────────────────────────────────────────────────────── */
function FilterPanel({filters,setFilters,open,setOpen}){
  const toggle=(key,val)=>setFilters(f=>{
    const arr=f[key]||[];
    return {...f,[key]:arr.includes(val)?arr.filter(x=>x!==val):[...arr,val]};
  });
  const clearAll=()=>setFilters({});
  const activeCount=Object.values(filters).flat().length;

  const sections=[
    {key:"cat",  label:"Category", opts:CATS},
    {key:"brand",label:"Brand",    opts:BRANDS.map(b=>b.name)},
    {key:"col",  label:"Color",    opts:COLORS},
    {key:"occ",  label:"Occasion", opts:OCCS},
    {key:"fab",  label:"Fabric",   opts:FABRICS},
    {key:"fit",  label:"Fit",      opts:FITS},
    {key:"pat",  label:"Pattern",  opts:PATS},
    {key:"pl",   label:"Platform", opts:["Myntra","Ajio","Nykaa Fashion","Own Site","Amazon","Flipkart"]},
  ];

  return(
    <>
      {/* overlay on mobile */}
      {open&&<div onClick={()=>setOpen(false)} style={{position:"fixed",inset:0,background:"rgba(0,0,0,0.4)",zIndex:90}}/>}
      <aside style={{position:"fixed",top:0,left:open?0:-300,width:280,height:"100vh",background:"#fff",zIndex:95,transition:"left .3s",overflowY:"auto",padding:"16px 0",boxShadow:"4px 0 20px rgba(0,0,0,0.1)"}}>
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 16px",marginBottom:12}}>
          <span style={{fontFamily:"Playfair Display,Georgia,serif",fontWeight:700,fontSize:16}}>Filters {activeCount>0&&<span style={{fontSize:12,background:"#B9375E",color:"#fff",borderRadius:20,padding:"1px 7px",marginLeft:4}}>{activeCount}</span>}</span>
          <div style={{display:"flex",gap:8}}>
            {activeCount>0&&<button onClick={clearAll} style={{fontSize:11,color:"#B9375E",fontWeight:600}}>Clear all</button>}
            <button onClick={()=>setOpen(false)} style={{fontSize:20,color:"#999",lineHeight:1}}>×</button>
          </div>
        </div>
        {sections.map(sec=>(
          <div key={sec.key} style={{borderTop:"1px solid #f0e0e6",padding:"10px 16px"}}>
            <div style={{fontSize:11,fontWeight:700,color:"#999",letterSpacing:1,marginBottom:8,textTransform:"uppercase"}}>{sec.label}</div>
            <div style={{display:"flex",flexWrap:"wrap",gap:6}}>
              {sec.opts.map(o=>{
                const active=(filters[sec.key]||[]).includes(o);
                return<button key={o} onClick={()=>toggle(sec.key,o)} style={{fontSize:11,padding:"4px 10px",borderRadius:20,border:`1px solid ${active?"#B9375E":"#e0d0d8"}`,background:active?"#B9375E":"#fff",color:active?"#fff":"#555",fontWeight:active?600:400,transition:"all .15s"}}>{o}</button>;
              })}
            </div>
          </div>
        ))}
      </aside>
    </>
  );
}

/* ─── SHOP PAGE ───────────────────────────────────────────────────────────── */
function ShopPage({searchQ,filters,setFilters}){
  const [sort,setSort]=useState("popular");
  const [modal,setModal]=useState(null);
  const [wished,setWished]=useState(new Set(JSON.parse(localStorage.getItem("better_wish")||"[]")));
  const [filterOpen,setFilterOpen]=useState(false);

  const toggleWish=useCallback(id=>{
    setWished(prev=>{const n=new Set(prev);n.has(id)?n.delete(id):n.add(id);localStorage.setItem("better_wish",JSON.stringify([...n]));return new Set(n);});
  },[]);

  const filtered=useMemo(()=>{
    let r=[...ALL_PRODUCTS];
    if(searchQ) r=r.filter(p=>(p.name+p.brandName+p.cat+p.col).toLowerCase().includes(searchQ.toLowerCase()));
    if(filters.cat?.length)   r=r.filter(p=>filters.cat.includes(p.cat));
    if(filters.brand?.length) r=r.filter(p=>filters.brand.includes(p.brandName));
    if(filters.col?.length)   r=r.filter(p=>filters.col.includes(p.col));
    if(filters.occ?.length)   r=r.filter(p=>filters.occ.includes(p.occ));
    if(filters.fab?.length)   r=r.filter(p=>filters.fab.includes(p.fab));
    if(filters.fit?.length)   r=r.filter(p=>filters.fit.includes(p.fit));
    if(filters.pat?.length)   r=r.filter(p=>filters.pat.includes(p.pat));
    if(filters.pl?.length)    r=r.filter(p=>p.pl.some(x=>filters.pl.includes(x)));
    if(sort==="price_low")    r.sort((a,b)=>a.price-b.price);
    else if(sort==="price_high") r.sort((a,b)=>b.price-a.price);
    else if(sort==="rating")  r.sort((a,b)=>b.rt-a.rt);
    else if(sort==="discount") r.sort((a,b)=>b.disc-a.disc);
    else r.sort((a,b)=>b.rc-a.rc);
    return r;
  },[searchQ,filters,sort]);

  const activeCount=Object.values(filters).flat().length;

  return(
    <div>
      <FilterPanel filters={filters} setFilters={setFilters} open={filterOpen} setOpen={setFilterOpen}/>
      {/* toolbar */}
      <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:16,flexWrap:"wrap"}}>
        <button onClick={()=>setFilterOpen(true)} style={{display:"flex",alignItems:"center",gap:6,padding:"8px 14px",borderRadius:10,border:"1px solid #e0d0d8",background:"#fff",fontSize:13,fontWeight:600}}>
          ⚙ Filters {activeCount>0&&<span style={{background:"#B9375E",color:"#fff",borderRadius:20,padding:"0px 6px",fontSize:11}}>{activeCount}</span>}
        </button>
        <span style={{fontSize:13,color:"#999",marginRight:"auto"}}>{filtered.length} styles</span>
        <select value={sort} onChange={e=>setSort(e.target.value)} style={{padding:"8px 12px",borderRadius:10,border:"1px solid #e0d0d8",background:"#fff",fontSize:13,color:"#2D1B2E",outline:"none"}}>
          <option value="popular">Most Popular</option>
          <option value="rating">Top Rated</option>
          <option value="price_low">Price: Low to High</option>
          <option value="price_high">Price: High to Low</option>
          <option value="discount">Biggest Discount</option>
        </select>
      </div>
      {/* grid */}
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(min(160px,46vw),1fr))",gap:14}}>
        {filtered.map(p=>(
          <ProductCard key={p.id} p={p} onView={setModal} wished={wished.has(p.id)} onWish={toggleWish}/>
        ))}
      </div>
      {filtered.length===0&&(
        <div style={{textAlign:"center",padding:"60px 20px",color:"#999"}}>
          <div style={{fontSize:48,marginBottom:12}}>🔍</div>
          <div style={{fontFamily:"Playfair Display,Georgia,serif",fontSize:18,fontWeight:700,marginBottom:6}}>No results found</div>
          <div style={{fontSize:14}}>Try adjusting your filters or search term</div>
          <button onClick={()=>setFilters({})} style={{marginTop:16,background:"#B9375E",color:"#fff",borderRadius:10,padding:"10px 20px",fontWeight:600}}>Clear Filters</button>
        </div>
      )}
      {modal&&<ProductModal p={modal} onClose={()=>setModal(null)} wished={wished.has(modal.id)} onWish={toggleWish}/>}
    </div>
  );
}

/* ─── BRANDS PAGE ─────────────────────────────────────────────────────────── */
function BrandsPage({setPage,setFilters}){
  return(
    <div>
      <h2 style={{fontFamily:"Playfair Display,Georgia,serif",fontSize:26,fontWeight:700,marginBottom:4}}>All Brands</h2>
      <p style={{color:"#999",fontSize:14,marginBottom:20}}>Curated plus-size fashion brands from across India</p>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(min(280px,100%),1fr))",gap:16}}>
        {BRANDS.map(br=>(
          <div key={br.id} style={{background:"#fff",borderRadius:16,overflow:"hidden",boxShadow:"0 2px 12px rgba(0,0,0,0.06)",cursor:"pointer",transition:"transform .2s"}}
            onMouseEnter={e=>e.currentTarget.style.transform="translateY(-3px)"}
            onMouseLeave={e=>e.currentTarget.style.transform=""}
            onClick={()=>{setFilters({brand:[br.name]});setPage("shop");}}>
            <div style={{background:`linear-gradient(135deg,${br.ac}33,${br.ac}11)`,padding:"20px 20px 14px",display:"flex",alignItems:"center",gap:14}}>
              <BrandAvatar brand={br} size={54}/>
              <div>
                <div style={{fontFamily:"Playfair Display,Georgia,serif",fontSize:17,fontWeight:700,color:"#2D1B2E"}}>{br.name}</div>
                <div style={{fontSize:12,color:br.ac,fontStyle:"italic",marginTop:2}}>{br.tl}</div>
              </div>
            </div>
            <div style={{padding:"12px 20px 16px"}}>
              <p style={{fontSize:12,color:"#666",lineHeight:1.6,marginBottom:10}}>{br.desc}</p>
              <div style={{display:"flex",gap:6,flexWrap:"wrap",marginBottom:10}}>
                {br.pl.map(p=><span key={p} style={{fontSize:10,background:`${br.ac}18`,color:br.ac,borderRadius:20,padding:"2px 8px",fontWeight:600}}>{p}</span>)}
              </div>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                <div>
                  <Stars r={br.rt}/>
                  <span style={{fontSize:11,color:"#999",marginLeft:4}}>({br.rc.toLocaleString()})</span>
                </div>
                <span style={{fontSize:12,fontWeight:600,color:"#B9375E"}}>{br.sr} · {br.pr}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── WISHLIST PAGE ───────────────────────────────────────────────────────── */
function WishlistPage({setPage}){
  const [wished,setWished]=useState(new Set(JSON.parse(localStorage.getItem("better_wish")||"[]")));
  const [modal,setModal]=useState(null);
  const products=ALL_PRODUCTS.filter(p=>wished.has(p.id));
  const remove=id=>{setWished(prev=>{const n=new Set(prev);n.delete(id);localStorage.setItem("better_wish",JSON.stringify([...n]));return new Set(n);});};

  if(products.length===0) return(
    <div style={{textAlign:"center",padding:"80px 20px",color:"#999"}}>
      <div style={{fontSize:56,marginBottom:12}}>♡</div>
      <div style={{fontFamily:"Playfair Display,Georgia,serif",fontSize:22,fontWeight:700,color:"#2D1B2E",marginBottom:6}}>Your wishlist is empty</div>
      <p style={{fontSize:14,marginBottom:20}}>Save styles you love while browsing</p>
      <button onClick={()=>setPage("shop")} style={{background:"#B9375E",color:"#fff",borderRadius:12,padding:"12px 24px",fontWeight:700}}>Browse Styles →</button>
    </div>
  );

  return(
    <div>
      <h2 style={{fontFamily:"Playfair Display,Georgia,serif",fontSize:26,fontWeight:700,marginBottom:4}}>My Wishlist</h2>
      <p style={{color:"#999",fontSize:14,marginBottom:20}}>{products.length} saved {products.length===1?"item":"items"}</p>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(min(160px,46vw),1fr))",gap:14}}>
        {products.map(p=>(
          <ProductCard key={p.id} p={p} onView={setModal} wished={true} onWish={remove}/>
        ))}
      </div>
      {modal&&<ProductModal p={modal} onClose={()=>setModal(null)} wished={wished.has(modal.id)} onWish={remove}/>}
    </div>
  );
}

/* ─── HOME PAGE ───────────────────────────────────────────────────────────── */
function HomePage({setPage,setFilters}){
  const wished=new Set(JSON.parse(localStorage.getItem("better_wish")||"[]"));
  const [modal,setModal]=useState(null);

  const handleShopCat=(cat)=>{setFilters({cat:[cat]});setPage("shop");};

  const topPicks=useMemo(()=>{
    return [...ALL_PRODUCTS].sort((a,b)=>b.rc-a.rc).slice(0,8);
  },[]);

  return(
    <div>
      <HeroCarousel onShop={()=>setPage("shop")} onShopCat={handleShopCat}/>

      {/* brand row */}
      <section style={{marginBottom:28}}>
        <h2 style={{fontFamily:"Playfair Display,Georgia,serif",fontSize:20,fontWeight:700,marginBottom:14}}>Shop by Brand</h2>
        <div style={{display:"flex",gap:16,overflowX:"auto",paddingBottom:8,scrollbarWidth:"none"}}>
          {BRANDS.map(br=>(
            <button key={br.id} onClick={()=>{setFilters({brand:[br.name]});setPage("shop");}}
              style={{display:"flex",flexDirection:"column",alignItems:"center",gap:6,minWidth:70,background:"none",border:"none",cursor:"pointer"}}>
              <BrandAvatar brand={br} size={56}/>
              <span style={{fontSize:11,fontWeight:600,color:"#2D1B2E",whiteSpace:"nowrap"}}>{br.name}</span>
            </button>
          ))}
        </div>
      </section>

      {/* categories */}
      <section style={{marginBottom:28}}>
        <h2 style={{fontFamily:"Playfair Display,Georgia,serif",fontSize:20,fontWeight:700,marginBottom:14}}>Shop by Category</h2>
        <div style={{display:"flex",gap:10,overflowX:"auto",paddingBottom:8,scrollbarWidth:"none"}}>
          {[["Dresses","👗"],["Kurtas","👘"],["Tops","👚"],["Sarees","🥻"],["Jeans","👖"],["Lehenga","💃"],["Co-ord Sets","🌸"],["Blazers","🧥"],["Jumpsuits","✨"]].map(([cat,em])=>(
            <button key={cat} onClick={()=>handleShopCat(cat)}
              style={{flexShrink:0,display:"flex",flexDirection:"column",alignItems:"center",gap:6,background:"#fff",borderRadius:14,padding:"14px 16px",boxShadow:"0 2px 10px rgba(0,0,0,0.06)",minWidth:80,border:"1px solid #f0e0e6",cursor:"pointer",transition:"transform .15s"}}
              onMouseEnter={e=>e.currentTarget.style.transform="scale(1.04)"}
              onMouseLeave={e=>e.currentTarget.style.transform=""}>
              <span style={{fontSize:28}}>{em}</span>
              <span style={{fontSize:11,fontWeight:600,color:"#2D1B2E",whiteSpace:"nowrap"}}>{cat}</span>
            </button>
          ))}
        </div>
      </section>

      {/* top picks */}
      <section style={{marginBottom:28}}>
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:14}}>
          <h2 style={{fontFamily:"Playfair Display,Georgia,serif",fontSize:20,fontWeight:700}}>Most Loved Picks</h2>
          <button onClick={()=>setPage("shop")} style={{fontSize:13,color:"#B9375E",fontWeight:600}}>View all →</button>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(min(160px,46vw),1fr))",gap:14}}>
          {topPicks.map(p=>(
            <ProductCard key={p.id} p={p} onView={setModal} wished={wished.has(p.id)} onWish={id=>{const n=new Set(wished);n.has(id)?n.delete(id):n.add(id);localStorage.setItem("better_wish",JSON.stringify([...n]));}}/>
          ))}
        </div>
      </section>

      {modal&&<ProductModal p={modal} onClose={()=>setModal(null)} wished={wished.has(modal.id)} onWish={()=>{}}/>}
    </div>
  );
}

/* ─── ROOT APP ────────────────────────────────────────────────────────────── */
export default function App(){
  const [page,setPage]=useState("home");
  const [searchQ,setSearchQ]=useState("");
  const [filters,setFilters]=useState({});
  const wishCount=new Set(JSON.parse(localStorage.getItem("better_wish")||"[]")).size;

  const handleSearchChange=(q)=>{
    setSearchQ(q);
    if(q.length>0) setPage("shop");
  };

  return(
    <div style={{minHeight:"100vh",background:"#FDF7F4"}}>
      <Navbar page={page} setPage={setPage} wishCount={wishCount} searchQ={searchQ} setSearchQ={handleSearchChange}/>
      <main style={{maxWidth:1200,margin:"0 auto",padding:"20px 16px 60px"}}>
        {page==="home"  &&<HomePage   setPage={setPage} setFilters={setFilters}/>}
        {page==="shop"  &&<ShopPage   searchQ={searchQ} filters={filters} setFilters={setFilters}/>}
        {page==="brands"&&<BrandsPage setPage={setPage} setFilters={setFilters}/>}
        {page==="wishlist"&&<WishlistPage setPage={setPage}/>}
      </main>
      <footer style={{background:"#2D1B2E",color:"rgba(255,255,255,0.7)",padding:"32px 16px"}}>
        <div style={{maxWidth:1200,margin:"0 auto",display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(140px,1fr))",gap:24,marginBottom:24}}>
          <div>
            <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:10}}>
              <div style={{width:28,height:28,borderRadius:8,background:"linear-gradient(135deg,#B9375E,#7C3AED)",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontFamily:"Playfair Display,Georgia,serif",fontWeight:700,fontSize:12}}>B</div>
              <span style={{fontFamily:"Playfair Display,Georgia,serif",color:"#fff",fontWeight:700,fontSize:16}}>Better</span>
            </div>
            <p style={{fontSize:12,lineHeight:1.7}}>India's plus-size fashion aggregator. One place for all curvy fashion.</p>
          </div>
          {[["Quick Links",[["Home","home"],["Shop","shop"],["Brands","brands"]]],["Categories",[["Dresses","shop"],["Kurtas","shop"],["Sarees","shop"]]]].map(([title,links])=>(
            <div key={title}>
              <h4 style={{color:"#fff",fontWeight:700,fontSize:13,marginBottom:10}}>{title}</h4>
              {links.map(([l,p])=><button key={l} onClick={()=>setPage(p)} style={{display:"block",fontSize:12,color:"rgba(255,255,255,0.6)",marginBottom:6,background:"none",border:"none",cursor:"pointer",padding:0,textAlign:"left"}}>{l}</button>)}
            </div>
          ))}
          <div>
            <h4 style={{color:"#fff",fontWeight:700,fontSize:13,marginBottom:10}}>Top Brands</h4>
            {BRANDS.slice(0,5).map(b=><button key={b.id} onClick={()=>{setFilters({brand:[b.name]});setPage("shop");}} style={{display:"block",fontSize:12,color:"rgba(255,255,255,0.6)",marginBottom:6,background:"none",border:"none",cursor:"pointer",padding:0,textAlign:"left"}}>{b.name}</button>)}
          </div>
        </div>
        <div style={{borderTop:"1px solid rgba(255,255,255,0.1)",paddingTop:16,textAlign:"center",fontSize:11}}>
          © 2025 Better. Product data from respective brand websites. Better is an aggregator platform.
        </div>
      </footer>
    </div>
  );
}
