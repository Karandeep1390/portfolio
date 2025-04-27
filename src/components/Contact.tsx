import { Box, Typography, Container, TextField, Button, Grid, Paper, Snackbar, Alert } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    // Initialize EmailJS with your public key
    emailjs.init("H2nUcz1TsA9n2LL_C");
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success' as 'success' | 'error',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const result = await emailjs.send(
        'service_ph9yvgf',
        'template_o86eftk',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        }
      );

      if (result.status === 200) {
        setSnackbar({
          open: true,
          message: 'Message sent successfully!',
          severity: 'success',
        });

        setFormData({
          name: '',
          email: '',
          message: '',
        });
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error: unknown) {
      console.error('Error sending email:', error);
      setSnackbar({
        open: true,
        message: 'Failed to send message. Please try again.',
        severity: 'error',
      });
    }
  };

  const socialLinks = [
    { icon: <FaGithub size={24} />, url: 'https://github.com/karandeep1390', label: 'GitHub' },
    { icon: <FaLinkedin size={24} />, url: 'https://linkedin.com/in/karandeepsingh13', label: 'LinkedIn' },
    { icon: <FaTwitter size={24} />, url: 'https://twitter.com/yourusername', label: 'Twitter' },
    { icon: <FaEnvelope size={24} />, url: 'mailto:karandeepsingh1390@gmail.com', label: 'Email' },
  ];

  return (
    <Box
      id="contact"
      sx={{
        py: 8,
        backgroundColor: 'background.paper',
      }}
    >
      <Container>
        <Box
          ref={ref}
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          sx={{ textAlign: 'center', mb: 6 }}
        >
          <Typography
            variant="h2"
            sx={{
              mb: 2,
              background: 'linear-gradient(45deg, #4285F4, #34A853)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Get In Touch
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            I'd love to hear from you
          </Typography>
        </Box>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Paper
              component={motion.div}
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
              sx={{ p: 4, backgroundColor: 'background.default' }}
            >
              <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                <TextField
                  label="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  variant="outlined"
                  fullWidth
                  required
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': { borderColor: 'primary.main' },
                      '&:hover fieldset': { borderColor: 'primary.light' },
                    },
                  }}
                />
                <TextField
                  label="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  variant="outlined"
                  fullWidth
                  required
                  type="email"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': { borderColor: 'primary.main' },
                      '&:hover fieldset': { borderColor: 'primary.light' },
                    },
                  }}
                />
                <TextField
                  label="Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  variant="outlined"
                  fullWidth
                  multiline
                  rows={4}
                  required
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': { borderColor: 'primary.main' },
                      '&:hover fieldset': { borderColor: 'primary.light' },
                    },
                  }}
                />
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  component={motion.button}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  sx={{
                    backgroundColor: 'primary.main',
                    '&:hover': { backgroundColor: 'primary.dark' },
                  }}
                >
                  Send Message
                </Button>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              component={motion.div}
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
              sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
            >
              <Typography variant="h5" sx={{ mb: 3, color: 'primary.main' }}>
                Connect With Me
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {socialLinks.map((link, index) => (
                  <Button
                    key={index}
                    component={motion.a}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="outlined"
                    startIcon={link.icon}
                    sx={{
                      justifyContent: 'flex-start',
                      px: 3,
                      py: 1.5,
                      borderColor: 'primary.main',
                      color: 'text.primary',
                      '&:hover': { borderColor: 'primary.light' },
                    }}
                  >
                    {link.label}
                  </Button>
                ))}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={() => setSnackbar(prev => ({ ...prev, open: false }))}
      >
        <Alert
          onClose={() => setSnackbar(prev => ({ ...prev, open: false }))}
          severity={snackbar.severity}
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact; 