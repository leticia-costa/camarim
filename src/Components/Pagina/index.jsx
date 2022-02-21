import React from "react";
import styled from "styled-components";
import Cabecalho from "../Cabecalho";
import Conteudo from "../Conteudo";
import Rodape from "../Rodapé";

const Grid_Pagina = styled.body`
    display: grid; 
    grid-template-areas: 
    "cabecalho"
    "conteudo"
    "rodape";
    grid-template-columns: auto;
    grid-template-rows: 150px auto auto; 
`;
const Pagina = () => {
  return (
    <Grid_Pagina>
      <Cabecalho/>
      <Conteudo/>
      <Rodape/>
    </Grid_Pagina>
  );
};

export default Pagina;
