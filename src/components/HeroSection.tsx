"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Instagram, Mail } from "lucide-react";
import config from "@/data/config.json";

export default function HeroSection() {
    return (
        <section id="home" className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground pt-20 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6 w-full flex flex-col lg:flex-row items-center justify-between gap-12 h-full">

                {/* Bagian Kiri: Teks Utama */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex-1 space-y-8 text-left z-10 pt-10 lg:pt-0"
                >
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium w-fit">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                            </span>
                            {config.role}
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1]">
                            {config.headline}
                        </h1>

                        <p className="text-base md:text-lg text-muted font-light leading-relaxed max-w-md">
                            {config.subHeadline}
                        </p>
                    </div>

                    {/* Tombol Tautan */}
                    <div className="pt-4">
                        <a
                            href="/portfolio"
                            className="inline-block px-8 py-3.5 border-2 border-primary text-primary font-bold text-sm tracking-widest uppercase hover:bg-primary hover:text-primary-foreground transition-all duration-300 rounded-md"
                        >
                            View My Projects
                        </a>
                    </div>
                </motion.div>

                {/* Bagian Kanan: Foto Penuh */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="flex-1 w-full flex justify-center lg:justify-end items-end h-full self-end lg:pt-10"
                >
                    <div className="relative w-full max-w-lg lg:max-w-xl aspect-square md:aspect-auto md:h-[600px] lg:h-[700px]">
                        <img
                            src={config.profileImageUrl}
                            alt={config.profileName}
                            className="object-cover object-bottom w-full h-full drop-shadow-2xl"
                        />
                        {/* Gradien fade ke bawah agar menyatu degan background jika foto terpotong */}
                        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent pointer-events-none transition-colors duration-300"></div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
