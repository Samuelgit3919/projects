import { useState } from 'react'
import SingleColor from './SingleColor'
import Values from 'values.js'

function App() {
  const [color, setColor] = useState("")
  const [error, setError] = useState(false)
  const [list, setList] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("hello");
  }


  return (
    <>
      <section className='container'>
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input type="text" value={color} onChange={(e) => (e.target.value)} placeholder='#f15025' />
          <button className="btn" type='submit'>submit</button>
        </form>
      </section>
      <section className='color'>
        List Goes Here
      </section>
    </>
  )
}

export default App
