
const TerminalHeader = () => {
  return (
    <div className="bg-gray-700 rounded-t-lg p-2 flex items-center">
      <div className="flex space-x-2">
        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
      </div>
    </div>
  )
}

export default TerminalHeader