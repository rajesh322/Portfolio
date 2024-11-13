import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import ProjectCard from './ProjectCard';
import weatherAppMock from '../assets/weatherAppMock.png';

const projects = [
  {
    title: "Weather Dashboard",
    description: "Real-time weather application with forecast data, built with React and OpenWeather API",
    liveDemo: "https://weather-dashboard-demo.com",
    sourceCode: "https://github.com/username/weather-dashboard",
    desktopPreview: weatherAppMock,
    mobilePreview: weatherAppMock
  },
  {
    title: "Task Manager Pro",
    description: "Full-stack task management application with authentication and real-time updates",
    liveDemo: "https://task-manager-pro.com",
    sourceCode: "https://github.com/username/task-manager",
    desktopPreview: weatherAppMock,
    mobilePreview: weatherAppMock
  },
  {
    title: "E-Commerce Platform",
    description: "Modern e-commerce solution with cart functionality and payment integration",
    liveDemo: "https://ecommerce-platform-demo.com",
    sourceCode: "https://github.com/username/ecommerce-platform",
    desktopPreview: weatherAppMock,
    mobilePreview: weatherAppMock
  },
  {
    title: "Blog CMS",
    description: "Content management system for blogs with markdown support and user roles",
    liveDemo: "https://blog-cms-demo.com",
    sourceCode: "https://github.com/username/blog-cms",
    desktopPreview: weatherAppMock,
    mobilePreview: weatherAppMock
  }
];

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b ">
      {/* Projects Section */}
      <section className="relative">
        <div className="relative max-w-7xl mx-auto px-4 py-16">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            My Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

const SocialIcon = ({ Icon, href }) => (
  <a 
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-600 hover:text-blue-500 text-2xl transition-colors duration-300"
  >
    <Icon />
  </a>
);

export default Portfolio;