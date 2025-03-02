import VercelFooterSvg from "@/app/assets/icons/vercel-footer-svg";
import Link from "next/link";
// import { ThemeToggle } from "./theme-toggle";

const footerLinks = [
  {
    title: "Products",
    links: [
      "AI",
      "Enterprise",
      "Fluid Compute",
      "Next.js",
      "Observability",
      "Previews",
      "Rendering",
      "Security",
      "Turbo",
      { label: "v0 ↗", href: "https://v0.dev" },
    ],
  },
  {
    title: "Resources",
    links: [
      "Community ↗",
      "Docs",
      "Guides",
      "Help",
      "Integrations",
      "Pricing",
      "Resources",
      "Solution Partners",
      "Templates",
    ],
  },
  {
    title: "Company",
    links: [
      "About",
      "Blog",
      "Careers",
      "Changelog",
      "Contact Us",
      "Customers",
      "Partners",
      "Privacy Policy",
      { label: "Legal ▾", isDropdown: true },
    ],
  },
  {
    title: "Social",
    icons: [
      {
        // icon: GitHub
        label: "GitHub",
        href: "#",
      },
      {
        // icon: GitHub
        label: "LinkedIn",
        href: "#",
      },
      {
        // icon: GitHub
        label: "Twitter",
        href: "#",
      },
      {
        // icon: GitHub
        label: "YouTube",
        href: "#",
      },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="w-full relative  bg-black text-white px-6 py-10 md:py-20">
      <div className=" mx-auto grid grid-cols-2 md:grid-cols-5  gap-8 max-w-[1074px]">
        {footerLinks.map((section) => (
          <div key={section.title}>
            <h3 className="text-sm font-semibold mb-3">{section.title}</h3>
            <ul className="space-y-2  ml-auto text-sm text-[#a1a1a1]">
              {/* Regular links */}
              {section.links?.map((link) => (
                <li key={typeof link === "string" ? link : link.label}>
                  {typeof link === "string" ? (
                    <span className="cursor-pointer hover:text-white">
                      {link}
                    </span>
                  ) : (
                    <Link href={"#"} className="hover:text-white">
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
              {/* Social icons section */}
              {section.icons?.map((social) => (
                <li key={social.label}>
                  <Link
                    href={social.href}
                    className="flex items-center  gap-2 hover:text-white"
                  >
                    {/* <social.icon className="w-4 h-4" /> */}
                    {social.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className=" ml-auto">
          <VercelFooterSvg />
        </div>
      </div>

      {/* Status bar */}
      <div className="mt-8 text-sm max-w-[1074px] flex items-center justify-between mx-auto">
        <Link
          href="#"
          className="flex items-center gap-2 text-blue-500 hover:underline"
        >
          <span className="inline-block w-2 h-2 bg-blue-500 rounded-full"></span>
          All systems normal
        </Link>
        {/* <ThemeToggle /> */}
      </div>
    </footer>
  );
};

export default Footer;
