import React from 'react'

const Heading2 = ({children,classname}) => {
  return (
    <h2 className={`text-2xl md:text-4xl font-bold leading-6 ${classname}`}>{children}</h2>
  )
}

export default Heading2