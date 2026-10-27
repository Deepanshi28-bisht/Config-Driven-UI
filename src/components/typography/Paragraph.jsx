
const Paragraph = ({children,classname}) => {
  return (
  <p className={`text-base text-[#000] opacity-75 ${classname}`}>{children}</p>
  )
}

export default Paragraph