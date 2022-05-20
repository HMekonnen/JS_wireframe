import React from 'react'
import './Styling/Home.css'
import Navigation from './Navigation'
import Header from './Header'
import Revenue from './Revenue'
import Reviews from './Reviews'
import Traffic from './Traffic'
import UserStats from './UserStats'



const welcome = " Welcome to your Super Sitters Analytics Dashboard!"
const Home = ()=>{

    return (
        <div className='Container'>  
            <h4> {welcome} </h4>
<Navigation/>
<Header/>
<Revenue/>
<Reviews/>
<Traffic/>
<UserStats/>
</div>
 
)}

export default Home