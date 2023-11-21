import React, { useState } from 'react'
// import App from '../App';
import { Link } from 'react-router-dom';


export default function FarmerPage() {

  const [shadow,setShadow]=useState(false);
  const shad=()=>{    setShadow(true)  }
  const unshad=()=>{setShadow(false)}
  
  const [fsize,setSize]=useState(false);
  const big=()=>{    setSize(true)  }
  const small=()=>{setSize(false)}

  const butstyle1={
    border:'none',cursor:'pointer',backgroundColor:'white'
  }

  const imgstyle1={
    borderRadius:'5px'
  }

  const imgstyle2={
    borderRadius:'10px',width:'200px',height:'200px'
  }
  
  const txtsty={
    textShadow: shadow?'2px 2px 4px rgba(0, 0, 0, 0.5)':'none',
    transition: 'text-shadow 0.01s ease-in-out',color:'#28a745'
  }

  const txtsty2={
    fontSize:fsize?'20px':'15px',
    color:'#28a745'
  }

  const butsty1={
    width: "100px", height: "35px", borderRadius:"6px",
    backgroundColor:'#28a745',color:'white' 
  }
  
  return (
    <div style={{width:'auto',backgroundColor:'white'}}>
      <div style={{display:'flex', justifyContent:'space-between'}}>
            <h1 style={txtsty} onMouseEnter={shad} onMouseLeave={unshad}>FarmSmart</h1><br></br>
            <Link to="/Login"><button style={butsty1}>Logout</button></Link>
      </div>
      <hr></hr>
        <div id='machinery'>
            <h1 style={txtsty} onMouseEnter={shad} onMouseLeave={unshad}>Machineries</h1><br></br>
            <div id='machi_img' style={{display:'flex',gap:'15px'}}>
              <Link to="/Payment"><button style={butstyle1}><div style={imgstyle1}><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhAnKphIBYoXqDcgtS5CPyYPNTcniD0gb00A&usqp=CAU' alt='' style={imgstyle2}></img><br></br><h3 style={txtsty2} onMouseEnter={big} onMouseLeave={small}>Supreme-Plough <br></br>₹1000/hr</h3></div></button></Link>
              <Link to="/Payment"><button style={butstyle1}><div style={imgstyle1}><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqV9gfwv3yxs_BLk5fdQePE0wa2zElN3Lueg&usqp=CAU' alt='' style={imgstyle2}></img><br></br><h3 style={txtsty2} onMouseEnter={big} onMouseLeave={small}>Plough <br></br>₹500/hr</h3></div></button></Link>
              <Link to="/Payment"><button style={butstyle1}><div style={imgstyle1}><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_USl5TtRRRT0dWfmsJF89xVfVrH29dC2-xA&usqp=CAU' alt='' style={imgstyle2}></img><br></br><h3 style={txtsty2} onMouseEnter={big} onMouseLeave={small}>Path-Plough <br></br>₹800/hr</h3></div></button></Link>
              <Link to="/Payment"><button style={butstyle1}><div style={imgstyle1}><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRakUIciP96j8VCIJhgfC4E2b_4-mD67KPvPA&usqp=CAU' alt='' style={imgstyle2}></img><br></br><h3 style={txtsty2} onMouseEnter={big} onMouseLeave={small}>Carrier <br></br>₹400/hr</h3></div></button></Link>
              <Link to="/Payment"><button style={butstyle1}><div style={imgstyle1}><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFYS0pYLRtrDOBlK5BeHUgAMEKVUyGzIqWJA&usqp=CAU' alt='' style={imgstyle2}></img><br></br><h3 style={txtsty2} onMouseEnter={big} onMouseLeave={small}>Watering<br></br> ₹800/hr</h3></div></button></Link>
              <Link to="/Payment"><button style={butstyle1}><div style={imgstyle1}><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlR0lYYyut-xjO5o49uJ-taTFuT76KVttHDA&usqp=CAU' alt='' style={imgstyle2}></img><br></br><h3 style={txtsty2} onMouseEnter={big} onMouseLeave={small}>Harvest<br></br> ₹900/hr</h3></div></button></Link>
              <Link to="/Payment"><button style={butstyle1}><div style={imgstyle1}><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4MKcDSsuuzzLpBFGSLjR47x6Vj41wUSw_EQ&usqp=CAU' alt='' style={imgstyle2}></img><br></br><h3 style={txtsty2} onMouseEnter={big} onMouseLeave={small}>Plough <br></br>₹600/hr</h3></div></button></Link>
            </div>
        </div>
        <hr></hr>

        <div id='fertilizer'>
            <h1 style={txtsty} onMouseEnter={shad} onMouseLeave={unshad}>Fertilizers</h1><br></br>
            <div id='fert_img' style={{display:'flex',gap:'15px'}}>
              <Link to="/Payment"><button style={butstyle1}><div style={imgstyle1}><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzgAJmkAkpmYDLtWNRJYfW11e4cdl4G26vWQ&usqp=CAU' alt='' style={imgstyle2}></img><br></br><h3 style={txtsty2} onMouseEnter={big} onMouseLeave={small}>Dap<br></br>₹1600</h3></div></button></Link>
              <Link to="/Payment"><button style={butstyle1}><div style={imgstyle1}><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrLBZ2jhcB6Q7US57AfExDoh4rjm1cZxpevQ&usqp=CAU' alt='' style={imgstyle2}></img><br></br><h3 style={txtsty2} onMouseEnter={big} onMouseLeave={small}>Ugaoo<br></br>₹1200</h3></div></button></Link>
              <Link to="/Payment"><button style={butstyle1}><div style={imgstyle1}><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTghqFP_Zcy5qkdadzi28PyrAIJscoLndT6Qw&usqp=CAU' alt='' style={imgstyle2}></img><br></br><h3 style={txtsty2} onMouseEnter={big} onMouseLeave={small}>NPK<br></br>₹900</h3></div></button></Link>
              <Link to="/Payment"><button style={butstyle1}><div style={imgstyle1}><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzf8jsANYKwo1BZkmttDgeQGuEy_Nbr-XtVw&usqp=CAU' alt='' style={imgstyle2}></img><br></br><h3 style={txtsty2} onMouseEnter={big} onMouseLeave={small}>CMS<br></br>₹500</h3></div></button></Link>
              <Link to="/Payment"><button style={butstyle1}><div style={imgstyle1}><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQghFItM5SuUWv8MFjtIXBfs_HvLyv0cIWuQg&usqp=CAU' alt='' style={imgstyle2}></img><br></br><h3 style={txtsty2} onMouseEnter={big} onMouseLeave={small}>TrustBasket<br></br>₹2000</h3></div></button></Link>
              <Link to="/Payment"><button style={butstyle1}><div style={imgstyle1}><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL4SkWhQvdO_u9LiGEgKklhxG9lYi9KfDPyQ&usqp=CAU' alt='' style={imgstyle2}></img><br></br><h3 style={txtsty2} onMouseEnter={big} onMouseLeave={small}>Nutrimax<br></br>₹1800</h3></div></button></Link>
              <Link to="/Payment"><button style={butstyle1}><div style={imgstyle1}><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaI8_ph6Hp_NPTjdOC_WR0PnuK4jn89AnDIw&usqp=CAU' alt='' style={imgstyle2}></img><br></br><h3 style={txtsty2} onMouseEnter={big} onMouseLeave={small}>Cocogarden<br></br>₹1400</h3></div></button></Link>
            </div>
        </div>
        <hr></hr>

        <div id='worker'>
            <h1 style={txtsty} onMouseEnter={shad} onMouseLeave={unshad}>Workers</h1><br></br>
            <div id='work_img' style={{display:'flex',gap:'15px'}}>
              <Link to="/Payment"><button style={butstyle1}><div style={imgstyle1}><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjs2khajeMuNTngiW98ZIoc42wKF3pATM2Sg&usqp=CAU' alt='' style={imgstyle2}></img><br></br><h3 style={txtsty2} onMouseEnter={big} onMouseLeave={small}>Weed Cleaning<br></br>₹200</h3></div></button></Link>
              <Link to="/Payment"><button style={butstyle1}><div style={imgstyle1}><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgLN0Y7_YQFznODqC3Vetg5PnUW8s3K5SuTg&usqp=CAU' alt='' style={imgstyle2}></img><br></br><h3 style={txtsty2} onMouseEnter={big} onMouseLeave={small}>Irrigation<br></br>₹100</h3></div></button></Link>
              <Link to="/Payment"><button style={butstyle1}><div style={imgstyle1}><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnFz6wZt9r5ih-evE4lCG_peXd42znMyexZA&usqp=CAU' alt='' style={imgstyle2}></img><br></br><h3 style={txtsty2} onMouseEnter={big} onMouseLeave={small}>Cattle Grazing<br></br>₹250</h3></div></button></Link>
              <Link to="/Payment"><button style={butstyle1}><div style={imgstyle1}><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBjmSU_XI9wUDGmOigqZLbPCoHHiSnzDyD5w&usqp=CAU' alt='' style={imgstyle2}></img><br></br><h3 style={txtsty2} onMouseEnter={big} onMouseLeave={small}>Harvesting<br></br>₹350</h3></div></button></Link>
              <Link to="/Payment"><button style={butstyle1}><div style={imgstyle1}><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoFQSqOzdvBlb-Bcle0Mj0E-VFiOj9kFcDyA&usqp=CAU' alt='' style={imgstyle2}></img><br></br><h3 style={txtsty2} onMouseEnter={big} onMouseLeave={small}>Fertilizing<br></br>₹150</h3></div></button></Link>
              <Link to="/Payment"><button style={butstyle1}><div style={imgstyle1}><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLS2Nb329KMPBVhy_mDRGmCyzgCBM98Ny-uA&usqp=CAU' alt='' style={imgstyle2}></img><br></br><h3 style={txtsty2} onMouseEnter={big} onMouseLeave={small}>Ploughing<br></br>₹400</h3></div></button></Link>
              <Link to="/Payment"><button style={butstyle1}><div style={imgstyle1}><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6gPDsxhmCRA2S_a7VRDnP_v02z8AUgduV5g&usqp=CAU' alt='' style={imgstyle2}></img><br></br><h3 style={txtsty2} onMouseEnter={big} onMouseLeave={small}>Helping<br></br>₹100</h3></div></button></Link>
            </div>
        </div>
        <hr></hr>

    </div>
  )
}
