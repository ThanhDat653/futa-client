/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Footer = () => {
   return (
      <footer className="absolute top-full w-full bg-sky-50">
         <div className="container mx-auto w-full flex-col flex-wrap items-start justify-between gap-5 px-4 py-10 md:px-0 lg:grid lg:grid-cols-3">
            <div className="flex flex-col lg:col-span-2">
               <div className="flex h-fit items-center justify-start gap-5">
                  <img src="/logo_banner.svg" alt="" className="h-16" />
                  <div className="h-fit">
                     <h2 className="mb-1 text-base font-semibold text-teal-600">
                        Trung tâm tổng đài & CSKH
                     </h2>
                     <h1 className="text-sky-600 md:text-3xl">1900 6067</h1>
                  </div>
               </div>
               <h2 className="my-4 font-medium uppercase text-teal-700">
                  Công ty cổ phần xe khách Phương Trang - FUTA Bus Lines
               </h2>
               <p className="mt-1 text-gray-600">
                  <span className="inline text-sky-600">Địa chỉ: </span>Số 01 Tô
                  Hiến Thành, Phường 3, Thành phố Đà Lạt, Tỉnh Lâm Đồng, Việt
                  Nam.
               </p>
               <p className="mt-1 text-gray-600">
                  <span className="inline text-sky-600">Email: </span>
                  hotro@futa.vn{' '}
               </p>
               <p className="mt-1 text-gray-600">
                  <span className="inline text-sky-600">Điện thoại: </span>{' '}
                  02838386852
               </p>
            </div>
            <div className="flex items-center justify-between">
               <div>
                  <h3 className="font-semibold text-teal-700">
                     FUTA Bus Lines
                  </h3>
                  <ul className="text-gray-5 00 pt-4">
                     <li className="cursor-pointer py-1 md:hover:text-sky-600">
                        Về chúng tôi
                     </li>
                     <li className="cursor-pointer py-1 md:hover:text-sky-600">
                        Lịch trình
                     </li>
                     <li className="cursor-pointer py-1 md:hover:text-sky-600">
                        Tuyển dụng
                     </li>
                     <li className="cursor-pointer py-1 md:hover:text-sky-600">
                        Tin tức
                     </li>
                  </ul>
               </div>
               <div>
                  <h3 className="font-semibold text-teal-700">Hỗ trợ</h3>
                  <ul className="text-gray-5 00 pt-4">
                     <li className="cursor-pointer py-1 md:hover:text-sky-600">
                        Tra cứu thông tin
                     </li>
                     <li className="cursor-pointer py-1 md:hover:text-sky-600">
                        Câu hỏi thường gặp
                     </li>
                     <li className="cursor-pointer py-1 md:hover:text-sky-600">
                        Chính sách và điều khoản
                     </li>
                     <li className="cursor-pointer py-1 md:hover:text-sky-600">
                        Hướng dẫn đặt vé
                     </li>
                  </ul>
               </div>
            </div>
         </div>
         <div className="w-full bg-sky-600 py-2">
            <h5 className="w-full text-center text-sm text-white">
               © 2023 | Bản quyền thuộc về Công ty Cổ Phần Xe khách Phương
               Trang - FUTA Bus Lines 2023
            </h5>
         </div>
      </footer>
   )
}

export default Footer
