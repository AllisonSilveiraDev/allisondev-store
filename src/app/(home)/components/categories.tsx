import { prismaClient } from "@/lib/prisma";
import CategoryNavigation from "./category-navigation";

const Categories = async () => {
  const categories = await prismaClient.category.findMany({});

  return (
    <div className="grid grid-cols-2  gap-x-4 gap-y-2">
      {categories.map((category) => (
        <CategoryNavigation key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Categories;
