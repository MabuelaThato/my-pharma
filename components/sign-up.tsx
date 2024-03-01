"use client"
import React, { useState } from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { auth } from "@/config/Firebase"
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { toast } from "react-toastify";
import { redirectUser, registerUser } from '@/actions/actions'



const formSchema = z.object({
    email: z.string().min(2, {
      message: "email must be at least 2 characters.",
    }),
    password: z.string().min(8, {
      message: "password must be at least 8 characters.",
    }),
})

const SignUp = () => {

  const [submitting, updateSubmitting] = useState(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
        email: "",
        password: "",
        },
    });

    async function register(values: z.infer<typeof formSchema>) {
      updateSubmitting(true);

      try {
        await createUserWithEmailAndPassword(auth, values.email, values.password);
        await registerUser();

      } catch (error) {

        console.log(error);
        toast.error("Email already used.");
        updateSubmitting(false);

      }
    }

  return (
    <div className='form-bg border border-slate-200 drop-shadow'>
      <div className='text-center'>
      <img src="/logo.png" alt="A pharmacy logo" width={100}/>
      <h1 className='text-4xl font-bold mt-2'>
        Welcome
      </h1>
      <p className='sub-text mb-12'>Please enter your credentials</p>

    </div>
    <Form {...form}>
    <form onSubmit={form.handleSubmit(register)} className="space-y-8">
      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <Input 
              placeholder="Email" 
              {...field} 
              className='input focus:outline-none '
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="password"
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <Input 
              placeholder="Password" 
              {...field} 
              type='password'
              className='input focus:outline-none '
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <Button type="submit" disabled={submitting} className='w-full'>
        { submitting? "Loading..." : "Sign up"}</Button>
    </form>
  </Form>
 
  </div>
  )
}

export default SignUp;