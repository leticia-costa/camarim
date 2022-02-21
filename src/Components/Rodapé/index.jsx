import React from "react";
import styled from "styled-components";
import background from "../../assets/images/Cabecalho/Background.jpg"; 

const Grid_Rodape = styled.footer`
  background: url('${background}') center / cover no-repeat;
  color: #333333;
  font-size: 1.5rem;
  grid-area: rodape;
  padding: 1rem;
`;
const Texto = styled.p`
  text-align: center;
  width: 100%;
  background:  black;
  color: #ca43d6;
`;

const Rodape = () => {
  return (
    <Grid_Rodape>
      <Texto> Leticia Costa Leite - 2022 </Texto>
    </Grid_Rodape>
  );
};

export default Rodape;
