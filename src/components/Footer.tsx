import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-primary font-bold">OT</span>
              </div>
              <div>
                <h3 className="text-lg font-bold">OPTIMUM</h3>
                <p className="text-sm opacity-80">TECHNICUS</p>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              Specialized Saudi Arabian engineering contracting firm delivering high-quality HDPE 
              geomembrane lining solutions.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact Information</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+966 XX XXX XXXX</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>info@optimumtechnicus.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Saudi Arabia</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>HDPE Installation</li>
              <li>Geomembrane Solutions</li>
              <li>Quality Assurance</li>
              <li>Site Preparation</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm">
          <p>&copy; 2024 Optimum Technicus. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;