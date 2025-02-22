import React from 'react';
import { Calendar, Bell, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const quickLinks = [
  { icon: Calendar, text: 'Upcoming Events', count: '3 new' },
  { icon: Bell, text: 'Notifications', count: '5' },
  { icon: Users, text: 'Community', count: '2 active' }
];

const Header: React.FC = () => {
  return (
    <header className="bg-[#603763] shadow-sm sticky top-0 z-20">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 h-24 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link to="/">
            <img src='https://www.aberdeencity.gov.uk/sites/default/files/Favicon.png' className='h-20'/>
          </Link>
        </div>
        
        <div className="flex items-center space-x-6 text-white">
          {quickLinks.map((link) => (
            <div key={link.text} className="flex items-center space-x-2 hover:text-purple-300 cursor-pointer">
              <link.icon size={20} className="text-white" />
              <span className="hidden md:inline">{link.text}</span>
              {link.count && (
                <span className="bg-purple-100 text-purple-600 text-xs px-2 py-1 rounded-full">
                  {link.count}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;