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
    User,
    ShoppingCart,
    ToolCaseIcon,
    ShoppingBasket,
} from "lucide-react";
import AbbottLogo from "@/assets/company-logos/abbott.svg";
import NetflixLogo from "@/assets/company-logos/netflix.svg";
import PaypalLogo from "@/assets/company-logos/paypal.svg";
import ToyotaLogo from "@/assets/company-logos/toyota.svg";
import VisaLogo from "@/assets/company-logos/visa.svg";
import Avatar from "@/assets/avater.png";


export const services= [
    {
        label: "Web Development",
        icon: Code,
        subItems: [
            {
                label: "Frontend Development",
                href: "/services?cate=frontend-development",
            },
            {
                label: "Backend Development",
                href: "/services?cate=backend-development",
            },
            {
                label: "Full Stack",
                href: "/services?cate=full-stack",
            },
            {
                label: "WordPress",
                href: "/services?cate=wordpress",
            },
            {
                label: "Shopify",
                href: "/services?cate=shopify",
            },
        ],
    },

    {
        label: "Mobile Development",
        icon: Smartphone,
        subItems: [
            {
                label: "React Native",
                href: "/services?cate=react-native",
            },
            {
                label: "Flutter",
                href: "/services?cate=flutter",
            },
            {
                label: "Kotlin / Android",
                href: "/services?cate=kotlin-android",
            },
            {
                label: "Swift / iOS",
                href: "/services?cate=swift-ios",
            },
        ],
    },

    {
        label: "Graphic Design",
        icon: Palette,
        subItems: [
            {
                label: "Logo Design",
                href: "/services?cate=logo-design",
            },
            {
                label: "Brand Identity",
                href: "/services?cate=brand-identity",
            },
            {
                label: "UI/UX Design",
                href: "/services?cate=ui-ux-design",
            },
            {
                label: "Illustration",
                href: "/services?cate=illustration",
            },
        ],
    },

    {
        label: "Writing & Translation",
        icon: PenSquare,
        subItems: [
            {
                label: "Copywriting",
                href: "/services?cate=copywriting",
            },
            {
                label: "Blog Writing",
                href: "/services?cate=blog-writing",
            },
            {
                label: "Technical Writing",
                href: "/services?cate=technical-writing",
            },
            {
                label: "Translation",
                href: "/services?cate=translation",
            },
        ],
    },

    {
        label: "Digital Marketing",
        icon: Megaphone,
        subItems: [
            {
                label: "SEO",
                href: "/services?cate=seo",
            },
            {
                label: "Social Media",
                href: "/services?cate=social-media",
            },
            {
                label: "Content Marketing",
                href: "/services?cate=content-marketing",
            },
            {
                label: "Email Marketing",
                href: "/services?cate=email-marketing",
            },
        ],
    },

    {
        label: "Data & AI",
        icon: Brain,
        subItems: [
            {
                label: "Data Science",
                href: "/services?cate=data-science",
            },
            {
                label: "Machine Learning",
                href: "/services?cate=machine-learning",
            },
            {
                label: "Data Analysis",
                href: "/services?cate=data-analysis",
            },
            {
                label: "AI Chatbot Development",
                href: "/services?cate=ai-chatbot-development",
            },
        ],
    },
];
export const menuItems = [
    {label: "Home", href: "/", icon: Home},
    {
        label: "Categories",
        icon: Grid,
        items: services,
    },
    {label: "Services", href: "/services", icon: ToolCase},
    {label: "Sellers", href: "/sellers", icon: UserSquare},
    {label: "Pricing", href: "/pricing", icon: CreditCard},
];
export const userMenu = [
    {
        label: "Profile",
        href: "/profile",
        icon: User,
    },
    {
        label: "Create Service",
        href: "/create-service",
        icon: ToolCaseIcon,
    },
    {
        label: "My Orders",
        href: "/my-orders",
        icon: ShoppingBasket,
    },
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
export const testimonials = [
    {
        id: 1,
        name: "Susie G. Lucas",
        role: "Online Store Owner",
        avatar: "/images/avatar.png",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore sed do eiusmod tempor.",
    },
    {
        id: 2,
        name: "Jonathan Carter",
        role: "Startup Founder",
        avatar: "/images/avatar-2.jpeg",
        text: "Suspendisse potenti. Duis nec nulla eget lorem faucibus auctor. Sed tristique elit vel erat vehicula, vitae tincidunt orci fermentum.",
    },
    {
        id: 3,
        name: "Maria Gonzalez",
        role: "Digital Marketer",
        avatar: "/images/avatar-3.jpeg",
        text: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    },
];
export const plans = [
    {
        name: "Starter",
        price: "0% Service Fee",
        button: "Sign up",
        highlight: false,
    },
    {
        name: "Professional",
        price: "10% Service Fee",
        button: "Sign up",
        highlight: true,
    },
    {
        name: "Business",
        price: "20% Service Fee",
        button: "Sign up",
        highlight: false,
    },
];
export const features = [
    "Access to TradeTalent global marketplace",
    "Verified Talent ID",
    "Freelancer work history & reviews",
    "Top-Rated & Rising Talent Search Filter",
    "Expert-Vetted Talent",
];
export const faqs = [
    {
        id: "item-1",
        question: "How does the service fee work?",
        answer:
            "Service fees are applied per transaction depending on your selected plan. Basic users pay 5% while Business Plus users pay 10%.",
    },
    {
        id: "item-2",
        question: "Can I upgrade or downgrade my plan anytime?",
        answer:
            "Yes. You can switch plans at any time without penalties. Changes apply immediately for future transactions.",
    },
    {
        id: "item-3",
        question: "Do freelancers need to pay to join?",
        answer:
            "No. Freelancers can join completely free. Optional paid tools and boosts may be available inside the platform.",
    },
    {
        id: "item-4",
        question: "Is payment secure?",
        answer:
            "All payments are processed through encrypted, PCI-compliant payment gateways. Your data and funds remain fully protected.",
    },
];
export const blogs = [
    {
        id: 1,
        title: "How to Become a Full-Stack Developer in 2025",
        slug: "become-fullstack-developer-2025",
        image: "/images/thumbnail.jpg",
        author: "NHM Nazmul",
        category: "Web Development",
        publishedAt: "2025-11-20",
        description:
            "Learn the complete roadmap to becoming a modern full-stack developer—from frontend frameworks to backend APIs and deployment.",
    },
    {
        id: 2,
        title: "Why React Native is Still the Best Choice for Mobile Apps",
        slug: "react-native-best-choice-2025",
        image: "/images/thumbnail-2.jpeg",
        author: "NHM Nazmul",
        category: "Mobile Development",
        publishedAt: "2025-11-21",
        description:
            "React Native continues to dominate cross-platform development. Here's why it remains the top choice for startups and businesses.",
    },
    {
        id: 3,
        title: "Boost Your Freelancing Profile With These Simple Tips",
        slug: "boost-freelancing-profile-tips",
        image: "/images/thumbnail.jpg",
        author: "NHM Nazmul",
        category: "Freelancing",
        publishedAt: "2025-11-22",
        description:
            "Want more clients? Improve your gig description, add proof of work, and optimize your marketplace profile with these tips.",
    },
];


