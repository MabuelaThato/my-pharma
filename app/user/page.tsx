import { Heart, Pill, ShoppingCart } from 'lucide-react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import React from 'react'
import firebaseAdmin from '@/utils/firebaseAdmin';

const Home = async () => {

  const productsRef = await firebaseAdmin
    .firestore()
    .collection("Products")
    .get();

  const products: any[] = productsRef.docs.map((doc) => {
    return {
      iD: doc.id,
      ...doc.data(),
    };
  });

  async function addFavourite(){
    
  }

  return (
    <div>
      <div>
        <div className='flex items-center gap-2'>
          <Pill size={24}/>
          <div className='text-3xl font-black'>Products</div>
        </div>
        <div className='flex space-x-12 flex-wrap mt-6'>
        {products.map((product, index) => {
           return(
           <div>
              <Card key={index}>
                <CardHeader className='w-64 h-64 bg border-b'>
                  <img src="/calpol.png" alt="" />
                </CardHeader>
                <CardContent className='flex justify-between items-center mt-4'>
                  <p className='font-md'>{product.name}</p>
                  <p className='flex gap-4 text-slate-600'>
                  <button><Heart size={18}/></button>
                  <button><ShoppingCart size={18}/></button>
                  </p>
                </CardContent>
                <CardFooter>
                  <p className='text-2xl font-semibold'>R{product.price}</p>
                </CardFooter>
              </Card>
           </div>
           )
        })}
        </div>

      </div>
    </div>
  )
}

export default Home