import React from 'react'

const Heading4 = ({children,classname}) => {
  return (
    <h4 className={`text-xl font-medium leading-6 ${classname}`}>{children}</h4>
  )
}

export default Heading4