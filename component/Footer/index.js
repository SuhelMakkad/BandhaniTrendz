import FooterLinks from "./FooterLinks";
import { LogoBox } from "../Icons";
import Logo from "../Logo";
import Image from "next/image";

import styles from "./Footer.module.css";
import Link from "next/link";

export default function Footer() {
  const categories = [
    { link: "/catagories/dupatta", name: "dupatta" },
    { link: "/catagories/dress", name: "dress" },
    { link: "/catagories/fabric", name: "fabric" },
    { link: "/catagories/saree", name: "saree" },
  ];

  const resources = [
    { link: "/catagories/faq", name: "faq" },
    { link: "/catagories/privacy-policy", name: "privacy policy" },
    { link: "/catagories/support", name: "support" },
    { link: "/catagories/terms-and-condition", name: "terms & condition" },
  ];

  const socialIcons = [
    "/assets/social/facebook.png",
    "/assets/social/instagram.png",
    "/assets/social/linkedin.png",
    "/assets/social/twitter.png",
    "/assets/social/whatsapp.png",
  ];

  return (
    <footer id={styles.footer} className="bg-gradient">
      <div className={`wrapper two-section-wrapper`}>
        <div className={"left-40 " + styles.logoWrapper}>
          <LogoBox size={180} />
          <Logo className={styles.textLogo} fontSize="1.5rem" />
        </div>
        <div className={"right-60 " + styles.footerLink}>
          <div className={styles.linksWrapper}>
            <FooterLinks heading="categories" list={categories} />
          </div>
          <div className={styles.linksWrapper}>
            <FooterLinks heading="resources" list={resources} />
          </div>
        </div>
      </div>
      <div className={styles.socialIcons}>
        {socialIcons.map((socialIcon, i) => (
          <Link href="/" key={i}>
            <a>
              <Image
                className={styles.socialIcon}
                src={socialIcon}
                width={32}
                height={32}
                layout="intrinsic"
              />
            </a>
          </Link>
        ))}
      </div>
    </footer>
  );
}
