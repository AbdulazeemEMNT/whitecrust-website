import React,{useState}from 'react';
import{Link}from 'react-router-dom';
import'./ContactPage.css';

const branches=[
  {city:'Lagos (Head Office)',addr:'4th Floor, Whitecrust House, 22 Marina Street, Lagos Island, Lagos',phone:'01-234-5678',hours:'Mon–Fri 8am–5pm, Sat 9am–1pm'},
  {city:'Abuja',addr:'Plot 1234, Wuse Zone 4, Abuja, FCT',phone:'09-876-5432',hours:'Mon–Fri 8am–5pm, Sat 9am–1pm'},
  {city:'Port Harcourt',addr:'35 Aba Road, GRA Phase 2, Port Harcourt, Rivers State',phone:'084-123-456',hours:'Mon–Fri 8am–5pm'},
  {city:'Kano',addr:'6 Kingsway Road, Sabon Gari, Kano, Kano State',phone:'064-789-012',hours:'Mon–Fri 8am–5pm'},
  {city:'Enugu',addr:'12 Ogui Road, Independence Layout, Enugu, Enugu State',phone:'042-345-678',hours:'Mon–Fri 8am–5pm'},
  {city:'Ibadan',addr:'78 Dugbe Market Road, Ibadan, Oyo State',phone:'022-456-789',hours:'Mon–Fri 8am–5pm'},
];

