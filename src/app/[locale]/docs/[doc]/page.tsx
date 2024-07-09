"use client";
import { useParams } from "next/navigation";

const DynamicPageContent = () => {
  const { dynamicPage } = useParams();

  return (
    <div>
      <h1>{dynamicPage} Content</h1>
      {/* Ajoutez d'autres conditions pour d'autres pages dynamiques */}
    </div>
  );
};

export default DynamicPageContent;
