import React, { useState } from 'react'
import { useReducer } from 'react'

function UseRedecer() {
    const operators = [
        {
         label: "Plus",
         operator: "+"
        },{
         label: "Minus",
         operator: "-"
        },{
         label:"Mul",
         operator:"*"
        },
        {
         label:"Div",
         operator:"/"
        }
     ]
    const reducer = (state,action)=>{
        switch(action.type){
            case "+": return {...state, result: (parseFloat(action.payload.num1) + parseFloat(action.payload.num2)).toFixed(2) }
            case "-":  return {...state, result: (parseFloat(action.payload.num1) - parseFloat(action.payload.num2)).toFixed(2) }
            case "*":  return {...state, result: (parseFloat(action.payload.num1) * parseFloat(action.payload.num2)).toFixed(2) }
            case "/":  return {...state, result: (parseFloat(action.payload.num1) / parseFloat(action.payload.num2)).toFixed(2) }
            default: return state
        }
    }
    const initialState = {
        result: 0
    }
    const [state,dispatch] = useReducer(reducer,initialState);
    const [operator,setOperator] = useState("+")
   const [n1,setN1] = useState("")
   const [n2,setN2] = useState("")
   const handleOnchange = (e)=>{
    setOperator(e.target.value)
}
    const handleCalculate = ()=>{
        dispatch({type: operator, payload:{num1:n1,num2:n2}})
    }
  return (
    <div className='min-h-[500px] w-[400px] mx-auto mt-10 border rounded-2xl flex flex-col items-center justify-center p-4 gap-8'>
    <input onChange={(e)=>{setN1(e.target.value)}} type="text" placeholder='Enter first number' className='p-2 rounded-md min-w-[300px] border-green-500 border'/>
    <input onChange={(e)=>{setN2(e.target.value)}}  type="text" placeholder='Enter second number' className='p-2 rounded-md min-w-[300px] border-green-500 border'/>
    <div className='flex p-2 w-full justify-between'>
        {
            operators.map((item,index)=>(
                <div className='flex gap-2' key={index}>
                    <input type="radio" id={item.label} value={item.operator.toString()} name="operator" onChange={handleOnchange}/>
                    <label htmlFor={item.label}>{item.label}</label>
                </div> 
            ))
        }
    </div>
    <button onClick={()=>{
       handleCalculate()
    }} className='!bg-green-500 block border-green-500 w-[200px]'>Tính</button>
    <div className='font-bold text-2xl'>{state.result}</div>
    </div>
  )
}

export default UseRedecer
