export default function App() {
  return (
    <div className='containe'>
      <Header />
      <DisplayExpression />
      <Keyborder />
    </div>
  )
}

function Header() {
  return <h1>Tax - Calculator - Montreal</h1>
}

function DisplayExpression() {
  return (
    <div className='display'>
      <p> hello</p>
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

function Keyborder() {
  const operators = ['+', '-', '*', '/']
  return (
    <>
      <div className='bottons'>
        <div className='btn main-operators'>
          <input type='button' value='AC' />
          <input type='button' value='+/-' />
          <input type='button' value='1.5' />
          <input type='button' value='%' />
        </div>
        <div className='btn numbers-operators'>
          {Array.from({ length: 10 }, (_, i) => 9 - i).map((i) => (
            <input type='button' value={i} key={i} />
          ))}
          <input type='button' value='.' />
          <input type='button' value='=' />
        </div>
        <div className='btn op-operators'>
          {operators.map((op, index) => (
            <input type='button' value={op} key={index} />
          ))}
        </div>
      </div>
    </>
  )
}
