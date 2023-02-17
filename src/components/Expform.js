import React from 'react'
import { useState } from 'react'
import './Expform.css'

const Expform = (props) => {

    const[enterTitle,setnewTitle]=useState()
    const[enterAmount,setnewAmount]=useState()
    const[enterDate,setnewDate]=useState()

const ontitlechangeHandler=(event)=>{
    setnewTitle(event.target.value)
};
const onamountchangeHandler=(event)=>{
    setnewAmount(event.target.value)
};
const ondatechangeHandler=(event)=>{
    setnewDate (event.target.value)
};

const clickeHandlre=(event)=>{
   event.preventDefault();  
   const expData={
    title:enterTitle,
    amount:enterAmount,
    date:new Date(enterDate)
   }

   props.onsaveexp(expData);
   console.log(expData)
   setnewTitle(" ")
   setnewAmount("")
   setnewDate(" ")
};

  return (
    <form onSubmit={clickeHandlre}>
    <div className='new-exp-controls'>
    <div className='new-exp-control'>
        <label>Titile</label>
        <input type='text' value={enterTitle} onChange={ontitlechangeHandler} />
    </div>
    <div className='new-exp-control'>
        <label>Amount</label>
        <input type='number' min="0.01" step="0.01" value={enterAmount} onChange={onamountchangeHandler}/>
    </div>
    <div className='new-exp-control'>
        <label>Date</label>

        <input type='date' value={enterDate} onChange={ondatechangeHandler}/>
    </div>
    </div>
    <div className='new-exp-action'>
        <button type='submit'  >Add Expens</button>
    </div>
</form>
  )
}

export default Expform
