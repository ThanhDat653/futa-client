import React from 'react'
import Profile from '@/app/tai-khoan/thong-tin/profile'
import { getUserInfo } from '@/service/profile'
import BillList from '@/app/tai-khoan/hoa-don/bill-list'
import { getBillsByCurrUser } from '@/service/bill'

const Page = async () => {
   const profile = await getUserInfo()
   const bills = await getBillsByCurrUser()

   return (
      <div className="flex h-full w-full justify-center bg-slate-100 px-4 py-24 lg:py-36">
         <div className="container mx-auto flex flex-col items-start justify-start gap-10 space-y-4 md:flex-row">
            <Profile profile={profile} />
            <BillList bills={bills} />
         </div>
      </div>
   )
}

export default Page
