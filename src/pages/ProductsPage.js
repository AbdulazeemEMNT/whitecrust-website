import React,{useState}from 'react';
import{Link}from 'react-router-dom';
import'./ProductsPage.css';

const allProducts=[
  {cat:'sme',icon:'💼',name:'SME Working Capital',range:'₦500K – ₦50M',rate:'From 24% p.a.',tenure:'3 – 36 months',desc:'Fund business operations, inventory, and growth with flexible repayment aligned to your cash flow cycle.',features:['Flexible repayment terms','No asset collateral for qualifying SMEs','Fast 5-day disbursement','Up to ₦50M available'],rateColor:'#1E5EFF',tagBg:'#DCE9FF'},
  {cat:'sme',icon:'⚙️',name:'Equipment Financing',range:'₦1M – ₦30M',rate:'From 22% p.a.',tenure:'12 – 48 months',desc:'Asset-backed financing for industrial machinery, vehicles, computers, and business equipment.',features:['Asset-secured lending','New and used equipment','Manufacturer partnerships','Deferred first payment option'],rateColor:'#1E5EFF',tagBg:'#DCE9FF'},
  {cat:'sme',icon:'🚢',name:'Trade Finance',range:'₦2M – ₦100M',rate:'From 20% p.a.',tenure:'30 – 180 days',desc:'Import/export financing, letters of credit, invoice discounting, and supply chain finance.',features:['LCs and trade instruments','Invoice discounting','Supply chain finance','FX solutions'],rateColor:'#1E5EFF',tagBg:'#DCE9FF'},
  {cat:'sme',icon:'🌾',name:'Agricultural Finance',range:'₦200K – ₦20M',rate:'From 18% p.a.',tenure:'6 – 24 months',desc:'Seasonal loans for farmers and agri-enterprises aligned to harvest cycles and production timelines.',features:['Harvest-aligned repayment','Input financing available','Land and equipment','Group farming support'],rateColor:'#16A34A',tagBg:'#DCFCE7'},
  {cat:'public',icon:'💰',name:'Salary Advance',range:'₦100K – ₦10M',rate:'From 20% p.a.',tenure:'3 – 36 months',desc:'Access up to 3× your monthly salary instantly. Repaid via direct salary deduction — stress-free.',features:['No collateral required','Same-day approval','Direct salary deduction','Minimal documentation'],rateColor:'#D97706',tagBg:'#FEF3C7'},
  {cat:'public',icon:'📋',name:'Payroll Lending',range:'₦200K – ₦15M',rate:'From 18% p.a.',tenure:'6 – 60 months',desc:'Institutional payroll lending partnerships with government ministries, agencies, and parastatals.',features:['Employer-deduction model','Group disbursement','Preferential rates','Bulk processing'],rateColor:'#D97706',tagBg:'#FEF3C7'},
  {cat:'personal',icon:'👤',name:'Personal Loan',range:'₦100K – ₦5M',rate:'From 22% p.a.',tenure:'3 – 24 months',desc:'Personal loans for education, medical expenses, weddings, travel, and any personal financial need.',features:['Fast approval','No hidden fees','Flexible repayment','Online application'],rateColor:'#16A34A',tagBg:'#DCFCE7'},
  {cat:'personal',icon:'⚡',name:'Emergency Credit',range:'₦50K – ₦500K',rate:'From 24% p.a.',tenure:'1 – 6 months',desc:'24-hour disbursement for urgent, time-sensitive financial needs. Apply now, get funds today.',features:['24-hour disbursement','Minimal documentation','Online application','Same-day decision'],rateColor:'#16A34A',tagBg:'#DCFCE7'},
  {cat:'personal',icon:'🚗',name:'Vehicle Finance',range:'₦500K – ₦15M',rate:'From 22% p.a.',tenure:'12 – 60 months',desc:'Finance your dream car — new or used — with competitive rates and flexible repayment terms.',features:['New and used cars','Up to 80% financing','Comprehensive insurance','Flexible tenure'],rateColor:'#16A34A',tagBg:'#DCFCE7'},
  {cat:'personal',icon:'🏠',name:'Home Improvement',range:'₦200K – ₦10M',rate:'From 21% p.a.',tenure:'6 – 48 months',desc:'Renovation and property upgrade financing for your home improvements, big or small.',features:['Property-backed option','Fast approval','Flexible tenure','Any renovation work'],rateColor:'#16A34A',tagBg:'#DCFCE7'},
  {cat:'investment',icon:'📊',name:'Fixed Deposit',range:'₦100K+',rate:'Up to 18% p.a.',tenure:'3 – 24 months',desc:'Lock in your capital at guaranteed market-beating rates. Capital protected, returns guaranteed.',features:['Capital guaranteed','Up to 18% p.a.','Flexible tenures','Monthly interest option'],rateColor:'#7C3AED',tagBg:'#F3E8FF'},
  {cat:'investment',icon:'📈',name:'Mutual Funds',range:'₦50K+',rate:'Market-linked',tenure:'Open-ended',desc:'Professionally managed diversified funds across equities, fixed income, and money market instruments.',features:['Professional management','Diversified portfolio','Liquidity options','Regular performance reports'],rateColor:'#7C3AED',tagBg:'#F3E8FF'},
  {cat:'investment',icon:'🌾',name:'Farm Investment Units',range:'₦50K+',rate:'14 – 18% p.a.',tenure:'Per cycle',desc:'Invest in Nigerian agriculture and earn returns from seasonal crop and livestock production cycles.',features:['Fully managed farms','Quarterly reports with photos','Seasonal returns','Impact investing'],rateColor:'#16A34A',tagBg:'#DCFCE7'},
];

