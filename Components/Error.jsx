import React from 'react'
import { useRouteError } from 'react-router-dom'

const Error = () => {
    const error = useRouteError();
  return (
    <div>
      Something Went Wrong
    </div>
  )
}

export default Error
