import React from "react";

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  description?: string;
  subDescription?: string;
  imageSrc: string;
  imageAlt?: string;
  buttonTextOne?: string;
  buttonTextTwo?: string;
  buttonLinkOne?: string;
  buttonLinkTwo?: string;
}

const Community: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  description,
  subDescription,
  buttonTextOne,
  buttonTextTwo,
  buttonLinkOne,
  buttonLinkTwo,
  imageSrc,
  imageAlt = "Hero image",
}) => {
  return (
    <section className="bg-white ">
      <div className="container mx-auto px-4 py-24 sm:py-22 flex flex-col-reverse lg:flex-row items-center lg:gap-16">
        {/* Left Side - Text Content */}
        <div className="flex-1 flex justify-center">
          <img src={imageSrc} alt={imageAlt} className="max-w-full h-auto" />
        </div>
        {/* Right Side - Image */}
        <div className="flex-1 text-center lg:text-left mt-12 lg:mt-0">
          {/* Main Title: "Your Health Companion..." */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 ">
            {title}
          </h1>

          {/* Description Paragraph 1 */}
          {description && (
            <p className="mt-8 text-lg text-gray-600 ">{description}</p>
          )}

          {/* Button Group */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            {buttonTextOne && buttonLinkOne && (
              <a
                href={buttonLinkOne}
                className="flex items-center justify-center gap-2 w-full sm:w-auto bg-gray-900 text-white px-6 py-3 rounded-lg shadow-md hover:bg-gray-800 transition font-medium"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                {buttonTextOne}
              </a>
            )}
            {buttonTextTwo && buttonLinkTwo && (
              <a
                href={buttonLinkTwo}
                className="flex items-center justify-center gap-2 w-full sm:w-auto bg-gray-900 text-white px-6 py-3 rounded-lg shadow-md hover:bg-gray-800 transition font-medium"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.322 0c-2.43 0-4.61.99-6.22 2.6A8.7 8.7 0 00.95 9.07c0 1.48.35 2.89.99 4.1.65 1.23 1.52 2.3 2.59 3.2s2.26 1.63 3.63 2.14c1.1.4 2.27.6 3.48.6 1.13 0 2.29-.18 3.42-.56 1.37-.45 2.63-1.17 3.75-2.08-1.12-1-1.95-2.22-2.5-3.65-.54-1.4-.82-2.9-.82-4.5s.27-3.04.8-4.4c.54-1.36 1.34-2.57 2.4-3.61C16.5 1.2 13.57 0 10.322 0zM10 11.2a3.7 3.7 0 01-1.36-.28c-.46-.17-.89-.4-1.28-.7a4.61 4.61 0 01-1.02-1.04c-.29-.38-.52-.8-.68-1.25-.16-.46-.25-.94-.25-1.45 0-.6.12-1.18.37-1.73.25-.54.58-1.03.98-1.45.4-.41.85-.75 1.35-1 .5-.24 1.03-.37 1.58-.37s1.1.13 1.6.38c.5.25.95.58 1.35 1 .4.42.73.9 1 1.45.25.55.37 1.13.37 1.73 0 .5-.08 1-.25 1.45-.16.45-.39.87-.68 1.25a4.61 4.61 0 01-1.02 1.04c-.4.3-.82.53-1.28.7A3.7 3.7 0 0110 11.2z"></path>
                </svg>

                {buttonTextTwo}
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
