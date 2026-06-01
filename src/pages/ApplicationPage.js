import React,{useState}from 'react';
import{Link}from 'react-router-dom';
import'./ApplicationPage.css';

const STEPS=['Product Selection','Eligibility Check','Personal Info','Document Upload','Review & Confirm','Confirmation'];

const PRODUCTS=[
  {icon:'💼',name:'SME Working Capital',range:'₦500K – ₦50M',rate:'From 24% p.a.',tag:'Most Popular',tagBg:'#DCE9FF',tagColor:'#1E5EFF'},
  {icon:'🏛',name:'Public Sector Loan',range:'₦100K – ₦10M',rate:'From 20% p.a.',tagBg:'#FEF3C7',tagColor:'#D97706'},
  {icon:'👤',name:'Personal Loan',range:'₦100K – ₦5M',rate:'From 22% p.a.',tagBg:'#DCFCE7',tagColor:'#16A34A'},
  {icon:'📊',name:'Fixed Deposit',range:'₦100K+',rate:'Up to 18% p.a.',tagBg:'#F3E8FF',tagColor:'#7C3AED'},
  {icon:'🌾',name:'Agri-Investment',range:'₦50K+',rate:'14–18% p.a.',tagBg:'#DCFCE7',tagColor:'#16A34A'},
  {icon:'⚡',name:'Emergency Credit',range:'₦50K – ₦500K',rate:'24hr Approval',tag:'Fast',tagBg:'#DCE9FF',tagColor:'#1E5EFF'},
];

const DOCS=[
  {icon:'🪪',name:'Government ID',hint:"NIN slip, Passport, or Driver's licence"},
  {icon:'💳',name:'Bank Statement',hint:'Last 6 months from your primary bank'},
  {icon:'📷',name:'Passport Photo',hint:'Recent clear photo, white background preferred'},
  {icon:'🏢',name:'CAC Certificate',hint:'Business registration certificate from CAC'},
  {icon:'📊',name:'Business Financials',hint:'Latest audited or management accounts'},
  {icon:'🏠',name:'Utility Bill',hint:'Recent bill as proof of address'},
];

