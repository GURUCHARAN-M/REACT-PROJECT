import React ,{useState} from 'react'
import { Link } from 'react-router-dom';

export default function LoginPage() {

  const [shadow,setShadow]=useState(false);
  const bigshad=()=>{ setShadow(true);  }
  const smallshad=()=>{ setShadow(false);  }
  
  const divsty={
    textAlign:'center',marginTop:'250px'
  }

  const boxsty={
    width: "300px", height: "25px", borderRadius:"6px"
  }

  const butsty={
    width: "100px", height: "35px", borderRadius:"6px",
    backgroundColor:'#28a745',color:'white'    
  }

  const headsty={
    color:'#28a745',textShadow: shadow?'2px 2px 4px rgba(0, 0, 0, 0.5)':'none',
    transition: 'text-shadow 0.1s ease-in-out'
  }
  return (
    
    <div style={{height:'auto'}}>
        <form style={divsty}>
        <h1 style={headsty} onMouseEnter={bigshad} onMouseLeave={smallshad}>Login</h1>
        <input type='text' placeholder='Username' style={boxsty}></input><br></br><br></br>
        <input type='password' placeholder='Password' style={boxsty}></input><br></br><br></br>
        <Link to="/Farmer"><button style={butsty}>Login</button></Link>
        <div>
            <p style={{color:'#28a745'}}>Don't Have Account?</p>
            <Link to="/Signup"><button style={butsty}>Sign Up</button></Link>
        </div>
      </form>
    </div>
  )
}
