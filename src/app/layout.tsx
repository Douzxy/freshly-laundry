import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import PrelineScript from "@/components/PrelineScript";
import AOSInit from "@/components/AOSInit";

const poppins = Poppins({
    weight: ["300", "400", "500", "600", "700"],
    subsets: ["latin"],
    variable: "--font-poppins",
});

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});

export const metadata: Metadata = {
    title: "Freshlt Laundry",
    description: "Layanan laundry satuan dan kiloan dengan kualitas terbaik",
    icons: {
        icon: "/images/Logo.png",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
            <body
                className={`${poppins.variable} ${inter.variable} font-sans antialiased min-h-screen bg-gray-100`}
            >
                <AOSInit />
                {children}
                <PrelineScript />
            </body>
        </html>
    );
}
