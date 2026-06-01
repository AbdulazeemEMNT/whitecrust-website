import React,{useState,useEffect,useRef} from 'react';
import{Link,useLocation}from 'react-router-dom';
import{subsidiaries}from '../data/siteData';
import logo from '../whitecrust-logo.png';
import'./Navbar.css';

export default function Navbar(){
  const[open,setOpen]=useState(null);
  const[mobileOpen,setMobileOpen]=useState(false);
  const[scrolled,setScrolled]=useState(false);
  const[activePanel,setActivePanel]=useState('sme');
  const ref=useRef(null);
  const loc=useLocation();

  useEffect(()=>{const s=()=>setScrolled(window.scrollY>20);window.addEventListener('scroll',s);return()=>window.removeEventListener('scroll',s)},[]);
  useEffect(()=>{setOpen(null);setMobileOpen(false)},[loc]);
  useEffect(()=>{const h=(e)=>{if(ref.current&&!ref.current.contains(e.target))setOpen(null)};document.addEventListener('mousedown',h);return()=>document.removeEventListener('mousedown',h)},[]);

  const panels={
    sme:[{icon:'💼',name:'Working Capital Loan',desc:'Up to ₦50M for operations and growth',tag:'Most Popular'},{icon:'⚙️',name:'Equipment Financing',desc:'Asset-backed financing for machinery'},{icon:'🚢',name:'Trade Finance',desc:'Import/export and invoice discounting'},{icon:'🌾',name:'Agricultural Finance',desc:'Seasonal loans for agri-enterprises'}],
    public:[{icon:'💰',name:'Salary Advance',desc:'Access up to 3× your monthly salary',tag:'Fast Approval'},{icon:'📋',name:'Payroll Lending',desc:'Direct payroll deduction partnerships'},{icon:'🤝',name:'Cooperative Loans',desc:'Group lending for civil servants'}],
    personal:[{icon:'👤',name:'Personal Loan',desc:'Up to ₦5M for any personal need',tag:'Low Rates'},{icon:'⚡',name:'Emergency Credit',desc:'24-hour disbursement for urgent needs'},{icon:'🚗',name:'Vehicle Finance',desc:'New and used car financing'},{icon:'🏠',name:'Home Improvement',desc:'Renovation and upgrade financing'}],
    invest:[{icon:'📊',name:'Fixed Deposit',desc:'Up to 18% p.a. from ₦100K',tag:'Guaranteed'},{icon:'📈',name:'Mutual Funds',desc:'Professionally managed diversified funds'},{icon:'💎',name:'Portfolio Management',desc:'Bespoke wealth management for HNIs'},{icon:'🌱',name:'Farm Investment Units',desc:'Earn from Whitecrust Farms cycles'}],
  };

  return(
    <nav className={`nb ${scrolled?'nb--scrolled':''}`} ref={ref}>
      <div className="nb-inner">
        <Link to="/" className="nb-logo">
          <img src={logo} alt="Whitecrust" className="nb-mark" />
          <div><div className="nb-name">Whitecrust <span>Group</span></div><div className="nb-sub">Investment Limited</div></div>
        </Link>
        <div className="nb-links">
          <button className={`nb-btn ${open==='about'?'nb-btn--open':''}`} onClick={()=>setOpen(open==='about'?null:'about')}>About <span className="nb-chev">▾</span></button>
          <button className={`nb-btn ${open==='products'?'nb-btn--open':''}`} onClick={()=>setOpen(open==='products'?null:'products')}>Products <span className="nb-chev">▾</span></button>
          <button className={`nb-btn ${open==='subsidiaries'?'nb-btn--open':''}`} onClick={()=>setOpen(open==='subsidiaries'?null:'subsidiaries')}>Subsidiaries <span className="nb-chev">▾</span></button>
          <Link to="/investors" className="nb-btn">Investors</Link>
          <Link to="/calculator" className="nb-btn">Calculator</Link>
          <span className="nb-cbn">CBN Licensed</span>
        </div>
        <div className="nb-actions">
          <Link to="/contact" className="nb-ghost">Contact</Link>
          <Link to="/apply" className="nb-cta">Apply Now →</Link>
        </div>
        <button className="nb-ham" onClick={()=>setMobileOpen(!mobileOpen)}><span/><span/><span/></button>
      </div>

      {open==='products'&&(
        <div className="mm">
          <div className="mm-layout">
            <div className="mm-side">
              <div className="mm-side-label">By Segment</div>
              {[['sme','🏢','SME Solutions','Business financing'],['public','🏛','Public Sector','Salary-backed credit'],['personal','👤','Personal Finance','Individual products'],['invest','📈','Investments','Wealth management']].map(([id,ico,label,desc])=>(
                <div key={id} className={`mm-seg ${activePanel===id?'mm-seg--active':''}`} onMouseEnter={()=>setActivePanel(id)} onClick={()=>setActivePanel(id)}>
                  <span className="mm-seg-ico">{ico}</span>
                  <div><div className="mm-seg-name">{label}</div><div className="mm-seg-desc">{desc}</div></div>
                  <span className="mm-seg-arr">›</span>
                </div>
              ))}
              <div className="mm-side-label" style={{marginTop:16}}>Tools</div>
              <Link to="/calculator" className="mm-seg" onClick={()=>setOpen(null)}><span className="mm-seg-ico">🧮</span><div><div className="mm-seg-name">Loan Calculator</div><div className="mm-seg-desc">Plan repayments</div></div></Link>
              <Link to="/apply" className="mm-seg" onClick={()=>setOpen(null)}><span className="mm-seg-ico">✅</span><div><div className="mm-seg-name">Eligibility Check</div><div className="mm-seg-desc">Quick pre-qualify</div></div></Link>
            </div>
            <div className="mm-panel">
              <div className="mm-panel-label">PRODUCTS</div>
              <div className="mm-cards">
                {(panels[activePanel]||[]).map((p,i)=>(
                  <Link to="/products" key={i} className="mm-card" onClick={()=>setOpen(null)}>
                    <div className="mm-card-ico">{p.icon}</div>
                    <div><div className="mm-card-name">{p.name}{p.tag&&<span className="mm-tag">{p.tag}</span>}</div><div className="mm-card-desc">{p.desc}</div></div>
                  </Link>
                ))}
              </div>
            </div>
            <div className="mm-feat">
              <div className="mm-panel-label">FEATURED</div>
              <Link to="/apply" className="mm-feat-card" onClick={()=>setOpen(null)}>
                <div className="mm-feat-img" style={{background:'linear-gradient(135deg,#0A2342,#12355B)'}}>🏆</div>
                <div className="mm-feat-body"><div className="mm-feat-name">SME Growth Package</div><div className="mm-feat-desc">Working capital + equipment in one application</div><div className="mm-feat-link">Apply Now →</div></div>
              </Link>
              <Link to="/investors" className="mm-feat-card" onClick={()=>setOpen(null)}>
                <div className="mm-feat-img" style={{background:'linear-gradient(135deg,#0A3D1E,#16A34A)'}}>💹</div>
                <div className="mm-feat-body"><div className="mm-feat-name">Fixed Deposit — 18% p.a.</div><div className="mm-feat-desc">Limited offer. Min ₦500K. Lock in now.</div><div className="mm-feat-link" style={{color:'#16A34A'}}>Invest Now →</div></div>
              </Link>
              <div className="mm-hotline"><div className="mm-hotline-lbl">HELPLINE</div><div className="mm-hotline-num">0800-WHITECRUST</div><div className="mm-hotline-hrs">Mon–Sat, 8am–6pm</div></div>
            </div>
          </div>
          <div className="mm-foot">
            <div className="mm-foot-links">
              <Link to="/contact" onClick={()=>setOpen(null)}>📍 Find a Branch</Link>
              <Link to="/contact" onClick={()=>setOpen(null)}>📞 Contact Support</Link>
              <Link to="/apply" onClick={()=>setOpen(null)}>✅ Check Eligibility</Link>
            </div>
            <div className="mm-foot-right">Hotline: <strong>0800-WHITECRUST</strong></div>
          </div>
        </div>
      )}

      {open==='subsidiaries'&&(
        <div className="mm">
          <div className="mm-subs">
            {subsidiaries.map(s=>(
              <Link to={`/subsidiary/${s.slug}`} key={s.slug} className="mm-sub-card" onClick={()=>setOpen(null)}>
                <div className="mm-sub-ico" style={{background:`${s.color}22`}}>{s.icon}</div>
                <div className="mm-sub-name">{s.name}</div>
                <div className="mm-sub-tagline">{s.tagline}</div>
                <div className="mm-sub-stats">{s.stats.slice(0,2).map((st,i)=><span key={i}><strong>{st.val}</strong> {st.label}</span>)}</div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {open==='about'&&(
        <div className="mm">
          <div className="mm-about">
            {[['📖','Our Story','/about'],['🎯','Mission & Vision','/about'],['👥','Leadership Team','/about'],['🏛','Corporate Governance','/about'],['📊','Annual Reports','/investors'],['🏆','Awards','/about'],['📰','Newsroom','/contact'],['💼','Careers','/contact'],['🌍','CSR & Impact','/about']].map(([ico,label,to],i)=>(
              <Link to={to} key={i} className="mm-about-link" onClick={()=>setOpen(null)}><span>{ico}</span>{label}</Link>
            ))}
          </div>
        </div>
      )}

      {mobileOpen&&(
        <div className="nb-mobile">
          <Link to="/" className="nb-mobile-link">Home</Link>
          <Link to="/about" className="nb-mobile-link">About</Link>
          <Link to="/products" className="nb-mobile-link">Products</Link>
          {subsidiaries.map(s=><Link to={`/subsidiary/${s.slug}`} key={s.slug} className="nb-mobile-link nb-mobile-sub">{s.icon} {s.name}</Link>)}
          <Link to="/investors" className="nb-mobile-link">Investors</Link>
          <Link to="/calculator" className="nb-mobile-link">Calculator</Link>
          <Link to="/contact" className="nb-mobile-link">Contact</Link>
          <Link to="/apply" className="nb-mobile-cta">Apply Now →</Link>
        </div>
      )}
    </nav>
  );
}
