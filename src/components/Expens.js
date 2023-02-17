import React from 'react'
import Expdate from './Expdate'
import "./Expens.css"
import { useState } from 'react'




const Expens = (props) => {



  return (
    <>
      
  <div className='exp'>
         <div className='exp-date'>
      
     
          <Expdate date={props.date}/>
        </div>
    
     <div className='exp-type'>
        <h2> { props.title }</h2>
     </div>
   <div className='exp-amount'>${ props.price }</div>
 
 </div>

    </>
  )
}

export default Expens