const Navbar = ({ activeSection, setActiveSection }) => {
  const navItems = ['home', 'about me', 'portfolio'];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50">
      <div className="py-6">
        <div className="flex justify-center items-center space-x-20">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => setActiveSection(item)}
              className={`text-gray-700 hover:text-blue-500 transition-all hover:-translate-y-0.5 hover:animate-nav-slide relative group px-1.5 py-1
                ${activeSection === item ? 'text-blue-500' : ''}`}
            >
              {item}
              <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-blue-500 transform origin-left transition-transform duration-300
                ${activeSection === item ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}>
              </span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;