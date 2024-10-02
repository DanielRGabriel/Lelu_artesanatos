// src/pages/home/home.jsx

import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import CustomCard from '../../components/CustomCard/CustomCard.jsx';
import SearchAppBar from '../../components/SearchAppBar/SearchAppBar.jsx';
import Logo from '../../components/Logo/logo.jsx'; // Importando o componente Logo
import styles from './home.module.css'; // Importando o CSS Module

// Importando as imagens diretamente
import ecobagImage from '../../assets/ImagensProdutos/ecobag3.png';
import carteiraImage from '../../assets/ImagensProdutos/carteira_solange1.png';
import necessaireImage from '../../assets/ImagensProdutos/necessaire1.png';

// Adicionando as imagens ao array
const cardImages = [ecobagImage, carteiraImage, necessaireImage];

function Home() {
  return (
    <Box className={styles.appContainer}>
      <SearchAppBar />
      <Logo /> {/* Componente Logo */}
      <Container className={styles.contentContainer}>
        <Grid container spacing={4} justifyContent="center">
          {/* Chamar o CustomCard com diferentes props */}
          <Grid item xs={12} sm={6} md={4}>
            <CustomCard
              title="Card 1"
              content="Conteúdo do Card 1"
              image={cardImages[0]} // Passa a imagem correspondente
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <CustomCard
              title="Card 2"
              content="Conteúdo do Card 2"
              image={cardImages[1]} // Passa a imagem correspondente
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <CustomCard
              title="Card 3"
              content="Conteúdo do Card 3"
              image={cardImages[2]} // Passa a imagem correspondente
            />
          </Grid>
        </Grid>
      </Container>
      <Box component="footer" className={styles.footer}>
        <Typography variant="body1">
          Footer do Projeto
        </Typography>
      </Box>
    </Box>
  );
}

export default Home;
