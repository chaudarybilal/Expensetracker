import React from 'react'
import './Expdate.css'

const Expdate = (props) => {
    const month=props.date.toLocaleString('en-us',  {month:"long"});
const year=props.date.getFullYear();
const day=props.date.toLocaleString('en-us',  {day:"2-digit"});

  return (
    <div className='sec'>
          <div>{ month }</div>
       <div>{ year }</div>
       <div>{ day }</div>
       
    </div>
  )
}

export default Expdate