import React from 'react'
import './style.css'

const Header=(props)=> {
    return (
        <>
        <div className='heading'>
            Finding Falcon
        </div>
        
        <div className='headContent'>
            <br/>
            <span>King Shan , Queen has been exiled.Lets find her to continue your legacy</span>
         <br/>   <span>As we know we have limited resources.Choose place to find her: </span>
         <section>
             Your token no is :{props.token}
         </section>
            </div></>
    )
}

export default Header
