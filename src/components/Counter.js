import React from 'react'


const Counter = (props) => {
  return(
    <>
      <div id='counter'>
        {props.trys}
      </div>
      <h1 id='trys'>Trys left</h1>
    </>
  )
}

export default Counter