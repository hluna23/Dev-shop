import Image from "next/image";

import { Title } from "./../../components/ui/title/Title";
import { initialData } from "@/seed/seed";
import { ProductGrid } from "@/components";

const products = initialData.products;

export default function Home() {
  return (
    <>
      <Title title="Tienda" subtitle="Todo los Productos" className="mb-2" />

      <ProductGrid Products={products} />
    </>
  );
}
