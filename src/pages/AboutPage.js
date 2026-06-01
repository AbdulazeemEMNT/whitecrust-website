import React,{useState}from 'react';
import{Link}from 'react-router-dom';
import{leadership,awards}from '../data/siteData';
import'./AboutPage.css';

const timeline=[
  {year:'2012',title:'Founded in Lagos',desc:'Whitecrust Investment Limited incorporated with a mission to democratize access to credit in Nigeria.'},
  {year:'2014',title:'CBN License Obtained',desc:'Received full CBN microfinance license, becoming a fully regulated financial institution.'},
  {year:'2016',title:'SME Credit Launch',desc:'Launched flagship SME working capital product, disbursing ₦500M in year one.'},
  {year:'2018',title:'MFB Incorporation',desc:'Established Whitecrust Microfinance Bank, expanding into deposit-taking and savings products.'},
  {year:'2020',title:'Digital Transformation',desc:'Launched digital lending platform, reducing loan approval time from 14 days to 5 days.'},
  {year:'2021',title:'Asset Management',desc:'Founded Whitecrust Asset Management, crossing ₦5B AUM within 12 months of launch.'},
  {year:'2022',title:'₦20B Milestone',desc:'Crossed ₦20B in total disbursements. Expanded operations to 10 states.'},
  {year:'2023',title:'Award-Winning Growth',desc:'Won 4 industry awards. Reached 25,000 active clients. Launched Whitecrust Farms.'},
  {year:'2024',title:'₦30B and Beyond',desc:'Crossed ₦30B disbursed. Active in 12 states. 30,000+ clients across all five entities.'},
];

