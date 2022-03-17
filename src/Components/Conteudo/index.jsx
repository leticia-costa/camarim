import React from "react";
import styled from "styled-components";
import { Box_Etiquetas, Etiqueta } from "../Etiquetas";
import { looksLista } from "../../looks";

const Grid_Conteudo = styled.main`
  grid-area: conteudo;
  padding: 1rem 2rem;
  background: black;
`;
  
const Titulo_Look = styled.h3`
    font-size: 1.5em;
    background: rgb(0,0,0);
    background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(70,0,77,1) 20%, rgba(192,99,201,1) 50%, rgba(70,0,77,1) 80%, rgba(0,0,0,1) 100%);
    font-weight: bold;
    width: 100%;
    margin-bottom: 2vh;
    color: black;
    text-align: center;
    @keyframes anima {
        to{
        color: #ffffff;
        }
    }
    animation: anima 3s ease 1s infinite alternate running;
`;

const Box = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Feed = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 25% 25% 25% 25%;
  grid-template-rows: 25% 25% 25% 25%;
  height: calc(60vh - 50px);
  width: 60%;
  margin-top: 5vh;
  margin-bottom: 5vh;
  :hover{
    transition: 1s all;
    width: 65%;
    height: calc(65vh - 50px);
}
`;

const Caixa = styled.div`
  align-items: flex-end;
  display: flex;
  justify-content: center;
`;

const Look_Destaque = styled.div`
  grid-row: 1 / 5;
  grid-column: 1 / 2;
  border-radius: 5vh;
  :hover{
    border: 0.2vw solid  #ca43d6;
    transform: scale(1.15);
    transition: transform 1s ease;   
    cursor: pointer;
    box-shadow: 0 0 10px #e100ff, 0 0 25px  #ca43d6, 0 0 50px #d400ff;   
}
`;

const Look_Secundario = styled.div`
  grid-row: 1 / 3;
  grid-column: 2 / 3;
  border-radius: 5vh;
  :hover{
    border: 0.2vw solid  #ca43d6;
    cursor: pointer;
    transform: scale(1.15);
    transition: transform 1s ease;    
    box-shadow: 0 0 10px #e100ff, 0 0 25px  #ca43d6, 0 0 50px #d400ff;    
}
`;

const Look_Acessorio = styled.div`
  grid-row: 3 / 5;
  grid-column: 2 / 3;
  border-radius: 5vh;
  :hover{
    border: 0.2vw solid  #ca43d6;
    cursor: pointer;
    transform: scale(1.15);
    transition: transform 1s ease;   
    box-shadow: 0 0 10px #e100ff, 0 0 25px  #ca43d6, 0 0 50px #d400ff;     
}
`;

const Look_Acessorio2 = styled.div`
  grid-row: 1 / 3;
  grid-column: 3 / 4;
  border-radius: 5vh;
  :hover{
    border: 0.2vw solid  #ca43d6;
    cursor: pointer;
    transform: scale(1.15);
    transition: transform 1s ease;      
    box-shadow: 0 0 10px #e100ff, 0 0 25px  #ca43d6, 0 0 50px #d400ff;   
}
`;

const Look_Acessorio3 = styled.div`
  grid-row: 3 / 5;
  grid-column: 3 / 4;
  border-radius: 5vh;
  :hover{
    border: 0.2vw solid  #ca43d6;
    cursor: pointer;
    transform: scale(1.15);
    transition: transform 1s ease;   
    box-shadow: 0 0 10px #e100ff, 0 0 25px  #ca43d6, 0 0 50px #d400ff;    
}
`;

const Look_Acessorio4 = styled.div`
  grid-row: 1 / 3;
  grid-column: 4 / 5;
  border-radius: 5vh;
  :hover{
    border: 0.2vw solid  #ca43d6;
    cursor: pointer;
    transform: scale(1.15);
    transition: transform 1s ease;   
    box-shadow: 0 0 10px #e100ff, 0 0 25px  #ca43d6, 0 0 50px #d400ff;   
}
`;

const Look_Make = styled.div`
  grid-row: 3 / 5;
  grid-column:  4 / 5;
  border-radius: 5vh;
  :hover{
    border: 0.2vw solid  #ca43d6;
    cursor: pointer;
    transform: scale(1.15);
    transition: transform 1s ease;   
    box-shadow: 0 0 10px #e100ff, 0 0 25px  #ca43d6, 0 0 50px #d400ff;   
}
`;

const Conteudo = () => {
  return (
    <Grid_Conteudo>
        {looksLista.looks.map(({titulo, destaque, secundario, acessorio1, acessorio2, acessorio3, acessorio4, make, etiq_horario, etiq_clima, etiq_ocasiao}) => {
                    return (
                    <>
                      <Titulo_Look> {titulo} </Titulo_Look> 
                        <Box>
                        <Feed>
                              <Look_Destaque style={{ background: `url(${destaque}) center / cover no-repeat` }}>
                                <Caixa/>                            
                              </Look_Destaque>
                              <Look_Secundario style={{ background: `url(${secundario}) center / cover no-repeat` }}>
                                <Caixa/>
                              </Look_Secundario>
                              <Look_Acessorio style={{ background: `url(${acessorio1}) center / cover no-repeat` }}>
                                <Caixa/>
                              </Look_Acessorio>
                              <Look_Acessorio2 style={{ background: `url(${acessorio2}) center / cover no-repeat` }}>
                                <Caixa/>
                              </Look_Acessorio2>
                              <Look_Acessorio3 style={{ background: `url(${acessorio3}) center / cover no-repeat` }}>
                                <Caixa/>
                              </Look_Acessorio3>
                              <Look_Acessorio4 style={{ background: `url(${acessorio4}) center / cover no-repeat` }}>
                                <Caixa/>
                              </Look_Acessorio4>
                              <Look_Make style={{ background: `url(${make}) center / cover no-repeat` }}>
                                <Caixa/>
                              </Look_Make>
                        </Feed>
                        </Box>
                        <Box_Etiquetas>
                            <Etiqueta> {etiq_horario} </Etiqueta>
                            <Etiqueta>{etiq_clima}</Etiqueta>
                            <Etiqueta>{etiq_ocasiao}</Etiqueta>
                        </Box_Etiquetas>
                      </>
                    )
                })
            }
      </Grid_Conteudo>
  );
};

export default Conteudo;
