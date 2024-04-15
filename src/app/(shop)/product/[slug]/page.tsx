import { notFound } from "next/navigation";
import { initialData } from "@/seed/seed";
import { litleFont } from "@/config/fonts";
import { SizeSelector, QuantitySelector, ProductSlideShow, ProductMobileSlideShow } from "@/components";

interface Props {
  params: {
    slug: string;
  };
}

export default function ({ params }: Props) {
  const { slug } = params;
  const product = initialData.products.find((product) => product.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="mt-5 mb-20 grid grid-cols-1 md:grid-cols-3 gap-3">


    

      <div className="col-span-1 md:col-span-2 ">
      {/*mobile slidershow*/}

      <ProductMobileSlideShow 
      title={product.title}
      images={product.images}
      className='block md:hidden'
      />

        {/*desktop slidershow */}

        <ProductSlideShow 
        title={product.title} 
        images={product.images} 
        className="hidden md:block"/>
      </div>

      {/*detalles */}

      <div className="col-span-1 px-5 ">
        <h1
          className={` ${litleFont.className} antialiased font-bold text-xl `}
        >
          {product.title}
        </h1>
        <p className="text-lg mb-5">${product.price}</p>

        {/*selector de tallas*/}

        <SizeSelector
          selectdSize={product.sizes[0]}
          availableSize={product.sizes}
        />

        {/*selector de cantidad*/}

        <QuantitySelector quantity={2} />

        {/*button*/}

        <button className="btn-primary my-5">Agregar al Carrito</button>

        {/*descripcion*/}
        <h3 className="font-bold text-sm">Descripcion</h3>
        <p className="font-light">{product.description}</p>
      </div>
    </div>
  );
}
