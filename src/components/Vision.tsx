import { Eye, Target, Heart } from "lucide-react";

const Vision = () => {
  const values = [
    {
      icon: Eye,
      title: "Vision",
      description: "To be the leading partner for safe, sustainable, and high-quality geomembrane installations in the environmental and industrial sectors—driven by integrity, innovation, and a commitment to building trust with our clients"
    },
    {
      icon: Target,
      title: "Mission",
      description: "We deliver precise geomembrane installations with unmatched safety, quality, and sustainability for environmental and industrial applications—making the environment and building trust with our clients"
    },
    {
      icon: Heart,
      title: "Values",
      description: "We operate with integrity, pursue excellence through innovation, prioritize safety, protect the environment, and build lasting client relationships through reliability and trust"
    }
  ];

  return (
    <section className="py-20 bg-section-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-lg text-muted-foreground">
            Optimum Technicus is the trusted partner for safe, sustainable, and high-quality geomembrane 
            installations in the environmental and industrial sectors—driven by integrity, innovation, and a 
            commitment to building trust with our clients.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <value.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">{value.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Vision;