import { AppBar, Toolbar, Typography, Box, Button, IconButton, Drawer, List, ListItem, ListItemText, useTheme, useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaFileDownload, FaBars } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { useState } from 'react';

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: <FaGithub size={24} />, url: 'https://github.com/karandeep1390', label: 'GitHub' },
    { icon: <FaLinkedin size={24} />, url: 'https://linkedin.com/in/karandeepsingh13', label: 'LinkedIn' },
    { icon: <SiLeetcode size={24} />, url: 'https://leetcode.com/u/karandeepsingh1390/', label: 'LeetCode' },
  ];

  const handleDownloadResume = () => {
    try {
      // Create a temporary link element
      const link = document.createElement('a');
      link.href = '/Karandeep_Singh_Resume.pdf';
      link.download = 'Karandeep_Singh_Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error downloading resume:', error);
      alert('Failed to download resume. Please try again later.');
    }
  };

  // Desktop: full navbar
  return (
    <AppBar position="sticky" sx={{ backgroundColor: 'background.paper', boxShadow: 'none' }}>
      <Toolbar sx={{ justifyContent: 'space-between', py: 2 }}>
        {/* Mobile Menu Button */}
        {isMobile && (
          <IconButton
            component={motion.button}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => setDrawerOpen(true)}
            sx={{ mr: 2 }}
          >
            <motion.div
              animate={{ rotate: drawerOpen ? 90 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <FaBars />
            </motion.div>
          </IconButton>
        )}

        {/* Title */}
        <Typography
          variant="h6"
          component={motion.a}
          href="#hero"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          sx={{
            fontWeight: 'bold',
            background: 'linear-gradient(45deg, #4285F4, #34A853)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            cursor: 'pointer',
            textDecoration: 'none',
            '&:hover': {
              opacity: 0.8,
              textShadow: '0 2px 8px rgba(66,133,244,0.15)',
            },
          }}
        >
          Karandeep Singh
        </Typography>

        {/* Desktop Navigation */}
        {!isMobile && (
          <Box sx={{ display: 'flex', gap: 2 }}>
            {navItems.map((item, index) => (
              <Button
                key={index}
                component={motion.a}
                href={item.href}
                whileHover={{ scale: 1.12 }}
                whileTap={{ scale: 0.96 }}
                sx={{
                  color: 'text.primary',
                  textTransform: 'none',
                  fontWeight: 500,
                  fontSize: 17,
                  background: 'none',
                  position: 'relative',
                  px: 1.5,
                  py: 0.5,
                  overflow: 'visible',
                  transition: 'color 0.2s cubic-bezier(.4,0,.2,1)',
                  '&:hover': {
                    color: 'primary.main',
                    background: 'none',
                  },
                  '&::after': {
                    content: '""',
                    display: 'block',
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    bottom: 2,
                    height: 3,
                    borderRadius: 2,
                    background: 'linear-gradient(90deg, #4285F4 0%, #34A853 100%)',
                    opacity: 0,
                    transform: 'scaleX(0)',
                    transition: 'opacity 0.3s, transform 0.3s',
                  },
                  '&:hover::after': {
                    opacity: 1,
                    transform: 'scaleX(1)',
                  },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>
        )}

        {/* Resume and Social Links */}
        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
          <Button
            component={motion.button}
            whileHover={{ scale: 1.12 }}
            whileTap={{ scale: 0.95 }}
            animate={{ scale: [1, 1.07, 1] }}
            transition={{ repeat: Infinity, duration: 1.6 }}
            onClick={handleDownloadResume}
            startIcon={
              <motion.span
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 1.1 }}
                style={{ display: 'inline-block' }}
              >
                <FaFileDownload />
              </motion.span>
            }
            sx={{
              background: 'linear-gradient(45deg, #4285F4, #34A853)',
              color: 'white',
              textTransform: 'none',
              fontWeight: 'medium',
              px: 1.5,
              py: 0.7,
              minWidth: 0,
              borderRadius: 2,
              fontSize: 15,
              boxShadow: '0 0 0 0 rgba(66,133,244,0.7)',
              '&:hover': {
                background: 'linear-gradient(45deg, #3367d6, #2d8a4e)',
                boxShadow: '0 4px 8px rgba(66, 133, 244, 0.3)',
              },
            }}
          >
            Resume
          </Button>
          {!isMobile && socialLinks.map((link, index) => (
            <Button
              key={index}
              component={motion.a}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              sx={{
                color: 'text.primary',
                minWidth: 'auto',
                '&:hover': {
                  color: 'primary.main',
                  backgroundColor: 'transparent',
                },
              }}
            >
              {link.icon}
            </Button>
          ))}
        </Box>
      </Toolbar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        sx={{
          '& .MuiDrawer-paper': {
            backgroundColor: 'background.paper',
            width: '100%',
            maxWidth: 360,
          },
        }}
      >
        <Box sx={{ p: 2 }}>
          <List>
            {navItems.map((item, index) => (
              <ListItem
                key={index}
                component={motion.a}
                href={item.href}
                onClick={() => setDrawerOpen(false)}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                sx={{
                  cursor: 'pointer',
                  '&:hover': {
                    backgroundColor: 'action.hover',
                  },
                }}
              >
                <ListItemText
                  primary={item.label}
                  sx={{
                    color: 'text.primary',
                    '& .MuiTypography-root': {
                      fontWeight: 500,
                    },
                  }}
                />
              </ListItem>
            ))}
          </List>
          <Box 
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: navItems.length * 0.1 }}
            sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 2 }}
          >
            {socialLinks.map((link, index) => (
              <IconButton
                key={index}
                component={motion.a}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                sx={{
                  color: 'text.primary',
                  '&:hover': {
                    color: 'primary.main',
                  },
                }}
              >
                {link.icon}
              </IconButton>
            ))}
          </Box>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Navbar; 