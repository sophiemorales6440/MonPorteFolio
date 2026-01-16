import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Socials() {
  return (
    <div className="flex justify-center gap-4 text-2xl">
      <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </a>
      <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
      </a>
      <Link to="/contact">
        <FaEnvelope />
      </Link>
    </div>
  );
}