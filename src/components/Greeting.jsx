import React, { useState } from 'react'
import Output from './Output';

function Greeting() {
  const [changeText,setChangeText] = useState(false)

  const change=(e)=>{
    setChangeText(true);
  }
  return (
    <div>
      <h2>Batata</h2>
      <p>Uia</p>
      {changeText && <Output>texto alterado</Output>}
      {!changeText && <Output>texto normal</Output>}<br></br>
      <button onClick={change}>Click</button>
    </div>
  )
}

export default Greeting