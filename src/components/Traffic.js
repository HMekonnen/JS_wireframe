import React from 'react'
import './Styling/Traffic.css'
const title = "Sentiment Analysis"

const stats =[
     960,
     122,
     321
]

const Traffic = ()=>{
   
        return(
            <div className='Traffic'>
                 {title}

                 <ul>
{
    stats.map((item)=>{
        return(
            <li key={item}>{item} </li>
        )
    })
}


                 </ul>    
             




    </div>
)}




export default Traffic