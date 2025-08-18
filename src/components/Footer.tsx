import { Instagram, Linkedin, Dribbble, ExternalLink } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Dribbble, href: "#", label: "Dribbble" },
    { icon: ExternalLink, href: "#", label: "Portfolio" }
  ];

  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-12 items-center">
          {/* Logo & Tagline */}
          <div>
            <div className="text-3xl font-bold mb-4">Lotessa</div>
            <p className="text-primary-foreground/80 max-w-sm">
              Crafting meaningful visual experiences that bridge cultures and tell powerful stories.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#home" className="hover:text-accent transition-colors">Home</a>
              <a href="#work" className="hover:text-accent transition-colors">Work</a>
              <a href="#about" className="hover:text-accent transition-colors">About</a>
              <a href="#contact" className="hover:text-accent transition-colors">Contact</a>
            </div>
          </div>

          {/* Social Links */}
          <div className="text-center lg:text-right">
            <h4 className="font-semibold mb-4">Follow Me</h4>
            <div className="flex gap-4 justify-center lg:justify-end">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-200 hover:scale-110"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
          <p className="text-primary-foreground/60">
            © 2024 Lotessa. All rights reserved. Designed with passion in South Africa.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;