import { Product } from "./../../../interfaces/product.interface";
import { ProductGridItem } from "./ProductGridItem";

interface Props {
  Products: Product[];
}
export const ProductGrid = ( { Products } : Props) => {

  return (
    <div className="grid gridcols-2 sm:grid-cols-3 gap-10 mb-10">

      { 
        Products.map(product => (
          <ProductGridItem 
            key={product.slug} 
            product={product} />
          ))}

    </div>
  );
};
