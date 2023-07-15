const baseLink = "https://www.instagram.com/andrewjcameron/";
import instagramLight from "../assets/social-media/instagram-light.svg";
import instagramDark from "../assets/social-media/instagram-dark.svg";
import githubLight from "../assets/social-media/github-light.svg";
import githubDark from "../assets/social-media/github-dark.svg";
import linkedinLight from "../assets/social-media/linkedin-light.svg";
import linkedinDark from "../assets/social-media/linkedin-dark.svg";
import twitterLight from "../assets/social-media/twitter-light.svg";
import twitterDark from "../assets/social-media/twitter-dark.svg";

interface SocialMediaIcon {
  name: string;
  icons: [any, any]; // Array to store light and dark icon promises
  link: string;
}

interface SocialMediaIcons {
  [key: string]: SocialMediaIcon;
}

const socialMediaIcons: SocialMediaIcons = {
  instagram: {
    name: "instagram",
    icons: [instagramLight, instagramDark],
    link: baseLink,
  },
  github: {
    name: "github",
    icons: [githubLight, githubDark],
    link: baseLink,
  },
  linkedin: {
    name: "linkedin",
    icons: [linkedinLight, linkedinDark],
    link: baseLink,
  },
  twitter: {
    name: "twitter",
    icons: [twitterLight, twitterDark],
    link: baseLink,
  },
};

export default socialMediaIcons;
