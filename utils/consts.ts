
export const ORIGIN ="Fabian"
 // env.NEXT_PUBLIC_HOST ?? env.NEXT_PUBLIC_VERCEL_URL ?? ("zagrodzki.me" as const);
export const PROTOCOL = process.env.NODE_ENV === "production" ? "https" : "http";
export const HOST = `${PROTOCOL}://${ORIGIN}` as const;

export const SEPARATOR = " • ";

export const SITE_TITLE = "Bartosz Zagrodzki";
export const SITE_TITLE_TEMPLATE = `%s ${SEPARATOR} ${SITE_TITLE}`;
export const SHORT_DESCRIPTION = "My personal website";
export const DEFAULT_DESCRIPTION =
  "Software engineer building products to help people lead better lives. In love with creative solutions - constantly learning and discovering new stuff.";

export const DEFAULT_IMAGE_URL = `/img/banner.png`;

export const SOCIALS = [
  {
    id: "x",
    name: "x (twitter)",
    color: "#000000",
    link: `https://x.com/doyy`,
  },
  {
    id: "linkedin",
    name: "linkedin",
    color: "#2867B2",
    link: `https://www.linkedin.com/in/doyy`,
  },
  {
    id: "github",
    name: "github",
    color: "#333",
    link: `https://github.com/doyy`,
  },
  {
    id: "rss",
    name: "rss",
    color: "#ee802f",
    link: "/feed",
  },
] as const;

export const EMAIL_REGEX = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/;
export const CONTENT_ID = "content";
