import React, { useState } from 'react'
import { signIn, useSession } from 'next-auth/react'
import { Loader2, LogIn, LogOut, User, UserIcon, UserPlus } from 'lucide-react'
import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuGroup,
   DropdownMenuItem,
   DropdownMenuLabel,
   DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

interface MenuItem {
   label: string
   icon: React.ReactNode
   action: () => void
}

const AuthControl = () => {
   const { data: session, status } = useSession()
   const [open, setOpen] = useState(false)

   if (status === 'loading') {
      return <Loader2 className="absolute right-0 animate-spin text-white" />
   }

   const redirect = (url: string) => {
      window.location.href = url
   }

   const menuItems: MenuItem[] = [
      {
         label: 'Thông tin',
         icon: <User />,
         action: () => redirect('/tai-khoan'),
      },
      {
         label: 'Đăng xuất',
         icon: <LogOut />,
         action: () => redirect('/dang-xuat'),
      },
   ]

   const logInMenu = [
      {
         label: 'Đăng nhập',
         icon: <LogIn />,
         action: () => signIn('client'),
      },
      {
         label: 'Đăng ký',
         icon: <UserPlus />,
         action: () => redirect('/dang-ky'),
      },
   ]

   return (
      <>
         {session ? (
            <DropdownMenu open={open} onOpenChange={setOpen}>
               <DropdownMenuTrigger className="absolute right-0 focus-visible:outline-none">
                  <UserIcon className="size-6 cursor-pointer rounded-full bg-white text-sky-500 ring-2 ring-white" />
               </DropdownMenuTrigger>
               <DropdownMenuContent className="mt-2 w-36" align={'end'}>
                  <DropdownMenuLabel>Tài khoản</DropdownMenuLabel>
                  <DropdownMenuGroup>
                     {menuItems.map((item, index) => (
                        <DropdownMenuItem
                           key={index}
                           onSelect={() => {
                              item.action()
                           }}
                        >
                           <div
                              className="flex cursor-pointer items-center gap-1"
                              onClick={item.action}
                           >
                              {item.icon}
                              <span>{item.label}</span>
                           </div>
                        </DropdownMenuItem>
                     ))}
                  </DropdownMenuGroup>
               </DropdownMenuContent>
            </DropdownMenu>
         ) : (
            <div className="absolute right-0">
               <DropdownMenu open={open} onOpenChange={setOpen}>
                  <DropdownMenuTrigger className="focus-visible:outline-none">
                     <UserIcon className="size-6 cursor-pointer rounded-full bg-white text-sky-500 ring-2 ring-white" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="mt-2 w-36" align={'end'}>
                     <DropdownMenuGroup>
                        {logInMenu.map((item, index) => (
                           <DropdownMenuItem
                              key={index}
                              onSelect={() => {
                                 item.action()
                              }}
                           >
                              <div
                                 className="flex cursor-pointer items-center gap-1"
                                 onClick={item.action}
                              >
                                 {item.icon}
                                 <span>{item.label}</span>
                              </div>
                           </DropdownMenuItem>
                        ))}
                     </DropdownMenuGroup>
                  </DropdownMenuContent>
               </DropdownMenu>
            </div>
         )}
      </>
   )
}

export default AuthControl
