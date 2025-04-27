import { Box, Typography, Container, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Box
      component="section"
      id="about"
      sx={{
        py: 8,
        backgroundColor: 'background.paper',
      }}
    >
      <Container>
        <Grid container spacing={{ xs: 2, md: 4 }} sx={{ alignItems: 'center' }}>
          <Grid item xs={12} md={6}>
            <Box
              ref={ref}
              component={motion.div}
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <Typography
                variant="h2"
                sx={{
                  mb: { xs: 2, md: 4 },
                  fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                  background: 'linear-gradient(45deg, #4285F4, #34A853)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                About Me
              </Typography>
              <Typography variant="body1" sx={{ mb: { xs: 2, md: 3 }, fontSize: { xs: '1rem', md: '1.1rem' }, lineHeight: 1.8 }}>
                Solutions-driven Software Engineer with 3+ years building high-scale distributed systems achieving 99.99% reliability. Architected state machine orchestration frameworks and real-time data pipelines at Kotak Mahindra Bank processing ₹20 crore daily transactions, improving system reliability by 35% and reducing development time by 40%.
              </Typography>
              <Typography variant="body1" sx={{ mb: { xs: 2, md: 3 }, fontSize: { xs: '1rem', md: '1.1rem' }, lineHeight: 1.8 }}>
                Expert in Java 17, Spring Boot, and AWS cloud infrastructure with strong focus on algorithm optimization and distributed systems design. Delivered scalable, impactful solutions across fintech (Kotak), e-commerce (Lenskart), and logistics (Amazon) sectors. Specialized in high-throughput systems, complex data processing, and architecting resilient microservices that drive measurable business outcomes.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              component={motion.div}
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Paper
                elevation={3}
                sx={{
                  p: { xs: 2, md: 3 },
                  borderRadius: 2,
                  backgroundColor: 'background.default',
                }}
              >
                <Typography variant="h6" sx={{ mb: { xs: 1.5, md: 2 }, color: 'primary.main', fontSize: { xs: '1.1rem', md: '1.25rem' } }}>
                  What I Do
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 1, md: 2 } }}>
                  {[
                    'Full-stack web development',
                    'System architecture design',
                    'Performance optimization',
                    'Code review and mentoring',
                    'Technical documentation',
                    'AWS cloud infrastructure',
                  ].map((item, index) => (
                    <Box
                      key={index}
                      component={motion.div}
                      initial={{ opacity: 0, x: 20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                      }}
                    >
                      <Box
                        sx={{
                          width: 8,
                          height: 8,
                          borderRadius: '50%',
                          backgroundColor: 'primary.main',
                        }}
                      />
                      <Typography sx={{ fontSize: { xs: '0.95rem', md: '1rem' } }}>{item}</Typography>
                    </Box>
                  ))}
                </Box>
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About; 