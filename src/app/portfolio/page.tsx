import Projects from "@/components/Projects";
import Certificates from "@/components/Certificates";
import Gallery from "@/components/Gallery";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Portofolio",
    description: "Kumpulan proyek, sertifikat, dan galeri karya yang telah saya selesaikan.",
};

export default function PortfolioPage() {
    return (
        <div className="flex flex-col gap-24 pt-32 pb-20 w-full overflow-hidden min-h-screen">
            <div className="max-w-7xl mx-auto px-4 w-full text-center space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">Karya & Pencapaian</h1>
                <p className="text-muted text-lg max-w-2xl mx-auto">
                    Kumpulan proyek terbaik dan foto-foto selama kuliah serta momen berharga lainnya.
                </p>
            </div>

            <section id="projects" className="flex items-center justify-center w-full">
                <div className="max-w-7xl mx-auto px-4 w-full">
                    <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
                        <span className="w-8 h-1 bg-primary rounded-full"></span>
                        Proyek Unggulan
                    </h2>
                    <Projects />
                </div>
            </section>

            {/* <section id="certificates" className="flex items-center justify-center bg-card/30 w-full py-24 border-y border-border/50">
                <div className="max-w-7xl mx-auto px-4 w-full">
                    <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
                        <span className="w-8 h-1 bg-accent rounded-full"></span>
                        Sertifikat
                    </h2>
                    <Certificates />
                </div>
            </section> */}

            <section id="gallery" className="flex items-center justify-center w-full">
                <div className="max-w-7xl mx-auto px-4 w-full">
                    <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
                        <span className="w-8 h-1 bg-primary rounded-full"></span>
                        Galeri
                    </h2>
                    <Gallery />
                </div>
            </section>
        </div>
    );
}
