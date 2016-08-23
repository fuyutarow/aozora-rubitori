import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

const Item = ({ url }) => ( 
 <dev>
    {url}
  </dev>
)

Item.propTypes = {
  url: PropTypes.string.isRequired
}

export default Item
