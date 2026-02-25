"use client";

import { motion } from "framer-motion";

const skills = [
    { name: "Next.js", icon: "🚀" },
    { name: "React", icon: "⚛️" },
    { name: "Node.js", icon: "🟢" },
    { name: "Tailwind CSS", icon: "🎨" },
    { name: "TypeScript", icon: "📘" },
    { name: "Laravel", icon: "🐘" },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

export default function AboutSection() {
    return (
        <section id="about" className="relative flex items-center justify-center max-w-7xl mx-auto px-4 w-full py-24 overflow-hidden">
            {/* Background elements for visual interest */}
            <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-50"></div>
            <div className="absolute bottom-0 left-0 -z-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl opacity-50"></div>

            <div className="w-full relative z-10">
                <div className="flex flex-col items-center mb-16 space-y-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium"
                    >
                        <span className="w-2 h-2 rounded-full bg-accent"></span>
                        Mengenal Lebih Dekat
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold text-center"
                    >
                        Tentang Saya
                    </motion.h2>
                </div>

                <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
                    {/* Bagian Teks (Kiri) */}
                    <div className="lg:col-span-7 space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.7 }}
                            className="space-y-6 text-muted-foreground text-lg leading-relaxed"
                        >
                            <p>
                                Halo! Saya <span className="text-primary font-medium">Wildan</span> (atau biasa dipanggil Idang). Saat ini saya adalah seorang mahasiswa Sistem Informasi semester 8 di Universitas Jambi. Saya berasal dari Jambi, Indonesia.
                            </p>
                            <p>
                                Ketertarikan saya pada dunia teknologi sebenarnya bermula dari hobi bermain <em>game</em>. Rasa penasaran tentang bagaimana berbagai elemen visual, interaksi, dan program dapat menyatu menjadi pengalaman bermain yang imersif, mendorong saya untuk terjun lebih dalam. Hal inilah yang akhirnya memotivasi saya untuk mempelajari pemrograman.
                            </p>
                            <p>
                                Kini, minat awal tersebut telah berkembang menjadi sebuah keahlian di bidang pengembangan perangkat lunak. Saya mendedikasikan diri untuk membangun aplikasi web fungsional yang menggabungkan performa handal di belakang layar dengan sistem antarmuka yang ramah pengguna.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="pt-6"
                        >
                            <div className="flex gap-12 border-t border-border/50 pt-8">
                                <div>
                                    <h4 className="text-4xl font-black text-foreground mb-1">1+</h4>
                                    <span className="text-sm text-muted">Tahun<br />Pengalaman</span>
                                </div>
                                <div className="w-px bg-border/50"></div>
                                <div>
                                    <h4 className="text-4xl font-black text-foreground mb-1">5+</h4>
                                    <span className="text-sm text-muted">Proyek<br />Selesai</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Bagian Tech Stack (Kanan) */}
                    <div className="lg:col-span-5 relative mt-8 lg:mt-0 flex justify-center lg:justify-end">
                        <div className="w-full max-w-sm">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="bg-card/50 backdrop-blur-sm border border-border rounded-3xl p-8 shadow-xl relative overflow-hidden"
                            >
                                {/* Decorative gradient inside card */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl -mr-16 -mt-16 pointer-events-none"></div>

                                <h3 className="text-xl font-bold text-foreground mb-8">Teknologi Utama</h3>

                                <motion.div
                                    variants={containerVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    className="flex flex-wrap gap-3 relative z-10"
                                >
                                    {skills.map((skill, i) => (
                                        <motion.div
                                            key={i}
                                            variants={itemVariants}
                                            whileHover={{ scale: 1.05, y: -4 }}
                                            className="group flex items-center gap-2 px-4 py-2.5 bg-background border border-border shadow-sm rounded-xl hover:border-primary hover:shadow-primary/20 transition-all duration-300 cursor-default"
                                        >
                                            <span className="text-lg grayscale group-hover:grayscale-0 transition-all duration-300">{skill.icon}</span>
                                            <span className="font-medium text-sm text-muted-foreground group-hover:text-foreground transition-colors">{skill.name}</span>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
