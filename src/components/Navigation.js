import React from 'react'
import './Styling/Navigation.css'

const title = "Nav Bar"

const navItems = 
[   "DASHBOARD",
    "WIDGET",
    "REVIEWS",
    "CUSTOMERS",
    "ONLINE ANALYSIS",
    "SETTINGS"
]

const Navigation = ()=>{
   
        return(
            <div className="Navigation" >
                 {title}
                 <ul>
{
    navItems.map((item)=>{
        return(
            <li key={item}>{item} </li>
        )
    })
}


                 </ul>
    </div>
)}




export default Navigation