"use client";
import { CloseOutlined } from '@ant-design/icons';
import { Button } from "antd";
import '../success/success.css';

function CancelPage() {
  return (
    <>
    
      <div style={{height: '100vh', width:'100vw', display: 'flex', justifyContent : 'center', alignItems:'center'}}>
        <div className='messsage-container' style={{background : 'white', maxWidth : '380px', borderRadius : '5px'}}>
          <div style={{ padding : '20px 20px 0px 20px'}}>
            <div style={{display: 'flex', justifyContent:'center'}} className="icon">
              <div style={{backgroundColor:'antiquewhite', width:'fit-content', padding : '20px', borderRadius : '50%'}}>
                
                <CloseOutlined style={{ fontSize: '44px', color: '#ffbf00' }}/>
              </div>
            </div>
            <h1 style={{textAlign : 'center', paddingTop: '10px'}}>Opps ! 
                <br />
                Something went Wrong !
            </h1>

            <p style={{textAlign : 'center', paddingTop: '10px'}}>
                Please try Again...
            </p>
          </div>

          <div style={{ display: "flex", gap: "10px", justifyContent: 'center', paddingTop : '20px',paddingBottom :'20px' }}>
            <Button  onClick={()=> location.href = '/'} className='success-home'>Home</Button>
            <Button  onClick={()=> location.href = '/explore'} >More Events</Button>
          </div>

          <div style={{height:'4px', backgroundColor: 'red'}}>

          </div>
        </div>
      </div>
    </>
  )
}

export default CancelPage