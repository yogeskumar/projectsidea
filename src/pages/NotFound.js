import React, { useEffect, useState } from 'react';
import { Typography, Container, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const redirectHome = () => {
    navigate('/');
  };
  useEffect(() => {
    if (countdown === 0) {
      redirectHome();
    }
  }, [countdown]);


  return (
    <Container maxWidth="md" sx={{ marginTop: '40px' }}>
      <Typography variant="h4" align="center" gutterBottom>
        404 Not Found
      </Typography>
      <Typography variant="body1" align="center" gutterBottom>
        The page you're looking for doesn't exist.
      </Typography>
      <Typography variant="body1" align="center" gutterBottom>
        You will be redirected to the home page in
      </Typography>
      <Typography variant="body1" align="center" gutterBottom>
        {countdown} seconds...
      </Typography>
      <Button variant="contained" color="primary" fullWidth onClick={redirectHome} sx={{marginTop:2}}>
        Go to Home
      </Button>
    </Container>
  );
};

export default NotFound;
