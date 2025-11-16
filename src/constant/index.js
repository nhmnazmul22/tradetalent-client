import {
  Apple,
  Brain,
  Code,
  CreditCard,
  Grid,
  Home,
  Info,
  Megaphone,
  Palette,
  PenSquare,
  Phone,
  Smartphone,
  ToolCase,
  UserSquare,
} from "lucide-react";
import AbbottLogo from "@/assets/company-logos/abbott.svg";
import NetflixLogo from "@/assets/company-logos/netflix.svg";
import PaypalLogo from "@/assets/company-logos/paypal.svg";
import ToyotaLogo from "@/assets/company-logos/toyota.svg";
import VisaLogo from "@/assets/company-logos/visa.svg";
import Avatar from "@/assets/avater.png";

export const menuItems = [
  { label: "Home", href: "/", icon: Home },
  {
    label: "Categories",
    icon: Grid,
    items: [
      {
        label: "Web Development",
        icon: Code,
        subItems: [
          {
            label: "Frontend Development",
            href: "/categories/web/frontend",
          },
          {
            label: "Backend Development",
            href: "/categories/web/backend",
          },
          {
            label: "Full Stack",
            href: "/categories/web/fullstack",
          },
          {
            label: "WordPress",
            href: "/categories/web/wordpress",
          },
          {
            label: "Shopify",
            href: "/categories/web/shopify",
          },
        ],
      },
      {
        label: "Mobile Development",
        icon: Smartphone,
        subItems: [
          {
            label: "React Native",
            href: "/categories/mobile/react-native",
          },
          {
            label: "Flutter",
            href: "/categories/mobile/flutter",
          },
          {
            label: "Kotlin / Android",
            href: "/categories/mobile/kotlin",
          },
          {
            label: "Swift / iOS",
            href: "/categories/mobile/swift",
          },
        ],
      },
      {
        label: "Graphic Design",
        icon: Palette,
        subItems: [
          {
            label: "Logo Design",
            href: "/categories/design/logo",
          },
          {
            label: "Brand Identity",
            href: "/categories/design/branding",
          },
          {
            label: "UI/UX Design",
            href: "/categories/design/uiux",
          },
          {
            label: "Illustration",
            href: "/categories/design/illustration",
          },
        ],
      },
      {
        label: "Writing & Translation",
        icon: PenSquare,
        subItems: [
          {
            label: "Copywriting",
            href: "/categories/writing/copywriting",
          },
          {
            label: "Blog Writing",
            href: "/categories/writing/blog",
          },
          {
            label: "Technical Writing",
            href: "/categories/writing/technical",
          },
          {
            label: "Translation",
            href: "/categories/writing/translation",
          },
        ],
      },
      {
        label: "Digital Marketing",
        icon: Megaphone,
        subItems: [
          {
            label: "SEO",
            href: "/categories/marketing/seo",
          },
          {
            label: "Social Media",
            href: "/categories/marketing/social",
          },
          {
            label: "Content Marketing",
            href: "/categories/marketing/content",
          },
          {
            label: "Email Marketing",
            href: "/categories/marketing/email",
          },
        ],
      },
      {
        label: "Data & AI",
        icon: Brain,
        subItems: [
          {
            label: "Data Science",
            href: "/categories/data/science",
          },
          {
            label: "Machine Learning",
            href: "/categories/data/ml",
          },
          {
            label: "Data Analysis",
            href: "/categories/data/analysis",
          },
          {
            label: "AI Chatbot Development",
            href: "/categories/data/chatbot",
          },
        ],
      },
    ],
  },
  { label: "Services", href: "/services", icon: ToolCase },
  { label: "Sellers", href: "/sellers", icon: UserSquare },
  { label: "Pricing", href: "/pricing", icon: CreditCard },
];
export const userMenu = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "My Profile", href: "/profile" },
  { label: "My Added Jobs", href: "/myAddedJobs" },
  { label: "My Accepted Tasks", href: "/my-accepted-tasks" },
  { label: "Messages", href: "/messages" },
  { label: "Notifications", href: "/notifications" },
  { label: "Settings", href: "/settings" },
  { label: "Logout", href: "/logout" },
];

