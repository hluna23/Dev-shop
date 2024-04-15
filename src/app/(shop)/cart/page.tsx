import Link from "next/link";
import Image from "next/image";
import {redirect} from "next/navigation";

import { Title } from "@/components";
import {initialData} from '@/seed/seed'
import { QuantitySelector } from "@/components";



const productsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2]
]


export default function () {

  // redirect('/empty')

  return (
    <div className='flex justify-center item-center mb-72 px-10 sm:px-0 '>
      <div className='flex flex-col w-[1000px]'>
        <Title title='Carrito' />
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>

          {/*carrito*/}
          <div className='flex flex-col mt-5'>
            <span className='text-xl'>Agregar más Items</span>
            <Link href='/' className='underline mb-5'> 
              Continúa Comprando
            </Link>
          
          {/*Items*/}
          {productsInCart.map(product => (
            <div key={product.slug} className='flex'>
              <div>
                <Image 
                  src={`/products/${product.images[0]}`}
                  width={100}
                  height={100}
                  style={{
                    width: '100px',
                    height:'100px'
                  }}
                  alt={product.title}
                  className="mr-5 rounded shadow-xl hover:bg-gray-90"
                />
              </div>

              <div>
                <p>{product.title}</p>
                <p>{product.price}</p>
                <QuantitySelector quantity={3}/>
                <button className='underline mt-3'>Remover</button>
              </div>
            </div>
          ))}
          </div>

          {/*resumen de la compra*/}
          <div  className='bg-white rounded-xl shadow-xl p-7 h-[300px]'>
            <h2 className='text-2xl mb-2'>Resumen de Compra</h2>
            <div className='grid grid-cols-2'>
              <span>No. Productos</span>
              <span className='text-right'>3 Articulos</span>
              <span>Subtotal</span>
              <span className='text-right'>$ 100</span>
              <span>Impuestos (15%)</span>
              <span className='text-right'>$ 100</span>
              <span className='text-2xl mt-5'>Total</span>
              <span className='mt-5 text-2xl text-right'>$ 100</span>
            </div>
            <div className='mt-5 mb-2 w-full'>
              <Link className='flex btn-primary justify-center' 
              href='/checkout/adress'>
              Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
