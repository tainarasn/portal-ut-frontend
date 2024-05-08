import React from 'react';
import { Box, Grid, useMediaQuery } from '@mui/material';
import { CardCustom } from './CardCustom';

const Cards = (props) => {
  const isMobile = useMediaQuery('(orientation: portrait)');
  const content_ensino =
    'O ensino no curso de Engenharia de Computação é uma jornada fascinante e desafiadora. Os estudantes são imersos em um mundo de conceitos teóricos e práticos, onde a matemática, a ciência da computação e a engenharia se encontram para formar uma base sólida de conhecimento. Desde os primeiros semestres, os alunos são introduzidos aos fundamentos da matemática e da física, que são essenciais para entender os princípios subjacentes aos sistemas computacionais e eletrônicos. Conforme avançam nos estudos, mergulham em disciplinas mais específicas, como circuitos elétricos, programação de baixo nível, eletrônica digital e sistemas embarcados.';
  const content_pesquisa =
    'A pesquisa científica em engenharia de computação abrange uma variedade de áreas, desde inteligência artificial e aprendizado de máquina até redes de computadores e segurança cibernética. Os pesquisadores exploram novos algoritmos, desenvolvem tecnologias inovadoras e enfrentam desafios complexos para impulsionar avanços na área. Com foco na aplicação prática, a pesquisa em engenharia de computação visa melhorar sistemas, otimizar processos e impulsionar a inovação tecnológica em diversas indústrias.';

  const content_extensao =
    'A extensão universitária desempenha um papel fundamental na integração da academia com a sociedade. Por meio de programas e projetos de extensão, as instituições de ensino superior têm a oportunidade de aplicar o conhecimento produzido em suas pesquisas e contribuir de maneira significativa para o desenvolvimento das comunidades locais e regionais.Essa interação bidirecional entre a universidade e a sociedade promove a troca de experiências, conhecimentos e habilidades, resultando em benefícios tangíveis para ambas as partes. Os estudantes envolvidos em atividades de extensão têm a chance de aplicar seus conhecimentos na prática, desenvolver habilidades de liderança e comunicação, e adquirir uma compreensão mais ampla dos desafios enfrentados pela sociedade.';
  return (
    <Grid
      container
      spacing={1.8}
      sx={{
        width: '100%',
        pt: '2vw',
        pb: isMobile ? '8vw' : '4vw',
        alignItems: 'center',
      }}
    >
      <Grid item xs={isMobile ? 12 : 4} sx={{}}>
        <CardCustom title={'Ensino'} content={content_ensino} flag="ensino" />
      </Grid>
      <Grid item xs={isMobile ? 12 : 4}>
        <CardCustom
          title={'Pesquisa'}
          content={content_pesquisa}
          flag="pesquisa"
        />
      </Grid>
      <Grid item xs={isMobile ? 12 : 4}>
        <CardCustom
          title={'Extensão'}
          content={content_extensao}
          flag="extensao"
        />
      </Grid>
    </Grid>
  );
};

export default Cards;
