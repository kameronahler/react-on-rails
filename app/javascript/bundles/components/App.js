import React, { useState } from 'react'
import TestStateful from './TestStateful'
import TestStateless from './TestStateless'

const App = props => {
  const [name, setName] = useState(props.name)

  const handleInputChange = e => {
    setName(e.target.value)
  }

  return (
    <div>
      <h3>Hello, {name}!</h3>
      <hr />
      <form>
        <label htmlFor='name'>
          Say hello to:
          <input
            id='name'
            type='text'
            value={name}
            onChange={e => handleInputChange(e)}
          />
        </label>
      </form>
      <TestStateless />
      <TestStateful />
    </div>
  )
}
export default App
