import React,{useState}from 'react';
import{Link}from 'react-router-dom';
import{subsidiaries,awards,testimonials}from '../data/siteData';
import'./HomePage.css';

export default function HomePage(){
  const[activeEco,setActiveEco]=useState('finance');
  const[testiPage,setTestiPage]=useState(0);
  const[calcMode,setCalcMode]=useState('credit');
  const[loanAmt,setLoanAmt]=useState(2000000);
  const[loanDur,setLoanDur]=useState(18);
  const[loanRate,setLoanRate]=useState(24);
  const[invAmt,setInvAmt]=useState(1000000);
  const[invDur,setInvDur]=useState(12);
  const[invRate,setInvRate]=useState(18);

  const fn=(v)=>'₦'+Math.round(v).toLocaleString('en-NG');
  const r=loanRate/100/12;
  const monthly=r===0?loanAmt/loanDur:(loanAmt*r*Math.pow(1+r,loanDur))/(Math.pow(1+r,loanDur)-1);
  const totalRepay=monthly*loanDur;
  const totalInterest=totalRepay-loanAmt;
  const invFinal=invAmt*Math.pow(1+invRate/100/12,invDur);
  const invRet=invFinal-invAmt;

  const testiChunks=[];
  for(let i=0;i<testimonials.length;i+=3)testiChunks.push(testimonials.slice(i,i+3));
  const activeSub=subsidiaries.find(s=>s.slug===activeEco)||subsidiaries[0];

  return(
    <div className="hp">
      {/* HERO */}
      <section className="hero">
        <div className="hero-bg"><div className="hero-grid"/><div className="hero-orb hero-orb1"/><div className="hero-orb hero-orb2"/></div>
        <div className="container hero-inner">
          <div className="hero-left">
            <div className="hero-badge"><span className="badge-dot"/>NIGERIA'S AWARD-WINNING INVESTMENT INSTITUTION</div>
            <h1 className="hero-h1">Powering Financial <em>Growth</em><br/>Across Nigeria</h1>
            <p className="hero-p">From credit solutions to wealth management, Whitecrust Group is the institutional backbone driving over 30,000 businesses, individuals, and communities forward.</p>
            <div className="hero-btns">
              <Link to="/apply" className="hero-btn-p">Explore Solutions <span>→</span></Link>
              <Link to="/investors" className="hero-btn-s">Investor Relations</Link>
            </div>
            <div className="hero-trust-strip">
              {['🏆 Multi-Award Winner','🏛 CBN Licensed','🛡 NDIC Insured','✅ ISO 9001:2015'].map((t,i)=><span key={i} className="hero-trust-tag">{t}</span>)}
            </div>
          </div>
          <div className="hero-visual">
            <div className="hv-ring hv-ring1"/>
            <div className="hv-ring hv-ring2"/>
            <div className="hv-ring hv-ring3"/>
            <div className="hv-frame">
              <div className="hv-frame-bg"/>
              <div className="hv-frame-border"/>
              <img
                src="/images/hero-professional.webp"
                alt="Nigerian financial professional"
                className="hv-photo"
              />
              <div className="hv-photo-overlay"/>
            </div>
            <div className="hv-card hv-card--tl">
              <div className="hvc-row"><span className="hvc-ico">₦</span><span className="hvc-trend">↑24%</span></div>
              <div className="hvc-val">30B+</div>
              <div className="hvc-lbl">Total Disbursed</div>
            </div>
            <div className="hv-card hv-card--tr">
              <div className="hvc-row"><span className="hvc-ico">👥</span><span className="hvc-trend">↑18%</span></div>
              <div className="hvc-val">30K+</div>
              <div className="hvc-lbl">Active Clients</div>
            </div>
            <div className="hv-card hv-card--bl">
              <div className="hvc-row"><span className="hvc-ico">🏆</span></div>
              <div className="hvc-val">5+</div>
              <div className="hvc-lbl">National Awards</div>
            </div>
            <div className="hv-card hv-card--br">
              <div className="hvc-row"><span className="hvc-ico">📍</span></div>
              <div className="hvc-val">12+</div>
              <div className="hvc-lbl">States Covered</div>
            </div>
            <div className="hv-badge-cbn">
              <span className="hv-cbn-dot"/>&nbsp;CBN Licensed &amp; Regulated
            </div>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="stats-bar">
        <div className="stats-inner">
          {[['₦30B+','Loans Disbursed'],['30,000+','Clients Served'],['12+','States of Operation'],['99.2%','Client Satisfaction']].map(([v,l],i)=>(
            <div key={i} className="stat-cell"><div className="sc-val">{v}</div><div className="sc-lbl">{l}</div></div>
          ))}
        </div>
      </section>

      {/* ECOSYSTEM */}
      <section className="section">
        <div className="container">
          <div className="sec-row">
            <div><div className="sec-lbl">Our Ecosystem</div><h2 className="sec-h2">One Group. <em>Five Pillars.</em></h2><p className="sec-p">A fully integrated financial ecosystem built to serve every stage of your financial life.</p></div>
            <Link to="/about" className="view-all">Explore All Entities →</Link>
          </div>
          <div className="eco-card">
            <div className="eco-grid-bg"/>
            <div className="eco-tabs">
              {subsidiaries.map(s=>(
                <div key={s.slug} className={`eco-tab ${activeEco===s.slug?'eco-tab--active':''}`} onClick={()=>setActiveEco(s.slug)}>
                  <div className="eco-tab-ico" style={{background:`${s.color}22`}}>{s.icon}</div>
                  <div className="eco-tab-name">{s.name}</div>
                  <div className="eco-tab-desc">{s.tagline.split('.')[0]}</div>
                </div>
              ))}
            </div>
            <div className="eco-detail">
              <div className="eco-detail-left">
                <div className="eco-detail-lbl">ABOUT {activeSub.name.toUpperCase()}</div>
                <div className="eco-detail-title">{activeSub.tagline}</div>
                <p className="eco-detail-p">{activeSub.description}</p>
                <Link to={`/subsidiary/${activeSub.slug}`} className="eco-detail-btn" style={{background:activeSub.color}}>Visit {activeSub.name} →</Link>
              </div>
              <div className="eco-detail-stats">
                {activeSub.stats.map((s,i)=>(
                  <div key={i} className="eco-stat">
                    <div className="es-val">{s.val}</div>
                    <div className="es-lbl">{s.label}</div>
                    <div className="es-trend">{s.trend}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="section section--white">
        <div className="container">
          <div className="sec-lbl">Products and Solutions</div>
          <h2 className="sec-h2">Built for Every <em>Financial Goal</em></h2>
          <p className="sec-p">From working capital to long-term wealth — we have a product for every stage of your journey.</p>
          <div className="prod-grid">
            {[
              {ico:'🏢',title:'SME Solutions',col:'blue',desc:'Business financing, working capital, and growth loans tailored for Nigerian SMEs at every stage.',links:['Working Capital Loan','Equipment Financing','Trade Finance','Agricultural Finance']},
              {ico:'🏛',title:'Public Sector',col:'gold',desc:'Salary-backed credit facilities for civil servants and public sector workers nationwide.',links:['Salary Advance','Payroll Lending','Cooperative Loans']},
              {ico:'👤',title:'Personal Finance',col:'green',desc:'Personal loans, consumer credit, and financial products built around your life goals.',links:['Personal Loan','Emergency Credit','Vehicle Finance','Home Improvement']},
              {ico:'💹',title:'Investments & Wealth',col:'purple',desc:'Wealth management, fixed income products, and institutional investment opportunities.',links:['Fixed Deposit — 18%','Mutual Funds','Portfolio Management','Agri-Investment']},
            ].map((p,i)=>(
              <div key={i} className={`prod-card prod-card--${p.col}`}>
                <div className="pc-ico">{p.ico}</div>
                <h3 className="pc-title">{p.title}</h3>
                <p className="pc-desc">{p.desc}</p>
                <div className="pc-links">
                  {p.links.map((l,j)=><Link to="/products" key={j} className="pc-link">{l} <span>→</span></Link>)}
                </div>
              </div>
            ))}
          </div>
          <div className="sec-btns"><Link to="/products" className="btn-p">View All Products →</Link><Link to="/calculator" className="btn-s">Calculate My Repayment</Link></div>
        </div>
      </section>

      {/* APPLICATION STEPS */}
      <section className="section">
        <div className="container">
          <div className="sec-lbl">Digital Application</div>
          <h2 className="sec-h2">Apply in <em>Minutes.</em> Get Funded Faster.</h2>
          <p className="sec-p">Our digital-first application is optimized for speed, clarity, and mobile access.</p>
          <div className="steps-row">
            <div className="steps-line"/>
            {['Select Product','Eligibility Check','Personal Info','Upload Docs','Review','Confirmation'].map((s,i)=>(
              <div key={i} className="step-item">
                <div className={`step-circle ${i<2?'step--done':i===2?'step--cur':'step--pend'}`}>{i<2?'✓':i+1}</div>
                <div className="step-name">{s}</div>
              </div>
            ))}
          </div>
          <div className="sec-btns"><Link to="/apply" className="btn-p">Start My Application →</Link><Link to="/apply" className="btn-s">Check Eligibility First</Link></div>
        </div>
      </section>

      {/* CALCULATOR */}
      <section className="section section--white">
        <div className="container">
          <div className="sec-lbl">Financial Calculators</div>
          <h2 className="sec-h2">Know Before You <em>Commit</em></h2>
          <p className="sec-p">Plan your finances with full transparency. No hidden charges.</p>
          <div className="calc-wrap">
            <div className="calc-left">
              <div className="calc-tabs-row">
                <button className={`calc-tab ${calcMode==='credit'?'calc-tab--active':''}`} onClick={()=>setCalcMode('credit')}>Credit Loan</button>
                <button className={`calc-tab ${calcMode==='invest'?'calc-tab--active':''}`} onClick={()=>setCalcMode('invest')}>Investment</button>
              </div>
              {calcMode==='credit'?(
                <div className="calc-fields">
                  {[[loanAmt,setLoanAmt,100000,50000000,100000,'Loan Amount',fn(loanAmt),'₦100K','₦50M'],[loanDur,setLoanDur,3,60,3,'Duration',`${loanDur} months`,'3 months','60 months'],[loanRate,setLoanRate,12,36,1,'Annual Rate',`${loanRate}% p.a.`,'12%','36%']].map(([val,set,mn,mx,step,lbl,disp,l,r],i)=>(
                    <div key={i} className="cf-group">
                      <div className="cf-row"><span>{lbl}</span><strong>{disp}</strong></div>
                      <input type="range" min={mn} max={mx} step={step} value={val} onChange={e=>set(+e.target.value)} className="cf-range"/>
                      <div className="cf-labels"><span>{l}</span><span>{r}</span></div>
                    </div>
                  ))}
                </div>
              ):(
                <div className="calc-fields">
                  {[[invAmt,setInvAmt,100000,50000000,100000,'Investment Amount',fn(invAmt),'₦100K','₦50M'],[invDur,setInvDur,3,60,3,'Duration',`${invDur} months`,'3 months','60 months'],[invRate,setInvRate,12,24,1,'Annual Return',`${invRate}% p.a.`,'12%','24%']].map(([val,set,mn,mx,step,lbl,disp,l,r],i)=>(
                    <div key={i} className="cf-group">
                      <div className="cf-row"><span>{lbl}</span><strong>{disp}</strong></div>
                      <input type="range" min={mn} max={mx} step={step} value={val} onChange={e=>set(+e.target.value)} className="cf-range"/>
                      <div className="cf-labels"><span>{l}</span><span>{r}</span></div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="calc-right">
              {calcMode==='credit'?(
                <>
                  <div className="cr-lbl">MONTHLY REPAYMENT</div>
                  <div className="cr-big">{fn(monthly)}</div>
                  <div className="cr-sub">for {loanDur} months</div>
                  <div className="cr-rows">
                    {[['Principal',fn(loanAmt),''],['Total Interest',fn(totalInterest),'#DC2626'],['Total Repayable',fn(totalRepay),'var(--gold)'],['Effective Rate',`${loanRate}% p.a.`,'']].map(([k,v,c],i)=>(
                      <div key={i} className="cr-row"><span>{k}</span><strong style={c?{color:c}:{}}>{v}</strong></div>
                    ))}
                  </div>
                  <Link to="/apply" className="cr-cta">Apply for This Loan →</Link>
                </>
              ):(
                <>
                  <div className="cr-lbl">MATURITY VALUE</div>
                  <div className="cr-big" style={{color:'#34D399'}}>{fn(invFinal)}</div>
                  <div className="cr-sub">after {invDur} months</div>
                  <div className="cr-rows">
                    {[['Principal',fn(invAmt),''],['Total Returns',`+${fn(invRet)}`,'#34D399'],['Monthly Earning',fn(invRet/invDur),''],['Effective Yield',`${invRate}% p.a.`,'var(--gold)']].map(([k,v,c],i)=>(
                      <div key={i} className="cr-row"><span>{k}</span><strong style={c?{color:c}:{}}>{v}</strong></div>
                    ))}
                  </div>
                  <Link to="/investors" className="cr-cta" style={{background:'#16A34A'}}>Open Investment Account →</Link>
                </>
              )}
            </div>
          </div>
          <p style={{textAlign:'center',marginTop:16}}><Link to="/calculator" className="calc-more-link">Open Full Calculator with Charts →</Link></p>
        </div>
      </section>

      {/* AWARDS */}
      <section className="section awards-sec">
        <div className="container">
          <div className="awards-grid">
            <div className="awards-left">
              <div className="sec-lbl light">Awards and Trust</div>
              <h2 className="sec-h2 light">Recognition <em>Built</em><br/>on Results</h2>
              <div className="awards-list">
                {awards.map((a,i)=>(
                  <div key={i} className="award-item">
                    <div className="award-badge">{a.icon}</div>
                    <div className="award-info"><div className="award-title">{a.title}</div><div className="award-org">{a.org} · {a.year}</div></div>
                    <div className="award-check">Verified ✓</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="awards-right">
              <div className="cbn-card">
                <div className="cbn-logo">CBN</div>
                <div className="cbn-card-title">CBN Licensed and Regulated</div>
                <p className="cbn-card-p">Whitecrust Group operates under full Central Bank of Nigeria regulatory framework, ensuring your funds are protected at all times.</p>
                <div className="cbn-lic">License No: MFB/00421/2018</div>
              </div>
              <div className="certs-grid">
                {[['🛡','NDIC Insured','Deposits protected'],['✅','ISO Certified','ISO 9001:2015'],['🔒','SSL Secured','256-bit encryption'],['📊','Audited','Annual reports']].map(([ico,t,s],i)=>(
                  <div key={i} className="cert-item"><div className="cert-ico">{ico}</div><div className="cert-title">{t}</div><div className="cert-sub">{s}</div></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section section--white">
        <div className="container">
          <div className="sec-row">
            <div><div className="sec-lbl">Client Stories</div><h2 className="sec-h2">Trusted by <em>Thousands</em> Across Nigeria</h2></div>
            <div className="testi-dots">{testiChunks.map((_,i)=><button key={i} className={`testi-dot ${i===testiPage?'testi-dot--active':''}`} onClick={()=>setTestiPage(i)}/>)}</div>
          </div>
          <div className="testi-grid">
            {testiChunks[testiPage]?.map((t,i)=>(
              <div key={i} className="testi-card">
                <div className="testi-stars">{'★'.repeat(t.stars)}</div>
                <div className="testi-q">"</div>
                <p className="testi-text">{t.text}</p>
                <div className="testi-author">
                  <div className="testi-avatar">{t.initials}</div>
                  <div><div className="testi-name">{t.name}</div><div className="testi-role">{t.role}</div></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-banner">
        <div className="container">
          <div className="cta-inner">
            <div><h2 className="cta-h2">Ready to Start Your Financial Journey?</h2><p className="cta-p">Join 30,000+ Nigerians who trust Whitecrust Group for credit, investment, and financial growth.</p></div>
            <div className="cta-btns"><Link to="/apply" className="cta-btn-p">Apply for Credit →</Link><Link to="/investors" className="cta-btn-s">Explore Investments</Link></div>
          </div>
        </div>
      </section>
    </div>
  );
}
