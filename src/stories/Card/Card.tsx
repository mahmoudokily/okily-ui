import { Card as CardComponent } from "../../ui"
import React from 'react';



type Props = React.ComponentProps<typeof CardComponent>

export const Card = (props: Props) => {
      return (
            <CardComponent {...props}>
                  test
            </CardComponent>
      )
}