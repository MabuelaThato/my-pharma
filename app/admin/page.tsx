import React from 'react'
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { CalendarDays, DollarSign, LayoutDashboard, Package, Users } from 'lucide-react'
import { getCurrentDate } from '@/utils/date'
import { Separator } from '@/components/ui/separator'


const Dashboard = () => {
  return (
    <div className="min-h-screen w-full">
      <div className='flex justify-between items-center'>
      <div className='flex gap-4 items-center'>
        <LayoutDashboard size={32}/>
        <div className='text-4xl font-black'>Dashboard</div>
      </div>
        <div className='flex gap-2 items-center'>
        <CalendarDays />
        <div>{getCurrentDate()}</div>
        </div>
      </div>
      <Separator className='my-6'/>
      <div className='flex gap-8'>
      <Card className='w-64'>
        <CardHeader>
          <CardTitle>
            <div className='flex justify-between text-base font-md'>
              <div>Total Products</div>
              <Package />
            </div>
          </CardTitle>
          <CardDescription className='font-black text-xl text-black'>10</CardDescription>
        </CardHeader>
      </Card>
      <Card className='w-64'>
        <CardHeader>
          <CardTitle>
            <div className='flex justify-between text-base font-md'>
              <div>Accounts</div>
              <Users />
            </div>
          </CardTitle>
          <CardDescription className='font-black text-xl text-black'>2</CardDescription>
        </CardHeader>
      </Card>
      <Card className='w-64'>
        <CardHeader>
          <CardTitle>
            <div className='flex justify-between text-base font-md'>
              <div>Total sales</div>
              <DollarSign />
            </div>
          </CardTitle>
          <CardDescription className='font-black text-xl text-black'>+R1000</CardDescription>
        </CardHeader>
      </Card>
      </div>
     
    </div>
  )
}

export default Dashboard