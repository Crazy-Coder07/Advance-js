import React from 'react'

/*
 & Asunchronous means it will not start line by line or it not wait for others
 *
 */
const Async = () => {
    const fun1=()=>{
        setTimeout(()=>{
            console.log("fun1 is starting")
        },3000)
      }
    
      const fun2=()=>{
        console.log("fun2 is starting")
        fun1()
        console.log("fun2 is ending")
      }
      
      fun2()
  return (
    <>
      <h1>HEllo This is Asynchronous Js</h1>
    </>
  )
}

export default Async
