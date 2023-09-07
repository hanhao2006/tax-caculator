import { useState } from 'react'

export default function App() {
  // For all the keys
  const [operator, setOperator] = useState('')

  // For button AC
  const [ac, setAc] = useState(false)

  // set Operator valuable from KeyBorders Child
  function handleOperator(value) {
    ac ? setOperator('') : setOperator((op) => [...op, value])
    setAc(false)
  }
  // if the AC button click
  function handleAC() {
    setAc(!ac)
  }

  return (
    <div className='containe'>
      <Header />
      <DisplayExpression operator={operator} />
      <Keyborder onOperator={handleOperator} onAC={handleAC} />
    </div>
  )
}

function Header() {
  return <h1>Tax - Calculator - Montreal</h1>
}

function DisplayExpression({ operator }) {
  return (
    <div className='display'>
      <p>{operator}</p>
      <DisplayResult />
    </div>
  )
}

function DisplayResult() {
  return (
    <>
      <p> hello</p>
    </>
  )
}

function Keyborder({ onOperator, onAC }) {
  const operators = ['+', '-', '*', '/']
  const [keyBorder, setKeyBorder] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    onOperator(keyBorder)
  }
  return (
    <>
      <form className='bottons' onSubmit={handleSubmit}>
        <div className='btn main-operators'>
          <input type='submit' value='AC' onClick={onAC} />
          <input
            type='submit'
            value='+/-'
            onClick={(e) => setKeyBorder(e.target.value)}
          />
          <input
            type='submit'
            value='1.5'
            onClick={(e) => setKeyBorder(e.target.value)}
          />
          <input type='submit' value='<' disabled />
        </div>
        <div className='btn numbers-operators'>
          {Array.from({ length: 10 }, (_, i) => 9 - i).map((i) => (
            <input
              type='submit'
              value={i}
              key={i}
              onClick={(e) => setKeyBorder(e.target.value)}
            />
          ))}
          <input
            type='submit'
            value='.'
            onClick={(e) => setKeyBorder(e.target.value)}
          />
          <input
            type='submit'
            value='='
            onClick={(e) => setKeyBorder(e.target.value)}
          />
        </div>
        <div className='btn op-operators'>
          {operators.map((op, index) => (
            <input
              type='submit'
              value={op}
              key={index}
              onClick={(e) => setKeyBorder(e.target.value)}
            />
          ))}
        </div>
      </form>
    </>
  )
}
