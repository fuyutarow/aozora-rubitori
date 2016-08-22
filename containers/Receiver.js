import React from 'react'
import { connect } from 'react-redux'
import { urlReceiver } from '../actions'

let Receiver = ({ dispatch }) => {
  let input

  return (
    <div>
      <form onSubmit={ e => {
        e.preventDefault()
        if (!input.value.trim()) return

        dispatch(urlReceiver(input.value))
        input.value = ''
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
