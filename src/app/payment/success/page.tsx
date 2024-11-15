/* eslint-disable @next/next/no-img-element */
"use client";
import { CheckOutlined } from '@ant-design/icons';
import { Button } from "antd";
import "./success.css";

function Success() {
  return (
    <>
      <div style={{height: '100vh', width:'100vw', display: 'flex', justifyContent : 'center', alignItems:'center'}}>
        <div className='messsage-container' style={{background : 'white', maxWidth : '380px', borderRadius : '5px'}}>
          <div style={{ padding : '20px 20px 0px 20px'}}>
            <div style={{display: 'flex', justifyContent:'center'}} className="icon">
              <div style={{backgroundColor:'antiquewhite', width:'fit-content', padding : '20px', borderRadius : '50%'}}>
                <CheckOutlined style={{ fontSize: '44px', color: 'green' }}/>
              </div>
            </div>
            <h1 style={{textAlign : 'center', paddingTop: '10px'}}>Your payment was successful</h1>
            <p style={{textAlign : 'center', paddingTop: '10px'}}>
              Thank you for your payment. we will be in contact with more details
              shortly via Email
            </p>
          </div>

          <div style={{ display: "flex", gap: "10px", justifyContent: 'center', paddingTop : '20px',paddingBottom :'20px' }}>
            <Button onClick={()=> location.href = '/'} className='success-home'>Home</Button>
            <Button onClick={()=> location.href = '/user'}>View Tickets</Button>
          </div>

          <div style={{height:'4px', backgroundColor: 'green'}}>

          </div>
        </div>
      </div>
    </>
  );
}

export default Success;
