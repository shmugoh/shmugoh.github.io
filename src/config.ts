import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://shmugo.co/", // replace this with your deployed domain
  author: "Juan",
  desc: "hello i am shmugo",
  title: "shmugo",
  ogImage: "hard_work.jpg",
  lightAndDarkMode: true,
  postPerPage: 3,
};

export const LOCALE = {
  lang: "en", // html lang code. Set this empty and default will be "en"
  langTag: ["en-EN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    icon: "simple-icons:github",
    href: "https://github.com/shmugoh",
    linkTitle: ` ${SITE.title} on GitHub`,
    active: true,
  },
  {
    name: "Ko-Fi",
    icon: "simple-icons:kofi",
    href: "https://ko-fi.com/shmugo",
    linkTitle: ` ${SITE.title} on Ko-Fi`,
    active: true,
  },
  {
    name: "Twitter",
    icon: "simple-icons:twitter",
    href: "https://twitter.com/shmugo_",
    linkTitle: ` ${SITE.title} on GitHub`,
    active: true,
  },
  {
    name: "Mail",
    icon: "simple-icons:gmail",
    href: "mailto:juanpislin@gmail.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: true,
  },
];
