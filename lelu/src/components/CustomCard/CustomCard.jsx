// src/components/CustomCard/CustomCard.jsx
import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import styles from './customCard.module.css'; // Importando os estilos do card
import imageStyles from '../../styles/imageStyles.module.css'; // Importando os estilos da imagem

const CustomCard = ({ title, content, price, image, altText }) => {
  return (
    <Card className={styles.card} sx={{ boxShadow: 'none', border: 'none' }} tabIndex="0"> {/* Removendo a borda, sombra e adicionando tabIndex */}
      <div className={imageStyles.imageContainer}>
        <img 
          src={image} 
          alt={altText || title}  
          className={imageStyles.image} 
          tabIndex="0" 
        />
      </div>
      <CardContent className={styles.cardContent} tabIndex="0"> {/* Centralizando o texto e adicionando tabIndex */}
        <Typography variant="h5">{title}</Typography>
        <Typography variant="body2">{content}</Typography>
        <Typography variant="h6" className={styles.priceText}>
          R$ {price.toFixed(2)} {/* Exibe o preço formatado */}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CustomCard;
