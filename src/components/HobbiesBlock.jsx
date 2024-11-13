import TerminalHeader from './TerminalHeader'

const HobbiesBlock = () => {
  return (
    <div className="overflow-hidden rounded-lg shadow-lg">
      <TerminalHeader />
      <div className="bg-gray-800 p-8 font-mono">
        <p className="text-green-400 mb-6">johnsmith $ cd hobbies/interests</p>
        <ul className="text-gray-300 space-y-3">
          <li>📚 Reading technical blogs and books</li>
          <li>🎮 Gaming in my free time</li>
          <li>🏃‍♂️ Running and staying active</li>
          <li>🎸 Learning to play guitar</li>
        </ul>
      </div>
    </div>
  )
}

export default HobbiesBlock