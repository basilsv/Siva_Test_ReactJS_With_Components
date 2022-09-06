import styled, { css } from 'styled-components';

export const Button = styled.button`
background: transparent;
border-radius: 3px;
border: 2px solid var(--purple-color-primary);
color: var(--purple-color-primary);
margin: 0.5em 1em;
padding: 0.5em 1em;
font-size: 20px;
&:hover {
    transform: scale(1.1);
  }

${props => props.primary && css`
  border: 2px solid var(--red-color);
  background: var(--red-color);
  color: white;
  font-size:14px;
`
       }
`;