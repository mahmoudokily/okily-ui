import Close from '../../shared/Close';
import Search from '../../shared/Search';
import { Typography } from '../../ui';
import Icon from '../../ui/Icon';
import { Input as Component } from '../../ui/input/Input'




type Props = React.ComponentProps<typeof Component>;




const Input = (props: Props) => {
      return <Component
            $placeholder='test out'
            $prefix={<Close />}
            $suffix={<Search />}
            // $error='something went wrong '
            // $hint='this is a placeholder that will be replaced'
            {...props}
      />
}



export default Input;