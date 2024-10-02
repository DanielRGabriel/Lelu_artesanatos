// src/components/footer.jsx

import React from 'react';
import { Box, Typography } from '@mui/material';
import styles from './footer.module.css'; // Importando o CSS Module

function Footer() {
  return (
    <Box component="footer" className={styles.footer}>
      <Typography variant="body1">
        Footer do Projeto
      </Typography>
    </Box>
  );
}

export default Footer;
