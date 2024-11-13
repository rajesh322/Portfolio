import { FaCoffee, FaMapMarkerAlt, FaBriefcase, FaEnvelope } from 'react-icons/fa';
import { FaXTwitter, FaGithub, FaLinkedin } from 'react-icons/fa6';
import profileImage from '../assets/Rajesh.jpg';  // Add this import at the top

const ProfileSection = () => {
  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-center gap-16">
      <div className="relative flex-shrink-0">
        {/* Add outer glow effect */}
        <div className="absolute inset-0 w-72 h-72 md:w-80 md:h-80 rounded-full bg-blue-500/20 blur-xl transform -translate-x-1 translate-y-1"></div>
        
        {/* Profile image container with enhanced shadow */}
        <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full bg-gradient-to-r from-blue-500 to-green-500 p-1.5 animate-gradient bg-[length:200%_200%] ring-4 ring-offset-4 ring-blue-500/30 shadow-[0_0_30px_10px_rgba(59,130,246,0.2)]">
          <img
            src={profileImage}
            alt="Profile"
            className="w-full h-full rounded-full object-cover shadow-inner"
          />
        </div>
      </div>
      
      <div className="flex-1 space-y-10 text-center md:text-left max-w-xl">
        <div className="space-y-4 group">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight group-hover:animate-text-slide transition-all duration-300">
            Hi, I'm <span className="text-blue-500 relative group-hover:text-blue-600">John Smith
              <span className="absolute -right-12 animate-wave">👋</span>
            </span>
          </h1>
          <p className="text-2xl text-gray-600 font-medium group-hover:animate-text-slide transition-all delay-75">
            I'm a Full Stack Developer
          </p>
        </div>

        <div className="space-y-5">
          <p className="flex items-center justify-center md:justify-start gap-3 text-gray-600 hover:text-blue-500 transition-all hover:-translate-y-0.5 hover:animate-text-fade cursor-default">
            <FaCoffee className="text-xl" /> fueled by coffee
          </p>
          <p className="flex items-center justify-center md:justify-start gap-3 text-gray-600 hover:text-blue-500 transition-all hover:-translate-y-0.5 hover:animate-text-fade cursor-default">
            <FaMapMarkerAlt className="text-xl" /> based in the US
          </p>
          <p className="flex items-center justify-center md:justify-start gap-3 text-gray-600 hover:text-blue-500 transition-all hover:-translate-y-0.5 hover:animate-text-fade cursor-default">
            <FaBriefcase className="text-xl" /> Systems Engineer at Google
          </p>
          <p className="flex items-center justify-center md:justify-start gap-3 text-gray-600 hover:text-blue-500 transition-all hover:-translate-y-0.5 hover:animate-text-fade cursor-default">
            <FaEnvelope className="text-xl" /> john@example.com
          </p>
        </div>

        <div className="flex justify-center md:justify-start gap-8 pt-6">
          <a href="#" className="text-gray-600 hover:text-blue-500 transition-all hover:scale-110 hover:-translate-y-1">
            <FaXTwitter size={28} />
          </a>
          <a href="#" className="hover:text-blue-500 transition-colors">
            <FaGithub size={24} />
          </a>
          <a href="#" className="hover:text-blue-500 transition-colors">
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;