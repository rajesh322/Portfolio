const TerminalHeader = () => (
  <div className="flex items-center p-3 bg-gray-800 rounded-t-lg border-b border-gray-700">
    <div className="flex space-x-2">
      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
    </div>
  </div>
);

const AboutBlock = () => (
  <div className="terminal-block bg-gray-700">
    <TerminalHeader />
    <div className="p-6 font-mono text-sm">
      <p className="text-green-500">johnsmith $ cat aboutjohn</p>
      <p className="text-gray-300 mt-2">
        Hellyo! I'm John. I'm a systems engineer passionate about building scalable solutions
        and exploring new technologies. With over 5 years of experience in software development,
        I specialize in creating robust applications that solve real-world problems.
      </p>
    </div>
  </div>
);

const SkillsBlock = () => (
  <div className="terminal-block bg-gray-700">
    <TerminalHeader />
    <div className="p-6 font-mono text-sm">
      <p className="text-green-500">johnsmith $ cd skills/tools</p>
      <p className="text-green-500">skills/tools (main) $ ls</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
        <div>
          <p className="text-purple-400">Proficient With:</p>
          <ul className="text-gray-300 ml-4">
            <li>JavaScript/TypeScript</li>
            <li>React</li>
            <li>Node.js</li>
            <li>Python</li>
          </ul>
        </div>
        <div>
          <p className="text-purple-400">Exposed To:</p>
          <ul className="text-gray-300 ml-4">
            <li>Docker</li>
            <li>AWS</li>
            <li>GraphQL</li>
            <li>Rust</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

const HobbiesBlock = () => (
  <div className="terminal-block bg-gray-700">
    <TerminalHeader />
    <div className="p-6 font-mono text-sm">
      <p className="text-green-500">johnsmith $ cd hobbies/interests</p>
      <ul className="text-gray-300 space-y-2 mt-2">
        <li>📚 Reading tech blogs and sci-fi novels</li>
        <li>🎮 Gaming and game development</li>
        <li>🏃‍♂️ Running and hiking</li>
        <li>🎸 Playing guitar</li>
      </ul>
    </div>
  </div>
);

function AboutMe() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-6 sm:px-16 md:px-24 lg:px-32 py-12">
        <div className="w-full max-w-4xl mx-auto space-y-8">
          <style jsx>{`
            .terminal-block {
              @apply rounded-lg shadow-lg overflow-hidden transition-transform hover:transform hover:scale-[1.02];
            }
          `}</style>
          <AboutBlock />
          <SkillsBlock />
          <HobbiesBlock />
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
