import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
`;

export const MainCardContainer = styled.div`
box-shadow: 0 4px 8px 0 var(--grey-color-secondary); /* Card look */
  transition: 0.3s;
  background-color: var(--bg-general);
  border-radius: 4px; /* Round corners */
  border-color: var(--grey-color-primary);
  border-width:10px;
  position: relative;
  margin: 10%;
`;

export const ResultCardContainer = styled.div`
box-shadow: 0 4px 8px 0 var(--grey-color-secondary); /* Card look */
  transition: 0.3s;
  background-color: white;
  border-radius: 4px; /* Round corners */
  border-color: var(--grey-color-primary);
  border-width:10px;
  position: relative;
  margin: 5%;
  font-size: 0.9em;
`;

export const SearchBarContainer  = styled.div`
padding: 3% 3% 3% 0;
position: relative;
margin-left: 9%;
&:hover {
  transform: scale(1.02) perspective(0px);

}
`;
