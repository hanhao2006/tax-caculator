import { useState } from 'react'

export default function App() {
  const [expression, setExpression] = useState('')
  const [result, setResult] = useState('')

  function onCliked(button) {
    if (button === '=') {
      calculate()
      clear()
    } else if (button === 'AC') {
      clear()
    } else if (button === '<') {
      remove()
    } else {
      setExpression(expression + button)
    }
  }

  function calculate() {
    let checkResult = ''
    checkResult = expression
    try {
      setResult(eval((checkResult || '') + ''))
    } catch (e) {
      setResult('Error')
    }
  }

  function clear() {
    setExpression('')
  }

  function remove() {
    setExpression(expression.slice(0, -1))
  }

  return (
    <div className='containe'>
      <Header />
      <DisplayExpression expression={expression} result={result} />
      <Keyborder onCliked={onCliked} />
    </div>
  )
}

function Header() {
  return <h1>Tax - Calculator - Montreal</h1>
}

function DisplayExpression({ expression, result }) {
  return (
    <div className='display'>
      <p>{expression}</p>
      <DisplayResult result={result} />
    </div>
  )
}

function DisplayResult({ result }) {
  return (
    <>
      <p>{result}</p>
    </>
  )
}

function Keyborder({ onCliked }) {
  const operators = ['+', '-', '*', '/']
  return (
    <>
      <form className='bottons'>
        <div className='btn main-operators'>
          <input
            type='button'
            value='AC'
            onClick={(e) => onCliked(e.target.value)}
          />
          <input
            type='button'
            value='+/-'
            onClick={(e) => onCliked(e.target.value)}
            disabled
          />
          <input
            type='button'
            value='1.5'
            onClick={(e) => onCliked(e.target.value)}
          />
          <input
            type='button'
            value='<'
            onClick={(e) => onCliked(e.target.value)}
          />
        </div>
        <div className='btn numbers-operators'>
          {Array.from({ length: 10 }, (_, i) => 9 - i).map((i) => (
            <input
              type='button'
              value={i}
              key={i}
              onClick={(e) => onCliked(e.target.value)}
            />
          ))}
          <input
            type='button'
            value='.'
            onClick={(e) => onCliked(e.target.value)}
          />
          <input
            type='button'
            value='='
            onClick={(e) => onCliked(e.target.value)}
          />
        </div>
        <div className='btn op-operators'>
          {operators.map((op, index) => (
            <input
              type='button'
              value={op}
              key={index}
              onClick={(e) => onCliked(e.target.value)}
            />
          ))}
        </div>
      </form>
    </>
  )
}
