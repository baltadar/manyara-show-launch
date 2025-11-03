import { Button } from "@/components/ui/button";
import manyaraPortrait from "@/assets/manyara-portrait.jpg";

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="space-y-6">
            <div className="space-y-3">
              <h1 className="text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                The Antony Manyara Show
              </h1>
              <p className="text-xl text-muted-foreground">
                Hosted by Dr. Hon. Antony Manyara, HSC
              </p>
              <p className="text-lg text-muted-foreground font-light">
                Visionary Youth Leader for Kenya's Transformation
              </p>
            </div>
            <div className="space-y-4 pt-4">
              <h2 className="text-2xl lg:text-3xl font-semibold">Coming Soon</h2>
              <p className="text-lg text-foreground/90 leading-relaxed max-w-lg">
                A new talk series where bold ideas meet real leadership. Dr. Manyara sits down with
                influential voices from across Africa to explore leadership, governance, innovation,
                and the future of youth empowerment.
              </p>
              <p className="text-base text-muted-foreground font-medium">
                Stay tuned. The conversation begins soon.
              </p>
            </div>
            <div className="pt-4">
              <Button onClick={scrollToAbout} size="lg" className="font-medium">
                Notify Me
              </Button>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <img
                src={manyaraPortrait}
                alt="Dr. Hon. Antony Manyara, HSC"
                className="w-full max-w-md rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
