import { Box, Typography, Button, Container } from '@mui/material';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  return (
    <Box
      id="hero"
      sx={{
        minHeight: { xs: '80vh', md: '100vh' },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(45deg, #121212 0%, #1E1E1E 100%)',
        position: 'relative',
        overflow: 'hidden',
        py: { xs: 4, md: 0 },
      }}
    >
      <Container maxWidth="md">
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          sx={{ textAlign: 'center' }}
        >
          <Typography
            variant="h1"
            component={motion.h1}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            sx={{
              fontSize: { xs: '2rem', sm: '2.5rem', md: '4rem' },
              fontWeight: 700,
              mb: { xs: 1.5, md: 2 },
              background: 'linear-gradient(45deg, #4285F4, #34A853)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              lineHeight: 1.15,
            }}
          >
            Hi, I'm Karandeep Singh
          </Typography>
          <Typography
            variant="h2"
            component={motion.h2}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            sx={{
              fontSize: { xs: '1.1rem', sm: '1.3rem', md: '2rem' },
              mb: { xs: 2, md: 4 },
              color: 'text.secondary',
              fontWeight: 500,
              lineHeight: 1.3,
            }}
          >
            Software Engineer @ Kotak Mahindra Bank | ex-Amazon
          </Typography>
          <Box
            component={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}
          >
            <Button
              variant="contained"
              size="large"
              component={motion.a}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              sx={{
                backgroundColor: 'primary.main',
                fontSize: { xs: '1rem', md: '1.1rem' },
                py: { xs: 1, md: 1.5 },
                px: { xs: 2, md: 3 },
                '&:hover': { backgroundColor: 'primary.dark' },
              }}
            >
              Get in Touch
            </Button>
            <Button
              variant="outlined"
              size="large"
              component={motion.a}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#experience"
              sx={{
                borderColor: 'primary.main',
                color: 'primary.main',
                fontSize: { xs: '1rem', md: '1.1rem' },
                py: { xs: 1, md: 1.5 },
                px: { xs: 2, md: 3 },
                '&:hover': { borderColor: 'primary.dark' },
              }}
            >
              View My Work
            </Button>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: { xs: 3, md: 4 } }}>
            <a href="https://github.com/karandeep1390" target="_blank" rel="noopener noreferrer">
              <FaGithub style={{ fontSize: '2rem', color: '#4285F4' }} />
            </a>
            <a href="https://linkedin.com/in/karandeepsingh13" target="_blank" rel="noopener noreferrer">
              <FaLinkedin style={{ fontSize: '2rem', color: '#34A853' }} />
            </a>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero; 