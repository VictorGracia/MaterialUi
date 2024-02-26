import { Box, Typography } from '@mui/material';
import svg from '../../media/34239046_4_yutyty_1231.svg';
import { useEffect, useState } from 'react';

export default function ComponentResumen({evento}:any) {
    const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (count < 1000000) {
        setCount(prevCount => prevCount + 200000);
      }
    }, 1); // Cambia el intervalo de tiempo según lo que desees

    return () => clearInterval(intervalId);
  }, [count]);
    return (
        <Box sx={{
            width: '100%',
            height: 200,
            backgroundColor: '#045cb7',
            borderRadius: '25px',
            backgroundImage: `url(${svg})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'bottom'
        }}>
            <Box
                sx={{
                    width: '100%',
                    height: 90,
                    borderRadius: '25px',
                    padding: 3
                }}>
                <Typography variant='h6' sx={{ color: 'white' }}>{evento}</Typography>
            </Box>
            <Box
                sx={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                <Typography variant='h2' sx={{ color: 'white', fontWeight: 500 }}>{count.toLocaleString()}</Typography>
            </Box>
        </Box>
    );
}