"use client"
import React, {useState} from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Comfortaa } from 'next/font/google'
import { cn } from '@/lib/utils'
import { signIn } from 'next-auth/react'
import { IRegister } from '@/model/profile'
import { CheckCircleIcon } from "lucide-react";
import Link from "next/link";
import {registerUser} from "@/service/profile";
import {END_POINTS} from "@/constants/endpoints";
import useDisableScroll from "@/hooks/use-disable-scroll";

interface FormValues {
   email: string
   password: string
   confirmPassword: string
   fullname: string
   phoneNumber: string
}

const comfortaa = Comfortaa({ subsets: ['latin'] })

const Page = () => {
   const {
      register,
      handleSubmit,
      watch,
      setError,
      formState: { errors },
   } = useForm<FormValues>()

   const [submitted, setSubmitted] = useState(false)

   const googleUrl: string = `${process.env.NEXT_PUBLIC_AUTH_FUTA_API_URL}/${END_POINTS.AUTH.GOOGLE}`

   const onSubmit: SubmitHandler<FormValues> = async (data: IRegister) => {
      try {
         if (typeof window !== 'undefined') {
            console.log(data)
            await registerUser(data)
            setSubmitted(true)
         }
      } catch (error) {
         if (
            error instanceof Error &&
            error.message === 'Email đã được sử dụng'
         ) {
            console.error('Lỗi đăng ký: ', error.message)
            setError('email', {
               type: 'conflict',
               message: 'Email đã được sử dụng', // Thông báo lỗi sẽ được hiển thị gần trường email
            })
         } else {
            console.error('Lỗi đăng ký không xác định:', error)
            alert('Đã có lỗi xảy ra, vui lòng thử lại sau.')
         }
      }
   }

   useDisableScroll(true)

   if (submitted) {
      return (
         <div className="bg-loginBackground relative flex h-screen w-full flex-col items-center justify-start">
            <div className="absolute top-1/4 flex w-3/4 flex-col items-center justify-center space-y-4 sm:w-1/3">
               <CheckCircleIcon className="size-20 text-sky-500" />
               <p
                  className={cn(
                     'text-primary text-center font-comfortaa text-xl font-bold',
                     comfortaa.className
                  )}
               >
                  Đăng ký thành công!
               </p>
               <p className="text-label text-center font-comfortaa text-[14px]">
                  Cảm ơn bạn đã đăng ký tài khoản. Hãy kiểm tra email và tiến
                  hành xác minh tài khoản để có thể sử dụng những dịch vụ của
                  chúng mình nhé!
               </p>
               <Link
                  className="horizontal-line w-[160px] rounded-3xl bg-sky-500 py-3 text-center font-inter text-[15px] font-semibold text-white"
                  href={'/'}
               >
                  Trang chủ
               </Link>
            </div>
         </div>
      )
   }

   const passwordValue = watch('password')

   return (
      <div className="fixed z-20 flex h-full w-full justify-center overflow-y-scroll bg-sky-600 py-5">
         <div className="flex bg-white h-fit w-4/5 justify-center rounded-2xl pt-2 pb-10 shadow-2xl sm:w-3/5 lg:w-2/5 2xl:w-[750px]">
             <div
                 className={cn(
                     'h-5/6 w-full px-10',
                     comfortaa.className
                 )}
             >
                 <Link href={'/'} className="flex w-full flex-col items-center justify-center">
                     {/* eslint-disable-next-line @next/next/no-img-element */}
                     <img src="/logo_banner.svg" alt="" className="h-16"/>
                 </Link>
                 <div className="flex w-full flex-col items-center justify-center">
                     <p className="text-[16px] sm:text-[28px] font-bold text-sky-300">Welcome</p>
                     <h1 className="text-label text-center font-inter text-[16px] font-bold sm:text-[28px]">
                         TO TRIP BOOKING
                     </h1>
                 </div>
                 <form
                     onSubmit={handleSubmit(onSubmit)}
                     className="flex w-full flex-col items-center justify-center"
                 >
                     {/* Email Field */}
                     <div className="mt-4 w-full">
                         <label className="text-label mb-2 block font-comfortaa text-[13px] font-medium uppercase">
                             Email <span className="text-red-800">*</span>
                         </label>
                         <input
                             {...register('email', {
                                 required: 'Email là bắt buộc',
                             })}
                             className="text-label h-8 w-full bg-transparent focus:outline-none"
                             placeholder="yourmail@gmail.com"
                             type="text"
                         />
                         <div className="h-[1px] w-full bg-sky-300"></div>
                         {errors.email && (
                             <p className="mt-1 text-[12px] text-red-800">
                                 {errors.email.message}
                             </p>
                         )}
                     </div>

                     {/* Full Name Field */}
                     <div className="mt-4 w-full">
                         <label className="text-label mb-2 block font-comfortaa text-[13px] font-medium uppercase">
                             Họ và tên <span className="text-red-800">*</span>
                         </label>
                         <input
                             {...register('fullname', {
                                 required: 'Họ và tên là bắt buộc',
                             })}
                             className="text-label h-8 w-full bg-transparent focus:outline-none"
                             placeholder="Tên của bạn"
                             type="text"
                         />
                         <div className="h-[1px] w-full bg-sky-300"></div>
                         {errors.fullname && (
                             <p className="mt-1 text-[12px] text-red-800">
                                 {errors.fullname.message}
                             </p>
                         )}
                     </div>

                     {/* Phone Number Field */}
                     <div className="mt-4 w-full">
                         <label className="text-label mb-2 block font-comfortaa text-[13px] font-medium uppercase">
                             Số điện thoại
                         </label>
                         <input
                             {...register('phoneNumber', {
                                 required: 'Số điện thoại là bắt buộc',
                                 pattern: {
                                     value: /^[0-9]{10,11}$/,
                                     message: 'Số điện thoại không hợp lệ',
                                 },
                             })}
                             className="text-label h-8 w-full bg-transparent focus:outline-none"
                             placeholder="0846680927"
                             type="text"
                         />
                         <div className="h-[1px] w-full bg-sky-300"></div>
                         {errors.phoneNumber && (
                             <p className="mt-1 text-[12px] text-red-800">
                                 {errors.phoneNumber.message}
                             </p>
                         )}
                     </div>

                     {/* Password Field */}
                     <div className="mt-4 w-full">
                         <label className="text-label mb-2 block font-comfortaa text-[13px] font-medium uppercase">
                             Mật khẩu <span className="text-red-800">*</span>
                         </label>
                         <input
                             {...register('password', {
                                 required: 'Mật khẩu là bắt buộc',
                                 minLength: {
                                     value: 8,
                                     message: 'Mật khẩu phải có ít nhất 8 ký tự',
                                 },
                             })}
                             className="text-label h-8 w-full bg-transparent focus:outline-none"
                             placeholder="********"
                             type="password"
                         />
                         <div className="h-[1px] w-full bg-sky-300"></div>
                         {errors.password && (
                             <p className="mt-1 text-[12px] text-red-800">
                                 {errors.password.message}
                             </p>
                         )}
                     </div>

                     {/* Confirm Password Field */}
                     <div className="mt-4 w-full">
                         <label className="text-label mb-2 block font-comfortaa text-[13px] font-medium uppercase">
                             Xác nhận mật khẩu{' '}
                             <span className="text-red-800">*</span>
                         </label>
                         <input
                             {...register('confirmPassword', {
                                 required: 'Xác nhận mật khẩu là bắt buộc',
                                 validate: (value) =>
                                     value === passwordValue || 'Mật khẩu không khớp',
                             })}
                             className="text-label h-8 w-full bg-transparent focus:outline-none"
                             placeholder="********"
                             type="password"
                         />
                         <div className="h-[1px] w-full bg-sky-300"></div>
                         {errors.confirmPassword && (
                             <p className="mt-1 text-[12px] text-red-800">
                                 {errors.confirmPassword.message}
                             </p>
                         )}
                     </div>

                     {/* Submit Button */}
                     <button
                         type="submit"
                         className="mt-8 w-[160px] rounded-3xl bg-sky-400 px-5 py-2 text-[15px] font-semibold text-white"
                     >
                         Đăng ký
                     </button>
                     <div className="mt-2 flex w-full items-center justify-center space-x-2">
                         <label className="text-label mb-4 block text-[12px] font-bold">
                             Đã có tài khoản?
                         </label>
                         <label className="mb-4 block cursor-pointer text-[12px] font-bold text-sky-300">
                             <p onClick={() => signIn('client')}>Đăng nhập</p>
                         </label>
                     </div>
                 </form>
                 <div className="flex w-full items-center justify-center space-x-3">
                     <div className="h-[1px] w-full bg-gray-400"></div>
                     <label className="text-label block font-inter text-[16px] uppercase">
                         hoặc{' '}
                     </label>
                     <div className="h-[1px] w-full bg-gray-400"></div>
                 </div>
                 <div className="mt-4 w-full columns-1 flex-col justify-center space-y-2 text-center">
                     <Link
                         href={googleUrl}
                         className="relative inline-flex w-[200px] items-center justify-center rounded-3xl border border-gray-200 px-0 py-2 font-inter text-sm hover:bg-gray-200 sm:w-[250px] sm:px-5 sm:text-[15px]"
                     >
                         <div className="absolute left-3 h-5 w-5 bg-cover bg-center">
                             {/* eslint-disable-next-line @next/next/no-img-element */}
                             <img src={'/IconGoogle.png'} alt={'google-logo'}/>
                         </div>
                         <p>Tiếp tục với Google</p>
                     </Link>
                 </div>
             </div>
         </div>
      </div>
   )
}

export default Page
