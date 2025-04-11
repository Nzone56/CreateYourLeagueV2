export type LeagueName = "premier" | "laliga" | "seriea" | "bundesliga" | "ligue1" | "champions" | "default";

export interface LeaguePrev {
  uid: LeagueName;
  images: string;
  shortName: string;
  name: string;
  colors: PrevLeagueColors;
  fontFamily: string;
}

export interface PrevLeagueColors {
  primary: string;
  secondary: string;
  tertiary: string;
}
