import React from 'react'
import { useHistory } from 'react-router-dom'

function A() {
    const history=useHistory();
    function next(){
        history.push("/B")
    }
  return (
    <div>PRogram A
        <button onClick={next}> clicl</button>
    </div>
  )
}

export default A