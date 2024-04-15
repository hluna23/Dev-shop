import { initialData } from "@/seed/seed";
import { Title } from "./../../../../components/ui/title/Title";
import { ProductGrid } from "@/components";

const seedProdcts = initialData.products;

interface Props {
  params: {
    id: Category;
  };
}

export default function ({ params }: Props) {
  const { id } = params;

  const products = seedProdcts.filter((producto) => producto.gender === id);

  const labels: Record<Category, string> = {
    'men': 'Para hombres',
    'women': 'Para mujeres',
    'kid': 'Para niños',
    'unisex': 'Para Todos'
  }
  
  // if (id === "kids") {
  //   notFound();
  // }

  return (
    <>
      <Title
        title={`Articulos ${ labels[id]}`}
        subtitle="Todo los Productos"
        className="mb-2"
      />

      <ProductGrid Products={products} />
    </>
  );
}
