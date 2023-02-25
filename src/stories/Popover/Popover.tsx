import { Button } from "../../ui";
import Component from "../../ui/popover/Popover";
import { useState } from 'react';
import { PopoverBody, PopoverHeader } from "../../ui/popover/PopoverStyledElement";

type Props = React.ComponentProps<typeof Component>


export const Popover = (props: Props) => {
      const [open, setOpen] = useState<boolean>(false)
      return (
            <Component closeOnClickAway variant='danger' position="right" type='danger' status={open} setStatus={setOpen} {...props}>
                  <Button $variant='danger' >toggle</Button>
                  <>
                        <PopoverHeader>Popover Header</PopoverHeader>
                        <PopoverBody>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut lobortis enim.</PopoverBody>
                  </>

            </Component>
      )
}