"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full">
      {/* Navbar utama */}
      <nav
        className={`w-full transition-all duration-500 ease-in-out ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="mx-auto max-w-screen-xl px-5 sm:px-6 md:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/images/Logo.png"
              alt="Freshly Laundry Logo"
              width={64}
              height={64}
              className="w-11 sm:w-12 md:w-14 xl:w-16 transition-all duration-300"
              priority
            />
          </Link>

          {/* Menu Desktop */}
          <ul className="hidden lg:flex items-center gap-x-2 xl:gap-x-5">
            {[
              { href: "#home", label: "Beranda", isActive: true },
              { href: "#service", label: "Layanan" },
              { href: "#steps", label: "Cara Kerja" },
              { href: "#location", label: "Lokasi" },
              { href: "#testimonials", label: "Testimoni" },
              { href: "#faq", label: "Pertanyaan Umum" },
            ].map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className={`px-4 py-2.5 rounded-lg text-base font-medium transition-all duration-300 ${
                    isScrolled
                      ? item.isActive
                        ? "text-cyan-600 font-semibold"
                        : "text-neutral-800 hover:text-cyan-600"
                      : // Mode belum scroll: teks gelap + shadow tebal agar kontras di bg putih
                        item.isActive
                        ? "text-gray-900 font-semibold "
                        : "text-gray-800 hover:text-gray-900 "
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Tombol Login */}
          <div className="hidden md:block">
            <button
              type="button"
              className={`min-w-[110px] rounded-full px-7 py-2.5 md:px-9 md:py-3 text-base font-semibold transition-all duration-500 ${
                isScrolled
                  ? "bg-cyan-500 text-white hover:bg-cyan-600 shadow-md shadow-cyan-500/30 border-none"
                  : // Mode belum scroll: teks cyan + border cyan + hover cyan semi
                    "bg-transparent text-cyan-500 border-2 border-cyan-500/80 hover:bg-cyan-500/80 hover:border-cyan-500/80 hover:text-cyan-500 hover:shadow-md hover:shadow-cyan-500/30 hover:text-white"
              }`}
            >
              Login
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Navbar */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-gray-200">
        <ul className="flex items-center justify-around w-full py-2 px-3 sm:px-6">
          <li>
            <Link
              href="#home"
              className="py-1.5 flex flex-col items-center text-center text-xs transition-colors text-cyan-600 hover:text-cyan-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.8}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
              <span className="mt-1">Beranda</span>
            </Link>
          </li>

          <li>
            <Link
              href="#service"
              className="py-1.5 flex flex-col items-center text-center text-xs transition-colors text-gray-600 hover:text-cyan-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.8}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.42 15.17 17.25 21l5.83-5.83a2.652 2.652 0 0 0-3.75-3.75l-5.88 5.88M11.42 15.17l2.5-3.03c.316-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63"
                />
              </svg>
              <span className="mt-1">Layanan</span>
            </Link>
          </li>

          <li>
            <Link
              href="#steps"
              className="py-1.5 flex flex-col items-center text-center text-xs transition-colors text-gray-600 hover:text-cyan-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.8}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374..."
                />
              </svg>
              <span className="mt-1">Cara Kerja</span>
            </Link>
          </li>

          <li>
            <Link
              href="#location"
              className="py-1.5 flex flex-col items-center text-center text-xs transition-colors text-gray-600 hover:text-cyan-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.8}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>
              <span className="mt-1">Lokasi</span>
            </Link>
          </li>
        </ul>
      </nav>

      {/* Spacer */}
      <div
        className={`transition-all duration-500 ${
          isScrolled ? "h-14 sm:h-16" : "h-20 sm:h-24"
        }`}
        aria-hidden="true"
      />
    </header>
  );
}
