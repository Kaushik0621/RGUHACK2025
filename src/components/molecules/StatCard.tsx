import React from 'react';
import Card from '../atoms/Card';

interface StatCardProps {
  label: string;
  value: string;
  trend: string;
}

const StatCard: React.FC<StatCardProps> = ({ label, value, trend }) => {
  return (
    <Card>
      <p className="text-gray-600 text-sm">{label}</p>
      <p className="text-2xl font-bold text-gray-900">{value}</p>
      <p className="text-purple-600 text-sm">{trend}</p>
    </Card>
  );
};

export default StatCard;