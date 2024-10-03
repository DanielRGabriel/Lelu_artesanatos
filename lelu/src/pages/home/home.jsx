// src/pages/home/home.jsx
import React, { useState } from 'react';
import { Box, Container, Grid } from '@mui/material';
import CustomCard from '../../components/CustomCard/CustomCard.jsx';
import SearchAppBar from '../../components/SearchAppBar/SearchAppBar.jsx';
import Logo from '../../components/Logo/logo.jsx';
import Footer from '../../components/Footer/footer.jsx';
import styles from './home.module.css';

import ecobagImage from '../../assets/ImagensProdutos/ecobag3.png';
import carteiraImage from '../../assets/ImagensProdutos/carteira_solange1.png';
import necessaireImage from '../../assets/ImagensProdutos/necessaire1.png';

// Adicionando categorias aos produtos
const cardData = [
  { title: 'Ecobag', content: 'Ecobag feita à mão', price: 49.90, image: ecobagImage, category: 'Bolsas' },
  { title: 'Carteira Solange', content: 'Carteira artesanal de couro', price: 79.90, image: carteiraImage, category: 'Acessórios' },
  { title: 'Necessaire grande', content: 'Necessaire espaçosa', price: 59.90, image: necessaireImage, category: 'Acessórios' },
  // Adicione mais produtos com categorias aqui
];

function Home() {
  const [filteredCategory, setFilteredCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState(''); // Estado para o campo de busca

  const handleCategoryClick = (category) => {
    setFilteredCategory(category);
    setSearchQuery(''); // Limpa a busca ao selecionar uma categoria
  };

  const handleSearchChange = (query) => {
    setSearchQuery(query); // Atualiza o estado da pesquisa
    setFilteredCategory(null); // Reseta a categoria ao começar uma busca
  };

  const filteredCards = cardData.filter((card) => {
    const matchesCategory = filteredCategory ? card.category === filteredCategory : true;
    const matchesSearch = card.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <Box className={styles.appContainer}>
      <SearchAppBar
        onCategoryClick={handleCategoryClick}
        onSearchChange={handleSearchChange}
      />
      <Logo />
      <Container className={styles.contentContainer}>
        <Grid container spacing={4} justifyContent="center">
          {filteredCards.map((card, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <CustomCard
                title={card.title}
                content={card.content}
                price={card.price}
                image={card.image}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
      <Footer />
    </Box>
  );
}

export default Home;
