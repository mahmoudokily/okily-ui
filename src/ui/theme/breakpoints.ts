export const breakpoints: any = ["40em", "52em", "80em", "120em"];

// aliases
breakpoints.sm = breakpoints[0];
breakpoints.md = breakpoints[1];
breakpoints.lg = breakpoints[2];
breakpoints.xl = breakpoints[3];

export interface BreakPoints {
  sm: string;
  md: string;
  lg: string;
  xl: string;
}

export type BreakPoint = keyof BreakPoints;
