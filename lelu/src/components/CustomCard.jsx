import React from 'react';
import { Card, CardContent, Typography, CardActions, Button } from '@mui/material';

const CustomCard = ({ title, content }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2">
          {content}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Saiba mais</Button>
      </CardActions>
    </Card>
  );
};

export default CustomCard;
