import { PropsWithChildren } from "react";
import { Flex } from "../Flex";
import WaveEffect from "../WaveEffect";

type WithEffectProps = {
   $withEffect?: boolean;
}

const WithEffect: React.FC<PropsWithChildren<WithEffectProps>> = ({ children, $withEffect }) => {
   if ($withEffect) {
      return (
         <WaveEffect $variant='dark' >
            <>
               {children}

            </>
         </WaveEffect>
      )
   }
   return <>
      {children}
   </>
}
export default WithEffect;