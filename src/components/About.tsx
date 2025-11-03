const About = () => {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto space-y-16">
          <div>
            <h2 className="text-4xl font-bold mb-8">About the Show</h2>
            <div className="space-y-6 text-lg leading-relaxed text-foreground/90">
              <p>
                The Antony Manyara Show is an upcoming talk series that focuses on Africa's most
                important conversations, from youth leadership and economic inclusion to governance,
                sustainability, and civic transformation.
              </p>
              <p>
                Each episode features open and engaging discussions with leaders, innovators, and
                changemakers shaping the continent's future.
              </p>
              <p>
                Through honest dialogue and practical insights, Dr. Antony Manyara brings clarity to
                the issues that define Kenya and Africa's next generation.
              </p>
              <p className="font-medium">
                This is more than a show. It's a space for voices that drive progress, challenge
                systems, and imagine a better future for all.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-4xl font-bold mb-8">About the Host</h2>
            <div className="space-y-6 text-lg leading-relaxed text-foreground/90">
              <p>
                Dr. Hon. Antony Manyara, HSC is a visionary youth leader and a national voice for
                Kenya's transformation.
              </p>
              <p>
                He has served as President of the Kenya University Students Organisation (KUSO) and
                as Kenya's Ambassador for Sustainable Housing under the Ministry of Housing.
              </p>
              <p>
                He is also the Founder of Youth Advocacy Africa (YAA), an NGO promoting education,
                climate action, and social reform across the continent.
              </p>
              <p className="font-medium">
                With a decade of experience in grassroots and policy leadership, Dr. Manyara
                continues to champion civic empowerment, accountability, and a new era of youth-led
                governance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
