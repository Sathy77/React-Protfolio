import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { MdFacebook } from "react-icons/md";

const FacebookLogo = () => {
    const facebookUrl = "https://www.facebook.com/sthy754"; // Replace with your Facebook page URL
  
    return (
      <a 
        href={facebookUrl} 
        target="_blank" // Opens the link in a new tab
        rel="noopener noreferrer" // Security best practice for opening new tabs
        className="flex items-center" // Optional: Tailwind CSS for alignment
      >
        <MdFacebook className="social-btn" /> {/* Customize your icon */}
      </a>
    );
  };

  const InstagramLogo = () => {
    const InstagramUrl = "https://www.instagram.com/sathy_vai/"; // Replace with your Facebook page URL
  
    return (
      <a 
        href={InstagramUrl} 
        target="_blank" // Opens the link in a new tab
        rel="noopener noreferrer" // Security best practice for opening new tabs
        className="flex items-center" // Optional: Tailwind CSS for alignment
      >
        <AiFillLinkedin className="social-btn" /> {/* Customize your icon */}
      </a>
    );
  };

  const GithubLogo = () => {
    const GithubUrl = "https://github.com/Sathy77"; // Replace with your Facebook page URL
  
    return (
      <a 
        href={GithubUrl} 
        target="_blank" // Opens the link in a new tab
        rel="noopener noreferrer" // Security best practice for opening new tabs
        className="flex items-center" // Optional: Tailwind CSS for alignment
      >
        <AiFillGithub className="social-btn" /> {/* Customize your icon */}
      </a>
    );
  };

  const LinkedinLogo = () => {
    const LinkedinUrl = "https://www.linkedin.com/in/sathy-akter-6279ab247/"; // Replace with your Facebook page URL
  
    return (
      <a 
        href={LinkedinUrl} 
        target="_blank" // Opens the link in a new tab
        rel="noopener noreferrer" // Security best practice for opening new tabs
        className="flex items-center" // Optional: Tailwind CSS for alignment
      >
        <AiFillInstagram className="social-btn" /> {/* Customize your icon */}
      </a>
    );
  };

  const LogoLink = () => {
    return (
      <div>
        {/* Social Links */}
        <div className="flex space-x-4 mt-10">
        
        <FacebookLogo className="social-btn" /> {/* Customize your icon */}
        <InstagramLogo className="social-btn" />
        <GithubLogo className="social-btn" />
        <LinkedinLogo className="social-btn" />
        </div>
        {/* Button Links */}
        <div className="flex space-x-4 mt-4">
        <a href="src/assets/Resume-v1.pdf" className="primary-btn"
        target="_blank">
            Download Resume
        </a>
        <a href="src/assets/sathy - V7.pdf" className="outline-btn"
        target="_blank">
            Download CV
        </a>
        </div>
    </div>
    

    );
  };

export default LogoLink;