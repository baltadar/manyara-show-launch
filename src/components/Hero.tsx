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
                Dr. Hon. Antony Manyara, HSC.
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground font-light">
                Visionary Youth Leader for Kenya's Transformation
              </p>
            </div>
            <div className="space-y-4 pt-4">
              <h2 className="text-2xl lg:text-3xl font-semibold">New Show Coming Soon</h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                A national conversation on leadership, policy, and the future of Kenyan youth.
              </p>
              <p className="text-base text-muted-foreground">Stay tuned for updates.</p>
            </div>
            <div className="pt-4">
              <Button onClick={scrollToAbout} size="lg" className="font-medium">
                Learn More
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
