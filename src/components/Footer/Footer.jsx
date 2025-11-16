import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  Globe,
  DollarSign,
} from "lucide-react";
import Logo from "../common/Logo";
import Logo_v2 from "../common/Logo";
import { Link } from "react-router";

const Footer = () => {
  return (
    <section className="bg-black text-gray-300 py-20 mt-10">
      <div className="main-container">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">
              Categories
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:underline hover:text-blue-500">
                  Writing & Translation
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:underline hover:text-blue-500">
                  Technology & Programming
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:underline hover:text-blue-500">
                  Design
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:underline hover:text-blue-500">
                  Video, Photo & Image
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:underline hover:text-blue-500">
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:underline hover:text-blue-500">
                  Social Media
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">About</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:underline hover:text-blue-500">
                  About us
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:underline hover:text-blue-500">
                  Contact us
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:underline hover:text-blue-500">
                  Career
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:underline hover:text-blue-500">
                  Blogs
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:underline hover:text-blue-500">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:underline hover:text-blue-500">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:underline hover:text-blue-500">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:underline hover:text-blue-500">
                  Jobs
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:underline hover:text-blue-500">
                  Freelancers
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:underline hover:text-blue-500">
                  Employers
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Support</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:underline hover:text-blue-500">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:underline hover:text-blue-500">
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:underline hover:text-blue-500">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:underline hover:text-blue-500">
                  Updates
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:underline hover:text-blue-500">
                  Documentation
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Connect</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  to="/"
                  className="flex items-center gap-2 hover:underline hover:text-blue-500"
                >
                  <Linkedin size={16} /> Linkedin
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="flex items-center gap-2 hover:underline hover:text-blue-500"
                >
                  <Twitter size={16} /> Twitter
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="flex items-center gap-2 hover:underline hover:text-blue-500"
                >
                  <Facebook size={16} /> Facebook
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="flex items-center gap-2 hover:underline hover:text-blue-500"
                >
                  <Instagram size={16} /> Instagram
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="flex items-center gap-2 hover:underline hover:text-blue-500"
                >
                  <Youtube size={16} /> Youtube
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-12 pt-8"></div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <div>
            <Logo_v2 logoTextColor="text-white"></Logo_v2>
          </div>
          <div className="text-gray-400">
            © 2025 TradeTalent. All Rights Reserved.
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 cursor-pointer hover:text-white transition">
              <Globe size={16} /> English
            </div>
            <div className="flex items-center gap-2 cursor-pointer hover:text-white transition">
              <DollarSign size={16} /> USD
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
