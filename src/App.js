
import Expenses from "./components/Expenses";
import Newexp from "./components/Newexp";
import './index.css'
import { useState } from "react";


let dummy_exp=[{
    id:"e1",
    title:"SCHOOL FEE",
    amount:250, 
     date:new Date(2022,5,12)

  },
  {
    id:"e2",
    title:"BOOKS",
    amount:3000, 
     date:new Date(2022,5,14)

  },
  {
    id:"e3",
    title:"HOUSE RENT",
    amount:345, 
     date:new Date(2022,5,18)

  },
  {
    id:"e4",
    title:"FOOD",
    amount:2545, 
     date:new Date(2022,5,24)

  }];

function App(props) {

const [expensitem,setexpensitem]=useState(dummy_exp);
  
  const addexpHandler=(eData)=>{
    const updatedexp=[eData,...expensitem];
setexpensitem(updatedexp)
  };
  return (
    <>
   <Newexp  onAddexp={addexpHandler} />
  <Expenses item={expensitem} />
   </>
  );
}

export default App;
