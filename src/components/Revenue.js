import React from 'react'
import { useState } from 'react'
import './Styling/Revenue.css'
const title = "Current Stock Value "
//import CurrencyFormat from 'react-currency-format'

const Revenue = ()=>{

   const [randomNum, setRandomNum]= useState(0)

   const handleRandomNum=()=>{
       setRandomNum(new Intl.NumberFormat('en-US',{
        currency: 'USD',
        style: 'currency'
    }).format(Math.floor(Math.random()*(100000 - 500000 +1)) + 500000)
    )
           
       
   }

   
   return(
            <div className='Revenue'>
              
                 {title}
  
    <div className='RevStats'>

    {randomNum}
    
    <br></br>

        <button onClick={handleRandomNum}>Click to refresh value</button> 
       

        
        

    
    </div>  </div>
)}




export default Revenue