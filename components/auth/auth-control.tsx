import React from 'react';
import {signIn, useSession} from "next-auth/react";
import {CreditCard, Loader2, LogIn, LogOut, User, UserIcon, UserPlus} from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup, DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

interface MenuItem {
    label: string;
    icon: React.ReactNode;
    href?: string;
    action?: () => void;
}

const AuthControl = () => {

    const { data: session, status } = useSession();

    if (status === "loading") {
        return <Loader2 className="animate-spin text-white absolute right-0" />
    }

    const menuItems : MenuItem[] = [
        {
            label: "Thông tin",
            icon: <User />,
            href: '/tai-khoan'
        },
        {
            label: "Hóa đơn",
            icon: <CreditCard />,
            href: '/hoa-don'
        },
        {
            label: "Đăng xuất",
            icon: <LogOut />,
            href: '/dang-xuat'
        },
    ];

    const logInMenu = [
        {
            label: "Đăng nhập",
            icon: <LogIn />,
            action: () => signIn('client')
        },
        {
            label: "Đăng ký",
            icon: <UserPlus />,
            href: '/dang-ky'
        },
    ]

    return (
        <>
            {session ?
                <DropdownMenu>
                    <DropdownMenuTrigger className="focus-visible:outline-none absolute right-0">
                        <UserIcon className="size-6 rounded-full bg-white text-sky-500 ring-2 ring-white cursor-pointer"/>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-36 mt-2" align={"end"}>
                        <DropdownMenuLabel>Tài khoản</DropdownMenuLabel>
                        <DropdownMenuGroup>
                            {menuItems.map((item, index) => (
                                <DropdownMenuItem key={index} >
                                    {item.href ?
                                        <Link className="flex items-center gap-1 cursor-pointer" href={item.href}>
                                            {item.icon}
                                            <span>{item.label}</span>
                                        </Link> :
                                        <div className="flex items-center gap-1 cursor-pointer" onClick={item.action}>
                                            {item.icon}
                                            <span>{item.label}</span>
                                        </div>
                                    }
                                </DropdownMenuItem>
                            ))}
                        </DropdownMenuGroup>
                    </DropdownMenuContent>
                </DropdownMenu>
                :
                <>
                    {/*<Button*/}
                    {/*    onClick={() => signIn('client')}*/}
                    {/*    className="items-center bg-white text-black text-xs h-fit rounded-full right-0 hover:opacity-50 hover:bg-white absolute hidden md:flex ps-2 py-1.5"*/}
                    {/*>*/}
                    {/*    <UserIcon className="size-5 rounded-full bg-gray-300 text-white ring-2 ring-white cursor-pointer"/>*/}
                    {/*    Đăng nhập*/}
                    {/*</Button>*/}
                    <div className="absolute right-0">
                        <DropdownMenu>
                            <DropdownMenuTrigger className="focus-visible:outline-none">
                                <UserIcon className="size-6 rounded-full bg-white text-sky-500 ring-2 ring-white cursor-pointer"/>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-36 mt-2" align={"end"}>
                                <DropdownMenuGroup>
                                    {logInMenu.map((item, index) => (
                                        <DropdownMenuItem key={index} >
                                            {item.href ?
                                                <Link className="flex items-center gap-1 cursor-pointer" href={item.href}>
                                                    {item.icon}
                                                    <span>{item.label}</span>
                                                </Link> :
                                                <div className="flex items-center gap-1 cursor-pointer" onClick={item.action}>
                                                    {item.icon}
                                                    <span>{item.label}</span>
                                                </div>
                                            }
                                        </DropdownMenuItem>
                                    ))}
                                </DropdownMenuGroup>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </>


            }
        </>

    );
};

export default AuthControl;