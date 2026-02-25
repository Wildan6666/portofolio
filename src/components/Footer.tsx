import { Github, Linkedin, Instagram, Mail } from "lucide-react";
import config from "@/data/config.json";

export default function Footer() {
    return (
        <footer className="w-full border-t border-border bg-background py-10 mt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-sm text-muted">
                {/* Social Links */}
                <div className="flex gap-6 mb-6">
                    {config.socialLinks.instagram && (
                        <a href={config.socialLinks.instagram} target="_blank" rel="noreferrer" className="flex items-center hover:text-foreground transition-colors group">
                            <Instagram size={22} strokeWidth={1.5} className="group-hover:scale-110 group-hover:-translate-y-1 transition-all" />
                            <span className="sr-only">Instagram</span>
                        </a>
                    )}
                    {config.socialLinks.linkedin && (
                        <a href={config.socialLinks.linkedin} target="_blank" rel="noreferrer" className="flex items-center hover:text-foreground transition-colors group">
                            <Linkedin size={22} strokeWidth={1.5} className="group-hover:scale-110 group-hover:-translate-y-1 transition-all" />
                            <span className="sr-only">LinkedIn</span>
                        </a>
                    )}
                    {config.socialLinks.github && (
                        <a href={config.socialLinks.github} target="_blank" rel="noreferrer" className="flex items-center hover:text-foreground transition-colors group">
                            <Github size={22} strokeWidth={1.5} className="group-hover:scale-110 group-hover:-translate-y-1 transition-all" />
                            <span className="sr-only">GitHub</span>
                        </a>
                    )}
                    {config.socialLinks.email && (
                        <a href={config.socialLinks.email} className="flex items-center hover:text-foreground transition-colors group">
                            <Mail size={22} strokeWidth={1.5} className="group-hover:scale-110 group-hover:-translate-y-1 transition-all" />
                            <span className="sr-only">Email</span>
                        </a>
                    )}
                </div>

                <p>&copy; {new Date().getFullYear()} {config.profileName}. All rights reserved.</p>
            </div>
        </footer>
    );
}
