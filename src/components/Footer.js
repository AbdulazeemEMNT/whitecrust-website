import React from 'react';
import{Link}from 'react-router-dom';
import{subsidiaries}from '../data/siteData';
import logo from '../whitecrust-logo.png';
import'./Footer.css';

export default function Footer(){
  return(
    <footer className="ft">
      <div className="ft-top">
        <div className="ft-brand">
          <Link to="/" className="ft-logo"><img src={logo} alt="Whitecrust" className="ft-mark" /><div><div className="ft-name">Whitecrust <span>Group</span></div><div className="ft-sub">Investment Limited</div></div></Link>
          <p>Nigeria's premier financial institution providing credit, investment, and wealth management since 2012. CBN Licensed and NDIC Insured.</p>
          <div className="ft-socials">{['in','tw','fb','ig'].map(s=><div key={s} className="ft-social">{s}</div>)}</div>
          <div className="ft-cbn"><div className="ft-cbn-badge">CBN</div><div><div className="ft-cbn-title">CBN Licensed</div><div className="ft-cbn-num">License No: MFB/00421/2018</div></div></div>
        </div>
        <div className="ft-col"><h4>Company</h4><ul><li><Link to="/about">About Us</Link></li><li><Link to="/about">Leadership Team</Link></li><li><Link to="/about">Corporate Governance</Link></li><li><Link to="/contact">Careers</Link></li><li><Link to="/about">CSR & Impact</Link></li><li><Link to="/contact">Newsroom</Link></li></ul></div>
        <div className="ft-col"><h4>Products</h4><ul><li><Link to="/products">Business Loans</Link></li><li><Link to="/products">Public Sector Credit</Link></li><li><Link to="/products">Personal Finance</Link></li><li><Link to="/investors">Fixed Deposits</Link></li><li><Link to="/investors">Mutual Funds</Link></li><li><Link to="/subsidiary/farms">Agri-Investment</Link></li></ul></div>
        <div className="ft-col"><h4>Subsidiaries</h4><ul>{subsidiaries.map(s=><li key={s.slug}><Link to={`/subsidiary/${s.slug}`}>{s.name}</Link></li>)}</ul></div>
        <div className="ft-col"><h4>Legal & Support</h4><ul><li><Link to="/contact">Privacy Policy</Link></li><li><Link to="/contact">Terms of Use</Link></li><li><Link to="/contact">Compliance</Link></li><li><Link to="/contact">NDIC Disclosure</Link></li><li><Link to="/contact">Contact Us</Link></li></ul></div>
      </div>
      <div className="ft-mid">
        <div className="ft-trust">
          {[['🏛','CBN Regulated','Central Bank Nigeria'],['🛡','NDIC Insured','Deposit Protected'],['✅','ISO 9001:2015','Certified Operations'],['🔒','256-bit SSL','Bank-grade Security'],['📊','Audited Reports','Full Transparency']].map(([ico,lbl,sub],i)=>(
            <div key={i} className="ft-trust-item"><div className="ft-trust-ico">{ico}</div><div><div className="ft-trust-lbl">{lbl}</div><div className="ft-trust-sub">{sub}</div></div></div>
          ))}
        </div>
      </div>
      <div className="ft-bot">
        <div>© 2024 Whitecrust Investment Limited. All rights reserved. RC No: 987654</div>
        <div className="ft-compliance">
          {['CBN Regulated','NDIC Insured','ISO 9001:2015'].map((c,i)=><div key={i} className="ft-comp-item"><div className="ft-comp-dot"/>{c}</div>)}
        </div>
      </div>
    </footer>
  );
}
