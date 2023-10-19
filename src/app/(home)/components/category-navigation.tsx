import { Badge } from "@/components/ui/badge";
import { CATEGORY_ICON } from "@/constants/category-item";
import { Category } from "@prisma/client";
import Link from "next/link";

interface CategoryItemProps {
  category: Category;
}

const CategoryNavigation = ({ category }: CategoryItemProps) => {
  return (
    <Link href={`/category/${category.slug}`}>
      <Badge
        variant="outline"
        className="flex items-center justify-center rounded-lg py-3"
      >
        {CATEGORY_ICON[category.slug as keyof typeof CATEGORY_ICON]}
        <span className="ml-2 text-xs font-semibold">{category.name}</span>
      </Badge>
    </Link>
  );
};

export default CategoryNavigation;