const cats=[{id:'all',label:'All Products'},{id:'sme',label:'SME Solutions'},{id:'public',label:'Public Sector'},{id:'personal',label:'Personal Finance'},{id:'investment',label:'Investment'}];

export default function ProductsPage(){
  const[cat,setCat]=useState('all');
  const[expanded,setExpanded]=useState(null);
  const filtered=cat==='all'?allProducts:allProducts.filter(p=>p.cat===cat);

  return(
    <div className="prods-page">
      <section className="pg-hero">
        <div className="pg-hero-bg"/>
        <div className="container pg-hero-inner">
          <div className="pg-hero-label">Products and Solutions</div>
          <h1 className="pg-hero-h1">Transparent Financial <em>Products</em></h1>
          <p className="pg-hero-p">Competitive financial products designed around your real needs with no hidden charges and full disclosure from day one.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cat-row">
            {cats.map(c=><button key={c.id} className={`cat-btn ${cat===c.id?'cat-btn--active':''}`} onClick={()=>{setCat(c.id);setExpanded(null)}}>{c.label}</button>)}
          </div>
          <div className="prod-list">
            {filtered.map((p,i)=>(
              <div key={i} className={`prod-row ${expanded===i?'prod-row--open':''}`}>
                <div className="pr-main" onClick={()=>setExpanded(expanded===i?null:i)}>
                  <div className="pr-ico" style={{background:p.tagBg}}>{p.icon}</div>
                  <div className="pr-info"><div className="pr-name">{p.name}</div><div className="pr-desc">{p.desc}</div></div>
                  <div className="pr-meta"><div className="pr-range">{p.range}</div><div className="pr-rate" style={{color:p.rateColor,background:p.tagBg}}>{p.rate}</div></div>
                  <div className="pr-tenure">{p.tenure}</div>
                  <div className="pr-chev">{expanded===i?'▲':'▾'}</div>
                </div>
                {expanded===i&&(
                  <div className="pr-detail">
                    <div className="pr-features">
                      <div className="prf-title">Key Features</div>
                      {p.features.map((f,j)=><div key={j} className="prf-item"><span className="prf-check">✓</span>{f}</div>)}
                    </div>
                    <div className="pr-actions">
                      <Link to="/apply" className="pra-p">Apply Now</Link>
                      <Link to="/calculator" className="pra-s">Calculate Repayment</Link>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="elig-sec">
        <div className="container">
          <div className="elig-inner">
            <div>
              <div className="sec-lbl light">Eligibility</div>
              <h2 className="sec-h2 light">Check if You Qualify in <em>2 Minutes</em></h2>
              <p style={{color:'rgba(255,255,255,.6)',fontSize:15,lineHeight:1.6,maxWidth:400,marginBottom:24}}>No credit score impact. Just a quick check to see which products are right for you.</p>
              <Link to="/apply" className="elig-btn">Start Eligibility Check →</Link>
            </div>
            <div className="elig-list">
              {['Nigerian resident aged 21 to 60','Active bank account with 6 plus months history','Verifiable income source','Valid government-issued ID','BVN and NIN verified','Business registration for SME loans'].map((e,i)=>(
                <div key={i} className="elig-item"><div className="elig-dot"/>{e}</div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
