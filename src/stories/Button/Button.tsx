import React, { PropsWithChildren } from 'react'
import { Button as ButtonEl } from '../../ui'
import WaveEffect from '../../ui/WaveEffect'

type Props = React.ComponentProps<typeof ButtonEl>

export const Button: React.FC<PropsWithChildren<Props>> = ({ children, ...props }) => {
      return <WaveEffect >
            <ButtonEl $variant='secondary'  {...props}>{children} </ButtonEl>
      </WaveEffect>
}