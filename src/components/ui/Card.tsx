import { ReactNode } from "react";

interface CardProps {
    title: string;
    description?: string;
    imageUrl?: string;
    children?: ReactNode;
    className?: string;
}

export default function Card({ title, description, imageUrl, children, className = "" }: CardProps) {
    return (
        <div className={`bg-card/50 backdrop-blur-sm border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 group hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5 ${className}`}>
            {imageUrl && (
                <div className="relative w-full h-48 sm:h-56 overflow-hidden bg-muted/20">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src={imageUrl}
                        alt={title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                </div>
            )}
            <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">{title}</h3>
                {description && <p className="text-muted text-sm mb-4 line-clamp-3">{description}</p>}
                {children}
            </div>
        </div>
    );
}
