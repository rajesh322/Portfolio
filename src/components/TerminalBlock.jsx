
const TerminalBlock = ({ title, children }) => {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
      <div className="bg-gray-700 px-4 py-2 flex items-center">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="ml-4 text-gray-300 text-sm">{title}</div>
      </div>
      <div className="p-8 font-mono">
        {children}
      </div>
    </div>
  )
}

export default TerminalBlock