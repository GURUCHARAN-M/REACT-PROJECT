import React, { useState} from 'react'
import { Link } from 'react-router-dom';
// import App from '../App';
// import LoginPage from './LoginPage';

export default function FrontPageFarmer() {
  
  const [size,setSize]=useState(false);
  const big=()=>{ setSize(true);  }
  const small=()=>{ setSize(false);  }
  
  const [shadow,setShadow]=useState(false);
  const bigshad=()=>{ setShadow(true);  }
  const smallshad=()=>{ setShadow(false);  }

  const butsty1={
    backgroundColor: '#28a745',color: '#FFFFFF',borderRadius: '5px',border: 'none',
    cursor: 'pointer',width:'200px',height:'50px',fontSize:'16px', boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
  }

  const txtsty={
    fontSize:'45px' ,height:'100px',textAlign:'center',textShadow: shadow?'2px 2px 4px rgba(0, 0, 0, 0.5)':'none',
    transition: 'text-shadow 0.1s ease-in-out'
  }
  
  const headsty={
    height:'100px',textShadow: shadow?'2px 2px 4px rgba(0, 0, 0, 0.5)':'none',
    transition: 'text-shadow 0.1s ease-in-out'
  }

  const parasty={
    fontSize:size?'25px':'16px',transition: 'font-size 0.3s ease-in-out'
  }

  const divsty={
    fontFamily:"sans-serif",height:'auto'
  }


  return (
    <div style={divsty}>
        <div>
            <h2 style={txtsty} onMouseEnter={bigshad} onMouseLeave={smallshad}>Let's Raise <g style={{color:'#28a745'}}>Farm</g> Together</h2><hr></hr>
        </div>
        <div style={{width:'800px',marginLeft:'100px',marginTop:'100px'}}>
            <div>
                <h1 style={headsty} onMouseEnter={bigshad} onMouseLeave={smallshad}>Empower your cause with farming where every <br></br><g style={{color:'#28a745'}}>Work creates</g> a ripple effect of <g style={{color:'#28a745'}}>positive changes</g> in Faarming...</h1><br></br>
                <div style={parasty} onMouseEnter={big} onMouseLeave={small}>
                  <p>Don' Worry you are in right place...</p><hr></hr>
                  <p>With 0% platform fee,you can raise your farm</p><br></br>
                </div>
                
                <Link to="/Login"><button style={butsty1}>Start Raising Farm</button></Link>
                
            </div>
        </div>
    </div>
  )
}
