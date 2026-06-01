import React from 'react';
import{useParams,Link,Navigate}from 'react-router-dom';
import{subsidiaries}from '../data/siteData';
import'./SubsidiaryPage.css';

export default function SubsidiaryPage(){
  const{slug}=useParams();
  const sub=subsidiaries.find(s=>s.slug===slug);
  if(!sub)return<Navigate to="/" replace/>;
  return(
    <div className="sub-page">
      {/* HERO */}
      <section className="sub-hero" style={{background:sub.gradient}}>
        <div className="sub-hero-pattern"/>
        <div className="sub-hero-glow" style={{background:`radial-gradient(circle,${sub.color}33 0%,transparent 70%)`}}/>
        <div className="container sub-hero-inner">
          <div className="sub-hero-left">
            <div className="sub-entity-tag">🏛 CBN Licensed · Whitecrust Group</div>
            <h1 className="sub-hero-h1">{sub.tagline.split(' ').map((w,i)=>i===1?<em key={i} style={{color:sub.heroAccent}}> {w}</em>:<span key={i}> {w}</span>)}</h1>
            <p className="sub-hero-p">{sub.description}</p>
            <div className="sub-hero-btns">
              <Link to="/apply" className="sub-hero-btn-p" style={{background:sub.color}}>Apply Now →</Link>
              <Link to="/contact" className="sub-hero-btn-s">Contact Us</Link>
            </div>
          </div>
          <div className="sub-hero-stats">
            {sub.stats.map((s,i)=>(
              <div key={i} className="sub-stat">
                <div className="sub-stat-val">{s.val}</div>
                <div className="sub-stat-lbl">{s.label}</div>
                <div className="sub-stat-trend">{s.trend}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="section">
        <div className="container">
          <div className="sec-lbl">Products</div>
          <h2 className="sec-h2">Find the Right <em>Product</em> for You</h2>
          <p className="sec-p">Tailored products designed around your specific financial needs.</p>
          <div className="sub-products-grid">
            {sub.products.map((p,i)=>(
              <div key={i} className="sub-prod-card" style={{borderTop:`3px solid ${p.tagColor}`}}>
                <div className="spc-icon" style={{background:p.tagBg}}>{p.icon}</div>
                <div className="spc-name">{p.name}</div>
                <div className="spc-desc">{p.desc}</div>
                <div className="spc-range">{p.range}</div>
                <div className="spc-rate" style={{background:p.tagBg,color:p.tagColor}}>{p.rate}</div>
                <Link to="/apply" className="spc-link" style={{color:p.tagColor}}>Apply Now →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ELIGIBILITY */}
      <section className="section sub-elig-sec" style={{background:sub.gradient}}>
        <div className="container">
          <div className="sub-elig-inner">
            <div>
              <div className="sec-lbl light">Eligibility</div>
              <h2 className="sec-h2 light">Check if You <em style={{color:sub.heroAccent}}>Qualify</em></h2>
              <p className="sub-elig-p">No credit score impact. Get a pre-qualification decision in under 2 minutes.</p>
              <Link to="/apply" className="sub-elig-btn" style={{background:sub.color}}>Start Eligibility Check →</Link>
            </div>
            <div className="sub-elig-checks">
              {sub.eligibility.map((e,i)=>(
                <div key={i} className="sub-elig-item">
                  <div className="sub-elig-dot"/>
                  <span>{e}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ALL SUBSIDIARIES LINKS */}
      <section className="section section--white">
        <div className="container">
          <div className="sec-lbl">Whitecrust Group</div>
          <h2 className="sec-h2">Explore Our <em>Other Entities</em></h2>
          <div className="other-subs">
            {subsidiaries.filter(s=>s.slug!==slug).map(s=>(
              <Link to={`/subsidiary/${s.slug}`} key={s.slug} className="other-sub-card">
                <div className="osc-icon" style={{background:`${s.color}22`}}>{s.icon}</div>
                <div className="osc-name">{s.name}</div>
                <div className="osc-tagline">{s.tagline}</div>
                <div className="osc-link" style={{color:s.color}}>Learn More →</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="sub-cta" style={{background:`linear-gradient(135deg,${sub.color}dd,${sub.color}99)`}}>
        <div className="container" style={{textAlign:'center',padding:'72px 48px'}}>
          <h2 style={{fontFamily:"'Playfair Display',serif",fontSize:36,color:'#fff',marginBottom:12}}>Ready to Get Started with {sub.name}?</h2>
          <p style={{color:'rgba(255,255,255,.8)',fontSize:16,marginBottom:28}}>Apply today or speak to one of our specialists for personalised guidance.</p>
          <div style={{display:'flex',gap:12,justifyContent:'center'}}>
            <Link to="/apply" style={{background:'#fff',color:sub.color,padding:'14px 28px',borderRadius:8,fontWeight:700,fontSize:14,textDecoration:'none'}}>Apply Now →</Link>
            <Link to="/contact" style={{background:'transparent',color:'#fff',padding:'14px 28px',borderRadius:8,fontWeight:500,fontSize:14,textDecoration:'none',border:'1px solid rgba(255,255,255,.3)'}}>Contact Us</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
