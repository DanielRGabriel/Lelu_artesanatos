// src/pages/home/home.jsx
import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import CustomCard from '../../components/CustomCard/CustomCard.jsx';
import SearchAppBar from '../../components/SearchAppBar/SearchAppBar.jsx';
import Logo from '../../components/Logo/logo.jsx'; 
import Footer from '../../components/Footer/footer.jsx'; // Importando o componente Footer
import styles from './home.module.css';

// Importando as imagens diretamente
import ecobagImage from '../../assets/ImagensProdutos/ecobag3.png';
import carteiraImage from '../../assets/ImagensProdutos/carteira_solange1.png';
import necessaireImage from '../../assets/ImagensProdutos/necessaire1.png';

// Adicionando as imagens ao array
const cardData = [
  { title: 'Ecobag', content: 'Ecobag feita à mão', price: 49.90, image: ecobagImage },
  { title: 'Carteira Solange', content: 'Carteira artesanal de couro', price: 79.90, image: carteiraImage },
  { title: 'Necessaire grande', content: 'Necessaire espaçosa', price: 59.90, image: necessaireImage }
];

function Home() {
  return (
    <Box className={styles.appContainer}>
      <SearchAppBar />
      <Logo /> {/* Componente Logo */}
      <Container className={styles.contentContainer}>
        <Grid container spacing={4} justifyContent="center">
          {cardData.map((card, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <CustomCard
                title={card.title}
                content={card.content}
                price={card.price} // Passando o preço para o card
                image={card.image}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
      <Footer /> {/* Componente Footer adicionado */}
    </Box>
  );
}

export default Home;
