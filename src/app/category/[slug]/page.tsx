import ProductItem from "@/components/ui/product-item";
import TitleBagde from "@/components/ui/title-badge";
import { computeProductTotalPrice } from "@/helpers/product";
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

      <div className="grid grid-cols-2 gap-8">
        {products.map((product) => (
          <ProductItem
            key={product.id}
            product={computeProductTotalPrice(product)}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryProducts;
