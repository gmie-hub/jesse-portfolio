import routes from "@jes/routes";

export const stackData = [
  "/figma.svg",
  "/airtable.svg",
  "/miro.svg",
  "/slack.svg",
  "/adobe.svg",
  "/openai.svg",
  "/canva.svg",
  "/sketch.svg",
  "/ae.svg",
  "/ai-icon.svg",
  "/xd.svg",
];

export const socialLinks = [
  "/linkedin.svg",
  "/insta.svg",
  "/tweet.svg",
  "/be.svg",
  "/github.svg",
  "",
  "",
  "",
  "",
];

export const items = [
  { icon: "/home.svg", text: "Home", to: routes.home },
  { icon: "/about.svg", text: "About", to: routes.main.about },
  { icon: "/project.svg", text: "Projects", to: routes.main.projects },
  { icon: "/gallery.svg", text: "Gallery", to: routes.main.gallery },
  { icon: "/ai.svg", text: "My AI", to: routes.main.myAI },
];