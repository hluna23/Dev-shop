import { Title } from "@/components";
import Link from "next/link";
import {initialData} from '@/seed/seed'
import Image from "next/image";
import clsx from 'clsx';
import { IoCardOutline } from "react-icons/io5";



const productsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2]
]


interface Props{
  params: {
    id: string
  }
}



export default function({ params }: Props ) {

  const { id } = params;

  //Todo: Verificar
  //redirect(/)



  return (
    <div className='flex justify-center item-center mb-72 px-10 sm:px-0'>
      <div className='flex flex-col w-[1000px]'>
        <Title title={ `Orden #${ id }` } />
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>

          {/*carrito*/}
          <div className='flex flex-col mt-5'>
            <div className={clsx("flex items-center rounded-lg py-2 px-3.5 text-xs font-bold text-white mb-5",
            {
              "bg-red-500": false, 
              "bg-green-700": true
            }
            )
            }>
              <IoCardOutline size={30}/>
              {/* <span className='mx-2'>Pendiente de pago</span> */}
              <span className='mx-2'>Orden pagada</span>
            </div>
          
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

            <div className={
              clsx(
                "flex items-center rounded-lg py-2 px-3.5 text-xs font-bold text-white mb-5",
                {
                  'bg-red-500': false,
                  'bg-green-700': true,
                }
              )
              }>

              <IoCardOutline size={30}/>

              {/* <span className='mx-2'>Pendiente de pago</span> */}
              <span className='mx-2'>Orden pagada</span>

            </div>
              
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