export default function ContactPage(){
  const[form,setForm]=useState({name:'',email:'',phone:'',dept:'General Enquiry',message:''});
  const[submitted,setSubmitted]=useState(false);
  const setF=(k,v)=>setForm(f=>({...f,[k]:v}));
  const handleSubmit=(e)=>{e.preventDefault();setSubmitted(true)};

  return(
    <div className="contact-page">
      <section className="pg-hero">
        <div className="pg-hero-bg"/>
        <div className="container pg-hero-inner">
          <div className="pg-hero-label">Contact Us</div>
          <h1 className="pg-hero-h1">We're Here to <em>Help</em></h1>
          <p className="pg-hero-p">Whether you need a loan, want to invest, or simply have a question — our team is ready to assist you every step of the way.</p>
          <div className="contact-quick">
            {[['📞','Call Us','0800-WHITECRUST','24/7 Hotline'],['📧','Email Us','hello@whitecrust.ng','Response within 4hrs'],['💬','Live Chat','Start a conversation','Available Mon–Sat'],['📍','Visit Us','22 Marina, Lagos','Head Office']].map(([ico,lbl,val,sub])=>(
              <div key={lbl} className="cq-item">
                <div className="cq-ico">{ico}</div>
                <div className="cq-lbl">{lbl}</div>
                <div className="cq-val">{val}</div>
                <div className="cq-sub">{sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            {/* FORM */}
            <div className="contact-form-wrap">
              <div className="sec-lbl">Send a Message</div>
              <h2 className="sec-h2">Get in <em>Touch</em></h2>
              <p className="contact-intro">Fill in the form below and a member of our team will respond within 4 business hours.</p>
              {submitted?(
                <div className="form-success">
                  <div className="form-success-ico">✅</div>
                  <div className="form-success-title">Message Received!</div>
                  <p>Thank you for contacting Whitecrust Group. A team member will reach out to you at {form.email} within 4 business hours.</p>
                  <button onClick={()=>setSubmitted(false)} className="form-success-btn">Send Another Message</button>
                </div>
              ):(
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="cf-row-2">
                    <div className="cf-group"><label>Full Name *</label><input required value={form.name} onChange={e=>setF('name',e.target.value)} placeholder="Your full name"/></div>
                    <div className="cf-group"><label>Email Address *</label><input required type="email" value={form.email} onChange={e=>setF('email',e.target.value)} placeholder="your@email.com"/></div>
                  </div>
                  <div className="cf-row-2">
                    <div className="cf-group"><label>Phone Number</label><input value={form.phone} onChange={e=>setF('phone',e.target.value)} placeholder="+234 800 000 0000"/></div>
                    <div className="cf-group"><label>Department</label>
                      <select value={form.dept} onChange={e=>setF('dept',e.target.value)}>
                        {['General Enquiry','Loan Application','Investment Enquiry','Customer Support','Partnership','Careers','Media & Press'].map(d=><option key={d}>{d}</option>)}
                      </select>
                    </div>
                  </div>
                  <div className="cf-group"><label>Message *</label><textarea required rows={5} value={form.message} onChange={e=>setF('message',e.target.value)} placeholder="Tell us how we can help you..."/></div>
                  <button type="submit" className="cf-submit">Send Message →</button>
                  <p className="cf-privacy">We respect your privacy. Your information will never be shared or sold. <Link to="/contact" style={{color:'var(--accent)'}}>Privacy Policy</Link></p>
                </form>
              )}
            </div>

            {/* INFO */}
            <div className="contact-info">
              <div className="ci-block">
                <div className="ci-block-title">Hotline</div>
                <div className="ci-block-main">0800-WHITECRUST</div>
                <div className="ci-block-sub">Toll-free · 24 hours / 7 days</div>
              </div>
              <div className="ci-block">
                <div className="ci-block-title">Email</div>
                <div className="ci-block-main" style={{fontSize:16}}>hello@whitecrust.ng</div>
                <div className="ci-block-sub">Response within 4 business hours</div>
              </div>
              <div className="ci-block">
                <div className="ci-block-title">Dedicated Lines</div>
                <div className="ci-dedicated">
                  {[['💼 SME Loans','01-234-5000'],['👤 Personal Loans','01-234-5001'],['📈 Investments','01-234-5002'],['🤝 Partnerships','01-234-5003']].map(([d,n])=>(
                    <div key={d} className="ci-ded-item"><span>{d}</span><strong>{n}</strong></div>
                  ))}
                </div>
              </div>
              <div className="ci-block">
                <div className="ci-block-title">Business Hours</div>
                <div className="ci-hours">
                  <div className="ci-hour"><span>Monday – Friday</span><strong>8:00 AM – 5:00 PM</strong></div>
                  <div className="ci-hour"><span>Saturday</span><strong>9:00 AM – 1:00 PM</strong></div>
                  <div className="ci-hour"><span>Sunday</span><strong>Hotline only</strong></div>
                </div>
              </div>
              <div className="ci-block">
                <div className="ci-block-title">Social Media</div>
                <div style={{display:'flex',gap:10,marginTop:8}}>
                  {['LinkedIn','Twitter','Facebook','Instagram'].map(s=>(
                    <div key={s} className="ci-social">{s[0]}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BRANCHES */}
      <section className="section section--white">
        <div className="container">
          <div className="sec-lbl">Our Network</div>
          <h2 className="sec-h2">Find a <em>Branch</em> Near You</h2>
          <div className="branches-grid">
            {branches.map((b,i)=>(
              <div key={i} className="branch-card">
                <div className="branch-city">{b.city}</div>
                <div className="branch-addr">📍 {b.addr}</div>
                <div className="branch-phone">📞 {b.phone}</div>
                <div className="branch-hours">🕐 {b.hours}</div>
                <button className="branch-dir-btn">Get Directions →</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUICK APPLY */}
      <section className="section section--dark">
        <div className="container" style={{textAlign:'center'}}>
          <div className="sec-lbl light" style={{justifyContent:'center'}}>Quick Links</div>
          <h2 className="sec-h2 light">Ready to Take the Next Step?</h2>
          <div className="contact-quick-links">
            {[{ico:'💼',t:'Apply for a Loan',d:'Start your digital application in minutes',link:'/apply',color:'var(--accent)'},{ico:'📈',t:'Explore Investments',d:'Discover our investment products',link:'/investors',color:'#16A34A'},{ico:'🧮',t:'Use the Calculator',d:'Plan your finances before you apply',link:'/calculator',color:'#7C3AED'},{ico:'📖',t:'Learn About Us',d:'Our story, mission, and team',link:'/about',color:'var(--gold)'}].map((q,i)=>(
              <Link to={q.link} key={i} className="cql-card">
                <div className="cql-ico" style={{background:`${q.color}22`,border:`1px solid ${q.color}33`}}>{q.ico}</div>
                <div className="cql-title">{q.t}</div>
                <div className="cql-desc">{q.d}</div>
                <div className="cql-arrow" style={{color:q.color}}>→</div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
