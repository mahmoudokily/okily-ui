import { PropsWithChildren } from 'react'
import { Drawer as Component, ListItem } from '../../ui'
type Props = React.ComponentProps<typeof Component>

const Drawer: React.FC<PropsWithChildren<Props>> = ({ children, ...props }) => {
   return (
      <Component>
         {['HOME', 'PROFILE', 'MENU'].map((item) => <ListItem>{item}</ListItem>)}
      </Component>

   )
}


export default Drawer;