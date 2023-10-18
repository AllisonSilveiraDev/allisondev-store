import { ShapesIcon } from "lucide-react";
import { Badge } from "./badge";
import { ComponentProps } from "react";

const TitleBagde = ({ children }: ComponentProps<"p">) => {
  return (
    <Badge
      className="w-fit gap-1 border-2 border-primary px-3 py-[0.3rem] text-base uppercase"
      variant="outline"
    >
      <ShapesIcon size={16} />
      <p>{children}</p>
    </Badge>
  );
};

export default TitleBagde;
