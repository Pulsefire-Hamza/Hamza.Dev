import logo from "../assets/logo.png";
import { FaLinkedin, FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex flex-col md:flex-row items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img
          className="mx-2 w-48 md:w-60 lg:w-72 xl:w-80 max-w-full"
          src={logo}
          alt="logo"
        />
      </div>
      <div className="m-8 flex items-center justify-center gap-6 text-2xl">
        <a
          href="https://www.linkedin.com/in/hamza-tariq-3960b5293/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 hover:text-blue-500" // LinkedIn color
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.facebook.com/humza.tariq.372/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-400" // Facebook color
        >
          <FaFacebook />
        </a>
        <a
          href="https://github.com/Pulsefire-Hamza"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 hover:text-gray-600" // GitHub color
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/humzatariq279/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-600 hover:text-pink-400" // Instagram color
        >
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
