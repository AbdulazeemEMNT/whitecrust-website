import React,{useState}from 'react';
import{Link}from 'react-router-dom';
import{investProducts}from '../data/siteData';
import'./InvestorsPage.css';

const faqs=[
  {q:'What is the minimum investment amount?',a:'Minimum investment starts from ₦50,000 for Agri-Investment units and ₦100,000 for Fixed Deposits. HNI Portfolio Management requires ₦10,000,000 minimum.'},
  {q:'How are returns paid?',a:'Fixed Deposit returns can be paid monthly or at maturity depending on your preference. Agri-investment returns are paid at end of cycle. Portfolio management fees are performance-based.'},
  {q:'Are my investments safe?',a:'All deposits at Whitecrust MFB are NDIC-insured. Fixed Deposits are capital-guaranteed. Investment funds are SEC-registered and managed under strict fiduciary guidelines.'},
  {q:'Can I withdraw early?',a:'Early withdrawal from Fixed Deposits is possible with a penalty fee. Mutual funds offer standard liquidity windows. Contact your relationship manager for specific product terms.'},
  {q:'How do I get started?',a:'Complete our online application or visit any Whitecrust branch. Our investment advisors will guide you through product selection and onboarding at no cost.'},
  {q:'Is Whitecrust regulated?',a:'Yes. Whitecrust Investment Limited is fully licensed and regulated by the Central Bank of Nigeria (CBN). Whitecrust MFB deposits are covered by NDIC. Our investment products are SEC-registered.'},
];

