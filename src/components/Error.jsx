
const Error = ({children}) => {
  return (
    <div className="my-4 p-2 rounded-lg border-l-4 border-red-600 bg-red-100 text-red-500 font-bold uppercase">
      {children}
    </div>
  )
}

export default Error