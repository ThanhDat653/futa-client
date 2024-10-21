import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { siteConfig } from '@/configs/site'
import React from 'react'

function Page() {
    return (
        <div className="container mx-auto flex flex-col gap-12 bg-white pb-12 pt-8 text-base text-black sm:flex-row">
            <div className="flex flex-col sm:min-h-[450px] sm:min-w-[300px] sm:max-w-[413px] md:w-1/3">
                <div className="pl-4 text-lg font-bold uppercase sm:pl-0">
                    Liên hệ chúng tôi
                </div>
                <div className="flex flex-col gap-2 pl-2 text-base leading-6">
                    <div className="text-lg font-medium text-blue-500">
                        CÔNG TY CỔ PHẦN XE KHÁCH PHƯƠNG TRANG - FUTA BUS LINES
                    </div>
                    <span className="mt-2 text-gray-500">
                        Địa chỉ:{' '}
                        <span className="text-black">
                            Số 01 Tô Hiến Thành, Phường 3, Thành phố Đà Lạt,
                            Tỉnh Lâm Đồng, Việt Nam
                        </span>
                    </span>
                    <span className="mt-2 text-gray-500">
                        Website:{' '}
                        <span className="text-black">{siteConfig.url}</span>
                    </span>
                    <span className="mt-2 text-gray-500">
                        Điện thoại:{' '}
                        <span className="text-black">02838386852</span>
                    </span>
                    <span className="mt-2 text-gray-500">
                        Fax: <span className="text-black">02838386852</span>
                    </span>
                    <span className="mt-2 text-gray-500">
                        Email: <span className="text-black">hotro@futa.vn</span>
                    </span>
                    <span className="mt-2 text-gray-500">
                        Hotline: <span className="text-black">19006007</span>
                    </span>
                </div>
            </div>
            <div className="md:w-2/3">
                <div className="text-center text-lg/10 font-semibold text-blue-500">
                    Liên hệ với chúng tôi
                </div>
                <div className="bg-slate-200 py-2">
                    <form action="" className="px-4">
                        <div className="grid grid-cols-2 gap-x-6 gap-y-2">
                            <Input placeholder="Futa Bus Line" />
                            <Input placeholder="Họ và Tên" />
                            <Input placeholder="Email" />
                            <Input placeholder="Điện thoại" />
                        </div>
                        <div className="mb-4 mt-2">
                            <Input placeholder="Nhập tiêu đề" />
                        </div>
                        <div className="mb-4">
                            <Textarea placeholder="Nhập ghi chú" />
                        </div>
                        <div className="mt-5 text-center">
                            <Button className="inline-block min-w-32 py-1">
                                Gửi
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Page
