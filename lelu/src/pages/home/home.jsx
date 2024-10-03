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
import bolsaMochilaImage from '../../assets/ImagensProdutos/bolsa_mochila2.png';
import bolsaTransversalImage from '../../assets/ImagensProdutos/bolsa_tranversal3.png';
import pochetelImage from '../../assets/ImagensProdutos/pochete1.png';
import absorventesImage from '../../assets/ImagensProdutos/absorventes1.png';

// Adicionando categorias aos produtos
const cardData = [
  { title: 'Ecobag', content: 'Ecobag feita à mão', price: 49.90, image: ecobagImage, category: 'Bolsas' },
  { title: 'Carteira Solange', content: 'Carteira de tecido', price: 34.90, image: carteiraImage, category: 'Acessórios' },
  { title: 'Necessaire grande', content: 'Necessaire espaçosa', price: 49.90, image: necessaireImage, category: 'Acessórios' },
  { title: 'Bolsa Mochila', content: 'Bolsa para caminhar', price: 49.90, image: bolsaMochilaImage, category: 'Bolsas' },
  { title: 'Bolsa Transversal', content: 'Mochila espaçosa para uso diário', price: 69.90, image: bolsaTransversalImage, category: 'Bolsas' },
  { title: 'Pochetes', content: 'Pochetes estampadas', price: 49.90, image: pochetelImage, category: 'Acessórios' },
  { title: 'Absorventes de pano', content: 'Quatro tamanhos disponíveis', price: 22.90, image:absorventesImage, category: 'Diversos' },
  { title: 'Chaveiro Personalizado', content: 'Chaveiro de couro com iniciais', price: 19.90, image: 'image_path_here', category: 'Acessórios' },
  { title: 'Pochete Unissex', content: 'Pochete prática e estilosa', price: 49.90, image: 'image_path_here', category: 'Acessórios' },
  { title: 'Bolsa Tote', content: 'Bolsa tote grande de tecido', price: 89.90, image: 'image_path_here', category: 'Bolsas' },
  { title: 'Mochila de Couro', content: 'Mochila elegante de couro', price: 199.90, image: 'image_path_here', category: 'Mochilas' },
  { title: 'Porta-Cartão', content: 'Porta-cartão compacto em couro', price: 39.90, image: 'image_path_here', category: 'Acessórios' },
  { title: 'Necessaire Compacta', content: 'Necessaire ideal para maquiagem', price: 39.90, image: 'image_path_here', category: 'Acessórios' },
  { title: 'Bolsa de Viagem', content: 'Bolsa de viagem espaçosa e resistente', price: 249.90, image: 'image_path_here', category: 'Bolsas' },
  { title: 'Pulseira de Couro', content: 'Pulseira masculina de couro trançado', price: 69.90, image: 'image_path_here', category: 'Acessórios' },
  
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
