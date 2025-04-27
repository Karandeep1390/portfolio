import { Box, Typography, Container, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCode, FaServer, FaDatabase, FaCloud, FaGitAlt, FaJava, FaPython } from 'react-icons/fa';
import { SiKotlin, SiJavascript, SiReact, SiSpring, SiMongodb, SiRedis, SiAmazon, SiApachekafka, SiTemporal } from 'react-icons/si';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    {
      category: 'Programming Languages',
      icon: <FaCode size={24} />,
      items: [
        { name: 'Java', icon: <FaJava size={20} /> },
        { name: 'Kotlin', icon: <SiKotlin size={20} /> },
        { name: 'Python', icon: <FaPython size={20} /> },
        { name: 'JavaScript', icon: <SiJavascript size={20} /> },
        { name: 'React.js', icon: <SiReact size={20} /> },
        { name: 'Git', icon: <FaGitAlt size={20} /> }
      ],
    },
    {
      category: 'Backend Development',
      icon: <FaServer size={24} />,
      items: [
        { name: 'Spring Boot', icon: <SiSpring size={20} /> },
        { name: 'Microservices' },
        { name: 'OOP Design' },
        { name: 'System Design' },
        { name: 'State Management' }
      ],
    },
    {
      category: 'Databases & Storage',
      icon: <FaDatabase size={24} />,
      items: [
        { name: 'SQL' },
        { name: 'MongoDB', icon: <SiMongodb size={20} /> },
        { name: 'DynamoDB' },
        { name: 'Redis', icon: <SiRedis size={20} /> },
        { name: 'Data Modeling' },
        { name: 'S3', icon: <SiAmazon size={20} /> }
      ],
    },
    {
      category: 'Cloud & Messaging',
      icon: <FaCloud size={24} />,
      items: [
        { name: 'Kafka', icon: <SiApachekafka size={20} /> },
        { name: 'SNS' },
        { name: 'SQS' },
        { name: 'Temporal', icon: <SiTemporal size={20} /> }
      ],
    }
  ];

  return (
    <Box
      component="section"
      id="skills"
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
            Skills
          </Typography>
          <Grid container spacing={4}>
            {skills.map((skill, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Paper
                  component={motion.div}
                  initial={{ opacity: 0, x: -50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  elevation={3}
                  sx={{
                    p: 3,
                    borderRadius: 2,
                    backgroundColor: 'background.default',
                    border: '1px solid',
                    borderColor: 'primary.main',
                    position: 'relative',
                    overflow: 'hidden',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      background: 'linear-gradient(45deg, rgba(66, 133, 244, 0.1), rgba(52, 168, 83, 0.1))',
                      opacity: 0,
                      transition: 'opacity 0.3s ease-in-out',
                    },
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      transition: 'all 0.3s ease-in-out',
                      boxShadow: '0 8px 16px rgba(66, 133, 244, 0.2)',
                      '&::before': {
                        opacity: 1,
                      },
                    },
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <Box
                      sx={{
                        width: 50,
                        height: 50,
                        borderRadius: '50%',
                        background: 'linear-gradient(45deg, #4285F4, #34A853)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mr: 2,
                        color: 'white',
                        boxShadow: '0 4px 8px rgba(66, 133, 244, 0.3)',
                      }}
                    >
                      {skill.icon}
                    </Box>
                    <Typography 
                      variant="h5" 
                      sx={{ 
                        color: 'primary.main', 
                        fontWeight: 600,
                        background: 'linear-gradient(45deg, #4285F4, #34A853)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                      }}
                    >
                      {skill.category}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
                    {skill.items.map((item, itemIndex) => (
                      <Box
                        key={itemIndex}
                        component={motion.div}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.3, delay: index * 0.2 + itemIndex * 0.1 }}
                        sx={{
                          backgroundColor: 'transparent',
                          color: 'text.primary',
                          px: 2,
                          py: 1.2,
                          borderRadius: 2,
                          fontSize: '0.875rem',
                          display: 'flex',
                          alignItems: 'center',
                          gap: 1,
                          minWidth: '120px',
                          justifyContent: 'center',
                          border: '1px solid',
                          borderColor: 'primary.main',
                          position: 'relative',
                          overflow: 'hidden',
                          '&::before': {
                            content: '""',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            background: 'linear-gradient(45deg, rgba(66, 133, 244, 0.1), rgba(52, 168, 83, 0.1))',
                            opacity: 0,
                            transition: 'opacity 0.3s ease-in-out',
                          },
                          '&:hover': {
                            backgroundColor: 'primary.main',
                            color: 'white',
                            transform: 'scale(1.05)',
                            transition: 'all 0.2s ease-in-out',
                            '&::before': {
                              opacity: 1,
                            },
                          },
                        }}
                      >
                        {item.icon && (
                          <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            {item.icon}
                          </Box>
                        )}
                        <Typography variant="body2" sx={{ fontWeight: 500, position: 'relative', zIndex: 1 }}>
                          {item.name}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Skills; 