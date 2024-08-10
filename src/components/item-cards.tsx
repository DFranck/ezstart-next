// src/components/item-cards.tsx

import { Card, CardContent, CardTitle } from './ui/card';

interface ItemCardProps {
  title: string;
  description: string;
}

const ItemCards = ({ title, description }: ItemCardProps) => {
  return (
    <Card className="h-full">
      <CardTitle>{title}</CardTitle>
      <CardContent>{description}</CardContent>
    </Card>
  );
};

export default ItemCards;
