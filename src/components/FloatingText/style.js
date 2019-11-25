import styled from 'styled-components';

export const Text = styled('span')`
  display: inline-block;
  position: absolute;
  top: ${props => props.top ? props.top : ''};
  right: ${props => props.right ? props.right : ''};
  bottom: ${props => props.bottom ? props.bottom : ''};
  left: ${props => props.left ? props.left : ''};
  z-index: 100;
  color: #efdb10;
  text-shadow: 1px 1px black;
  font-size: 4rem;
`;