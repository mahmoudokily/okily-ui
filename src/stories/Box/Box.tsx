import { Box as BoxComponent } from "../../ui"
import React from 'react';



type Props = React.ComponentProps<typeof BoxComponent>

export const Box: React.FC<Props> = (props) => {
      return (
            <BoxComponent {...props}>
                  test
            </BoxComponent>
      )
}