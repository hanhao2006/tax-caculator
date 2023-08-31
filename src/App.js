export default function App() {
  return (
    <div>
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
    <div>
      <input type='text' disabled />
      <DisplayResult />
    </div>
  )
}

function DisplayResult() {
  return (
    <>
      <input type='text' disabled />
    </>
  )
}

function Keyborder() {
  const operators = ['+', '-', '*', '%', '=']
  return (
    <div>
      <div>
        <input type='button' value='AC' />
        <input type='button' value='+/-' />
        <input type='button' value='1.5' />
      </div>
      <div>
        {Array.from({ length: 10 }, (_, i) => 9 - i).map((i) => (
          <input type='button' value={i} key={i} />
        ))}
      </div>
      <div>
        {operators.map((op, index) => (
          <input type='button' value={op} key={index} />
        ))}
      </div>
    </div>
  )
}
