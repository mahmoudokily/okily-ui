import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { Size } from "./helpers/types";


type Props = {
      separator?: string;
      size?: Size;


}


type CrumpProps = {
      color?: string;
      disabled?: boolean;
}

export const StyledLink = styled(Link) <CrumpProps>``
export const Crumb = styled.li <CrumpProps>`
  display: inline-block;
  &:last-of-type:after {
    content: "";
    padding: 0;
  
  }
  &:last-of-type {
  ${StyledLink}{
      color :#737373!important;
      text-decoration:'none';
      cursor: grab;
    &:hover,
    &:active {
      text-decoration: none;
      color :#737373!important;

    }
    }
  }
  ${StyledLink}{
    color: ${props => props.color || props.theme.colors.primary} ;
    text-decoration: none;
    &:hover,
    &:active {
      text-decoration: underline;
      color: ${props => props.color || props.theme.colors.primary} 

    }
 
  }

`;



export const Breadcrumbs = styled.ul<Props>`
  list-style: none;
  padding: 0;
  & > li:after {
    content: "${props => props.separator || "/"}";
    padding: 0 5px;
  }
  ${Crumb}{
      font-size:${({ theme, size = 'large' }) => theme.button.fontSize[size]}
      
  }
`;
