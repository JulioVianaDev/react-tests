import React, { useState } from 'react'

function Greeting() {
  const [changeText,setChangeText] = useState(false)

  const change=(e)=>{
    setChangeText(true);
  }
  return (
    <div>
      <h2>Batata</h2>
      <p>Uia</p>
      {changeText && <p>texto alterado</p>}
      {!changeText && <p>texto normal</p>}<br></br>
      <button onClick={change}>Click</button>
    </div>
  )
}

export default Greeting