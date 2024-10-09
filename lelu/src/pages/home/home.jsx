// src/pages/home/home.jsx
import React, { useState } from 'react';
import { Box, Container, Grid } from '@mui/material';
import CustomCard from '../../components/CustomCard/CustomCard.jsx';
import SearchAppBar from '../../components/SearchAppBar/SearchAppBar.jsx';
import Logo from '../../components/Logo/logo.jsx';
import Footer from '../../components/Footer/footer.jsx';
import styles from './home.module.css';

import ecobag3Image from '../../assets/ImagensProdutos/ecobag3.png';
import carteiraSolange1Image from '../../assets/ImagensProdutos/carteira_solange1.png';
import necessaireImage from '../../assets/ImagensProdutos/necessaire1.png';
import bolsaMochila2Image from '../../assets/ImagensProdutos/bolsa_mochila2.png';
import bolsaTransversal3Image from '../../assets/ImagensProdutos/bolsa_tranversal3.png';
import pochetelImage from '../../assets/ImagensProdutos/pochete1.png';
import absorventesImage from '../../assets/ImagensProdutos/absorventes1.png';
import vestidoBebe1Image from '../../assets/ImagensProdutos/vestido_bebe1.png';
import portaOculos1Image from '../../assets/ImagensProdutos/porta_oculos1.png';
import portaDocumentos1Image from '../../assets/ImagensProdutos/porta_documentos1.png';
import capaCaderno2Image from '../../assets/ImagensProdutos/capa_caderno2.png';
import pantufas1Image from '../../assets/ImagensProdutos/pantufas1.png';
import necessaireDog1Image from '../../assets/ImagensProdutos/necessaire_dog1.png';
import ecobag1Image from '../../assets/ImagensProdutos/ecobag1.png';
import vestidoBebe2Image from '../../assets/ImagensProdutos/vestido_bebe2.png';

// Adicionando categorias e descrições alternativas aos produtos
const cardData = [
  { title: 'Ecobag', content: 'Ecobag feita à mão', price: 49.90, image: ecobag3Image, altText: 'Ecobag artesanal em tecido sustentável', category: 'Bolsas' },
  { title: 'Carteira Solange', content: 'Carteira de tecido', price: 34.90, image: carteiraSolange1Image, altText: 'Carteira de tecido com várias divisórias', category: 'Acessórios' },
  { title: 'Necessaire grande', content: 'Necessaire espaçosa', price: 49.90, image: necessaireImage, altText: 'Necessaire de tecido grande e espaçosa', category: 'Acessórios' },
  { title: 'Bolsa Mochila', content: 'Bolsa para caminhar', price: 49.90, image: bolsaMochila2Image, altText: 'Bolsa tipo mochila para caminhadas', category: 'Mochilas' },
  { title: 'Bolsa Transversal', content: 'Bolsa com 3 divisórias', price: 69.90, image: bolsaTransversal3Image, altText: 'Bolsa transversal com três divisórias', category: 'Bolsas' },
  { title: 'Pochetes', content: 'Pochetes estampadas', price: 49.90, image: pochetelImage, altText: 'Pochete de tecido com estampa', category: 'Acessórios' },
  { title: 'Absorventes de pano', content: 'Quatro tamanhos disponíveis', price: 22.90, image: absorventesImage, altText: 'Absorventes reutilizáveis de pano', category: 'Diversos' },
  { title: 'Vestido de bebê melancia', content: '3 meses a 2 anos', price: 49.90, image: vestidoBebe1Image, altText: 'Vestido de bebê com estampa de melancia', category: 'Roupas' },
  { title: 'Porta Óculos', content: 'Cabem 2 óculos', price: 24.90, image: portaOculos1Image, altText: 'Porta óculos de tecido para dois óculos', category: 'Acessórios' },
  { title: 'Porta Documentos', content: 'Pequena carteira', price: 14.90, image: portaDocumentos1Image, altText: 'Carteira pequena para documentos', category: 'Acessórios' },
  { title: 'Capa de caderno', content: 'Proteja seu caderno / livro', price: 39.90, image: capaCaderno2Image, altText: 'Capa protetora para caderno ou livro', category: 'Acessórios' },
  { title: 'Pantufa', content: 'Super Confortáveis', price: 64.90, image: pantufas1Image, altText: 'Pantufa macia e confortável', category: 'Acessórios' },
  { title: 'Necessaire Compacta', content: 'Necessaire ideal para maquiagem', price: 39.90, image: necessaireDog1Image, altText: 'Necessaire pequena com estampa de cachorro', category: 'Acessórios' },
  { title: 'Ecobag', content: 'Ecobag feita à mão', price: 49.90, image: ecobag1Image, altText: 'Ecobag artesanal em tecido', category: 'Bolsas' },
  { title: 'Vestido de bebê ursinhos', content: '3 meses a 2 anos', price: 49.90, image: vestidoBebe2Image, altText: 'Vestido de bebê com estampa de ursinhos', category: 'Roupas' },
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
                altText={card.altText}  
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
