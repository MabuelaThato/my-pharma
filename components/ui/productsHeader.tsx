"use client"
import React from 'react'
import {
Dialog,
DialogContent,
DialogFooter,
DialogHeader,
DialogTitle,
DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from "@/components/ui/textarea"
import {
Form,
FormControl,
FormField,
FormItem,
FormLabel,
FormMessage,
} from "@/components/ui/form"
import {
Select,
SelectContent,
SelectItem,
SelectTrigger,
SelectValue,
} from "@/components/ui/select"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import CldUpload from '@/components/ui/cldUpload';
import { addProduct } from '@/actions/actions';
import { Separator } from './separator';
import { Package } from 'lucide-react';

  const formSchema = z.object({
    name: z.string().min(1, {
      message: "Please enter a name.",
    }),
    description: z.string().min(1, {
      message: "Please enter a description.",
    }),
    category: z
    .string({
    }),
    size: z.string().min(1, {
      message: "Please enter the size of the product.",
    }),
    price: z.string().min(1, {
      message: "Please enter the price of the product.",
    }),
    img: z.string()
  })

const ProductsHeader = () => {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
        name: "",
        description: "",
        category: "",
        size: "",
        price: "",
        img: "",
        },
      })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        try {
          await addProduct(values);
        } catch (error) {
          console.log(error)
        }
      }

  return (
    <div className=''>
        <div className='flex justify-between items-center mb-6'>
          <div>
            <div className='flex gap-2 items-center'>
              <Package size={32}/>
              <h1 className='text-4xl font-black'>Products </h1>
            </div>
            <p className='text-slate-500 text-sm'>Add, edit and delete products</p>
          </div>
        <div>
        
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="default">Add Product</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Create a product</DialogTitle>
            </DialogHeader>
            <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Name of product." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea placeholder="Description of the product" {...field}/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a category." />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="flu">Flu</SelectItem>
                  <SelectItem value="cough">Cough</SelectItem>
                  <SelectItem value="fever">Fever</SelectItem>
                  <SelectItem value="pain">Pain</SelectItem>
                  <SelectItem value="colic">Colic</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="size"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Size of product</FormLabel>
              <FormControl>
                <Input placeholder="50ml, 100ml, 10 tablets etc..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Price of product</FormLabel>
              <FormControl>
                <Input placeholder="100, 99.00 etc..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="img"
          render={({ field }) => (
            <FormItem>
              <CldUpload 
              value={field.value ? [field.value] : []}
              onChange={(url) => field.onChange(url)}
              onRemove={() => field.onChange("")}/>
            </FormItem>
          )}
        />
            <DialogFooter>
              <Button type="submit">Save changes</Button>
            </DialogFooter>
            </form>
          </Form>
          </DialogContent>
        </Dialog>
        
        </div>
      </div>
      <div>
      <Separator className='my-2'/>
      <Input placeholder='Search' className='w-96 mt-10 mb-4'/>
  </div>
    </div>
  )
}

export default ProductsHeader