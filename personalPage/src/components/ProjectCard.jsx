import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ project }) => {
  const { title, description, liveDemo, sourceCode, desktopPreview, mobilePreview } = project;

  return (
    <div className=" rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:-translate-y-1 hover:shadow-xl border ">
      <div className="relative group">
        {/* Desktop Preview */}
        <img 
          src={desktopPreview} 
          alt={`${title} desktop preview`}
          className="w-full h-48 object-cover"
        />
        {/* Mobile Preview Overlay */}
        <div className="absolute bottom-4 right-4 w-16 h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <img 
            src={mobilePreview} 
            alt={`${title} mobile preview`}
            className="w-full h-full object-cover rounded-lg shadow-md"
          />
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        
        <div className="flex space-x-4">
          <a
            href={liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          >
            <FaExternalLinkAlt />
            <span>Live Demo</span>
          </a>
          <a
            href={sourceCode}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-900 transition"
          >
            <FaGithub />
            <span>Source</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;