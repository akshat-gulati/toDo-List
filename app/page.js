"use client"
import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")

  const submitHandler = ()=>{
    console.log("hahahahah")
  }
  return (
    <>
    <h1 className='bg-black text-white p-5 text-5xl font-bold text-center'>
      Akshat's ToDo List
      </h1>
    <form onSubmit={submitHandler}>
      <input 
      type="text"
      className='text 2xl: border-zinc-800 border-4 m-8 px-4 py-2'
      placeholder="Enter Title here: "
      value={title}
      onChange={(e)=>{
        settitle(e.target.value)
      }}
      />
      <input 
      type="text"
       className='text 2xl: border-zinc-800 border-4 m-8 px-4 py-2'
      placeholder="Enter description here: "
      value={desc}
      onChange={(e)=>{setdesc(e.target.value)}}
      />
      <button className='bg-black text-white px-4 py-2 text-2xl font-bold rounded m-5'>Add Task</button>
      
    </form>
    </>
  )
}

export default page