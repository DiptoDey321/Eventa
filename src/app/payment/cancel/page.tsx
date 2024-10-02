"use client";
import { ExclamationOutlined } from '@ant-design/icons';
import { Button } from "antd";
import "../success/success.css";

function CancelPage() {
  return (
    <>
    
      <div style={{height: '100vh', width:'100vw', display: 'flex', justifyContent : 'center', alignItems:'center'}}>
        <div className='messsage-container' style={{background : 'white', maxWidth : '380px', borderRadius : '5px'}}>
          <div style={{ padding : '20px 20px 0px 20px'}}>
            <div style={{display: 'flex', justifyContent:'center'}} className="icon">
              <div style={{backgroundColor:'antiquewhite', width:'fit-content', padding : '20px', borderRadius : '50%'}}>
                
                <ExclamationOutlined style={{ fontSize: '44px', color: '#ffbf00' }}/>
              
              </div>
            </div>
            

            <p style={{textAlign : 'center', paddingTop: '30px'}}>
                It seems You have been cencel to buying tickets!  
              If you faced any problem please contact out support team !
            </p>
          </div>

          <div style={{ display: "flex", gap: "10px", justifyContent: 'center', paddingTop : '30px',paddingBottom :'20px' }}>
            <Button  onClick={()=> location.href = '/'} className='success-home'>Home</Button>
            <Button  onClick={()=> location.href = '/explore'} >More Events</Button>
          </div>

          <div style={{height:'4px', backgroundColor: '#ffbf00'}}>

          </div>
        </div>
      </div>
    </>
  )
}

export default CancelPage