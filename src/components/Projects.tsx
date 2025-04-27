import { Box, Typography, Container, Card, CardContent, Chip, Stack, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: 'Crime Vigilance App',
      description: 'Architected and developed a community-driven crime reporting Android application with real-time data synchronization and geo-location services, enabling citizens to securely submit incident reports with evidence attachments',
      technologies: ['Android SDK', 'Java', 'Kotlin',' MVVM Architecture', 'Firebase', 'Dependency Injection', 'Material Design',
        'Geospatial Analysis'],
    },
    {
      title: 'Different Project',
      description: 'Engineered a mission-critical Android application for crowdsourced wildfire detection and tracking, featuring push notification alerting system and interactive heatmap visualization that decreased average detection time by 37%',
      technologies: ['Android Jetpack', 'Java', 'Kotlin', 'Firebase', 'RESTful API Integration', 'Location Services', 'Hier Maps API', 'Data Visualization', ],
    }
  ];

  return (
    <Box
      component="section"
      id="projects"
      sx={{
        py: 8,
        backgroundColor: 'background.paper',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '100%',
          background: 'linear-gradient(45deg, rgba(66, 133, 244, 0.05), rgba(52, 168, 83, 0.05))',
          zIndex: 0,
        }
      }}
    >
      <Container sx={{ position: 'relative', zIndex: 1 }}>
        <Box
          ref={ref}
          component={motion.div}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h2"
            sx={{
              mb: 6,
              textAlign: 'center',
              background: 'linear-gradient(45deg, #4285F4, #34A853)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -10,
                left: '50%',
                transform: 'translateX(-50%)',
                width: '60px',
                height: '4px',
                background: 'linear-gradient(45deg, #4285F4, #34A853)',
                borderRadius: '2px',
              }
            }}
          >
            Projects
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {projects.map((project, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Card
                  component={motion.div}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  sx={{
                    height: '100%',
                    borderRadius: 2,
                    overflow: 'hidden',
                    position: 'relative',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      transition: 'transform 0.3s ease-in-out',
                      boxShadow: '0 8px 16px rgba(66, 133, 244, 0.2)',
                    },
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Typography
                      variant="h5"
                      component="h3"
                      sx={{
                        mb: 2,
                        fontWeight: 600,
                        background: 'linear-gradient(45deg, #4285F4, #34A853)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                      }}
                    >
                      {project.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      sx={{ mb: 3, lineHeight: 1.6 }}
                    >
                      {project.description}
                    </Typography>
                    <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', gap: 1 }}>
                      {project.technologies.map((tech, techIndex) => (
                        <Chip
                          key={techIndex}
                          label={tech}
                          size="small"
                          sx={{
                            backgroundColor: 'rgba(66, 133, 244, 0.1)',
                            color: 'primary.main',
                            fontWeight: 500,
                            '&:hover': {
                              backgroundColor: 'primary.main',
                              color: 'white',
                            },
                          }}
                        />
                      ))}
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Projects; 