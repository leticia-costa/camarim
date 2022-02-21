import React from "react";
import styled from "styled-components";
import background from "../../assets/images/Cabecalho/Background.jpg"; 
import Img_Logo from "../../assets/images/Cabecalho/Logo.jpg"; 
import FilterAltIcon from '@mui/icons-material/FilterAlt';

const Grid_Cabecalho = styled.header`
  align-items: center;
  display: flex;
  grid-area: cabecalho;
  background: url('${background}') center / cover no-repeat;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: .2em 4em;
  width: 100%;
  position: absolute;
  background: black;
`;

const Tituo = styled.h1`
  font-size: 3.5em;
  color: #ca43d6;
  font-weight: bold;
  text-align: center;
  @keyframes anima {
    to{
      color: #ffffff;
    }
  }
  animation: anima 3s ease 1s infinite alternate running;
`;

const Logo = styled.img`
  width: 3.5rem;
  margin-right: .2rem;
`;

const Filtro = styled.button`
  width: 10%;
  height: 40px;
  color:  black;
  background: #ffffff;
  font-weight: bold;
  font-size: 1.5em;
  border-radius: 5vh;
  border: none;
  :hover{
      cursor: pointer;
    color: #ca43d6;
}
    :active{
    border: 0.12vw solid #ca43d6;
    color: #ca43d6;
}
`;

const Cabecalho = () => {
  return (
    <Grid_Cabecalho>
        <Menu> 
           
            <Tituo> <Logo src={Img_Logo} alt="LOgo Camarim"/>      CAMARIM</Tituo>
            <Filtro><svg data-testid="FilterAltIcon"></svg>Filtrar</Filtro>
        </Menu>
    </Grid_Cabecalho>
  );
};

export default Cabecalho;
