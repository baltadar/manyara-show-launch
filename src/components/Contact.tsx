import { Mail, Globe } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Stay Connected</h2>
          <div className="space-y-6 mb-10">
            <p className="text-lg text-foreground/90">The show premieres soon.</p>
            <p className="text-base text-muted-foreground">
              Follow updates and behind-the-scenes moments from production.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="mailto:antony@yaafrika.org"
              className="flex items-center gap-2 text-lg hover:text-accent transition-colors"
            >
              <Mail className="h-5 w-5" />
              <span>antony@yaafrika.org</span>
            </a>
            <a
              href="https://www.antonymanyara.org"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-lg hover:text-accent transition-colors"
            >
              <Globe className="h-5 w-5" />
              <span>www.antonymanyara.org</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
