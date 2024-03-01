
import React from 'react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import firebaseAdmin from '@/utils/firebaseAdmin';
import { Button } from '@/components/ui/button';
import ProductsHeader from '@/components/ui/productsHeader';
import { Pencil, Trash } from 'lucide-react';

const Products = async () => {
 
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


  return (
    <div className=''>
      <ProductsHeader />
      <div className="">
      <Table className='border rounded'>
        <TableCaption>A list of all the products.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>#</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Size</TableHead>
            <TableHead>Price</TableHead>
            <TableHead className='text-center'>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product, index) => {
            return (
              <TableRow key={index}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{product?.name}</TableCell>
                <TableCell> {product?.description}</TableCell>
                <TableCell>{product?.category}</TableCell>
                <TableCell>{product?.size}</TableCell>
                <TableCell>R{product?.price}</TableCell>
                <TableCell className='flex items-center justify-end gap-4'>
                  <Button variant="secondary" className='bg-[#84A88E] hover:text-black text-white hover:border hover border-[#84A88E]'><Pencil size={16}/></Button>
                  <Button ><Trash size={16}/></Button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
    </div>
  )
}

export default Products