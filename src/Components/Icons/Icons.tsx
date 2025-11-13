const ButtonHeartIcon = () => (
  <svg
    width="20"
    height="18"
    viewBox="0 0 20 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 17.5C10 17.5 1 12 1 5.5C1 -1 10 4 10 4C10 4 19 -1 19 5.5C19 12 10 17.5 10 17.5Z"
      fill="white"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const ExampleLogo = () => (
  <div className="flex items-center gap-2">
    <LogoHeartIcon />
    <span className="text-3xl font-bold tracking-tight text-[#0A2540]">
      LOTESSA
    </span>
  </div>
);

const FacebookIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);
const InstagramIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);
const LinkedInIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);
const LogoHeartIcon = () => (
  <svg
    width="36"
    height="32"
    viewBox="0 0 36 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="h-8 w-auto text-[#0A2540]"
  >
    <path
      d="M18 31.4287C18 31.4287 3.42857 23.4287 3.42857 12.8573C3.42857 2.28587 18 10.2859 18 10.2859C18 10.2859 32.5714 2.28587 32.5714 12.8573C32.5714 23.4287 18 31.4287 18 31.4287Z"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinejoin="round"
    />
  </svg>
);
const UsersIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.5 16.25V14.375C12.5 13.3397 11.6603 12.5 10.625 12.5H4.375C3.33972 12.5 2.5 13.3397 2.5 14.375V16.25"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.5 9.375C9.15482 9.375 10.5 8.03 L 7.5 1.25C5.84518 1.25 4.5 2.58 L 4.5 5.625C4.5 6.97982 5.84518 8.125 7.5 8.125Z"
      fill="white"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17.5 16.25V14.375C17.5 13.3678 16.716 12.553 15.7303 12.505L15.625 12.5H13.75"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.5 9.375C14.1548 9.375 15.5 8.03 L 12.5 1.25C10.8452 1.25 9.5 2.58 L 9.5 5.625C9.5 6.97982 10.8452 8.125 12.5 8.125Z"
      fill="white"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export {
  ButtonHeartIcon,
  LogoHeartIcon,
  UsersIcon,
  LinkedInIcon,
  FacebookIcon,
  InstagramIcon,
  ExampleLogo,
};