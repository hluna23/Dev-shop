import { Title } from "@/components";
import Link from "next/link";
import {initialData} from '@/seed/seed'
import Image from "next/image";
import clsx from "clsx";

import { IoCardOutLine } from 'react-icons/io5';

const productsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2]
]



export default function () {

  return (
    <div className='flex justify-center item-center mb-72 px-10 sm:px-0'>
      <div className='flex flex-col w-[1000px]'>
        <Title title='Verificar Orden' />

        <div className='grid grid-cols-1 sm:grid-cols-2 gap-10'>

          {/*carrito*/}
          <div className='flex flex-col mt-5'>
           <span className='text-xl '>Ajustar Compras</span>
           <Link href='/cart' className='underline mb-5'>
                Editar Compra
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
                  className="mr-5 rounded"
                />
              </div>

              <div>
                <p>{product.title}</p>
                <p>{product.price} x 3</p>
                <p className='font-bold'>Subtotal: ${product.price * 3}</p>
              </div>
            </div>
          ))}
          </div>

          {/*resumen de la compra*/}
          <div  className='bg-white rounded-xl shadow-xl p-7'>

          <h2 className='font-bold text-2xl mb-2'>Direccion de Entrega</h2>
          <div className='mb-10'>
            <p className="font-bold">Henry Luna</p>
            <p>Rua. oeste</p>
            <p>Arruda</p>
            <p>Recife</p>
            <p>Pernambuco</p>
            <p>Brasil</p>
            <p>CEP. 52120403</p>
            <p>TEL. 81 975866856</p>
          </div>
          {/*Divider*/}

          <div 
          className='w-full h-0.5 rounded bg-gray-400 mb-10'/>

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
              href='/orders/123'>
              Colocar Orden
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
