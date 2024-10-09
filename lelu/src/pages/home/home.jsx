import React, { useState } from 'react';
import { Box, Container, Grid, Pagination } from '@mui/material'; // Importando Pagination
import CustomCard from '../../components/CustomCard/CustomCard.jsx';
import SearchAppBar from '../../components/SearchAppBar/SearchAppBar.jsx';
import Logo from '../../components/Logo/logo.jsx';
import Footer from '../../components/Footer/footer.jsx';
import styles from './home.module.css';

// Importando as imagens
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

// Definindo os dados dos produtos
const cardData = [
  { title: 'Ecobag', content: 'Ecobag feita à mão', price: 49.90, image: ecobag3Image, category: 'Bolsas' },
  { title: 'Carteira Solange', content: 'Carteira de tecido', price: 34.90, image: carteiraSolange1Image, category: 'Acessórios' },
  { title: 'Necessaire grande', content: 'Necessaire espaçosa', price: 49.90, image: necessaireImage, category: 'Acessórios' },
  { title: 'Bolsa Mochila', content: 'Bolsa para caminhar', price: 49.90, image: bolsaMochila2Image, category: 'Mochilas' },
  { title: 'Bolsa Transversal', content: 'Bolsa com 3 divisórias', price: 69.90, image: bolsaTransversal3Image, category: 'Bolsas' },
  { title: 'Pochetes', content: 'Pochetes estampadas', price: 49.90, image: pochetelImage, category: 'Acessórios' },
  { title: 'Absorventes de pano', content: 'Quatro tamanhos disponíveis', price: 22.90, image: absorventesImage, category: 'Diversos' },
  { title: 'Vestido de bebê melancia', content: '3 meses a 2 anos', price: 49.90, image: vestidoBebe1Image, category: 'Roupas' },
  { title: 'Porta Óculos', content: 'Cabem 2 óculos', price: 24.90, image: portaOculos1Image, category: 'Acessórios' },
  { title: 'Porta Documentos', content: 'Pequena carteira', price: 14.90, image: portaDocumentos1Image, category: 'Acessórios' },
  { title: 'Capa de caderno', content: 'Proteja seu caderno / livro', price: 39.90, image: capaCaderno2Image, category: 'Acessórios' },
  { title: 'Pantufa', content: 'Super Confortáveis', price: 64.90, image: pantufas1Image, category: 'Acessórios' },
  { title: 'Necessaire Compacta', content: 'Necessaire ideal para maquiagem', price: 39.90, image: necessaireDog1Image, category: 'Acessórios' },
  { title: 'Ecobag', content: 'Ecobag feita à mão', price: 49.90, image: ecobag1Image, category: 'Bolsas' },
  { title: 'Vestido de bebê ursinhos', content: '3 meses a 2 anos', price: 49.90, image: vestidoBebe2Image, category: 'Roupas' },
];

// Configuração de paginação
const itemsPerPage = 10;

function Home() {
  const [filteredCategory, setFilteredCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1); // Estado para a página atual

  // Função para manipular a mudança de página
  const handlePageChange = (event, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Adicionando scroll suave para o topo
  };

  // Função para selecionar a categoria
  const handleCategoryClick = (category) => {
    setFilteredCategory(category);
    setSearchQuery('');
    setCurrentPage(1); // Resetar para a primeira página ao mudar a categoria
  };

  // Função para manipular a busca
  const handleSearchChange = (query) => {
    setSearchQuery(query);
    setFilteredCategory(null);
    setCurrentPage(1); // Resetar para a primeira página ao fazer uma busca
  };

  // Filtrando os cards por categoria e busca
  const filteredCards = cardData.filter((card) => {
    const matchesCategory = filteredCategory ? card.category === filteredCategory : true;
    const matchesSearch = card.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Implementando a lógica de paginação
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedCards = filteredCards.slice(startIndex, startIndex + itemsPerPage);
  const totalPages = Math.ceil(filteredCards.length / itemsPerPage);

  return (
    <Box className={styles.appContainer}>
      <SearchAppBar
        onCategoryClick={handleCategoryClick}
        onSearchChange={handleSearchChange}
      />
      <Logo />
      <Container className={styles.contentContainer}>
        <Grid container spacing={4} justifyContent="center">
          {paginatedCards.map((card, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <CustomCard
                title={card.title}
                content={card.content}
                price={card.price}
                image={card.image}
                altText={`Imagem de ${card.title}`}  // Adicionando texto alternativo
              />
            </Grid>
          ))}
        </Grid>
      </Container>
      {/* Componente de Paginação abaixo das fotos */}
      <Box className={styles.paginationContainer}>
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange} // A função de mudança de página já está configurada corretamente
          color="primary"
        />
      </Box>
      <Footer />
    </Box>
  );
}

export default Home;
