import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';
import Card from '../atoms/Card';

interface CategoryLink {
  text: string;
  url: string;
}

interface CategoryCardProps {
  title: string;
  icon: LucideIcon;
  description: string;
  links: CategoryLink[];
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  title,
  icon: Icon,
  description,
  links,
}) => {
  return (
    <Card>
      <div className="flex items-center space-x-3 mb-3">
        <div className="p-2 bg-purple-50 rounded-lg">
          <Icon className="w-6 h-6 text-purple-600" />
        </div>
        <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
      </div>
      <p className="text-gray-600 text-sm mb-4">{description}</p>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.text}>
            <a
              href={link.url}
              className="text-gray-600 hover:text-purple-600 transition-colors block py-1 flex items-center"
            >
              <span className="w-1 h-1 bg-purple-600 rounded-full mr-2"></span>
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default CategoryCard;