export default function ApplicationPage(){
  const[step,setStep]=useState(1);
  const[selProd,setSelProd]=useState(0);
  const[eligChecks,setEligChecks]=useState([true,true,true,true,true,true]);
  const[docs,setDocs]=useState([true,true,false,false,false,false]);
  const[consent,setConsent]=useState(true);
  const[form,setForm]=useState({first:'Chukwuemeka',last:'Okafor',dob:'1985-06-15',gender:'Male',phone:'+234 803 456 7890',email:'c.okafor@business.com',state:'Lagos',address:'45 Marina Street, Lagos Island, Lagos',employment:'Business Owner',income:'₦500K – ₦2M',amount:'2000000'});
  const progress=Math.round((step/6)*100);
  const allElig=eligChecks.every(Boolean);
  const upCount=docs.filter(Boolean).length;
  const toggleElig=(i)=>setEligChecks(e=>e.map((v,j)=>j===i?!v:v));
  const toggleDoc=(i)=>setDocs(d=>d.map((v,j)=>j===i?!v:v));
  const setF=(k,v)=>setForm(f=>({...f,[k]:v}));

  return(
    <div className="app-pg">
      <div className="app-layout">
        {/* SIDEBAR */}
        <aside className="app-side">
          <Link to="/" className="app-side-logo">
            <div className="app-logo-mark">W</div>
            <div className="app-logo-text">Whitecrust <span>Group</span></div>
          </Link>
          <div className="app-steps">
            {STEPS.map((s,i)=>{
              const n=i+1,state=n<step?'done':n===step?'cur':'pend';
              return(
                <div key={i} className={`app-step-nav app-step-nav--${state}`}>
                  <div className={`app-step-circle app-step-circle--${state}`}>{state==='done'?'✓':n}</div>
                  <div><div className="app-step-nav-name">{s}</div><div className="app-step-nav-desc">{n===1?'Choose product':n===2?'Quick qualification':n===3?'Fill profile':n===4?'Upload files':n===5?'Confirm details':'Application done'}</div></div>
                </div>
              );
            })}
          </div>
          <div className="app-prog-wrap">
            <div className="app-prog-row"><span>Progress</span><span>{progress}%</span></div>
            <div className="app-prog-track"><div className="app-prog-fill" style={{width:`${progress}%`}}/></div>
          </div>
          <button className="app-save-btn">💾 Save & Continue Later</button>
        </aside>

        {/* MAIN */}
        <div className="app-main">
          <div className="app-topbar">
            <div className="app-breadcrumb">Application <span>›</span> <strong>{STEPS[step-1]}</strong></div>
            <div style={{display:'flex',gap:16,alignItems:'center'}}>
              <span className="app-step-count">Step {step} of 6</span>
              <button className="app-help-btn">💬 Need Help?</button>
            </div>
          </div>

          <div className="app-body">
            {/* STEP 1 */}
            {step===1&&(
              <div>
                <div className="step-hdr"><div className="step-badge">Step 1 of 6</div><h2>Select Your <em>Product</em></h2><p>Choose the product that matches your financial goals.</p></div>
                <div className="prod-sel-grid">
                  {PRODUCTS.map((p,i)=>(
                    <div key={i} className={`psg-card ${selProd===i?'psg-card--sel':''}`} onClick={()=>setSelProd(i)}>
                      <div className={`psg-check ${selProd===i?'psg-check--sel':''}`}>{selProd===i?'✓':''}</div>
                      <div className="psg-icon">{p.icon}</div>
                      <div className="psg-name">{p.name}{p.tag&&<span className="psg-tag">{p.tag}</span>}</div>
                      <div className="psg-range">{p.range}</div>
                      <div className="psg-rate" style={{background:p.tagBg,color:p.tagColor}}>{p.rate}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* STEP 2 */}
            {step===2&&(
              <div>
                <div className="step-hdr"><div className="step-badge">Step 2 of 6</div><h2>Eligibility <em>Check</em></h2><p>Confirm you meet the basic requirements. No credit score impact.</p></div>
                <div className="elig-grid">
                  {['Nigerian Citizen with valid ID','Age 21–60 years','Active bank account (6+ months)','Verifiable income source','Valid BVN and NIN','Business registered 6+ months'].map((e,i)=>(
                    <div key={i} className={`elig-item ${eligChecks[i]?'elig-item--chk':''}`} onClick={()=>toggleElig(i)}>
                      <div className={`elig-chk-box ${eligChecks[i]?'elig-chk-box--chk':''}`}>{eligChecks[i]?'✓':''}</div>
                      <span>{e}</span>
                    </div>
                  ))}
                </div>
                <div className={`elig-result ${allElig?'elig-result--pass':'elig-result--warn'}`}>
                  <div className="elig-result-ico">{allElig?'✅':'⚠️'}</div>
                  <div>
                    <div className="elig-result-title">{allElig?"You're Pre-Qualified!":'Some Requirements Missing'}</div>
                    <div className="elig-result-sub">{allElig?'You qualify! You may be eligible for up to ₦10M at competitive rates.':'Please review unchecked items. Our team can still review your application.'}</div>
                  </div>
                  {allElig&&<div className="elig-rate"><div style={{fontSize:11,opacity:.6}}>Rate from</div>24% p.a.</div>}
                </div>
              </div>
            )}

            {/* STEP 3 */}
            {step===3&&(
              <div>
                <div className="step-hdr"><div className="step-badge">Step 3 of 6</div><h2>Personal <em>Information</em></h2><p>All information is encrypted and stored securely. Fields marked * are required.</p></div>
                <div className="form-grid">
                  <div className="fg"><label>First Name *</label><input value={form.first} onChange={e=>setF('first',e.target.value)}/></div>
                  <div className="fg"><label>Last Name *</label><input value={form.last} onChange={e=>setF('last',e.target.value)}/></div>
                  <div className="fg"><label>Date of Birth *</label><input type="date" value={form.dob} onChange={e=>setF('dob',e.target.value)}/></div>
                  <div className="fg"><label>Gender *</label><select value={form.gender} onChange={e=>setF('gender',e.target.value)}><option>Male</option><option>Female</option><option>Prefer not to say</option></select></div>
                  <div className="fg fg-full">
                    <label>BVN *</label>
                    <div className="bvn-row"><input defaultValue="22345678901" style={{flex:1}}/><button className="bvn-btn">Verify BVN</button></div>
                    <div className="bvn-verified">✓ BVN Verified</div>
                  </div>
                  <div className="fg"><label>Phone Number *</label><input value={form.phone} onChange={e=>setF('phone',e.target.value)}/></div>
                  <div className="fg"><label>Email Address *</label><input type="email" value={form.email} onChange={e=>setF('email',e.target.value)}/></div>
                  <div className="fg"><label>State of Residence *</label><select value={form.state} onChange={e=>setF('state',e.target.value)}><option>Lagos</option><option>Abuja</option><option>Rivers</option><option>Kano</option><option>Enugu</option><option>Oyo</option><option>Delta</option></select></div>
                  <div className="fg fg-full"><label>Home Address *</label><input value={form.address} onChange={e=>setF('address',e.target.value)}/></div>
                  <div className="fg"><label>Employment Status</label><select value={form.employment} onChange={e=>setF('employment',e.target.value)}><option>Business Owner</option><option>Employed</option><option>Civil Servant</option><option>Self-Employed</option></select></div>
                  <div className="fg"><label>Monthly Income</label><select value={form.income} onChange={e=>setF('income',e.target.value)}><option>Below ₦100K</option><option>₦100K – ₦500K</option><option>₦500K – ₦2M</option><option>Above ₦2M</option></select></div>
                  <div className="fg fg-full"><label>Loan Amount Requested (₦) *</label><input type="number" value={form.amount} onChange={e=>setF('amount',e.target.value)}/><div className="fg-hint">Maximum ₦50,000,000 for SME loans</div></div>
                </div>
              </div>
            )}

            {/* STEP 4 */}
            {step===4&&(
              <div>
                <div className="step-hdr"><div className="step-badge">Step 4 of 6</div><h2>Document <em>Upload</em></h2><p>Upload clear photos or PDFs. Max 5MB per file. PDF, JPG, PNG accepted. ({upCount}/{DOCS.length} uploaded)</p></div>
                <div className="doc-grid">
                  {DOCS.map((d,i)=>(
                    <div key={i} className={`doc-card ${docs[i]?'doc-card--up':''}`} onClick={()=>toggleDoc(i)}>
                      <div className="doc-card-icon">{d.icon}</div>
                      <div className="doc-card-name">{d.name}</div>
                      <div className="doc-card-hint">{d.hint}</div>
                      {docs[i]?<div className="doc-card-up">✓ File uploaded</div>:<div className="doc-card-add">Click to upload →</div>}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* STEP 5 */}
            {step===5&&(
              <div>
                <div className="step-hdr"><div className="step-badge">Step 5 of 6</div><h2>Review & <em>Confirm</em></h2><p>Please check all details carefully before submitting your application.</p></div>
                {[
                  {title:'Product Selected',editStep:1,rows:[['Product',PRODUCTS[selProd].name],['Rate',PRODUCTS[selProd].rate],['Amount',`₦${(+form.amount).toLocaleString('en-NG')}`]]},
                  {title:'Personal Information',editStep:3,rows:[['Full Name',`${form.first} ${form.last}`],['Phone',form.phone],['Email',form.email],['State',form.state],['Income',form.income]]},
                  {title:'Documents',editStep:4,rows:DOCS.map((d,i)=>[d.name,docs[i]?'✓ Uploaded':'⚠ Pending'])},
                ].map((sec,i)=>(
                  <div key={i} className="rev-section">
                    <div className="rev-header"><span>{sec.title}</span><button className="rev-edit" onClick={()=>setStep(sec.editStep)}>Edit</button></div>
                    <div className="rev-rows">
                      {sec.rows.map(([k,v],j)=>(
                        <div key={j} className="rev-row">
                          <span>{k}</span>
                          <strong style={{color:v&&v.startsWith('⚠')?'#DC2626':v&&v.startsWith('✓')?'var(--success)':'var(--navy)'}}>{v}</strong>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
                <div className="consent-box" onClick={()=>setConsent(!consent)}>
                  <div className={`consent-chk ${consent?'consent-chk--on':''}`}>{consent?'✓':''}</div>
                  <p>I confirm all information provided is accurate and complete. I authorise Whitecrust Group to verify my identity, check my credit history, and process my application in accordance with CBN guidelines, their Privacy Policy, and Terms of Service.</p>
                </div>
              </div>
            )}

            {/* STEP 6 */}
            {step===6&&(
              <div className="confirm-screen">
                <div className="confirm-ring">🎉</div>
                <h2 className="confirm-h2">Application Submitted!</h2>
                <p className="confirm-p">Your application has been received and is being reviewed by our credit team. We will contact you within 24–48 hours with a decision.</p>
                <div className="ref-box">
                  <div className="ref-label">REFERENCE NUMBER</div>
                  <div className="ref-val">WCG-2024-089234</div>
                </div>
                <div className="next-steps">
                  {['Credit assessment within 24 hours','Phone verification call from our team','Offer letter sent to your email','Funds disbursed within 5 business days'].map((s,i)=>(
                    <div key={i} className="ns-item"><div className="ns-num">{i+1}</div><span>{s}</span></div>
                  ))}
                </div>
                <div style={{display:'flex',gap:12,justifyContent:'center',marginTop:32}}>
                  <Link to="/" className="conf-btn-p">Return to Homepage</Link>
                  <Link to="/contact" className="conf-btn-s">Contact Support</Link>
                </div>
              </div>
            )}
          </div>

          {step<6&&(
            <div className="app-footer">
              <button className="app-back-btn" onClick={()=>setStep(Math.max(1,step-1))} disabled={step===1}>‹ Back</button>
              <div style={{display:'flex',alignItems:'center',gap:20}}>
                <span style={{fontSize:12,color:'var(--gray2)'}}>🔒 256-bit SSL encrypted</span>
                <button className="app-next-btn" onClick={()=>setStep(Math.min(6,step+1))}>
                  {step===5?'Submit Application ✓':'Save & Continue →'}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
