import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Promo from "@/components/Promo";

export default function Home() {
    return (
        <div className="min-h-screen overflow-x-hidden font-sans antialiased bg-gray-100">
            <div className="top-0 left-0 w-full xl:h-[850px] lg:h-[700px] h-[750px] absolute bg-gradient-to-b from-cyan-50 to-cyan-100 z-0"></div>

            <Navbar />

            <main className="relative z-10 pt-24 lg:pt-32">
                <div className="mx-auto">
                    {/* Hero Section */}
                    <section
                        id="home"
                        className="min-h-screen pt-20 lg:pt-24 relative"
                    >
                        <div className="relative w-full max-w-screen-xl mx-auto grid grid-cols-12 gap-x-6 px-6 lg:px-12">
                            <div className="col-span-12 lg:col-span-7 flex items-center order-2 lg:order-1 pt-12 lg:pt-0">
                                <div className="space-y-6 text-center lg:text-left z-10">
                                    <h1
                                        className="text-4xl sm:text-5xl xl:text-6xl font-bold leading-tight capitalize"
                                        data-aos="fade-right"
                                        data-aos-delay="100"
                                    >
                                        Mau{" "}
                                        <span className="text-header-gradient">
                                            Nyuci
                                        </span>
                                        ?
                                        <br />
                                        <span>Tapi </span>
                                        <span className="text-header-gradient">
                                            Gak Ada Waktu
                                        </span>
                                        <br />
                                        <span>Buat Nyuci?</span>
                                    </h1>

                                    <p
                                        data-aos="fade-down"
                                        data-aos-delay="200"
                                        className="text-lg sm:text-xl text-gray-700 hidden sm:block"
                                    >
                                        Serahin aja ke kita buat{" "}
                                        <span className="font-bold">
                                            dicuci
                                        </span>{" "}
                                        dan kamu bisa{" "}
                                        <span className="font-bold">
                                            lanjut ngerjain tugasmu atau
                                            beraktivitas
                                        </span>{" "}
                                        di luar rumah tanpa khawatir cucian
                                        menumpuk di rumah, kos, atau kontrakan.
                                    </p>

                                    <div
                                        data-aos="fade-down"
                                        data-aos-delay="300"
                                        className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-6 items-center justify-center lg:justify-start"
                                    >
                                        <button
                                            type="button"
                                            className="rounded-full hover:shadow-md hover:shadow-cyan-500/50 transition duration-300 px-8 py-4 text-lg bg-gradient-to-r from-cyan-500 to-cyan-600 border border-cyan-500 text-white max-w-fit font-semibold"
                                        >
                                            Hubungi Sekarang!
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="col-span-12 lg:col-span-5 flex justify-center items-center order-1 lg:order-2 z-10">
                                <Image
                                    data-aos="fade-up"
                                    data-aos-delay="200"
                                    src="/images/hero-image.png"
                                    width={500}
                                    height={500}
                                    className="w-3/4 sm:w-full max-w-md lg:max-w-lg xl:max-w-xl"
                                    alt="Freshly Laundry Hero"
                                />
                            </div>

                            {/* Decorative patterns */}
                            <Image
                                data-aos="fade-up"
                                data-aos-delay="300"
                                src="/images/pattern/ellipse-1.png"
                                width={40}
                                height={40}
                                className="hidden lg:block absolute -bottom-20 left-0 w-8"
                                alt="pattern"
                            />
                            <Image
                                data-aos="fade-up"
                                data-aos-delay="300"
                                src="/images/pattern/ellipse-2.png"
                                width={40}
                                height={40}
                                className="hidden lg:block absolute top-10 right-1/3 w-8"
                                alt="pattern"
                            />
                            <Image
                                data-aos="fade-up"
                                data-aos-delay="300"
                                src="/images/pattern/ellipse-3.png"
                                width={40}
                                height={40}
                                className="hidden lg:block absolute bottom-40 right-0 w-8"
                                alt="pattern"
                            />
                            <Image
                                data-aos="fade-up"
                                data-aos-delay="300"
                                src="/images/pattern/star.png"
                                width={60}
                                height={60}
                                className="hidden lg:block absolute top-20 right-16 w-16"
                                alt="pattern"
                            />
                        </div>
                    </section>

                    {/* Cek Status Tracker */}
                    <section
                        className="max-w-screen-xl px-4 sm:px-6 lg:px-8 mx-auto -mt-10 lg:-mt-20 relative z-20"
                        data-aos="fade-up"
                    >
                        <div className="bg-white rounded-[2.25rem] sm:rounded-3xl shadow-xl p-8 sm:p-10 lg:p-12 text-center mx-4">
                            <h2 className="text-3xl sm:text-4xl font-semibold text-cyan-600 mb-6">
                                Cek Status Cucian
                            </h2>
                            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                                Apakah cucian Anda sudah selesai? Klik tombol di
                                bawah untuk memeriksa status cucian Anda
                                sekarang juga!
                            </p>
                            <Link href="#">
                                <button
                                    type="button"
                                    className="rounded-full hover:shadow-md hover:shadow-cyan-500/50 transition duration-300 px-10 py-4 text-lg bg-gradient-to-r from-cyan-500 to-cyan-600 border border-cyan-500 text-white font-semibold"
                                >
                                    Cek Sekarang
                                </button>
                            </Link>
                        </div>
                    </section>

                    {/* Services Section */}
                    <section
                        className="py-20 lg:py-24"
                        id="service"
                        data-aos="fade-up"
                    >
                        <div className="max-w-screen-xl px-4 sm:px-6 lg:px-8 mx-auto">
                            <div className="mb-14 text-center">
                                <h2 className="text-4xl font-bold text-gray-900 leading-tight text-header-gradient">
                                    Nikmati Layanan Laundry Terbaik Kami
                                </h2>
                                <p className="text-lg font-normal text-gray-500 mt-4 mb-10">
                                    Kami menyediakan layanan laundry satuan dan
                                    kiloan dengan kualitas terbaik untuk
                                    memenuhi kebutuhan Anda.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                                <div className="group relative bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center justify-center text-center hover:bg-cyan-600 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                                    <div className="bg-cyan-600 p-6 rounded-full mb-6 group-hover:bg-white transition-all duration-300">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 640 512"
                                            width="48"
                                            height="48"
                                            className="fill-white group-hover:fill-cyan-600 transition-all duration-300"
                                        >
                                            <path d="M211.8 0c7.8 0 14.3 5.7 16.7 13.2C240.8 51.9 277.1 80 320 80s79.2-28.1 91.5-66.8C413.9 5.7 420.4 0 428.2 0l12.6 0c22.5 0 44.2 7.9 61.5 22.3L628.5 127.4c6.6 5.5 10.7 13.5 11.4 22.1s-2.1 17.1-7.8 23.6l-56 64c-11.4 13.1-31.2 14.6-44.6 3.5L480 197.7 480 448c0 35.3-28.7 64-64 64l-192 0c-35.3 0-64-28.7-64-64l0-250.3-51.5 42.9c-13.3 11.1-33.1 9.6-44.6-3.5l-56-64c-5.7-6.5-8.5-15-7.8-23.6s4.8-16.6 11.4-22.1L137.7 22.3C155 7.9 176.7 0 199.2 0l12.6 0zM64 224l0 160 0 80c0 26.5 21.5 48 48 48l224 0c26.5 0 48-21.5 48-48l0-80 0-160-64 0 0 160-192 0 0-160-64 0zm448 0l0 256c0 17.7 14.3 32 32 32s32-14.3 32-32l0-256-64 0z" />
                                        </svg>
                                    </div>
                                    <h4 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-white">
                                        Laundry Satuan
                                    </h4>
                                    <p className="text-base text-gray-500 group-hover:text-gray-100">
                                        Layanan laundry satuan untuk pakaian
                                        Anda yang membutuhkan perlakuan khusus
                                        dan harga per item.
                                    </p>
                                </div>

                                <div className="group relative bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center justify-center text-center hover:bg-cyan-600 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                                    <div className="bg-cyan-600 p-6 rounded-full mb-6 group-hover:bg-white transition-all duration-300">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 576 512"
                                            width="48"
                                            height="48"
                                            className="fill-white group-hover:fill-cyan-600 transition-all duration-300"
                                        >
                                            <path d="M253.3 35.1c6.1-11.8 1.5-26.3-10.2-32.4s-26.3-1.5-32.4 10.2L117.6 192 32 192c-17.7 0-32 14.3-32 32s14.3 32 32 32L83.9 463.5C91 492 116.6 512 146 512L430 512c29.4 0 55-20 62.1-48.5L544 256c17.7 0 32-14.3 32-32s-14.3-32-32-32l-85.6 0L365.3 12.9C359.2 1.2 344.7-3.4 332.9 2.7s-16.3 20.6-10.2 32.4L404.3 192l-232.6 0L253.3 35.1zM192 304l0 96c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-96c0-8.8 7.2-16 16-16s16 7.2 16 16zm96-16c8.8 0 16 7.2 16 16l0 96c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-96c0-8.8 7.2-16 16-16zm128 16l0 96c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-96c0-8.8 7.2-16 16-16s16 7.2 16 16z" />
                                        </svg>
                                    </div>
                                    <h4 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-white">
                                        Laundry Kiloan
                                    </h4>
                                    <p className="text-base text-gray-500 group-hover:text-gray-100">
                                        Hemat dengan layanan laundry kiloan
                                        kami, cocok untuk mencuci banyak pakaian
                                        sekaligus dengan tarif per kilogram.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <Promo />

                    {/* Steps Section */}
                    <section
                        id="steps"
                        className="max-w-screen-xl py-20 lg:py-24 mx-auto flex flex-col overflow-hidden px-4 sm:px-6 lg:px-8"
                    >
                        <div className="mb-14 text-left" data-aos="fade-up">
                            <h2 className="text-4xl font-bold text-gray-900 leading-tight text-header-gradient">
                                Bagaimana Kami Bekerja
                            </h2>
                            <p className="text-lg font-normal text-gray-500 mt-4 mb-10">
                                Pelajari bagaimana tim kami memberikan layanan
                                laundry terbaik dengan kualitas yang terjamin!
                            </p>
                        </div>

                        <div className="grid grid-cols-12 gap-8 lg:gap-12">
                            <div
                                className="col-span-12 lg:col-span-5 flex justify-center items-center"
                                data-aos="fade-right"
                            >
                                <Image
                                    src="/images/step/staff.png"
                                    alt="karyawan"
                                    width={400}
                                    height={500}
                                    className="w-auto max-w-full h-auto object-contain rounded-2xl shadow-2xl hidden md:block"
                                />
                            </div>

                            <div
                                className="grid col-span-12 lg:col-span-7 grid-cols-1 sm:grid-cols-2 gap-8 w-full"
                                data-aos="fade-left"
                            >
                                {[
                                    {
                                        id: 1,
                                        title: "Pemesanan",
                                        text: "Hubungi Freshly Laundry via WhatsApp atau datang ke outlet. Tentukan layanan & jadwal penjemputan.",
                                        icon: (
                                            <path d="M36.8 192l566.3 0c20.3 0 36.8-16.5 36.8-36.8c0-7.3-2.2-14.4-6.2-20.4L558.2 21.4C549.3 8 534.4 0 518.3 0L121.7 0c-16 0-31 8-39.9 21.4L6.2 134.7c-4 6.1-6.2 13.2-6.2 20.4C0 175.5 16.5 192 36.8 192zM64 224l0 160 0 80c0 26.5 21.5 48 48 48l224 0c26.5 0 48-21.5 48-48l0-80 0-160-64 0 0 160-192 0 0-160-64 0zm448 0l0 256c0 17.7 14.3 32 32 32s32-14.3 32-32l0-256-64 0z" />
                                        ),
                                    },
                                    {
                                        id: 2,
                                        title: "Penjemputan",
                                        text: "Tim akan datang tepat waktu ke lokasi untuk menjemput pakaian kotor dan dicatat rapi.",
                                        icon: (
                                            <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                                        ),
                                    },
                                    {
                                        id: 3,
                                        title: "Pencucian",
                                        text: "Pakaian dicuci dengan deterjen berkualitas dan mesin modern untuk hasil yang optimal.",
                                        icon: (
                                            <path d="M96 24c0-13.3 10.7-24 24-24l80 0c13.3 0 24 10.7 24 24l0 24 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24L88 96C74.7 96 64 85.3 64 72s10.7-24 24-24l8 0 0-24zM0 256c0-70.7 57.3-128 128-128l128 0c70.7 0 128 57.3 128 128l0 192c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 256zm256 0l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32z" />
                                        ),
                                    },
                                    {
                                        id: 4,
                                        title: "Pengantaran",
                                        text: "Setelah selesai, kami antarkan kembali ke lokasi Anda. Nikmati pakaian bersih tanpa repot.",
                                        icon: (
                                            <path d="M48 0C21.5 0 0 21.5 0 48L0 368c0 26.5 21.5 48 48 48l16 0c0 53 43 96 96 96s96-43 96-96l128 0c0 53 43 96 96 96s96-43 96-96l32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-64 0-32 0-18.7c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7L416 96l0-48c0-26.5-21.5-48-48-48L48 0zM64 48l384 0c8.8 0 16 7.2 16 16l0 32-416 0 0-32c0-8.8 7.2-16 16-16zM400 256l0 96c0 8.8 7.2 16 16 16s16-7.2 16-16l0-96c0-8.8-7.2-16-16-16s-16 7.2-16 16z" />
                                        ),
                                    },
                                ].map((step, idx) => (
                                    <div
                                        key={step.id}
                                        className={`flex flex-col items-center space-y-4 text-center shadow-lg bg-white border border-gray-100 rounded-2xl hover:border-cyan-500 p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 min-h-[300px] ${idx % 2 === 0 ? "lg:-translate-y-4" : "lg:translate-y-4"}`}
                                    >
                                        <h1 className="text-lg text-cyan-500 font-bold">
                                            Tahap {step.id}
                                        </h1>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 640 512"
                                            className="w-14 h-14 fill-cyan-500 my-4"
                                        >
                                            {step.icon}
                                        </svg>
                                        <h3 className="text-xl text-neutral-800 font-bold">
                                            {step.title}
                                        </h3>
                                        <p className="text-sm text-gray-600 leading-relaxed flex-grow">
                                            {step.text}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Location */}
                    <section className="bg-cyan-50 py-20" id="location">
                        <div
                            className="py-16 px-4 mx-auto max-w-screen-xl lg:px-6"
                            data-aos="fade-up"
                        >
                            <div className="mb-12 text-center">
                                <h2 className="text-4xl font-bold text-gray-900 leading-tight text-header-gradient">
                                    Lokasi Kami
                                </h2>
                                <p className="text-lg font-normal text-gray-500 mt-4 mb-2">
                                    Temui kami di lokasi berikut, kami siap
                                    menyambut Anda!
                                </p>
                                <p className="text-md font-medium text-gray-800 mb-6">
                                    Jl. Amd. Babakan Pocis No.2, Bakti Jaya,
                                    Kec. Setu, Kota Tangerang Selatan, Banten
                                    15315
                                </p>
                            </div>

                            <div className="w-full max-w-7xl mx-auto shadow-2xl rounded-2xl overflow-hidden border-4 border-white">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.3422327309086!2d106.69933147457688!3d-6.34971656212099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69e598c7e615b9%3A0x63adc39be99da7de!2sSMK%20Al%20Amanah!5e0!3m2!1sid!2sid!4v1738331165221"
                                    width="100%"
                                    height="450"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                ></iframe>
                            </div>
                        </div>
                    </section>

                    {/* Stats */}
                    <section className="py-20" data-aos="fade-up">
                        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                            <div className="rounded-3xl py-12 px-10 xl:py-16 xl:px-20 bg-white flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 shadow-xl border border-gray-100">
                                <div className="w-full lg:w-64 text-center lg:text-left">
                                    <h3 className="text-gray-500 font-medium uppercase tracking-wider mb-2">
                                        Pencapaian
                                    </h3>
                                    <h2 className="text-3xl font-bold text-cyan-500">
                                        Freshly Laundry
                                    </h2>
                                </div>

                                <div className="w-full lg:flex-1 grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-10 text-center">
                                    {[
                                        { val: "160+", label: "ULASAN KLIEN" },
                                        {
                                            val: "100k+",
                                            label: "PAKAIAN DICUCI",
                                        },
                                        {
                                            val: "5+",
                                            label: "TAHUN PENGALAMAN",
                                        },
                                        { val: "500+", label: "PELANGGAN" },
                                    ].map((stat, i) => (
                                        <div
                                            key={i}
                                            className="flex flex-col items-center"
                                        >
                                            <div className="font-extrabold text-4xl lg:text-5xl text-gray-900 mb-3">
                                                {stat.val}
                                            </div>
                                            <span className="text-gray-600 font-medium text-sm">
                                                {stat.label}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Testimonials */}
                    <section className="bg-cyan-50 py-24" id="testimonials">
                        <div
                            className="max-w-screen-xl mx-auto px-4"
                            data-aos="fade-up"
                        >
                            <div className="text-center mb-16">
                                <h2 className="text-4xl font-bold tracking-tight text-header-gradient mb-4">
                                    Testimoni Customer Kami
                                </h2>
                                <p className="text-lg text-gray-500">
                                    Lihat apa kata pelanggan kami tentang
                                    layanan Freshly Laundry yang luar biasa!
                                </p>
                            </div>

                            <div
                                data-hs-carousel='{"loadingClasses": "opacity-0","dotsItemClasses": "hs-carousel-active:bg-cyan-600 hs-carousel-active:border-cyan-600 size-3 border border-cyan-400 rounded-full cursor-pointer","isAutoPlay": true}'
                                className="relative"
                            >
                                <div className="hs-carousel relative overflow-hidden w-full lg:w-3/4 mx-auto min-h-72 bg-white rounded-3xl shadow-xl border border-gray-100 p-8 lg:p-12">
                                    <div className="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 w-full h-full">
                                        {[
                                            {
                                                name: "Dina Sari",
                                                text: "Sangat puas dengan layanan dari Freshly Laundry! Pakaian saya dicuci dengan baik dan selalu wangi segar.",
                                            },
                                            {
                                                name: "Rudi Wibowo",
                                                text: "Pelayanan cepat dan hasil memuaskan! Tidak pernah mengecewakan.",
                                            },
                                            {
                                                name: "Andi Prasetya",
                                                text: "Wah pelayanannya keren banget, cepet kering dan nggak bikin baju luntur!",
                                            },
                                        ].map((testi, i) => (
                                            <div
                                                key={i}
                                                className="hs-carousel-slide w-full h-full flex flex-col justify-center items-center text-center p-6"
                                            >
                                                <div className="flex gap-1 mb-6 text-yellow-400">
                                                    {Array.from({
                                                        length: 5,
                                                    }).map((_, j) => (
                                                        <svg
                                                            key={j}
                                                            className="w-6 h-6"
                                                            fill="currentColor"
                                                            viewBox="0 0 16 16"
                                                        >
                                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                        </svg>
                                                    ))}
                                                </div>
                                                <p className="text-lg lg:text-xl text-gray-700 italic font-medium leading-relaxed max-w-2xl px-4">
                                                    &quot;{testi.text}&quot;
                                                </p>
                                                <h4 className="mt-8 font-bold text-gray-900 text-lg">
                                                    — {testi.name}
                                                </h4>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* FAQ */}
                    <section className="w-full py-24 bg-white" id="faq">
                        <div className="max-w-screen-xl px-4 sm:px-8 mx-auto grid grid-cols-12 gap-x-6 lg:gap-x-12 items-center">
                            <div
                                data-aos="fade-right"
                                className="col-span-12 lg:col-span-6 mb-12 lg:mb-0"
                            >
                                <Image
                                    src="/images/thinking-faq.png"
                                    width={500}
                                    height={500}
                                    className="w-full object-contain drop-shadow-2xl"
                                    alt="FAQ"
                                />
                            </div>

                            <div
                                data-aos="fade-left"
                                className="col-span-12 lg:col-span-6"
                            >
                                <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-gray-900">
                                    Pertanyaan Umum
                                </h2>
                                <div className="hs-accordion-group space-y-3">
                                    {[
                                        {
                                            q: "Apa yang harus saya persiapkan untuk Pickup?",
                                            a: "Siapkan pakaian kotor Anda, lalu hubungi tim CS kami. Kurir akan datang sesuai estimasi waktu.",
                                        },
                                        {
                                            q: "Apakah saya mendapatkan tanda terima?",
                                            a: "Ya, Anda dapat melihat e-faktur di aplikasi atau kami kirimkan via WhatsApp.",
                                        },
                                        {
                                            q: "Estimasi berapa lama pencucian?",
                                            a: "Tergantung pilihan paket, mulai dari express 6 jam hingga reguler 3 hari.",
                                        },
                                        {
                                            q: "Metode pembayaran apa saja yang tersedia?",
                                            a: "Saat ini kami menerima Tunai (Cash on Delivery) dan Transfer Bank/E-Wallet.",
                                        },
                                    ].map((faq, i) => (
                                        <div
                                            key={i}
                                            className="hs-accordion hs-accordion-active:border-cyan-500 bg-gray-50 border border-transparent rounded-xl shadow-sm hover:shadow-md transition-shadow"
                                        >
                                            <button className="hs-accordion-toggle hs-accordion-active:text-cyan-600 inline-flex justify-between items-center w-full font-semibold text-start py-5 px-6 hover:text-cyan-500 text-gray-800">
                                                <span>{faq.q}</span>
                                                <svg
                                                    className="hs-accordion-active:hidden block w-5 h-5 text-cyan-500"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="24"
                                                    height="24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                >
                                                    <path d="M5 12h14" />
                                                    <path d="M12 5v14" />
                                                </svg>
                                                <svg
                                                    className="hs-accordion-active:block hidden w-5 h-5 text-cyan-600"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="24"
                                                    height="24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                >
                                                    <path d="M5 12h14" />
                                                </svg>
                                            </button>
                                            <div className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300">
                                                <div className="pb-5 px-6 text-gray-600 leading-relaxed font-medium">
                                                    {faq.a}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>

            {/* Footer yang sudah dirapikan sepenuhnya */}
            <footer className="w-full bg-gradient-to-b from-cyan-600 to-cyan-700 text-white py-8">
                <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-10 lg:gap-12">
                        {/* Kolom 1: Logo + Deskripsi singkat */}
                        <div className="flex flex-col items-center md:items-start">
                            <Link href="/" className="mb-6">
                                <div className="bg-white rounded-full p-3 shadow-lg">
                                    <Image
                                        src="/images/Logo.png"
                                        alt="Freshly Laundry Logo"
                                        width={80}
                                        height={80}
                                        className="w-20 h-20 object-contain"
                                    />
                                </div>
                            </Link>
                            <p className="text-cyan-100 text-sm text-center md:text-left max-w-xs">
                                Laundry cepat, bersih, wangi, dan tanpa repot.
                                Kami antar jemput ke rumah/kos/kontrakan Anda di
                                wilayah Tangerang Selatan!
                            </p>
                        </div>

                        {/* Kolom 2: Alamat */}
                        <div className="flex flex-col items-center md:items-start">
                            <h3 className="text-lg font-semibold mb-4">
                                Alamat Kami
                            </h3>
                            <div className="flex items-start gap-3">
                                <svg
                                    className="w-6 h-6 text-cyan-200 mt-1 flex-shrink-0"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                </svg>
                                <p className="text-sm leading-relaxed">
                                    Jl. Amd. Babakan Pocis No.2, Bakti Jaya,
                                    Kec. Setu, Kota Tangerang Selatan, Banten
                                    15315
                                </p>
                            </div>
                        </div>

                        {/* Kolom 3: Kontak */}
                        <div className="flex flex-col items-center md:items-start">
                            <h3 className="text-lg font-semibold mb-4">
                                Hubungi Kami
                            </h3>
                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <svg
                                        className="w-6 h-6 text-cyan-200"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                        />
                                    </svg>
                                    <span className="text-sm">
                                        +62 123 456 789
                                    </span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <svg
                                        className="w-6 h-6 text-cyan-200"
                                        fill="currentColor"
                                        viewBox="0 0 448 512"
                                    >
                                        <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                                    </svg>
                                    <span className="text-sm">
                                        +62 123 456 789 (WA)
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Kolom 4: Jam Buka & Sosial Media */}
                        <div className="flex flex-col items-center md:items-start">
                            <h3 className="text-lg font-semibold mb-4">
                                Jam Operasional
                            </h3>
                            <div className="flex items-center gap-3 mb-8">
                                <svg
                                    className="w-6 h-6 text-cyan-200"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                                <span className="text-sm">
                                    Senin - Minggu: 08:00 - 22:00 WIB
                                </span>
                            </div>

                            <h3 className="text-lg font-semibold mb-4">
                                Ikuti Kami
                            </h3>
                            <div className="flex space-x-4">
                                <Link
                                    href="#"
                                    className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-all duration-300"
                                    aria-label="Twitter"
                                >
                                    <svg
                                        className="w-5 h-5"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                    </svg>
                                </Link>

                                <Link
                                    href="#"
                                    className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-all duration-300"
                                    aria-label="Instagram"
                                >
                                    <svg
                                        className="w-5 h-5"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.229.273 2.652.072 7.01.014 8.29 0 8.698 0 12c0 3.302.014 3.71.072 4.99.201 4.358 2.623 6.781 6.981 6.938 1.28.058 1.688.072 4.949.072 3.261 0 3.669-.014 4.949-.072 4.358-.157 6.78-2.58 6.981-6.938.058-1.28.072-1.688.072-4.99 0-3.302-.014-3.71-.072-4.99C22.727 2.652 20.205.229 15.847.072 14.667.014 14.259 0 12 0z" />
                                        <circle
                                            cx="12"
                                            cy="12"
                                            r="3.5"
                                            fill="white"
                                        />
                                    </svg>
                                </Link>

                                <Link
                                    href="#"
                                    className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-all duration-300"
                                    aria-label="Facebook"
                                >
                                    <svg
                                        className="w-5 h-5"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 pt-8 border-t border-cyan-400/30 text-center text-sm text-cyan-100">
                        © {new Date().getFullYear()} Freshly Laundry. Semua hak
                        cipta dilindungi undang-undang.
                    </div>
                </div>
            </footer>
        </div>
    );
}
