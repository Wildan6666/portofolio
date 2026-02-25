import { Download, Briefcase, GraduationCap, Award } from "lucide-react";
import cvData from "@/data/cv.json";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Curriculum Vitae",
    description: "Riwayat pekerjaan, latar belakang pendidikan, dan keahlian teknis saya.",
};

export default function CVPage() {
    return (
        <div className="flex flex-col gap-16 pt-32 pb-20 w-full overflow-hidden min-h-screen">
            <div className="max-w-4xl mx-auto px-4 w-full text-center space-y-6">
                <h1 className="text-4xl md:text-5xl font-bold text-foreground">Curriculum Vitae</h1>
                <p className="text-muted text-lg">
                    Riwayat perjalanan profesional dan latar belakang pendidikan saya.
                </p>
                <div className="pt-4 flex justify-center">
                    <a
                        href={cvData.cvDownloadUrl || "/cv.pdf"}
                        target="_blank"
                        className="flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-full font-medium hover:bg-primary/90 transition-all hover:scale-105 shadow-md flex-shrink-0"
                    >
                        Download PDF <Download size={18} />
                    </a>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 w-full grid gap-12">
                {/* Pengalaman Kerja */}
                <section>
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 border-b border-border pb-4">
                        <Briefcase className="text-primary" /> Pengalaman Kerja
                    </h2>
                    <div className="space-y-8">
                        {cvData.experience.map((exp) => (
                            <div key={exp.id} className="relative pl-8 border-l-2 border-primary/30">
                                <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-primary border-4 border-background"></span>
                                <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                                <div className="text-accent font-medium mt-1 mb-2">{exp.company} • {exp.period}</div>
                                <p className="text-muted leading-relaxed">
                                    {exp.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Pendidikan */}
                <section>
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 border-b border-border pb-4">
                        <GraduationCap className="text-accent" /> Pendidikan
                    </h2>
                    <div className="space-y-8">
                        {cvData.education.map((edu) => (
                            <div key={edu.id} className="relative pl-8 border-l-2 border-accent/30">
                                <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-accent border-4 border-background"></span>
                                <h3 className="text-xl font-bold text-foreground">{edu.institution}</h3>
                                <div className="text-primary font-medium mt-1 mb-2">{edu.degree} • {edu.period}</div>
                                <p className="text-muted leading-relaxed">
                                    {edu.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Keahlian */}
                <section>
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 border-b border-border pb-4">
                        <Award className="text-primary" /> Keahlian (Skills)
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {cvData.skills.map((skill, index) => (
                            <div key={index} className="bg-card border border-border px-4 py-3 rounded-xl text-center font-medium text-foreground hover:border-primary transition-colors cursor-default">
                                {skill}
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}
