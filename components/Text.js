import React, { PropTypes } from 'react'

const Text = ({ url }) => (
  <div>
    {url}
  </div>
)

Text.propTypes = {
  url: PropTypes.string.isRequired
}
