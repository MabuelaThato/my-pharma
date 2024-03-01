import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { NotepadText, Trash } from 'lucide-react';
import { Checkbox } from "@/components/ui/checkbox"
import React from 'react'
import firebaseAdmin from '@/utils/firebaseAdmin';
import { Separator } from '@/components/ui/separator';

const Orders = async () => {

  const ordersRef = await firebaseAdmin
    .firestore()
    .collection("Orders")
    .get();

  const orders: any[] = ordersRef.docs.map((doc) => {
    return {
      iD: doc.id,
      ...doc.data(),
    };
  });

  return (
    <div className=''>
      <div className='flex gap-2 items-center'>
        <NotepadText size={32}/>
        <h1 className='text-4xl font-black'>Orders </h1>
      </div>    
      <Separator className='my-6'/>  
       <Table className='border rounded'>
        <TableCaption>A list of all the orders.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>#</TableHead>
            <TableHead>Name of customer</TableHead>
            <TableHead>Products</TableHead>
            <TableHead>Address</TableHead>
            <TableHead>Packaged</TableHead>
            <TableHead>Delivered</TableHead>
            <TableHead className='text-center'>Delete</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.map((order, index) => {
            return (
              <TableRow key={index}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{order?.name}</TableCell>
                <TableCell> {order?.products}</TableCell>
                <TableCell>{order?.address}</TableCell>
                <TableCell><Checkbox /></TableCell>
                <TableCell><Checkbox /></TableCell>
                <TableCell className='flex items-center justify-end gap-4'>
                  <Button><Trash /></Button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  )
}

export default Orders