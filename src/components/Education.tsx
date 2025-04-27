import { Box, Typography, useTheme, useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';

interface EducationItem {
  degree: string;
  school: string;
  year: string;
  description: string;
  gpa: string;
}

const Education = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const education: EducationItem[] = [
    {
      degree: 'Bachelor of Technology in Computer Science',
      school: 'KIET Group of Institutions',
      year: '2018 - 2022',
      description: 'Relevant coursework: Data Structures, Algorithms, Web Development, Machine Learning, Database Systems',
      gpa: 'GPA: 8.6/10.0'
    }
  ];

  return (
    <Box
      id="education"
      sx={{
        py: 8,
        px: isMobile ? 2 : 4,
        backgroundColor: 'background.paper',
      }}
    >
      <Typography
        variant={isMobile ? 'h4' : 'h3'}
        component={motion.h2}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        sx={{
          textAlign: 'center',
          mb: 4,
          fontWeight: 'bold',
          background: 'linear-gradient(45deg, #4285F4, #34A853)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        Education
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 4,
          maxWidth: 800,
          mx: 'auto',
        }}
      >
        {education.map((edu: EducationItem, index: number) => (
          <Box
            key={index}
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            sx={{
              p: 3,
              borderRadius: 2,
              backgroundColor: 'background.default',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              border: '1px solid',
              borderColor: 'divider',
              '&:hover': {
                boxShadow: '0 8px 12px rgba(0, 0, 0, 0.15)',
                transform: 'translateY(-4px)',
              },
              transition: 'all 0.3s ease',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                mb: 2,
                gap: 2,
              }}
            >
              <Box
                sx={{
                  p: 1.5,
                  borderRadius: '50%',
                  backgroundColor: 'primary.main',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: isMobile ? '1.2rem' : '1.5rem',
                }}
              >
                <FaGraduationCap />
              </Box>
              <Box>
                <Typography
                  variant={isMobile ? 'h6' : 'h5'}
                  sx={{
                    fontWeight: 'bold',
                    color: 'text.primary',
                  }}
                >
                  {edu.degree}
                </Typography>
                <Typography
                  variant={isMobile ? 'body2' : 'body1'}
                  sx={{
                    color: 'text.secondary',
                    mt: 0.5,
                  }}
                >
                  {edu.school}
                </Typography>
                <Typography
                  variant={isMobile ? 'caption' : 'body2'}
                  sx={{
                    color: 'primary.main',
                    fontWeight: 500,
                  }}
                >
                  {edu.year}
                </Typography>
              </Box>
            </Box>
            <Box
              component="ul"
              sx={{
                pl: 2,
                mt: 2,
                listStyle: 'none',
                '& li': {
                  position: 'relative',
                  pl: 2,
                  mb: 1,
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    left: 0,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: 6,
                    height: 6,
                    borderRadius: '50%',
                    background: 'linear-gradient(45deg, #4285F4, #34A853)',
                  },
                },
              }}
            >
              <Typography
                component="li"
                variant={isMobile ? 'body2' : 'body1'}
                sx={{
                  color: 'text.secondary',
                  fontSize: isMobile ? '0.8rem' : '0.9rem',
                }}
              >
                {edu.gpa}
              </Typography>
              <Typography
                component="li"
                variant={isMobile ? 'body2' : 'body1'}
                sx={{
                  color: 'text.secondary',
                  fontSize: isMobile ? '0.8rem' : '0.9rem',
                }}
              >
                {edu.description}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Education; 