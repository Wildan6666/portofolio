import galleryData from "@/data/gallery.json";

export default function Gallery() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {galleryData.map((item) => (
                <div key={item.id} className="group relative rounded-2xl overflow-hidden aspect-square bg-muted/20 border border-border/50 shadow-sm">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src={item.imageUrl}
                        alt={item.caption}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                        <span className="text-xs font-bold text-primary uppercase tracking-wider mb-2">{item.category}</span>
                        <p className="text-foreground font-medium leading-tight">{item.caption}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
