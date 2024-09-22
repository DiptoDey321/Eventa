'use client'

import { Button } from 'antd';
import './coming-soon.css';

const ComingSoonPage = () => {
  return (
    <div className='main-container'>
      <div className="wrapper">
        <h1 style={{paddingBottom : '20px'}}>
          coming soon<span className="dot">...</span>
        </h1>
        <p style={{fontSize:'24px'}}>Stay tuned.</p>
        <div style={{paddingTop:'20px', display:'flex', justifyContent:"center"}}>
          <Button onClick={()=>location.href = '/'}>Back to Home</Button>
        </div>
      </div>
    </div>
  );
};

export default ComingSoonPage;