export default function InvestorsPage(){
  const[faq,setFaq]=useState(null);
  const[invAmt,setInvAmt]=useState(1000000);
  const[invDur,setInvDur]=useState(12);
  const[invRate,setInvRate]=useState(18);
  const fn=(v)=>'₦'+Math.round(v).toLocaleString('en-NG');
  const final=invAmt*Math.pow(1+invRate/100/12,invDur);
  const ret=final-invAmt;

  return(
    <div className="inv-page">
      <section className="pg-hero">
        <div className="pg-hero-bg"/>
        <div className="container pg-hero-inner">
          <div className="pg-hero-label">Investor Relations</div>
          <h1 className="pg-hero-h1">Premium Returns. <em>Expert Management.</em></h1>
          <p className="pg-hero-p">Whitecrust Group offers institutional-grade investment products delivering consistent above-market returns, backed by CBN regulation and full transparency.</p>
          <div className="inv-badges">
            {[['📊','Up to 18% p.a.'],['🛡','Capital Protected'],['✅','SEC Registered'],['🏛','CBN Licensed']].map(([i,l])=><div key={l} className="inv-badge"><span>{i}</span>{l}</div>)}
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="section">
        <div className="container">
          <div className="sec-lbl">Investment Products</div>
          <h2 className="sec-h2">Choose Your <em>Investment</em></h2>
          <div className="inv-prods">
            {investProducts.map((p,i)=>(
              <div key={i} className="inv-prod" style={{borderTop:`3px solid ${p.color}`}}>
                <div className="ip-ico" style={{background:p.bg}}>{p.icon}</div>
                <h3>{p.name}</h3>
                <p>{p.desc}</p>
                <div className="ip-stats">
                  {[['Rate',p.rate,p.color],['Minimum',p.min,''],['Tenure',p.tenure,'']].map(([k,v,c],j)=>(
                    <div key={j} className="ip-stat"><div className="ip-stat-lbl">{k}</div><div className="ip-stat-val" style={c?{color:c}:{}}>{v}</div></div>
                  ))}
                </div>
                <Link to="/apply" className="ip-cta" style={{background:p.color}}>Invest Now</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CALCULATOR */}
      <section className="section inv-calc-sec">
        <div className="container">
          <div className="inv-calc-wrap">
            <div>
              <div className="sec-lbl light">Investment Calculator</div>
              <h2 className="sec-h2 light">See Your Money <em>Grow</em></h2>
              {[[invAmt,setInvAmt,100000,50000000,100000,'Investment Amount',fn(invAmt),'₦100K','₦50M'],[invDur,setInvDur,3,60,3,'Duration',`${invDur} months`,'3 months','60 months'],[invRate,setInvRate,12,22,1,'Annual Return',`${invRate}% p.a.`,'12%','22%']].map(([val,set,mn,mx,step,lbl,disp,l,r],i)=>(
                <div key={i} className="ic-field">
                  <div className="ic-row"><span>{lbl}</span><strong>{disp}</strong></div>
                  <input type="range" min={mn} max={mx} step={step} value={val} onChange={e=>set(+e.target.value)} className="ic-range"/>
                  <div className="ic-labels"><span>{l}</span><span>{r}</span></div>
                </div>
              ))}
            </div>
            <div className="inv-result">
              <div className="ir-lbl">MATURITY VALUE</div>
              <div className="ir-big">{fn(final)}</div>
              <div className="ir-sub">after {invDur} months at {invRate}% p.a.</div>
              <div className="ir-rows">
                {[['Principal',fn(invAmt),''],['Total Returns',`+${fn(ret)}`,'#34D399'],['Monthly Earning',fn(ret/invDur),'']].map(([k,v,c],i)=>(
                  <div key={i} className="ir-row"><span>{k}</span><strong style={c?{color:c}:{}}>{v}</strong></div>
                ))}
              </div>
              <Link to="/apply" className="ir-cta">Open Investment Account</Link>
            </div>
          </div>
        </div>
      </section>

      {/* TRANSPARENCY */}
      <section className="section section--white">
        <div className="container">
          <div className="inv-trust-wrap">
            <div>
              <div className="sec-lbl">Transparency</div>
              <h2 className="sec-h2">Your Money. <em>Our Responsibility.</em></h2>
              <p className="inv-trust-p">We hold ourselves to the highest standards of financial transparency. Every investment is governed by CBN regulations, audited by independent firms, and reported to you regularly.</p>
              {['Monthly portfolio performance reports','Annual audited financial statements','Real-time account access via portal','Independent fund auditors','CBN regulatory filings published','SEC-registered investment products'].map((t,i)=>(
                <div key={i} className="inv-trust-item"><span className="inv-trust-chk">✓</span>{t}</div>
              ))}
              <div className="inv-dl-btns">
                <button className="inv-dl-btn-p">Download Annual Report 2023</button>
                <button className="inv-dl-btn-s">View Investment Prospectus</button>
              </div>
            </div>
            <div className="inv-perf">
              <div className="perf-title">3-Year Performance Track Record</div>
              {[{year:'2021',rate:19.2,pct:85},{year:'2022',rate:21.4,pct:95},{year:'2023',rate:22.1,pct:98}].map((y,i)=>(
                <div key={i} className="perf-row">
                  <span className="perf-year">{y.year}</span>
                  <div className="perf-bar-wrap"><div className="perf-bar" style={{width:`${y.pct}%`}}/></div>
                  <span className="perf-rate">{y.rate}%</span>
                </div>
              ))}
              <div className="perf-note">Average annualised returns for managed portfolio clients</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container">
          <div className="sec-lbl">FAQ</div>
          <h2 className="sec-h2">Common <em>Questions</em></h2>
          <div className="faq-list">
            {faqs.map((f,i)=>(
              <div key={i} className={`faq-item ${faq===i?'faq-item--open':''}`}>
                <div className="faq-q" onClick={()=>setFaq(faq===i?null:i)}>{f.q}<span className="faq-chev">{faq===i?'▲':'▾'}</span></div>
                {faq===i&&<div className="faq-a">{f.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="inv-cta-sec">
        <div className="container" style={{textAlign:'center'}}>
          <h2 style={{fontFamily:"'Playfair Display',serif",fontSize:36,color:'#fff',marginBottom:12}}>Ready to Start Investing?</h2>
          <p style={{color:'rgba(255,255,255,.7)',fontSize:16,marginBottom:28}}>Our investment advisors are available to guide you to the right product with no obligation.</p>
          <div style={{display:'flex',gap:12,justifyContent:'center'}}>
            <Link to="/apply" className="inv-cta-btn">Open Investment Account</Link>
            <Link to="/contact" className="inv-cta-out">Book Advisory Session</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
