import React,{useState} from 'react'
import { Link } from 'react-router-dom';
// import App from '../App';


export default function CreditCard() {

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
    <div>
      <form style={divsty}>
        <h1 style={headsty} onMouseEnter={bigshad} onMouseLeave={smallshad}>Credit Card Details</h1>
        <input type='text' placeholder='AccountHolder Name' style={boxsty}></input><br></br><br></br>
        <input type='text' placeholder='Debit Card Number' style={boxsty}></input><br></br><br></br>
        <input type='text' placeholder='CVC' style={boxsty}></input><br></br><br></br>
        <input type='text' placeholder='PIN' style={boxsty}></input><br></br><br></br>
        <input type='text' placeholder='Amount (₹)' style={boxsty}></input><br></br><br></br>
        <Link to="/Success"><button style={butsty}>Submit</button></Link>
        <Link to="/Farmer"><button style={butsty}>Back</button></Link>
      </form>
    </div>
  )
}
