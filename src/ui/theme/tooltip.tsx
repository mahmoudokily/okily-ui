import { Coordinator, ThemeVariable } from "../helpers/types"

export type Tooltip = {
   padding: ThemeVariable<Coordinator<string>>
   radius: string
   fontSize: ThemeVariable<string>
}

export const tooltip: Tooltip = {
   padding: {
      small: {
         x: ".4rem",
         y: ".15rem"
      },
      default: {
         x: ".6rem",
         y: ".3rem"
      },
      large: {
         x: ".8rem",
         y: ".45rem"
      }
   },
   radius: ".25rem",
   fontSize: {
      small: ".75rem",
      default: ".875rem",
      large: "1rem"
   }
}
