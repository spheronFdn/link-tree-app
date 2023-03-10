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
      redirectUrl: "https://twitter.com/SpheronHQ",
    },
    {
      key: "linkedin",
      label: "LinkedIn",
      iconUrl: LinkedIn,
      redirectUrl: "https://www.linkedin.com/company/spheron/",
    },
    // {
    //   "key": "medium",
    //   "label": "Medium",
    //   "iconUrl": Medium,
    //   "redirectUrl": "",
    // },
    {
      key: "youtube",
      label: "YouTube",
      iconUrl: Youtube,
      redirectUrl: "https://www.youtube.com/channel/UCIe3FlAWg06kGOrm1-c8oJg",
    },
    {
      key: "discord",
      label: "Discord",
      iconUrl: Discord,
      redirectUrl: "https://discord.com/invite/ahxuCtm",
    },
    {
      key: "github",
      label: "GitHub",
      iconUrl: GitHub,
      redirectUrl: "https://github.com/spheronFdn/",
    },
  ],
};

export default config;
