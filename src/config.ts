import AppLogo from "./assets/icons/app-logo.svg";
import Official from "./assets/icons/official.svg";
import Twitter from "./assets/icons/twitter.svg";
import LinkedIn from "./assets/icons/linkedin.svg";
// import Medium from "./assets/icons/medium.svg";
import Youtube from "./assets/icons/youtube.svg";
import Discord from "./assets/icons/discord.svg";
import GitHub from "./assets/icons/github.svg";

const config = {
  logoUrl: AppLogo,
  favicon: "../favicon.ico",
  title: "Spheron Link Tree",
  description:
    "Give your dApps, the wings of decentralised infrastructure with Spheron!",
  links: [
    {
      key: "official",
      label: "Official Website",
      iconUrl: Official,
      redirectUrl: "https://spheron.network/",
    },
    {
      key: "twitter",
      label: "Twitter",
      iconUrl: Twitter,
      redirectUrl: "https://twitter.com/Sathwik09",
    },
    {
      key: "linkedin",
      label: "LinkedIn",
      iconUrl: LinkedIn,
      redirectUrl: "https://www.linkedin.com/vuppala-sathwik/",
    },
    // {
    //   "key": "medium",
    //   "label": "Medium",
    //   "iconUrl": Medium,
    //   "redirectUrl": "",
    // },
    {
      key: "instagram",
      label: "Instagram",
      iconUrl: Youtube,
      redirectUrl: "https://www.instagram.com/vuppalasathwik",
    },
    {
      key: "facebook",
      label: "Facebook",
      iconUrl: Discord,
      redirectUrl: "https://facebook.com/vuppala.sathwik.12",
    },
    {
      key: "github",
      label: "GitHub",
      iconUrl: GitHub,
      redirectUrl: "https://github.com/userXYZ007/",
    },
  ],
};

export default config;
