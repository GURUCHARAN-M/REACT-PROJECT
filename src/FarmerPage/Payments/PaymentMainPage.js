import React,{useState} from 'react'
// import App from '../App';
import { Link } from 'react-router-dom';

export default function PaymentMainPage() {

  const [shadow,setShadow]=useState(false);
  const bigshad=()=>{ setShadow(true);  }
  const smallshad=()=>{ setShadow(false);  }
  
  const divsty={
    textAlign:'center',marginTop:'250px'
  }



  const butsty={
    border:'none',cursor:'pointer',width:'200px',height:'200px'
  }

  const imgsty={
    width:'200px',height:'200px'
  }

  const headsty={
    color:'#28a745',textShadow: shadow?'2px 2px 4px rgba(0, 0, 0, 0.5)':'none',
    transition: 'text-shadow 0.1s ease-in-out'
  }

  const flexsty={
    display:'flex',gap:'150px',marginLeft:'200px'
  }

  const buttsty={
    width: "100px", height: "35px", borderRadius:"6px",
    backgroundColor:'#28a745',color:'white' 
  }

  return (
    <div>
      <form style={divsty}>
        <h1 style={headsty} onMouseEnter={bigshad} onMouseLeave={smallshad}>Advance Payments</h1><br></br><br></br>
        <div style={flexsty}>
          <Link to="/Debit"><button style={butsty}><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvbIKP63esC6q0cvBsWilzzfExmeWzOrcflA&usqp=CAU' alt='' style={imgsty}></img></button></Link>
          <Link to="/Credit"><button style={butsty}><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvbIKP63esC6q0cvBsWilzzfExmeWzOrcflA&usqp=CAU' alt='' style={imgsty}></img></button></Link>
          <Link to="/Net"><button style={butsty}><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlWCzxaMhM7gfxwjM4DVyY8qqXecqiI80uHQKF3FWb85JPddLiDqbJiBNQDLVg2gjakJU&usqp=CAU' alt='' style={imgsty}></img></button></Link>
          <Link to="/Upi"><button style={butsty}><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTulpmMFYdg0ndZNELlkF0aJhe5GuDYA-O2Gg&usqp=CAU' alt='' style={imgsty}></img></button></Link>
        </div>
        <div style={flexsty}>
          <h1 style={headsty} onMouseEnter={bigshad} onMouseLeave={smallshad}>Debit Card</h1>
          <h1 style={headsty} onMouseEnter={bigshad} onMouseLeave={smallshad}>Credit Card</h1>
          <h1 style={headsty} onMouseEnter={bigshad} onMouseLeave={smallshad}>Net Banking</h1>
          <h1 style={headsty} onMouseEnter={bigshad} onMouseLeave={smallshad}>UPI Payments</h1>
        </div><br></br>
        <Link to="/Farmer"><button style={buttsty}>Go Back</button></Link>
      </form>
    </div>
  )
}
