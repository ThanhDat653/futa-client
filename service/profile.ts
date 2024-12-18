"use server"
import { END_POINTS } from '@/constants/endpoints'
import { notFound } from 'next/navigation'
import { IProfile, IRegister } from '@/model/profile'
import {cookies} from "next/headers";

async function getUserInfo() {
   // const token = Cookies.get('access_token')
   const token = cookies().get("access_token")?.value
   const url = `${process.env.NEXT_PUBLIC_FUTA_API_URL}/${END_POINTS.PROFILE.URl}/${END_POINTS.PROFILE.CHILD.INFO}`
   const res = await fetch(url, {
      method: 'GET',
      headers: {
         Authorization: `Bearer ${token}`,
      },
   })
   const result = await res.json()
   const profile: IProfile = result

   if (!profile) notFound()
   return profile
}

async function registerUser(userData: IRegister) {
   const url = `${process.env.NEXT_PUBLIC_FUTA_API_URL}/${END_POINTS.PROFILE.URl}/${END_POINTS.PROFILE.CHILD.REGISTER}`
   try {
      const response = await fetch(url, {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify({
            fullname: userData.fullname,
            email: userData.email,
            phoneNumber: userData.phoneNumber,
            password: userData.password,
            confirmPassword: userData.confirmPassword,
         }),
      })

      if (!response.ok) {
         const errorData = await response.json()

         if (response.status === 409) {
            throw new Error('Email đã được sử dụng') // Ném lỗi với thông báo cụ thể
         }

         throw new Error(
            errorData?.error || 'Đã có lỗi không xác định, hãy thử lại sau'
         )
      }

      return 'success'
   } catch (error) {
      console.error('Error during registration:', error)
      throw error
   }
}

export { getUserInfo, registerUser }
