import React from 'react'

const Error = ({ message }) => {
  return (
    <div className="ui error message">
      <div className="header">Error</div>
      <p>{message}</p>
    </div>
  )
}

export default Error
