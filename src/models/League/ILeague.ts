export type LeagueName = "premier" | "laliga" | "seriea" | "bundesliga" | "ligue1" | "champions";

export interface LeaguePrev {
  uid: LeagueName;
  logo: string;
  name: string;
  colors: PrevLeagueColors;
}

export interface PrevLeagueColors {
  primary: string;
  secondary: string;
  tertiary: string;
}
