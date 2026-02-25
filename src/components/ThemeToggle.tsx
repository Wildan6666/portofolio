"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // Hindari hydration mismatch
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <div className="w-9 h-9"></div>;
    }

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full bg-secondary/80 text-foreground hover:bg-secondary transition-colors group relative"
            aria-label="Toggle Dark Mode"
        >
            {theme === "dark" ? (
                <Sun size={20} className="group-hover:text-primary transition-colors" />
            ) : (
                <Moon size={20} className="group-hover:text-primary transition-colors" />
            )}

            {/* Tooltip sederhana */}
            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs bg-foreground text-background px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                {theme === "dark" ? "Light Mode" : "Dark Mode"}
            </span>
        </button>
    );
}
