import TerminalHeader from './TerminalHeader'

const SkillsBlock = () => {
  return (
    <div className="overflow-hidden rounded-lg shadow-lg">
      <TerminalHeader />
      <div className="bg-gray-800 p-8 font-mono">
        <p className="text-green-400 mb-6">johnsmith $ cd skills/tools</p>
        <div className="grid grid-cols-2 gap-x-8">
          <div>
            <h3 className="text-purple-400 font-bold mb-3">Proficient With</h3>
            <ul className="text-gray-300 space-y-2">
              <li>JavaScript</li>
              <li>React</li>
              <li>Node.js</li>
              <li>HTML/CSS</li>
            </ul>
          </div>
          <div>
            <h3 className="text-purple-400 font-bold mb-3">Exposed To</h3>
            <ul className="text-gray-300 space-y-2">
              <li>Python</li>
              <li>Docker</li>
              <li>AWS</li>
              <li>GraphQL</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SkillsBlock