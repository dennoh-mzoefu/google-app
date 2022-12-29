import React from "react";

function Footer() {
  return (
    <div>
      <footer className="bg-gray-500 text-white py-5">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/2 text-center md:text-left py-6">
              <p className="mb-4">Copyright &copy; 2021 Your Company</p>
            </div>
            <div className="w-full md:w-1/2 text-center md:text-right py-6">
              <a href="#" className="inline-block mr-4 hover:text-gray-400">
                Contact
              </a>
              <a href="#" className="inline-block mr-4 hover:text-gray-400">
                Privacy Policy
              </a>
              <a href="#" className="inline-block hover:text-gray-400">
                Terms of Use
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
