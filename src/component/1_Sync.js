import React from 'react'

/*
 * Synchronous means execution start line by line
 *
 */
const Sync = () => {

  const fun1=()=>{
    console.log("fun1 is starting")
  }

  const fun2=()=>{
    console.log("fun2 is starting")
    fun1()
    console.log("fun2 is ending")
  }
  
  fun2()

  return (
    <>
      <h1>Hii This is Synchronous Javascript</h1>
    </>
  )
}

export default Sync
