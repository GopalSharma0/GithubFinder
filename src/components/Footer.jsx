import React from "react";


function Footer() {
  return (
    <footer className="bg-teal-500 text-white py-6 mt-10">
      <div className="container mx-auto text-center">
        {/* Developer Information */}
        <h2 className="text-lg font-semibold">Developed by Gopal Sharma</h2>
        <p className="text-sm mt-2">
          Passionate Full-Stack Developer | Software Developer Enthusiast
        </p>
        <p className="text-sm mt-2">
          Connect with me: 
          <a href="https://www.linkedin.com/in/gopal-sharma-a53832196/" className="underline ml-1">
            LinkedIn
          </a> | 
          <a href="https://github.com/GopalSharma0" className="underline ml-1">
            GitHub
          </a> |
          <a href="https://www.instagram.com/_sharma.gopal_/" className="underline ml-1">
            Instagram
          </a>
        </p>

        {/* Other Important Links */}
        <div className="mt-4">
          <a href="/" className="text-sm underline mx-2">
            Privacy Policy
          </a>
          <a href="/" className="text-sm underline mx-2">
            Terms of Service
          </a>
        </div>

        {/* Copyright Information */}
        <div className="mt-4">
          <p className="text-xs">
            &copy; {new Date().getFullYear()} Copyright &copy; 2024 All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
