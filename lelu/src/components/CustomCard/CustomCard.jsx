// src/components/CustomCard.jsx
import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import styles from './customCard.module.css'; // ou o nome do seu CSS Module
import imageStyles from '../../styles/imageStyles.module.css'; // Importando os estilos da imagem

const CustomCard = ({ title, content, image }) => {
  return (
    <Card className={styles.card}> {/* Aplicando a classe do card */}
      <div className={imageStyles.imageContainer}>
        <img src={image} alt={title} className={imageStyles.image} />
      </div>
      <CardContent className={styles.cardContent}> {/* Classe para centralizar o texto */}
        <Typography variant="h5">{title}</Typography>
        <Typography variant="body2">{content}</Typography>
      </CardContent>
    </Card>
  );
};

export default CustomCard;
