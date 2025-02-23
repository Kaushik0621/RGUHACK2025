import React from 'react';
import { Home, Truck, Book, Building2, Ban as Bank, Library, Palmtree, Recycle, FileText } from 'lucide-react';
import CategoryCard from '../components/molecules/CategoryCard';

const categories = [
  { 
    title: 'Help with cost of living',
    icon: Home,
    description: 'Access financial support and advice for managing living costs',
    links: [
      { text: 'Get benefits and money advice', url: 'https://www.aberdeencity.gov.uk/services/benefits-and-advice/get-benefits-and-money-advice' },
      { text: 'Council Tax discounts', url: 'https://www.aberdeencity.gov.uk/link/all-council-tax-discounts-and-exemptions' },
      { text: 'Emergency food collection', url: 'https://www.aberdeencity.gov.uk/services/housing/homelessness/times-and-places-collect-emergency-food' }
    ]
  },
  {
    title: 'Council Tax',
    icon: Bank,
    description: 'Manage your Council Tax payments and documentation',
    links: [
      { text: 'Pay Council Tax', url: 'https://www.aberdeencity.gov.uk/services/council-tax/pay-your-council-tax' },
      { text: 'Change address', url: 'https://www.aberdeencity.gov.uk/services/council-tax/change-your-address' },
      { text: 'Paperless billing', url: 'https://www.aberdeencity.gov.uk/services/council-tax/sign-council-tax-paperless-billing' }
    ]
  },
  {
    title: 'Bins, Waste and Recycling',
    icon: Recycle,
    description: 'Manage your waste and recycling needs',
    links: [
      { text: 'Check bin collection days', url: 'https://www.aberdeencity.gov.uk/services/bins-waste-and-recycling/check-bin-collection-days' },
      { text: 'Garden waste permits', url: 'https://www.aberdeencity.gov.uk/services/bins-waste-and-recycling/garden-waste-permits' },
      { text: 'Mixed recycling bin', url: 'https://www.aberdeencity.gov.uk/services/bins-waste-and-recycling/what-goes-each-bin/mixed-recycling-bin' }
    ]
  },
  {
    title: 'Housing',
    icon: Building2,
    description: 'Find and manage your housing needs',
    links: [
      { text: 'Pay rent', url: 'https://www.aberdeencity.gov.uk/link/pay-your-rent' },
      { text: 'Request repairs', url: 'https://www.aberdeencity.gov.uk/services/housing/request-council-house-repair' },
      { text: 'Find a home', url: 'https://www.aberdeencity.gov.uk/link/find-home' }
    ]
  },
  {
    title: 'Education and Childcare',
    icon: Book,
    description: 'Find and manage your education and childcare needs',
    links: [
      { text: 'View school term and holiday dates', url: 'https://www.aberdeencity.gov.uk/services/education-and-childcare/view-school-term-and-holiday-dates' },
      { text: 'Apply for a school place', url: 'https://www.aberdeencity.gov.uk/services/education-and-childcare/apply-school-place' },
      { text: 'Find a school', url: 'https://www.aberdeencity.gov.uk/services/education-and-childcare/find-school' }
    ]
  },
  {
    title: 'Planning and Building Standards',
    icon: FileText,
    description: 'Access local transport information and services',
    links: [
      { text: 'Road closures', url: 'https://www.aberdeencity.gov.uk/services/planning-and-building-standards/planning-applications/apply-planning-permission' },
      { text: 'Parking permits', url: 'https://www.aberdeencity.gov.uk/services/planning-and-building-standards/building-standards/apply-building-warrant' },
      { text: 'Bus timetables', url: 'https://www.aberdeencity.gov.uk/link/view-planning-applications' }
    ]
  },
  {
    title: 'Transport',
    icon: Truck,
    description: 'Access local transport information and services',
    links: [
      { text: 'Road closures', url: '/blogs/road-closures' },
      { text: 'Parking permits', url: '/blogs/parking-permits' },
      { text: 'Bus timetables', url: '/blogs/bus-timetables' }
    ]
  },
  {
    title: 'Libraries',
    icon: Library,
    description: 'Explore local library services and resources',
    links: [
      { text: 'Renew loans', url: '/blogs/renew-loans' },
      { text: 'Reserve books', url: '/blogs/reserve-books' },
      { text: 'Find local library', url: '/blogs/find-local-library' }
    ]
  },
  {
    title: 'Leisure',
    icon: Palmtree,
    description: 'Discover local activities and entertainment',
    links: [
      { text: 'Sports facilities', url: '/blogs/sports-facilities' },
      { text: 'Events', url: '/blogs/events' },
      { text: 'Parks', url: '/blogs/parks' }
    ]
  }
];

const HomePage: React.FC = () => {
  return (
    <main className="flex-1 pr-[45rem]">
      <div className="mb-8">
        <img src="https://www.aberdeencity.gov.uk/sites/default/files/2018-06/web_banner.png" alt="CityHub Banner" className="rounded-xl" />
      </div>

      {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {stats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div> */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <CategoryCard key={category.title} {...category} />
        ))}
      </div>
    </main>
  );
};

export default HomePage;