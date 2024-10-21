import React from 'react'

function Page() {
    return (
        <div className="container mx-auto flex flex-col gap-12 bg-white pb-12 pt-8 text-base text-black sm:flex-row">
            <div className="flex flex-col sm:min-h-[450px] sm:min-w-[300px] sm:max-w-[413px]">
                <div className="pl-4 text-lg font-bold uppercase sm:pl-0">
                    Liên hệ chúng tôi
                </div>
                <div className="flex flex-col gap-2 pl-2 text-base leading-6">
                    <div className="text-blue-500">
                        CÔNG TY CỔ PHẦN XE KHÁCH PHƯƠNG TRANG - FUTA BUS LINES
                    </div>
                </div>
            </div>
            <div className=""></div>
        </div>
    )
}

export default Page