export default function AboutPage(){
  const[govTab,setGovTab]=useState('board');

  return(
    <div className="about-page">
      {/* PAGE HERO */}
      <section className="pg-hero">
        <div className="pg-hero-bg"/>
        <div className="container pg-hero-inner">
          <div className="pg-hero-label">About Whitecrust Group</div>
          <h1 className="pg-hero-h1">Building Nigeria's Financial <em>Future</em></h1>
          <p className="pg-hero-p">Since 2012, we have been on a mission to power financial growth for every Nigerian — from the market trader to the multinational corporation.</p>
          <div className="pg-hero-stats">
            {[['₦30B+','Disbursed'],['30,000+','Clients'],['12+','States'],['5','Entities']].map(([v,l],i)=>(
              <div key={i} className="phs"><div className="phs-val">{v}</div><div className="phs-lbl">{l}</div></div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION VISION VALUES */}
      <section className="section">
        <div className="container">
          <div className="mv-grid">
            <div className="mv-card mv-mission">
              <div className="mv-ico">🎯</div>
              <h3>Our Mission</h3>
              <p>To democratize access to financial services in Nigeria by providing innovative credit solutions, investment products, and wealth management tools that empower individuals, businesses, and communities to achieve their financial goals.</p>
            </div>
            <div className="mv-card mv-vision">
              <div className="mv-ico">🔭</div>
              <h3>Our Vision</h3>
              <p>To be Africa's most trusted financial institution — known for transparency, innovation, and an unwavering commitment to customer success. We envision a Nigeria where no individual or business is held back by lack of access to financial services.</p>
            </div>
            <div className="mv-card mv-values">
              <div className="mv-ico">💎</div>
              <h3>Our Values</h3>
              <div className="values-list">
                {['Trustworthiness — We earn it every day','Transparency — No hidden charges, ever','Innovation — Technology-driven solutions','Inclusion — Financial access for all Nigerians','Excellence — World-class service standards'].map((v,i)=>(
                  <div key={i} className="value-row"><span className="v-check">✓</span>{v}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="section section--white">
        <div className="container">
          <div className="sec-lbl">Our Journey</div>
          <h2 className="sec-h2">12 Years of <em>Impact</em></h2>
          <div className="timeline">
            {timeline.map((t,i)=>(
              <div key={i} className={`tl-item ${i%2===0?'tl-left':'tl-right'}`}>
                <div className="tl-content">
                  <div className="tl-year">{t.year}</div>
                  <div className="tl-title">{t.title}</div>
                  <div className="tl-desc">{t.desc}</div>
                </div>
                <div className="tl-dot"/>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="section" id="team">
        <div className="container">
          <div className="sec-lbl">Leadership</div>
          <h2 className="sec-h2">Meet the <em>Team</em></h2>
          <p className="sec-p about-p">Our leadership brings over 150 years of combined financial services experience across Nigeria and globally.</p>
          <div className="team-grid">
            {leadership.map((m,i)=>(
              <div key={i} className="team-card">
                <div className="team-avatar">{m.initials}</div>
                <div className="team-name">{m.name}</div>
                <div className="team-role">{m.role}</div>
                <p className="team-bio">{m.bio}</p>
                <div className="team-social"><div className="team-social-btn">in</div></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GOVERNANCE */}
      <section className="section section--white" id="governance">
        <div className="container">
          <div className="sec-lbl">Governance</div>
          <h2 className="sec-h2">Corporate <em>Governance</em></h2>
          <p className="sec-p about-p">We maintain the highest standards of corporate governance, regulatory compliance, and institutional transparency.</p>
          <div className="gov-tabs">
            {[['board','🏛 Board Structure'],['compliance','📋 Compliance'],['transparency','📊 Transparency']].map(([id,lbl])=>(
              <button key={id} className={`gov-tab ${govTab===id?'gov-tab--active':''}`} onClick={()=>setGovTab(id)}>{lbl}</button>
            ))}
          </div>
          <div className="gov-grid">
            {(govTab==='board'?[
              {ico:'🏛',t:'Board of Directors',d:'7-member board with independent non-executive majority. Meets quarterly. Full fiduciary oversight.'},
              {ico:'📋',t:'Audit Committee',d:'Independent audit committee overseeing financial reporting, internal controls, and risk management.'},
              {ico:'⚠️',t:'Risk Committee',d:'Dedicated risk governance committee setting risk appetite and monitoring credit, market, and operational risk.'},
              {ico:'💰',t:'Remuneration Committee',d:'Independent committee setting executive compensation aligned with long-term value creation.'},
            ]:govTab==='compliance'?[
              {ico:'🏛',t:'CBN Regulatory Compliance',d:'Full compliance with all Central Bank of Nigeria guidelines, prudential requirements, and microfinance regulations.'},
              {ico:'🛡',t:'NDIC Membership',d:'All deposits at Whitecrust MFB are fully insured by the Nigeria Deposit Insurance Corporation.'},
              {ico:'✅',t:'ISO 9001:2015 Certified',d:'ISO-certified quality management systems across all group operations and subsidiaries.'},
              {ico:'🔒',t:'NDPR Compliance',d:'Full compliance with Nigeria Data Protection Regulation for all customer data handling.'},
            ]:[
              {ico:'📊',t:'Annual Reports',d:'Fully audited annual reports published and available to all stakeholders and the public.'},
              {ico:'📈',t:'Quarterly Performance',d:'Quarterly performance reports shared with investors and board. Full financial visibility.'},
              {ico:'🗣',t:'Stakeholder Engagement',d:'Annual general meetings, investor days, and regular stakeholder communication programs.'},
              {ico:'💰',t:'Fee Transparency',d:'All fees, charges, and rates disclosed upfront. No hidden charges policy across all products.'},
            ]).map((g,i)=>(
              <div key={i} className="gov-card">
                <div className="gov-ico">{g.ico}</div>
                <h4>{g.t}</h4>
                <p>{g.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AWARDS */}
      <section className="section" id="awards" style={{background:'var(--navy)'}}>
        <div className="container">
          <div className="sec-lbl light">Awards and Recognition</div>
          <h2 className="sec-h2 light">Recognised for <em>Excellence</em></h2>
          <div className="about-awards">
            {awards.map((a,i)=>(
              <div key={i} className="about-award">
                <div className="aa-ico">{a.icon}</div>
                <div className="aa-title">{a.title}</div>
                <div className="aa-org">{a.org}</div>
                <div className="aa-year">{a.year}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CSR */}
      <section className="section section--white">
        <div className="container">
          <div className="sec-lbl">CSR and Impact</div>
          <h2 className="sec-h2">Beyond Finance: <em>Community Impact</em></h2>
          <div className="csr-grid">
            {[{ico:'📚',t:'Financial Literacy',stat:'50,000+',sl:'Nigerians trained',d:'Free financial literacy programs delivered through our MFI network and community partnerships.'},{ico:'👩‍💼',t:'Women Empowerment',stat:'60%',sl:'Female clients',d:'Over 60% of our group lending clients are women entrepreneurs driving household income growth.'},{ico:'🌾',t:'Food Security',stat:'2,000+',sl:'Farmers supported',d:'Whitecrust Farms has supported smallholder farmers with capital, training, and market access.'},{ico:'🏫',t:'Education Fund',stat:'₦50M+',sl:'Scholarships given',d:'Annual scholarship fund supporting children of loan clients who demonstrate financial hardship.'}].map((c,i)=>(
              <div key={i} className="csr-card">
                <div className="csr-ico">{c.ico}</div>
                <div className="csr-stat">{c.stat}</div>
                <div className="csr-sl">{c.sl}</div>
                <h4>{c.t}</h4>
                <p>{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{background:'var(--accent)',padding:'72px 0',textAlign:'center'}}>
        <div className="container">
          <h2 style={{fontFamily:"'Playfair Display',serif",fontSize:36,color:'#fff',marginBottom:12}}>Ready to Partner with Whitecrust?</h2>
          <p style={{color:'rgba(255,255,255,.8)',fontSize:16,marginBottom:28}}>Whether you are a client, investor, or institutional partner, we would love to hear from you.</p>
          <div style={{display:'flex',gap:12,justifyContent:'center'}}>
            <Link to="/contact" style={{background:'#fff',color:'var(--accent)',padding:'14px 28px',borderRadius:8,fontWeight:700,fontSize:14,textDecoration:'none'}}>Contact Us →</Link>
            <Link to="/investors" style={{background:'transparent',color:'#fff',padding:'14px 28px',borderRadius:8,fontWeight:500,fontSize:14,textDecoration:'none',border:'1px solid rgba(255,255,255,.3)'}}>Investor Relations</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
