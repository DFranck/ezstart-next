// src/components/item-cards.tsx

import { Card, CardContent, CardTitle } from "./ui/card";

interface ItemCardProps {
  title: string;
  description: string;
}

const ItemCards = ({ title, description }: ItemCardProps) => {
  return (
    <Card className="bg-card text-card-foreground p-4 rounded border shadow flex flex-col flex-grow">
      <CardTitle className="text-center text-xl font-semibold mb-2">
        {title}
      </CardTitle>
      <CardContent>{description}</CardContent>
    </Card>
  );
};

export default ItemCards;
