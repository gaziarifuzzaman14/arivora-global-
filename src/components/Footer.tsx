import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0F172A] text-white py-12 mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4 text-[#06B6D4]">Arivora Global</h3>
            <p className="text-gray-300 text-sm">
              Your comprehensive educational hub for knowledge and discovery.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Categories</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><a href="/science" className="hover:text-[#06B6D4] transition">Science</a></li>
              <li><a href="/technology" className="hover:text-[#06B6D4] transition">Technology</a></li>
              <li><a href="/physiology" className="hover:text-[#06B6D4] transition">Physiology</a></li>
              <li><a href="/history" className="hover:text-[#06B6D4] transition">History</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Resources</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><a href="#" className="hover:text-[#06B6D4] transition">About Us</a></li>
              <li><a href="#" className="hover:text-[#06B6D4] transition">Contact</a></li>
              <li><a href="#" className="hover:text-[#06B6D4] transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#06B6D4] transition">Terms of Service</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-[#06B6D4] transition">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#06B6D4] transition">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#06B6D4] transition">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#06B6D4] transition">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="text-center text-gray-300 text-sm">
            <p>&copy; {currentYear} Arivora Global. All rights reserved. | Designed & Developed with ❤️</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;