import React from 'react'
import { useState } from 'react'
import Showtodo from './Showtodo'

export default function Todo() {
    const [task, setTask] = useState("Add some taks")
    const [data, setData] = useState([])

    const onchangeHandler=(e)=>{
        // console.log(event.target.value);
        setTask(e.target.value)
    }

    const handleSubmit=(event)=>{
        event.preventDefault();
        // console.log("submit")
        const newData = task;
        setData([...data, newData])  // isme purane wale data ko banaye rakhne ke lie ...data likha 
        setTask('') // isse bad me input black ho jata hai
    }

    const deletItem=(a)=>{
        // console.log("delete")
        const finalData = data.filter((currEle, index)=>{
            return index !=a
        })
        setData(finalData)
    }

  return (
    <div>

    <form onSubmit={handleSubmit}>


        <input type="text" name="" id="" value={task} onChange={onchangeHandler} />
        <button type='submit' >Add todo</button>
    </form>

    {

        data.map((item, index)=>{
        return(
            <Showtodo
            key={index}
            id={index}
            mytask ={item}
            onSelect = {deletItem}
            
            />
        )
        })

    }


    </div>
  )
}
