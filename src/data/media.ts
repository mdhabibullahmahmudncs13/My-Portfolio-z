import { MediaLinks } from '@/types';

const baseMedia = {
  discord: {
    id: "914240860101681163",
    tag: "elias.dev.",
  },
  stackOverflow: {
    id: "19758208",
    name: "elias",
  },
  github: "EliasDevis",
  figma: "elias_dev",
  replit: "EliasDev",
  codewars: "EliasDevis",
  devTo: "eliasdevis",
  cssBattle: "elias_dev",
  codepen: "elias_dev",
  dribble: "Elias_dev",
  email: "elias.devis@protonmail.com"
};

const websites = {
  discord: "discord.com/users/",
  github: "github.com/",
  figma: "figma.com/@",
  replit: "replit.com/@",
  stackOverflow: "stackoverflow.com/users/",
  codewars: "codewars.com/users/",
  devTo: "dev.to/",
  cssBattle: "cssbattle.dev/player/",
  codepen: "codepen.io/",
  dribble: "dribbble.com/",
  email: "mailto:"
};

export const media: MediaLinks = {
  discord: `https://${websites.discord}${baseMedia.discord.id}`,
  github: `https://${websites.github}${baseMedia.github}`,
  figma: `https://${websites.figma}${baseMedia.figma}`,
  email: `${websites.email}${baseMedia.email}`,
  emailRaw: baseMedia.email,
  discordTag: baseMedia.discord.tag,
};