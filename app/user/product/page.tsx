import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Plus } from 'lucide-react'
import React from 'react'

const Product = () => {
  return (
    <div className='p-16 shadow-md border rounded-lg'>
        <div className='flex flex-rows-2'>
            <div className='w-full flex justify-between'>
                <img src="/calpol.png" alt="" className='w-80'/>
                <Separator orientation="vertical" className='mr-12'/>
            </div>
            <div className='bg-white rounded-lg flex flex-col space-y-12 w-full'>
                <div className='flex flex-col gap-8'>
                <h1 className='text-6xl font-black'>Calpol</h1>
                <Separator />
                </div>
                <p className='text-slate-600'>Relieves pain and fever. Suitable for babies 3 months and older</p>
                <div className='flex justify-between my-8'>
                    <div className='text-4xl flex gap-2 items-center'><span className='text-base'>Price:</span> <span> R60.00</span></div>
                    <div className=''>Size: 50ml</div>
                </div>
                <Button className='flex gap-2'>
                    <Plus />
                    <div>Add to Cart</div>
                </Button>
            </div>
        </div>
    </div>
  )
}

export default Product