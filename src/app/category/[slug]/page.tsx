import TitleBagde from "@/components/ui/title-badge";
import { prismaClient } from "@/lib/prisma";

const CategoryProducts = async ({ params }: any) => {
  const products = await prismaClient.product.findMany({
    where: {
      category: {
        slug: params.slug,
      },
    },
  });
  return (
    <div className="flex flex-col gap-8 p-5">
      <TitleBagde>{params.slug}</TitleBagde>
    </div>
  );
};

export default CategoryProducts;
