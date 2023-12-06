//imports
import { Badge } from "./badge";
import { ComponentProps } from "react";
import { CATEGORY_ICON } from "@/constants/category-item";

const TitleBagde = ({ children }: ComponentProps<"p">) => {
  return (
    <Badge
      className="w-fit gap-1 border-2 border-primary px-3 py-[0.3rem] text-base uppercase"
      variant="outline"
    >
      {CATEGORY_ICON[children as keyof typeof CATEGORY_ICON]}
      <p>{children}</p>
    </Badge>
  );
};

export default TitleBagde;
