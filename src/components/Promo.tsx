"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Promo() {
    const [timeLeft, setTimeLeft] = useState({
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
    });

    useEffect(() => {
        const countdownDate = new Date();
        countdownDate.setHours(countdownDate.getHours() + 24);

        const formatTime = (unit: number) => {
            return unit < 10 ? "0" + unit : unit.toString();
        };

        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdownDate.getTime() - now;

            if (distance <= 0) {
                clearInterval(interval);
                return;
            }

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor(
                (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
            );
            const minutes = Math.floor(
                (distance % (1000 * 60 * 60)) / (1000 * 60),
            );
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            setTimeLeft({
                days: formatTime(days),
                hours: formatTime(hours),
                minutes: formatTime(minutes),
                seconds: formatTime(seconds),
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="bg-cyan-50">
            <div
                className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6"
                data-aos="fade-up"
                data-aos-delay="300"
            >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div className="flex justify-center lg:justify-start">
                        <Image
                            src="/images/promo.png"
                            alt="Promo Image"
                            width={400}
                            height={400}
                            className="w-full max-w-sm object-contain"
                        />
                    </div>

                    <div className="text-center lg:text-left">
                        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight text-header-gradient mb-5">
                            Promo Spesial Hari Ini!
                        </h2>
                        <p className="text-lg text-center lg:text-left text-gray-700 mb-6">
                            Jangan sampai terlewat! Ambil kesempatan untuk{" "}
                            <br /> mendapatkan promo eksklusif kami hari ini.
                            Ayo segera ambil promo ini sebelum waktunya habis!
                        </p>

                        <div className="flex justify-center lg:justify-start">
                            <Link
                                href="#cta"
                                className="flex w-fit items-center justify-center px-8 py-3 bg-orange-600 text-white font-semibold rounded-lg shadow-xl hover:bg-orange-500 hover:scale-105 transition duration-300 ease-in-out transform"
                            >
                                Ambil Promo Sekarang!
                            </Link>
                        </div>

                        <div className="mt-8 text-2xl font-semibold text-gray-800">
                            <p className="text-lg font-semibold mb-4 text-center lg:text-left">
                                Promo Berakhir Dalam:
                            </p>
                            <div className="flex gap-2 justify-center lg:justify-start text-xl">
                                <div className="text-center">
                                    <div className="h-16 w-16 flex items-center justify-center bg-red-500 p-3 rounded-lg">
                                        <span className="text-3xl font-bold text-white">
                                            {timeLeft.days}
                                        </span>
                                    </div>
                                    <div className="text-sm mt-1">Hari</div>
                                </div>
                                <div className="text-center">
                                    <div className="h-16 w-16 flex items-center justify-center bg-red-500 p-3 rounded-lg">
                                        <span className="text-3xl font-bold text-white">
                                            {timeLeft.hours}
                                        </span>
                                    </div>
                                    <div className="text-sm mt-1">Jam</div>
                                </div>
                                <div className="text-center">
                                    <div className="h-16 w-16 flex items-center justify-center bg-red-500 p-3 rounded-lg">
                                        <span className="text-3xl font-bold text-white">
                                            {timeLeft.minutes}
                                        </span>
                                    </div>
                                    <div className="text-sm mt-1">Menit</div>
                                </div>
                                <div className="text-center">
                                    <div className="h-16 w-16 flex items-center justify-center bg-red-500 p-3 rounded-lg">
                                        <span className="text-3xl font-bold text-white">
                                            {timeLeft.seconds}
                                        </span>
                                    </div>
                                    <div className="text-sm mt-1">Detik</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
