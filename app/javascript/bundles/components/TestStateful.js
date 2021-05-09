import React, { useState } from 'react'

export const TestStateful = () => {
  const [count, setCount] = useState(0)

  const handleClick = e => {
    setCount(count + parseInt(e.currentTarget.dataset.increment))
  }

  return (
    <div>
      <button onClick={e => handleClick(e)} data-increment='-1'>
        -
      </button>
      <span>{count}</span>
      <button onClick={e => handleClick(e)} data-increment='1'>
        +
      </button>
    </div>
  )
}

export default TestStateful
