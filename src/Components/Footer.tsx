import React from "react";
// USING COMPONENT WHICH I MADE IN THSI FILE SO THAT IT CANT BE USED SOMEWHERE ELSE
interface FooterButtonProps {
  text: string;
  icon: React.ReactNode;
  href: string;
  className?: string;
}
const FooterButton: React.FC<FooterButtonProps> = ({
  text,
  icon,
  href,
  className = "",
}) => (
  <a
    href={href}
    className={`flex items-center justify-center gap-2 rounded-lg bg-[#2A2A2A] px-4 py-3 text-sm font-medium text-white shadow-sm transition-opacity hover:opacity-80 ${className}`}
  >
    {icon}
    <span>{text}</span>
  </a>
);

interface SocialIconProps {
  icon: React.ReactNode;
  href: string;
  alt: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ icon, href, alt }) => (
  <a
    href={href}
    aria-label={alt}
    className="flex h-10 w-10 items-center justify-center rounded-full bg-[#DEDCD7] text-[#0A2540] transition-opacity hover:opacity-80"
  >
    {icon}
  </a>
);

interface FooterProps {
  logo: React.ReactNode;
  primaryButton: FooterButtonProps;
  secondaryButton?: FooterButtonProps; // Made optional to match request
  socialIcons?: SocialIconProps[]; // Optional array of icons
  children: React.ReactNode; 
}

const Footer: React.FC<FooterProps> = ({
  logo,
  primaryButton,
  secondaryButton,
  socialIcons,
  children,
}) => {
  return (
    <footer className="w-full bg-[#e5e5e5] font-sans text-[#0A2540]">
      <div className="container mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Left Column: Logo, Buttons, Socials */}
          <div className="flex flex-col gap-8 md:col-span-1">
            {/* Logo */}
            <div className="shrink-0">{logo}</div>

            {/* Buttons */}
            <div className="flex flex-col gap-3 sm:flex-row md:flex-col lg:flex-row">
              <FooterButton {...primaryButton} className="flex-1" />
              {secondaryButton && (
                <FooterButton {...secondaryButton} className="flex-1" />
              )}
            </div>

            {/* Social Icons */}
            {socialIcons && socialIcons.length > 0 && (
              <div className="flex gap-3">
                {socialIcons.map((iconProps, index) => (
                  <SocialIcon key={index} {...iconProps} />
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Paragraph Content */}
          <div className="md:col-span-2">
            <div className="text-sm leading-6 text-[#425466]">{children}</div>
          </div>
        </div>
      </div>
    </footer>
  );
};





export default Footer;



