import Card from "@/components/ui/Card";
import certsData from "@/data/certificates.json";

export default function Certificates() {
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certsData.map((cert) => (
                <Card
                    key={cert.id}
                    title={cert.title}
                    imageUrl={cert.imageUrl || undefined}
                >
                    <div className="flex flex-col gap-2 mt-4">
                        <span className="text-muted text-sm border-l-2 border-primary pl-4 py-1.5 bg-muted/5 rounded-r-md">
                            <strong className="text-foreground block">{cert.issuer}</strong>
                            <span className="text-xs">Issued: {cert.year}</span>
                        </span>
                    </div>
                </Card>
            ))}
        </div>
    );
}
