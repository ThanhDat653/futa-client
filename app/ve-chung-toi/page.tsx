import Image from 'next/image'
import React from 'react'

function Page() {
    return (
        <div className="container mx-auto bg-white px-4 py-10 text-black xl:px-0">
            <div className="flex flex-col text-base">
                <div className="">
                    <h1 className="mb-4 text-center text-2xl font-semibold text-blue-500 md:text-4xl">
                        PHƯƠNG TRANG
                    </h1>
                    <h3 className="text-center text-lg font-semibold md:text-2xl">
                        &quot;Chất lượng là danh dự&quot;
                    </h3>
                    <p className="mb-4 font-medium">
                        Tập đoàn Phương Trang – FUTA Group được thành lập năm
                        2001. Với hoạt động kinh doanh chính trong lĩnh vực mua
                        bán xe ô tô, vận tải hành khách, bất động sản và kinh
                        doanh dịch vụ. Phương Trang dần trở thành cái tên quen
                        thuộc đồng hành cùng người Việt trên mọi lĩnh vực.
                    </p>
                    <p className="mb-4 font-medium">
                        Trải qua hơn 20 năm hình thành và phát triển đặt khách
                        hàng là trọng tâm, chúng tôi tự hào trở thành doanh
                        nghiệp vận tải nòng cốt đóng góp tích cực vào sự phát
                        triển chung của ngành vận tải nói riêng và nền kinh tế
                        đất nước nói chung. Luôn cải tiến mang đến chất lượng
                        dịch vụ tối ưu nhất dành cho khách hàng, Công ty Phương
                        Trang được ghi nhận qua nhiều giải thưởng danh giá như
                        “Thương hiệu số 1 Việt Nam, “Top 10 Thương hiệu nổi
                        tiếng Việt Nam”, “Top 10 Dịch vụ hoàn hảo vì quyền lợi
                        người tiêu dùng năm 2022”, “Top 10 Doanh nghiệp tiêu
                        biểu Việt Nam”, “Top 10 thương hiệu, sản phẩm dịch vụ uy
                        tín Việt Nam – ASEAN 2022” …
                    </p>
                </div>
                {/* FUTA BUSLINE */}
                <div className="mt-8 flex w-full flex-col items-start gap-6 sm:flex-row">
                    <div className="relative aspect-[3/2] w-full sm:flex-1">
                        <Image
                            className="w-full rounded-[10px] bg-white object-contain"
                            alt="FUTA BUSLINE"
                            src="https://trip.s3-hcm-r1.s3cloud.vn/landing/Kl99.png"
                            fill
                        />
                    </div>
                    <div className="flex-1">
                        <div className="mb-6 text-[22px] font-semibold uppercase text-blue-500 sm:text-[42px] sm:leading-[50px]">
                            FUTA BUSLINE
                        </div>
                        <div className="">
                            Tuân thủ phương châm “Chất lượng là danh dự” Công ty
                            Cổ phần Xe khách Phương Trang – FUTA Bus Lines hiện
                            đang khai thác hơn 350 phòng vé, trạm trung chuyển
                            trên khắp cả nước, đội ngũ nhân sự vận hành lên đến
                            11.000 nhân viên. Chúng tôi sở hữu 4.500 đầu xe các
                            loại, trong đó có 2.000 xe giường nằm cao cấp, vận
                            hành 144 tuyến xe liên tỉnh với 6.500 chuyến mỗi
                            ngày. Thương hiệu Phương Trang - FUTA Bus Lines đã
                            trở thành lựa chọn hàng đầu cho hàng triệu lượt
                            Khách mỗi năm, đồng thời mở rộng hệ thống từ Nam vào
                            Bắc, tạo ra một mạng lưới vận chuyển đồng bộ và hiệu
                            quả.
                        </div>
                    </div>
                </div>
                {/* FUTA LAND */}
                <div className="mt-16 flex w-full flex-col items-start gap-6 sm:flex-row-reverse">
                    <div className="relative aspect-[3/2] h-full w-full sm:flex-1">
                        <Image
                            className="h-full w-full rounded-[10px] bg-white object-contain"
                            alt="FUTA LAND"
                            src="https://trip.s3-hcm-r1.s3cloud.vn/landing/futaland.jpg"
                            fill
                        />
                    </div>
                    <div className="flex-1">
                        <div className="mb-6 text-[22px] font-semibold uppercase text-blue-500 sm:text-[42px] sm:leading-[50px]">
                            FUTA LAND
                        </div>
                        <div>
                            Đối với mảng bất động sản, Phương Trang đã đạt những
                            thành tựu nhất định với các sản phẩm chất lượng cao
                            như Đà Nẵng Times Square, khu căn hộ cao cấp tại
                            quận Sơn Trà, quận Liên Chiểu và nhiều dự án đang
                            dần hoàn thiện khác.
                        </div>
                    </div>
                </div>
                {/* FUTA EXPRESS */}
                <div className="mt-16 flex w-full flex-col items-start gap-6 sm:flex-row">
                    <div className="relative aspect-[3/2] w-full sm:flex-1">
                        <Image
                            className="rounded-[10px] bg-white object-fill"
                            alt="FUTA EXPRESS"
                            src="https://trip.s3-hcm-r1.s3cloud.vn/landing/Artboard%201@3x.png"
                            fill
                        />
                    </div>
                    <div className="flex-1">
                        <div className="mb-6 text-[22px] font-semibold uppercase text-blue-500 sm:text-[42px] sm:leading-[50px]">
                            FUTA EXPRESS
                        </div>
                        <div className="">
                            <p className="mb-4">
                                Năm 2012, Công ty Cổ phần Dịch vụ Chuyển phát
                                nhanh Phương Trang FUTA - FUTA Express vinh dự
                                là Công ty vận tải hành khách và hàng hóa đầu
                                tiên được Bộ Thông tin & Truyền thông cấp giấy
                                phép hoạt động trong lĩnh vực Bưu chính. Đây
                                cũng chính là bước ngoặt lớn góp phần khẳng định
                                uy tín, chất lượng dịch vụ và niềm tin của Quý
                                Khách hàng đối với FUTA Express.
                            </p>
                            <p className="mb-4">
                                Mỗi ngày với hàng ngàn lượt xe hoạt động liên
                                tục và xuyên suốt khắp các tỉnh, thành, FUTA
                                Express đảm bảo đáp ứng mọi nhu cầu vận chuyển
                                hàng hóa trong phạm vi toàn quốc. Vận chuyển đa
                                dạng các loại hàng hóa: từ bưu phẩm, bưu kiện,
                                thư tín, nông sản, thực phẩm, đến xe máy, xe
                                đạp,... Hiện tại, FUTA Express đang cung cấp đến
                                Khách hàng nhiều tiện ích như: Thu hộ COD, Giao
                                - Nhận tận nơi, Phát hàng bằng mã OTP,...
                            </p>
                        </div>
                    </div>
                </div>
                {/* FUTA CITY BUS */}
                <div className="mt-16 flex w-full flex-col items-start gap-6 sm:flex-row-reverse">
                    <div className="relative aspect-[3/2] w-full sm:flex-1">
                        <Image
                            className="w-full rounded-[10px] bg-white object-fill"
                            alt="FUTA EXPRESS"
                            src="https://trip.s3-hcm-r1.s3cloud.vn/landing/Kl99_2.png"
                            fill
                        />
                    </div>
                    <div className="flex-1">
                        <div className="mb-6 text-[22px] font-semibold uppercase text-blue-500 sm:text-[42px] sm:leading-[50px]">
                            FUTA CITY BUS
                        </div>
                        <div className="space-y-4">
                            <p>
                                FUTA City Bus, thành lập ngày 20/07/2022, là một
                                phần quan trọng trong chiến lược phát triển bền
                                vững của Tập đoàn Phương Trang - FUTA Group
                                trong lĩnh vực vận tải hành khách công cộng. Với
                                tầm nhìn tiên phong, FUTA City Bus đã đầu tư
                                mạnh mẽ vào đội xe chất lượng cao, trang bị đầy
                                đủ tiện nghi như máy lạnh, wifi miễn phí và được
                                vận hành bởi đội ngũ lái xe, nhân viên chuyên
                                nghiệp, giàu kinh nghiệm.
                            </p>
                            <p>
                                Hiện nay, FUTA City Bus đã có mặt tại 14 tỉnh
                                thành, bao gồm Đà Nẵng, Khánh Hòa, Ninh Thuận,
                                Lâm Đồng, TP.HCM, An Giang, Đồng Tháp, Hậu
                                Giang, Bến Tre, Vĩnh Long, và nhiều địa phương
                                khác. Trong năm 2024, chúng tôi dự kiến khai
                                trương hai tuyến buýt mới kết nối TP.HCM với
                                Bình Dương và triển khai 17 tuyến buýt có trợ
                                giá để kết nối với tuyến Metro số 1. Đồng thời,
                                chúng tôi cũng sẽ tham gia đấu thầu các dự án xe
                                buýt tại Bà Rịa - Vũng Tàu, Quảng Nam, Bến Tre,
                                Huế - Quảng Trị, TP.HCM, và nhiều khu vực khác.
                            </p>
                            <p>
                                Năm 2025, FUTA City Bus sẽ tiếp tục mở rộng quy
                                mô hoạt động với kế hoạch tham gia đấu thầu tại
                                các tỉnh Kiên Giang, Sóc Trăng, Cà Mau, Tiền
                                Giang, Đồng Nai, Bình Dương, Bình Thuận và dự
                                kiến tăng quy mô đội xe từ 50% đến 70%. Đặc
                                biệt, chúng tôi sẽ tiên phong trong việc chuyển
                                đổi toàn bộ xe buýt sang xe điện tại TP.HCM,
                                nhằm tối ưu hóa nhu cầu đi lại của người dân,
                                giảm thiểu phương tiện cá nhân và góp phần xây
                                dựng hệ thống giao thông hiện đại, thân thiện
                                với môi trường.
                            </p>
                        </div>
                    </div>
                </div>
                {/* FUTA ADVERTISING */}
                <div className="mt-16 flex w-full flex-col items-start gap-6 sm:flex-row">
                    <div className="relative aspect-[3/2] w-full sm:flex-1">
                        <Image
                            className="w-full rounded-[10px] bg-white object-fill"
                            alt="FUTA ADVERTISING"
                            src="https://trip.s3-hcm-r1.s3cloud.vn/landing/FutaAds.jpg"
                            fill
                        />
                    </div>
                    <div className="flex-1">
                        <div className="mb-6 text-[22px] font-semibold uppercase text-blue-500 sm:text-[42px] sm:leading-[50px]">
                            FUTA ADVERTISING
                        </div>
                        <div className="space-y-4">
                            <p>
                                Bên cạnh đó, chúng tôi còn đầu tư vào lĩnh vực
                                truyền thông, quảng cáo với việc thành lập Công
                                ty Cổ phần Quảng Cáo FUTA Việt Nam – FUTA Ads,
                                là đơn vị khai thác quảng cáo trên toàn bộ hệ
                                sinh thái của Tập Đoàn Phương Trang – FUTA Group
                                với đa dạng hình thức quảng cáo như Quảng cáo xe
                                tuyến đường dài, Quảng cáo vận chuyển hàng,
                                Quảng cáo xe taxi, gian hàng bán hàng… Trong xu
                                hướng 4.0 hiện nay, chúng tôi cũng đang ứng dụng
                                và phát triển những công nghệ quảng cáo kỹ thuật
                                số (Digital Marketing) với mục tiêu mang đến
                                giải pháp tiếp thị toàn diện hiệu quả cho doanh
                                nghiệp.
                            </p>
                        </div>
                    </div>
                </div>
                {/* FUTA REST STOP */}
                <div className="mt-16 flex w-full flex-col items-start gap-6 sm:flex-row-reverse">
                    <div className="relative aspect-[3/2] w-full sm:flex-1">
                        <Image
                            className="w-full rounded-[10px] bg-white object-fill"
                            alt="FUTA REST STOP"
                            src="https://trip.s3-hcm-r1.s3cloud.vn/landing/tram%20dung-01.png"
                            fill
                        />
                    </div>
                    <div className="flex-1">
                        <div className="mb-6 text-[22px] font-semibold uppercase text-blue-500 sm:text-[42px] sm:leading-[50px]">
                            FUTA REST STOP
                        </div>
                        <div className="">
                            <p>
                                Hiểu được nhu cầu nghỉ ngơi, thư giãn của hành
                                Khách trên các hành trình dài qua nhiều tỉnh,
                                thành phố, Công ty Phương Trang còn đầu tư vào
                                hệ thống trạm dừng Phúc Lộc tại các khu vực
                                trọng điểm như Tiền Giang, Lâm Đồng, Bến Tre,
                                Vĩnh Long, Sóc Trăng… Hệ thống Trạm dừng Phúc
                                Lộc được đầu tư toàn diện, đảm bảo phục vụ lượng
                                lớn khách hàng 24/7.
                                <br />
                                Các Trạm dừng Phúc Lộc mang đến nhiều món ăn hấp
                                dẫn, phong phú, phù hợp với khẩu vị đa dạng của
                                hành khách. Bên trong trạm dừng còn có các gian
                                hàng đặc sản như trái cây theo mùa hoặc các loại
                                bánh kẹo đặc trưng của từng vùng miền, nơi khách
                                hàng có thể thưởng thức tại chỗ hoặc mua về làm
                                quà cho người thân. Những nỗ lực này nhằm mang
                                đến chuyến đi thoải mái và thư giãn cùng trải
                                nghiệm dịch vụ tối ưu dành cho Khách hàng Phương
                                Trang nói riêng và tất cả hành Khách nói chung.
                            </p>
                        </div>
                    </div>
                </div>
                {/* FUTA APPLICATION */}
                <div className="mt-16 flex w-full flex-col items-start gap-6 sm:flex-row">
                    <div className="relative aspect-[3/2] w-full sm:flex-1">
                        <Image
                            className="w-full rounded-[10px] bg-white object-fill"
                            alt="FUTA APPLICATION"
                            src="https://trip.s3-hcm-r1.s3cloud.vn/landing/Artboard%202@3x.png"
                            fill
                        />
                    </div>
                    <div className="flex-1">
                        <div className="mb-6 text-[22px] font-semibold uppercase text-blue-500 sm:text-[42px] sm:leading-[50px]">
                            FUTA APPLICATION
                        </div>
                        <div className="space-y-4">
                            <p>
                                Cùng với việc đầu tư phát triển, mở rộng mạng
                                lưới, tuyến mới và đầu từ những dòng xe chất
                                lượng cao, chúng tôi còn tập trung công nghệ
                                tiên tiến vào hoạt động kinh doanh. Khách hàng
                                hiện có thể dễ dàng mua vé, gọi xe chỉ với vài
                                thao tác đơn giản trên ứng dụng FUTA (FUTA app)
                                cũng như tận hưởng các chương trình ưu đãi thanh
                                toán của các đối tác trong từng thời điểm.{' '}
                            </p>
                            <p>
                                Sử dụng FUTA app cho nhu cầu mua vé du lịch, đi
                                lại, vận chuyển, Khách hàng còn có cơ hội tích
                                luỹ điểm sau chuyến đi: Đổi điểm để mua vé xe
                                Phương Trang và giao hàng hoá đi tỉnh, miễn phí,
                                giảm giá… khi đặt xe di chuyển từ bến/bãi Phương
                                Trang về nhà và ngược lại, đặt xe giá rẻ di
                                chuyển trong thành phố...Hãy trải nghiệm FUTA
                                app ngay – chúng tôi hân hạnh được lắng nghe và
                                phục vụ Quý Khách.
                            </p>
                        </div>
                    </div>
                </div>
                {/* VISION  */}
                <div className="mt-16 flex w-full flex-col items-start gap-6 sm:flex-row">
                    <div className="relative aspect-[3/2] w-full sm:flex-1">
                        <Image
                            className="w-full rounded-[10px] bg-white object-fill"
                            alt="FUTA VISION"
                            src="https://trip.s3-hcm-r1.s3cloud.vn/landing/Artboard%203@3x.png"
                            fill
                        />
                    </div>
                    <div className="flex-1">
                        <div className="mb-6 text-[22px] font-semibold uppercase text-blue-500 sm:text-[42px] sm:leading-[50px]">
                            FUTA APPLICATION
                        </div>
                        <div className="space-y-4">
                            <p>
                                <strong>
                                    <span className="text-blue-400">
                                        BÁO ĐÁP TỔ QUỐC VÌ MỘT VIỆT NAM HÙNG
                                        CƯỜNG.
                                    </span>
                                </strong>
                                <br />
                                Trở thành Tập Đoàn uy tín và chất lượng hàng đầu
                                Việt Nam với cam kết:
                            </p>
                            <ul className="ml-4 list-disc space-y-4">
                                <li>
                                    Tạo môi trường làm việc năng động, thân
                                    thiện.
                                </li>
                                <li>Phát triển từ lòng tin của khách hàng.</li>
                                <li>
                                    Trở thành tập đoàn dẫn đầu chuyên nghiệp.
                                </li>
                            </ul>
                            <p>
                                <strong className="text-blue-400">
                                    Phương Trang
                                </strong>{' '}
                                luôn phấn đấu làm việc hiệu quả nhất, để luôn
                                cống hiến, đóng góp hết sức mình vì một Việt Nam
                                hùng cường.
                            </p>
                        </div>
                    </div>
                </div>
                {/* GÍA TRỊ CỐT LỖI */}
                <div className="mt-16 flex w-full flex-col items-start gap-6 sm:flex-row-reverse">
                    <div className="relative aspect-[3/2] w-full sm:flex-1">
                        <Image
                            className="w-full rounded-[10px] bg-white object-fill"
                            alt="FUTA CORES"
                            src="https://trip.s3-hcm-r1.s3cloud.vn/landing/Artboard%204@3x.png"
                            fill
                        />
                    </div>
                    <div className="flex-1">
                        <div className="mb-6 text-[22px] font-semibold uppercase text-blue-500 sm:text-[42px] sm:leading-[50px]">
                            Giá trị cốt lõi
                        </div>
                        <div className="space-y-4">
                            <p>
                                Giá trị cốt lõi –{' '}
                                <strong>
                                    <span className="text-blue-400">
                                        {' '}
                                        Phương Trang
                                    </span>
                                </strong>
                            </p>
                            <ul className="ml-4 list-disc space-y-4">
                                <li>
                                    <p>
                                        <strong>
                                            <span className="text-blue-400">
                                                Phương:{' '}
                                            </span>
                                        </strong>
                                        chữ “Phương” trong tiếng Hán nghĩa là
                                        Vuông, vật gì hình thể ngay thẳng đều
                                        gọi là phương. thể hiện sự chính trực,
                                        phẩm chất đạo đức tốt đẹp. Mọi hành động
                                        của Phương Trang luôn thể hiện sự minh
                                        bạch, công bằng chính trực với đồng
                                        nghiệp, khách hàng, đối tác.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <strong>
                                            <span className="text-blue-400">
                                                Trang:{' '}
                                            </span>
                                        </strong>
                                        mang nghĩa To lớn, Tráng lệ. Hướng tới
                                        sự thành công vượt bậc, thể hiện ý chí,
                                        khát vọng thực hiện những mục tiêu lớn,
                                        đem lại giá trị lớn cho cộng động, cho
                                        xã hội.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <strong>
                                            <span className="text-blue-400">
                                                Phương Trang{' '}
                                            </span>
                                        </strong>
                                        với hàm nghĩa càng phát triển, càng to
                                        lớn lại càng phải “CHÍNH TRỰC”. Luôn là
                                        biểu tượng của sự phát triển dựa trên
                                        những giá trị đạo đức tốt đẹp nhất.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* TRIẾT LÝ */}
                <div className="mt-16 flex w-full flex-col items-start gap-6 sm:flex-row">
                    <div className="relative aspect-[3/2] w-full sm:flex-1">
                        <Image
                            className="w-full rounded-[10px] bg-white object-fill"
                            alt="FUTA VISION"
                            src="https://trip.s3-hcm-r1.s3cloud.vn/landing/Artboard%205@3x.png"
                            fill
                        />
                    </div>
                    <div className="flex-1">
                        <div className="mb-6 text-[22px] font-semibold uppercase text-blue-500 sm:text-[42px] sm:leading-[50px]">
                            TRIẾT LÝ
                        </div>
                        <div className="space-y-4">
                            <p>
                                Hội nhập và phát triển góp phần vào sự thịnh
                                vượng của đất nước. Nguồn nhân lực chính là nhân
                                tố then chốt, là tài sản lớn nhất của Công ty
                                Phương Trang, chú trọng tạo ra môi trường làm
                                việc hiện đại, năng động, thân thiện và trao cơ
                                hội phát triển nghề nghiệp cho tất cả thành
                                viên. Sự hài lòng của khách hàng là minh chứng
                                cho chất lượng dịch vụ của Phương Trang. Không
                                ngừng hoàn thiện và phát triển năng lực kinh
                                doanh, Phương Trang thấu hiểu nhu cầu khách
                                hàng, mang đến sản phẩm dịch vụ hoàn hảo, đáp
                                ứng tối đa mong đợi của khách hàng.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page
