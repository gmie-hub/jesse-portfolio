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

export const images = [
  "/knowble.png",
  "/termii.png",
  "/sotel.png",
  "/rigo_health.png",
  "/lyte.png",
  "/ideospace.png",
  "/hotSpicy.png",
];

export const projects = [
  { title: "Pineons AI", subTitle: "AI Tech", img: "/pineon.png", smallImg: "/small-pineon.png", to: routes.main.projects },
  { title: "Pisearch AI", subTitle: "AI Tech", img: "/pi.png", smallImg: "/small-pi.png", to: routes.main.projects },
  { title: "Myadmissioon", subTitle: "Editech", img: "/myAdd.png", smallImg: "/small-my-add.png", to: routes.main.projects },
  { title: "Inbox by termii", subTitle: "CPass", img: "/inbox.png", smallImg: "/small-inbox.png", to: routes.main.projects },
  { title: "Phoenix", subTitle: "Crypto", img: "/crypto.png", smallImg: "/small-crypto.png", to: routes.main.projects },
  { title: "Landscribe", subTitle: "Realtech", img: "/landscribe.png", smallImg: "/small-landscribe.png", to: routes.main.projects },
  { title: "Sotel App", subTitle: "CaaS", img: "/sotel-app.png", smallImg: "/small-sotel.png", to: routes.main.projects },
  { title: "Ideospace", subTitle: "Fintech", img: "/ideo.png", smallImg: "/small-ideo.png", to: routes.main.projects },
  { title: "Rigo", subTitle: "HealthTech", img: "/rigo.png", smallImg: "/small-rigo.png", to: routes.main.projects },
  { title: "Uncle", subTitle: "AI/Fintech", img: "/uncle.png", smallImg: "/small-uncle.png", to: routes.main.projects },
  // { title: "Pineons AI", subTitle: "AI Tech", img: "/pineon.png", smallImg: "/small-pineon.png", to: routes.main.projects },
]