import config from "@/config";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa6";

function SocialLinks() {
  const socialLinks = [
    {
      href: config.social.Instagram,
      label: "Instagram",
      icon: <FaInstagram className="size-5 mr-2 text-white dark:text-rose" />,
    },
    {
      href: config.social.Facebook,
      label: "Facebook",
      icon: <FaFacebook className="size-5 mr-2 text-white dark:text-rose" />,
    },
    // {
    //   href: config.social.Tiktok,
    //   label: "TikTok",
    //   icon: <FaTiktok className="size-5 mr-2 text-white dark:text-rose" />,
    // },
  ];

  return (
    <div>
      <p className="font-medium">Social</p>
      <ul className="mt-6 space-y-4 text-sm">
        {socialLinks.map(({ href, label, icon }) => (
          <li key={label}>
            <a
              href={href}
              target="_blank"
              referrerPolicy="no-referrer"
              className="transition hover:opacity-75 flex items-center"
            >
              {icon}
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SocialLinks;
