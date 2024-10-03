// src/components/Footer/Footer.jsx
import React from 'react';
import { Box, Container, Grid, Link, Typography, IconButton } from '@mui/material';
import { Facebook, Instagram } from '@mui/icons-material';
import styles from './footer.module.css'; // CSS Module para customizações

function Footer() {
  return (
    <Box component="footer" className={styles.footer}>
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="center">
          {/* Links de navegação */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" className={styles.footerHeading}>Navegação</Typography>
            <ul className={styles.footerLinks}>
              <li>
                <Link href="/sobre-nos" underline="hover" className={styles.footerLink}>
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="/fale-conosco" underline="hover" className={styles.footerLink}>
                  Fale Conosco
                </Link>
              </li>
              <li>
                <Link href="/onde-estamos" underline="hover" className={styles.footerLink}>
                  Onde Estamos
                </Link>
              </li>
            </ul>
          </Grid>

          {/* Links de redes sociais */}
          <Grid item xs={12} md={4} className={styles.socialMedia}>
            <Typography variant="h6" className={styles.footerHeading}>Redes Sociais</Typography>
            <IconButton
              href="https://www.instagram.com/leluartesanatos/" // Atualizado
              target="_blank"
              aria-label="Instagram"
              className={styles.iconButton}
            >
              <Instagram className={styles.socialIcon} />
            </IconButton>
            <IconButton
              href="https://www.facebook.com/nataliagodinhodanielribeiro" // Atualizado
              target="_blank"
              aria-label="Facebook"
              className={styles.iconButton}
            >
              <Facebook className={styles.socialIcon} />
            </IconButton>
          </Grid>

          {/* Informações adicionais */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" className={styles.footerHeading}>Informações</Typography>
            <Typography variant="body2">
              Endereço: São Pedro da Serra, Nova Friburgo, RJ
            </Typography>
            <Typography variant="body2">
              Telefone: (22) 99812-3474
            </Typography>
          </Grid>
        </Grid>
        <Box textAlign="center" mt={4} className={styles.copyright}>
          <Typography variant="body2">
            © {new Date().getFullYear()} Lelu Artesanatos. Todos os direitos reservados.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
