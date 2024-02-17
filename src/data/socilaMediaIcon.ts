import type { StaticImageData } from "next/image";
import instagramLight from "../assets/social-media/instagram-light.svg";
import instagramDark from "../assets/social-media/instagram-dark.svg";
import githubLight from "../assets/social-media/github-light.svg";
import githubDark from "../assets/social-media/github-dark.svg";
import linkedinLight from "../assets/social-media/linkedin-light.svg";
import linkedinDark from "../assets/social-media/linkedin-dark.svg";
import twitterLight from "../assets/social-media/twitter-light.svg";
import twitterDark from "../assets/social-media/twitter-dark.svg";
import threadDark from "../assets/social-media/thread-dark.svg";
import threadLight from "../assets/social-media/thread-light.svg";

const baseLink = "https://www.instagram.com/christian_el_olivero/";
interface SocialMediaIcon {
  name: string;
  icons: [string, string] | StaticImageData; // Array to store light and dark icon promises
  link: string;
}

interface SocialMediaIcons {
  [key: string]: SocialMediaIcon;
}

const socialMediaIcons: SocialMediaIcons = {
  instagram: {
    name: "instagram",
    icons: [instagramLight, instagramDark] as [string, string],
    link: baseLink,
  },
  github: {
    name: "github",
    icons: [githubLight, githubDark] as [string, string],
    link: baseLink,
  },
  thread: {
    name: "thread",
    icons: [threadLight, threadDark] as [string, string],
    link: baseLink,
  },
  linkedin: {
    name: "linkedin",
    icons: [linkedinLight, linkedinDark] as [string, string],
    link: baseLink,
  },
  twitter: {
    name: "twitter",
    icons: [twitterLight, twitterDark] as [string, string],
    link: baseLink,
  },
};

export default socialMediaIcons;
