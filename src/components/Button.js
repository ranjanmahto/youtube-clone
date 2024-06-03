import React from 'react'

const Button = ({name}) => {
  return (
     <button className="bg-gray-200 px-4 py-2 mx-2 rounded-lg">
        {name}
     </button>
  )
}

export default Button