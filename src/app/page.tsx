import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Beranda",
  description: "Selamat datang di portofolio digital saya.",
};

export default function Home() {
  return (
    <div className="flex flex-col gap-24 pb-20 w-full overflow-hidden">
      <HeroSection />

      <AboutSection />

    </div>
  );
}