export const companyLogos = [
  {
    alt: "AbbottLogo",
    logo: AbbottLogo,
  },
  {
    alt: "NetflixLogo",
    logo: NetflixLogo,
  },
  {
    alt: "PaypalLogo",
    logo: PaypalLogo,
  },
  {
    alt: "ToyotaLogo",
    logo: ToyotaLogo,
  },
  {
    alt: "VisaLogo",
    logo: VisaLogo,
  },
];

export const services = [
  {
    label: "Web Development",
    icon: Code,
    subItems: [
      {
        label: "Frontend Development",
        href: "/categories/web/frontend",
      },
      {
        label: "Backend Development",
        href: "/categories/web/backend",
      },
      {
        label: "Full Stack",
        href: "/categories/web/fullstack",
      },
      {
        label: "WordPress",
        href: "/categories/web/wordpress",
      },
      {
        label: "Shopify",
        href: "/categories/web/shopify",
      },
    ],
  },
  {
    label: "Mobile Development",
    icon: Smartphone,
    subItems: [
      {
        label: "React Native",
        href: "/categories/mobile/react-native",
      },
      {
        label: "Flutter",
        href: "/categories/mobile/flutter",
      },
      {
        label: "Kotlin / Android",
        href: "/categories/mobile/kotlin",
      },
      {
        label: "Swift / iOS",
        href: "/categories/mobile/swift",
      },
    ],
  },
  {
    label: "Graphic Design",
    icon: Palette,
    subItems: [
      {
        label: "Logo Design",
        href: "/categories/design/logo",
      },
      {
        label: "Brand Identity",
        href: "/categories/design/branding",
      },
      {
        label: "UI/UX Design",
        href: "/categories/design/uiux",
      },
      {
        label: "Illustration",
        href: "/categories/design/illustration",
      },
    ],
  },
  {
    label: "Writing & Translation",
    icon: PenSquare,
    subItems: [
      {
        label: "Copywriting",
        href: "/categories/writing/copywriting",
      },
      {
        label: "Blog Writing",
        href: "/categories/writing/blog",
      },
      {
        label: "Technical Writing",
        href: "/categories/writing/technical",
      },
      {
        label: "Translation",
        href: "/categories/writing/translation",
      },
    ],
  },
  {
    label: "Digital Marketing",
    icon: Megaphone,
    subItems: [
      {
        label: "SEO",
        href: "/categories/marketing/seo",
      },
      {
        label: "Social Media",
        href: "/categories/marketing/social",
      },
      {
        label: "Content Marketing",
        href: "/categories/marketing/content",
      },
      {
        label: "Email Marketing",
        href: "/categories/marketing/email",
      },
    ],
  },
  {
    label: "Data & AI",
    icon: Brain,
    subItems: [
      {
        label: "Data Science",
        href: "/categories/data/science",
      },
      {
        label: "Machine Learning",
        href: "/categories/data/ml",
      },
      {
        label: "Data Analysis",
        href: "/categories/data/analysis",
      },
      {
        label: "AI Chatbot Development",
        href: "/categories/data/chatbot",
      },
    ],
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Susie G. Lucas",
    role: "Online Store Owner",
    avatar: Avatar,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore sed do eiusmod tempor.",
  },
  {
    id: 2,
    name: "Jonathan Carter",
    role: "Startup Founder",
    avatar: Avatar,
    text: "Suspendisse potenti. Duis nec nulla eget lorem faucibus auctor. Sed tristique elit vel erat vehicula, vitae tincidunt orci fermentum.",
  },
  {
    id: 3,
    name: "Maria Gonzalez",
    role: "Digital Marketer",
    avatar: Avatar,
    text: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
  },
];
