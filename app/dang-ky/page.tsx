'use client'
import React, {useState} from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Comfortaa } from 'next/font/google'
import { cn } from '@/lib/utils'
import { signIn } from 'next-auth/react'
import { IRegister } from '@/model/profile'
import { CheckCircleIcon } from "lucide-react";
import Link from "next/link";
import {registerUser} from "@/service/profile";

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

   const [submitted, setSubmitted] = useState(false);

   const onSubmit: SubmitHandler<FormValues> = async (data: IRegister) => {
      try {
         if (typeof window !== 'undefined') {
            console.log(data);
            await registerUser(data);
            setSubmitted(true);
         }
      } catch (error) {
         if (error instanceof Error && error.message === 'Email đã được sử dụng') {
            console.error('Lỗi đăng ký: ', error.message);
            setError('email', {
               type: 'conflict',
               message: 'Email đã được sử dụng', // Thông báo lỗi sẽ được hiển thị gần trường email
            });
         } else {
            console.error('Lỗi đăng ký không xác định:', error);
            alert('Đã có lỗi xảy ra, vui lòng thử lại sau.');
         }
      }
   };


   if(submitted) {
      return (
          <div className="flex flex-col items-center justify-start h-screen bg-loginBackground w-full relative">
             <div className="flex flex-col justify-center items-center w-3/4 sm:w-1/3 space-y-4 top-1/4 absolute">
                <CheckCircleIcon className="size-20 text-sky-500" />
                <p className={cn("text-center font-comfortaa font-bold text-primary text-xl", comfortaa.className)}>Đăng ký thành công!</p>
                <p className="text-center font-comfortaa text-label text-[14px]">
                   Cảm ơn bạn đã đăng ký tài khoản.
                   Hãy kiểm tra email và tiến hành xác minh tài khoản để có thể sử dụng những dịch vụ của chúng mình nhé!
                </p>
                <Link className="text-[15px] w-[160px] horizontal-line rounded-3xl font-inter font-semibold bg-sky-500 py-3 text-white text-center" href={'/'}>Trang chủ</Link>
             </div>
          </div>
      );
   }


   const passwordValue = watch('password')
   return (
      <div className="flex min-h-screen justify-center py-28">
         <div className="flex h-fit justify-center rounded-2xl py-10 shadow-2xl w-4/5 sm:w-3/5 lg:w-3/4 2xl:w-[1530px]">
            <div className="relative mt-5 hidden w-1/2 flex-1 px-8 lg:block">
               <div
                  className="text-customBack h-full w-full bg-contain bg-no-repeat"
                  style={{
                     backgroundImage:
                        "url('https://trip.s3-hcm-r1.s3cloud.vn/landing/TVC.svg')",
                  }}
               ></div>
               <p className="absolute left-14 top-0 pe-20 text-2xl font-bold uppercase text-sky-300">
                  Cùng bạn trên mọi nẻo đường
               </p>
            </div>
            <div
               className={cn(
                  'h-5/6 w-full px-10 lg:w-1/2',
                  comfortaa.className
               )}
            >
               <div className="flex w-full flex-col items-center justify-center">
                  <p className="text-[16px] font-bold text-sky-300">Welcome</p>
                  <h1 className="text-label text-center font-inter text-[16px] font-bold sm:text-[28px]">
                     TO TRIP BOOKING
                  </h1>
               </div>
               <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="mt-6 flex w-full flex-col items-center justify-center"
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
            </div>
         </div>
      </div>
   )
}

export default Page
