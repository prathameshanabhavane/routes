import React from 'react'
import Counter from './Counter'

export default function About({count, setCount}) {
  return (
    <div>
      <h1>About</h1>
      <Counter count={count} setCount={setCount}/>
    </div>
  )
}
