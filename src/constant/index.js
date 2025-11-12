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
  Video,
} from "lucide-react";

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
  { label: "Pricing", href: "/pricing", icon: CreditCard },
  { label: "About Us", href: "/about", icon: Info },
  { label: "Contact", href: "/contact", icon: Phone },
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
