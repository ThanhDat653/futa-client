import React from 'react'

export default async function Page({
   params,
}: {
   params: Promise<{ id: string }>
}) {
   const billId = (await params).id
   return <div className="mt-[120px] w-full">chi tiet hoa don {billId}</div>
}
