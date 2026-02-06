import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-navy py-8 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-400 text-sm flex items-center gap-2">
            Built with <Heart className="w-4 h-4 text-accent fill-accent" /> using Flutter & React
          </div>
          
          <div className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Muhammad Soban. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
