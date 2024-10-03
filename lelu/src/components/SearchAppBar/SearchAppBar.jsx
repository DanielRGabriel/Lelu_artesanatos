// src/components/SearchAppBar/SearchAppBar.jsx
import React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import { Link } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import styles from './SearchAppBar.module.css'; // Importando o CSS Module

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function SearchAppBar({ onCategoryClick, onSearchChange }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: '#ed0001' }}>
        <Toolbar className={styles.toolbar}>
          {/* Links de categorias */}
          <Box className={styles.linksContainer}>
            <Link className={styles.link} onClick={() => onCategoryClick(null)}>
              Todos
            </Link>
            <Link className={styles.link} onClick={() => onCategoryClick('Roupas')}>
              Roupas
            </Link>
            <Link className={styles.link} onClick={() => onCategoryClick('Bolsas')}>
              Bolsas
            </Link>
            <Link className={styles.link} onClick={() => onCategoryClick('Acessórios')}>
              Acessórios
            </Link>
            <Link className={styles.link} onClick={() => onCategoryClick('Mochilas')}>
              Mochilas
            </Link>
            <Link className={styles.link} onClick={() => onCategoryClick('Diversos')}>
              Diversos
            </Link>
          </Box>

          {/* Campo de busca */}
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Buscar..."
              inputProps={{ 'aria-label': 'search' }}
              onChange={(e) => onSearchChange(e.target.value)} // Passa o valor de entrada para a função onSearchChange
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
