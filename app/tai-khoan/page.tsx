import React from 'react'
import Profile from '@/app/tai-khoan/thong-tin/page'
import { getUserInfo } from '@/service/profile'
import BillList from '@/app/tai-khoan/hoa-don/page'
import { getBillsByCurrUser } from '@/service/bill'

const Page = async () => {
   const profile = await getUserInfo()
   const bills = await getBillsByCurrUser()

   return (
      <>
         <div className="flex h-full w-full justify-center bg-white px-4 py-24 lg:py-36">
            <div className="container mx-auto space-y-4 md:flex">
               <Profile profile={profile} />
               <BillList bills={bills} />
            </div>
         </div>
      </>
   )
}

export default Page
