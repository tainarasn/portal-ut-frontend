import { Box, Divider } from '@mui/material';
import { FaMicroscope } from 'react-icons/fa';
import { IoSchool } from 'react-icons/io5';
import { MdGroups2 } from 'react-icons/md';

export const CardCustom = ({ flag, title, content }) => {
  return (
    <Box
      sx={{
        borderRadius: '0 1vw',
        bgcolor: '#F6A808',
        p: '0.5vw 0 0 0',
        boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
      }}
    >
      <Box
        sx={{
          borderRadius: '0 1vw',
          bgcolor: '#fff',
          padding: '1vw',
          display: 'flex',
          flexDirection: 'column',
          gap: '1vw',
        }}
      >
        <h2 style={{ alignSelf: 'center' }}>{title}</h2>
        <Box
          sx={{
            gap: '1vw',
            width: '100%',
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {flag == 'ensino' ? (
            <IoSchool style={{ width: '3vw', height: '3vw' }} />
          ) : flag == 'pesquisa' ? (
            <FaMicroscope style={{ width: '3vw', height: '3vw' }} />
          ) : (
            flag == 'extensao' && (
              <MdGroups2 style={{ width: '3vw', height: '3vw' }} />
            )
          )}
          <Divider sx={{ bgcolor: 'black', width: '10%', height: '2px' }} />
        </Box>

        <Box
          width="100%"
          paddingTop={'1vw'}
          display={'flex'}
          flexDirection={'column'}
          gap="2vw"
        >
          <p
            style={{
              textAlign: 'start',
              maxHeight: '13rem' /* Altura máxima em 6 linhas */,
              overflow: 'hidden' /* Oculta conteúdo excedente */,
              textOverflow:
                'ellipsis' /* Adiciona elipses (...) ao final do texto cortado */,
              display: '-webkit-box' /* Adiciona suporte para WebKit */,
              WebkitBoxOrient: 'vertical' /* Orientação vertical */,
              WebkitLineClamp: 11 /* Número máximo de linhas */,
              whiteSpace: 'pre-line' /* Permite quebras de linha */,
              lineHeight: '1.2em' /* Define a altura da linha */,
            }}
          >
            {content}
          </p>
          <p
            style={{
              alignSelf: 'end',
              cursor: 'pointer',
              textDecoration: 'undeline',
              color: '#F6A808',
              fontWeight: '700',
            }}
            onClick={() => console.log('Ver mais')}
            onMouseEnter={(e) => (e.target.style.color = 'black')}
            onMouseLeave={(e) => (e.target.style.color = '#F6A808')}
          >
            Ver mais
          </p>
        </Box>
      </Box>
    </Box>
  );
};
