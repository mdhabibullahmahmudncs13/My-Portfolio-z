export interface Project {
  id: string;
  links: {
    live?: string;
    figma?: string;
    github?: string;
  };
  techs: string[];
  hasImage?: boolean;
  isSmall?: boolean;
  isInProgress?: boolean;
}

export interface MediaLinks {
  discord: string;
  github: string;
  figma: string;
  email: string;
  emailRaw: string;
  discordTag: string;
}

export interface SkillCategory {
  [key: string]: string[];
}