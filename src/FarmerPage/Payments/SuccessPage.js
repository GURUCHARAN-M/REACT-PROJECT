import React ,{useState} from 'react'
// import App from '../App';
import { Link } from 'react-router-dom';


export default function SuccessPage() {

    const [shadow,setShadow]=useState(false);
    const bigshad=()=>{ setShadow(true);  }
    const smallshad=()=>{ setShadow(false);  }

    const txtsty={
        color:'#28a745',textShadow: shadow?'2px 2px 4px rgba(0, 0, 0, 0.5)':'none',
        transition: 'text-shadow 0.1s ease-in-out'
      }

  const butsty={
    border:'none',cursor:'pointer',width:'200px',height:'50px',
    backgroundColor:'#28a745',color:'white'
  }

  const imgsty={
    width:'200px',height:'200px'
  }

    const divsty={
        textAlign:'center',marginLeft:'200px',marginTop:'100px'
    }
  return (
    <div style={divsty}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTndNnSHe2aAmOIR7AUT1Vhl5k6GhldiB3INQ&usqp=CAU" alt='' style={imgsty}></img>
        <h1 style={txtsty} onMouseEnter={bigshad} onMouseLeave={smallshad}>Success</h1>
        <Link to="/Farmer"><button style={butsty}>Go Back</button></Link>
    </div>
  )
}
