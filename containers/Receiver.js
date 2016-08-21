import React from 'react'
import { connect } from 'react-redux'

let Receiver = ({ dispatch }) => {
  let input

  return (
    <div>
      <form onSubmit={ e => {
        e.preventDefault()
        if (!input.value.trim()) return
         
      }}>
        <input ref={node => {
          input = node
        }} />
        <button type="submit">
          rubitori
        </button>
      </form>
    </div>
  )
}
Receiver = connect()(Receiver)
export default Receiver 
