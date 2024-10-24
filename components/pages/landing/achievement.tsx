/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Achievement = () => {
   return (
      <div className="w-full py-10">
         <div className="container mx-auto flex flex-col items-center justify-start gap-5 py-10">
            <div className="text-center">
               <h1 className="text-lg font-semibold text-teal-700 lg:text-2xl">
                  FUTA BUS LINES - CHẤT LƯỢNG LÀ DANH DỰ
               </h1>
               <h4 className="mt-2 text-sm text-gray-700">
                  Được khách hàng tin tưởng và lựa chọn
               </h4>
            </div>
            <div className="h-fit w-full items-center justify-center lg:grid lg:grid-cols-2">
               <div className="flex h-full w-full flex-col items-center justify-center lg:justify-center lg:gap-5">
                  <div className="flex w-full items-center justify-center gap-5 px-5 py-2">
                     <img
                        src="/people.png"
                        alt="people"
                        className="size-20 rounded-full border-4 border-slate-200 object-cover"
                     />
                     <div className="flex-1 text-left">
                        <h2 className="text-lg font-semibold text-gray-700">
                           Hơn 20 Triệu Lượt khách
                        </h2>
                        <p className="mt-1 block text-sm text-gray-500">
                           Phương Trang phục vụ hơn 20 triệu lượt khách bình
                           quân 1 năm trên toàn quốc
                        </p>
                     </div>
                  </div>
                  <div className="flex w-full items-center justify-center gap-5 px-5 py-2">
                     <img
                        src="/travel.png"
                        alt="people"
                        className="size-20 rounded-full border-4 border-slate-200 object-cover"
                     />
                     <div className="flex-1 text-left">
                        <h2 className="text-lg font-semibold text-gray-700">
                           Hơn 1,000 Chuyến xe
                        </h2>
                        <p className="mt-1 block text-sm text-gray-500">
                           Phương Trang phục vụ hơn 1,000 chuyến xe đường dài và
                           liên tỉnh mỗi ngày
                        </p>
                     </div>
                  </div>
                  <div className="flex w-full items-center justify-center gap-5 px-5 py-2">
                     <img
                        src="/pin.png"
                        alt="people"
                        className="size-20 rounded-full border-4 border-slate-200 object-cover"
                     />
                     <div className="flex-1 text-left">
                        <h2 className="text-lg font-semibold text-gray-700">
                           Hơn 350 Phòng vé - Bưu cục
                        </h2>
                        <p className="mt-1 block text-sm text-gray-500">
                           Phương Trang có hơn 350 phòng vé, trạm trung chuyển,
                           bến xe,... trên toàn hệ thống
                        </p>
                     </div>
                  </div>
               </div>

               <div className="hidden lg:block">
                  <img
                     src="/left-side.png"
                     alt=""
                     className="w-full object-contain"
                  />
               </div>
            </div>
         </div>
      </div>
   )
}

export default Achievement
