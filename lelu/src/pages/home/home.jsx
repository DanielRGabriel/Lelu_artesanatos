// src/pages/home/home.jsx

import React from 'react';
import { AppBar, Toolbar, Typography, Container, Box, Grid } from '@mui/material';
import CustomCard from '../../components/CustomCard.jsx';
import styles from './home.module.css'; // Importando o CSS Module

function Home() {
  return (
    <Box className={styles.appContainer}>
      {/* Header */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Meu Projeto com Header e Footer
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Conteúdo Central */}
      <Container className={styles.contentContainer}>
        <Grid container spacing={4} justifyContent="center">
          {/* Chamar o CustomCard com diferentes props */}
          <Grid item xs={12} sm={6} md={4}>
            <CustomCard title="Card 1" content="Conteúdo do Card 1" />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <CustomCard title="Card 2" content="Conteúdo do Card 2" />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <CustomCard title="Card 3" content="Conteúdo do Card 3" />
          </Grid>
        </Grid>
      </Container>

      {/* Footer */}
      <Box component="footer" className={styles.footer}>
        <Typography variant="body1">
          Footer do Projeto
        </Typography>
      </Box>
    </Box>
  );
}

export default Home;
