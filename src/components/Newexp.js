import React from 'react'
import Expform from './Expform'
import './Newexp.css'

const Newexp = (props) => {

  const onsaveexpData=(enterexpdata)=>{
    const expData={
      ...enterexpdata,
      id: Math.random().toString()
    }
    props.onAddexp(expData)
    console.log(expData)

  };
  return (
    <>
    <div className='new-exp'>
        
<Expform  onsaveexp={onsaveexpData} />
       
    </div>
    </>
  )
}

export default Newexp