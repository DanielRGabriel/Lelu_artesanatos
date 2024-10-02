import React from 'react';
import { Box } from '@mui/material';
import logo from '../../assets/logo.jpg'; // Substitua pelo caminho da sua imagem
import styles from './logo.module.css'; // Importando o CSS da logo

const Logo = () => {
  return (
    <Box className={styles.logoContainer}>
      <img src={logo} alt="Logo" className={styles.logoImage} />
    </Box>
  );
};

export default Logo;
