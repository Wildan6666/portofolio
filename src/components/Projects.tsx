"use client";

import { useState } from "react";
import Card from "@/components/ui/Card";
import projectsData from "@/data/projects.json";

// Extract unique tags/categories from all projects
const allCategories = ["Semua", ...Array.from(new Set(projectsData.flatMap(project => project.tags)))];

export default function Projects() {
    const [activeCategory, setActiveCategory] = useState("Semua");

    // Filter projects based on active category
    const filteredProjects = activeCategory === "Semua"
        ? projectsData
        : projectsData.filter(project => project.tags.includes(activeCategory));

    return (
        <div className="space-y-8">
            {/* Filter Buttons - Temporarily Hidden per user request */}
            {false && (
                <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 mb-10">
                    {allCategories.map(category => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === category
                                ? "bg-primary text-primary-foreground shadow-md scale-105"
                                : "bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:scale-105 border border-transparent hover:border-border"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            )}

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project) => (
                    <div key={project.id} className="animate-in fade-in zoom-in duration-500">
                        <Card
                            title={project.title}
                            description={project.description}
                            imageUrl={project.imageUrl}
                            className="flex flex-col h-full"
                        >
                            <div className="flex flex-wrap gap-2 mb-6 mt-2">
                                {project.tags.map(tag => (
                                    <span key={tag} className="px-2.5 py-1 bg-primary/10 text-primary text-xs rounded-md font-medium border border-primary/20">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <div className="flex gap-4 mt-auto pt-4 border-t border-border/50">
                                {project.demoUrl && (
                                    <a href={project.demoUrl} target="_blank" rel="noreferrer" className="text-sm font-medium text-primary hover:underline flex items-center gap-1">
                                        Live Demo
                                    </a>
                                )}
                                {project.repoUrl && (
                                    <a href={project.repoUrl} target="_blank" rel="noreferrer" className="text-sm font-medium text-muted hover:text-foreground transition-colors flex items-center gap-1">
                                        Source Code
                                    </a>
                                )}
                            </div>
                        </Card>
                    </div>
                ))}
            </div>

            {/* Empty State */}
            {filteredProjects.length === 0 && (
                <div className="text-center py-20 text-muted">
                    <p>Oops, tidak ada proyek untuk kategori "{activeCategory}" saat ini.</p>
                </div>
            )}
        </div>
    );
}
