import React,{useState,useMemo}from 'react';
import{Link}from 'react-router-dom';
import{BarChart,Bar,XAxis,YAxis,CartesianGrid,Tooltip,ResponsiveContainer,Area,AreaChart}from 'recharts';
import'./CalculatorPage.css';

const fn=(v)=>'₦'+Math.round(v).toLocaleString('en-NG');
const fnK=(v)=>v>=1000000?`₦${(v/1000000).toFixed(1)}M`:v>=1000?`₦${(v/1000).toFixed(0)}K`:`₦${Math.round(v)}`;

export default function CalculatorPage(){
  const[mode,setMode]=useState('credit');
  const[lAmt,setLAmt]=useState(2000000);
  const[lDur,setLDur]=useState(18);
  const[lRate,setLRate]=useState(24);
  const[invAmt,setInvAmt]=useState(1000000);
  const[invDur,setInvDur]=useState(24);
  const[invRate,setInvRate]=useState(18);

  const r=lRate/100/12;
  const monthly=r===0?lAmt/lDur:(lAmt*r*Math.pow(1+r,lDur))/(Math.pow(1+r,lDur)-1);
  const totalRepay=monthly*lDur;
  const totalInterest=totalRepay-lAmt;

  const creditData=useMemo(()=>{
    const data=[];let bal=lAmt;const rr=lRate/100/12;
    for(let i=1;i<=lDur;i++){
      const interest=bal*rr;const principal=monthly-interest;bal=Math.max(0,bal-principal);
      if(i%3===0||i===1||i===lDur)data.push({month:`M${i}`,balance:Math.round(bal),paid:Math.round(lAmt-bal)});
    }
    return data;
  },[lAmt,lDur,lRate,monthly]);

  const invFinal=invAmt*Math.pow(1+invRate/100/12,invDur);
  const invRet=invFinal-invAmt;
  const invData=useMemo(()=>{
    const data=[];
    for(let i=0;i<=invDur;i+=Math.max(1,Math.floor(invDur/10))){
      data.push({month:i===0?'Now':`M${i}`,value:Math.round(invAmt*Math.pow(1+invRate/100/12,i)),principal:Math.round(invAmt)});
    }
    if(data[data.length-1].month!==`M${invDur}`)data.push({month:`M${invDur}`,value:Math.round(invFinal),principal:Math.round(invAmt)});
    return data;
  },[invAmt,invDur,invRate,invFinal]);

  const milestones=useMemo(()=>{
    const pts=[Math.floor(invDur*0.25),Math.floor(invDur*0.5),Math.floor(invDur*0.75),invDur].filter(v=>v>0);
    return pts.map(m=>({m,val:Math.round(invAmt*Math.pow(1+invRate/100/12,m)),gain:Math.round(invAmt*Math.pow(1+invRate/100/12,m)-invAmt)}));
  },[invAmt,invDur,invRate]);

  const crMilestones=useMemo(()=>{
    const pts=[Math.floor(lDur*0.25),Math.floor(lDur*0.5),Math.floor(lDur*0.75),lDur].filter(v=>v>0);
    const rr=lRate/100/12;
    return pts.map(m=>{
      let bal=lAmt;
      for(let i=0;i<m;i++){const interest=bal*rr;const prin=monthly-interest;bal=Math.max(0,bal-prin);}
      return{m,remaining:Math.round(bal),paid:Math.round(lAmt-bal)};
    });
  },[lAmt,lDur,lRate,monthly]);

  return(
    <div className="calc-page">
      <section className="pg-hero">
        <div className="pg-hero-bg"/>
        <div className="container pg-hero-inner">
          <div className="pg-hero-label">Financial Calculators</div>
          <h1 className="pg-hero-h1">Plan with <em>Confidence</em></h1>
          <p className="pg-hero-p">Full-featured calculators with charts, milestones, and repayment breakdowns. No hidden charges.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="mode-tabs">
            <button className={`mode-tab ${mode==='credit'?'mode-tab--active':''}`} onClick={()=>setMode('credit')}>💳 Credit Loan Calculator</button>
            <button className={`mode-tab ${mode==='invest'?'mode-tab--active':''}`} onClick={()=>setMode('invest')}>📈 Investment Calculator</button>
          </div>

          <div className="calc-layout">
            {/* LEFT: INPUTS */}
            <div className="calc-inputs">
              <div className="ci-header">
                <div className="ci-title">{mode==='credit'?'Loan Parameters':'Investment Parameters'}</div>
                <div className="ci-sub">{mode==='credit'?'Adjust sliders to match your loan needs':'Set your investment targets'}</div>
              </div>

              {mode==='credit'?(
                <>
                  {[[lAmt,setLAmt,100000,50000000,100000,'Loan Amount',fn(lAmt),'₦100K','₦50M'],[lDur,setLDur,3,60,3,'Duration',`${lDur} months`,'3 months','60 months'],[lRate,setLRate,12,36,1,'Annual Rate',`${lRate}% p.a.`,'12%','36%']].map(([val,set,mn,mx,step,lbl,disp,l,r],i)=>(
                    <div key={i} className="ci-field">
                      <div className="ci-field-row"><span>{lbl}</span><strong>{disp}</strong></div>
                      <input type="range" min={mn} max={mx} step={step} value={val} onChange={e=>set(+e.target.value)} className="ci-range"/>
                      <div className="ci-range-labels"><span>{l}</span><span>{r}</span></div>
                    </div>
                  ))}
                  <div className="ci-result-box">
                    <div className="ci-result-label">MONTHLY REPAYMENT</div>
                    <div className="ci-result-big">{fn(monthly)}</div>
                    <div className="ci-result-sub">for {lDur} months</div>
                    <div className="ci-breakdown">
                      {[['Principal',fn(lAmt),''],['Total Interest',fn(totalInterest),'#DC2626'],['Total Repayable',fn(totalRepay),'var(--gold)']].map(([k,v,c],i)=>(
                        <div key={i} className="ci-bd-row"><span>{k}</span><strong style={c?{color:c}:{}}>{v}</strong></div>
                      ))}
                    </div>
                    <Link to="/apply" className="ci-cta">Apply for This Loan →</Link>
                  </div>
                </>
              ):(
                <>
                  {[[invAmt,setInvAmt,100000,50000000,100000,'Investment Amount',fn(invAmt),'₦100K','₦50M'],[invDur,setInvDur,3,60,3,'Duration',`${invDur} months`,'3 months','60 months'],[invRate,setInvRate,12,24,1,'Annual Return',`${invRate}% p.a.`,'12%','24%']].map(([val,set,mn,mx,step,lbl,disp,l,r],i)=>(
                    <div key={i} className="ci-field">
                      <div className="ci-field-row"><span>{lbl}</span><strong>{disp}</strong></div>
                      <input type="range" min={mn} max={mx} step={step} value={val} onChange={e=>set(+e.target.value)} className="ci-range"/>
                      <div className="ci-range-labels"><span>{l}</span><span>{r}</span></div>
                    </div>
                  ))}
                  <div className="ci-result-box ci-result-box--invest">
                    <div className="ci-result-label">MATURITY VALUE</div>
                    <div className="ci-result-big" style={{color:'#34D399'}}>{fn(invFinal)}</div>
                    <div className="ci-result-sub">after {invDur} months</div>
                    <div className="ci-breakdown">
                      {[['Principal',fn(invAmt),''],['Total Returns',`+${fn(invRet)}`,'#34D399'],['Monthly Earning',fn(invRet/invDur),'var(--gold)']].map(([k,v,c],i)=>(
                        <div key={i} className="ci-bd-row"><span>{k}</span><strong style={c?{color:c}:{}}>{v}</strong></div>
                      ))}
                    </div>
                    <Link to="/investors" className="ci-cta" style={{background:'#16A34A'}}>Open Investment Account →</Link>
                  </div>
                </>
              )}
            </div>

            {/* RIGHT: CHART */}
            <div className="calc-chart-area">
              <div className="chart-card">
                <div className="chart-title">{mode==='credit'?'Remaining Loan Balance':'Portfolio Growth Projection'}</div>
                <div className="chart-wrap">
                  <ResponsiveContainer width="100%" height={260}>
                    {mode==='credit'?(
                      <BarChart data={creditData} margin={{top:0,right:0,left:0,bottom:0}}>
                        <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.06)"/>
                        <XAxis dataKey="month" tick={{fontSize:11,fill:'#94A3B8'}} axisLine={false} tickLine={false}/>
                        <YAxis tickFormatter={fnK} tick={{fontSize:11,fill:'#94A3B8'}} axisLine={false} tickLine={false}/>
                        <Tooltip formatter={(v)=>fn(v)} contentStyle={{borderRadius:8,border:'1px solid #E2E8F0',fontSize:12}}/>
                        <Bar dataKey="balance" fill="#1E5EFF" radius={[4,4,0,0]} name="Remaining"/>
                        <Bar dataKey="paid" fill="#DCE9FF" radius={[4,4,0,0]} name="Paid Off"/>
                      </BarChart>
                    ):(
                      <AreaChart data={invData} margin={{top:0,right:0,left:0,bottom:0}}>
                        <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.06)"/>
                        <XAxis dataKey="month" tick={{fontSize:11,fill:'#94A3B8'}} axisLine={false} tickLine={false}/>
                        <YAxis tickFormatter={fnK} tick={{fontSize:11,fill:'#94A3B8'}} axisLine={false} tickLine={false}/>
                        <Tooltip formatter={(v)=>fn(v)} contentStyle={{borderRadius:8,border:'1px solid #E2E8F0',fontSize:12}}/>
                        <Area type="monotone" dataKey="value" stroke="#1E5EFF" fill="rgba(30,94,255,0.08)" strokeWidth={2.5} name="Portfolio Value"/>
                        <Area type="monotone" dataKey="principal" stroke="#CBD5E1" fill="transparent" strokeWidth={1.5} strokeDasharray="5 4" name="Principal"/>
                      </AreaChart>
                    )}
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="milestones-card">
                <div className="ms-title">{mode==='credit'?'Repayment Milestones':'Growth Milestones'}</div>
                <div className="ms-list">
                  {(mode==='credit'?crMilestones:milestones).map((m,i)=>(
                    <div key={i} className="ms-row">
                      <div className="ms-month">Month {m.m}</div>
                      {mode==='credit'?(
                        <>
                          <div className="ms-info"><span>Remaining</span><strong>{fn(m.remaining)}</strong></div>
                          <div className="ms-badge ms-badge--paid">{fn(m.paid)} paid</div>
                        </>
                      ):(
                        <>
                          <div className="ms-info"><span>Value</span><strong>{fn(m.val)}</strong></div>
                          <div className="ms-badge ms-badge--gain">+{fn(m.gain)}</div>
                        </>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{background:'var(--accent)',padding:'56px 0',textAlign:'center'}}>
        <div className="container">
          <h2 style={{fontFamily:"'Playfair Display',serif",fontSize:32,color:'#fff',marginBottom:10}}>Ready to Move Forward?</h2>
          <p style={{color:'rgba(255,255,255,.8)',fontSize:15,marginBottom:24}}>Apply in minutes or speak to our team for a personalised quote.</p>
          <div style={{display:'flex',gap:12,justifyContent:'center'}}>
            <Link to="/apply" style={{background:'#fff',color:'var(--accent)',padding:'13px 28px',borderRadius:8,fontWeight:700,fontSize:14,textDecoration:'none'}}>Apply for a Loan →</Link>
            <Link to="/investors" style={{background:'transparent',color:'#fff',padding:'13px 28px',borderRadius:8,fontWeight:500,fontSize:14,textDecoration:'none',border:'1px solid rgba(255,255,255,.3)'}}>Explore Investments</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
