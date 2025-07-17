import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import keyStrengthImg from "@/assets/key-strength.jpg";

const KeyStrength = () => {
  const strengths = [
    "Technically qualified workforce",
    "Advanced equipment and methodologies",
    "Commitment to quality & environment protection",
    "Clients satisfaction and project execution"
  ];

  return (
    <section className="py-20 bg-section-bg">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-foreground mb-8">Key Strength</h2>
            <div className="space-y-4 mb-8">
              {strengths.map((strength, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-accent rounded-full flex items-center justify-center mt-1">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-lg text-foreground">{strength}</p>
                </div>
              ))}
            </div>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
              CONTACT US
            </Button>
          </div>
          
          <div className="relative">
            <img
              src={keyStrengthImg}
              alt="Key Strength"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyStrength;