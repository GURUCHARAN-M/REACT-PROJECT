import React from "react"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import FrontPage from "./PaymentPage/FrontPage/FrontPage"
import Login from "./PaymentPage/LoginPage/Login"
import Contact from "./PaymentPage/Contact/contact"
export default function App()
{
  return(
      // <BrowserRouter>
      //       <Routes>
      //           <Route path="/" element={<FrontPage/>}></Route>
      //           <Route path="/login" element={<Login/>}></Route>
      //           <Route path="/contact" element={<Contact/>}></Route>
      //       </Routes>
      // </BrowserRouter>
      <div><Login/></div>
  )
}
