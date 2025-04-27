import { Box, Typography, Container, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBriefcase, FaMapMarkerAlt } from 'react-icons/fa';

const experiences = [
  {
    company: 'Kotak Mahindra Bank',
    position: 'Software Developer Engineer 1',
    period: 'Jun 2023 - Present',
    location: 'Remote (Gurgaon, India)',
    description: [
      'Architected and implemented a state machine orchestration framework for personal loan journeys using microservices and JSON-based directed graphs, improving system reliability by 35% and reducing development time for new loan products by 40%.',
      'Engineered a session-sharing API enabling seamless authentication between Kotak’s mobile app and embedded loan web view, eliminating redundant OTP verification and creating a frictionless customer journey that drove a 20x increase in daily loan disbursements (Rs. 1 crore to Rs. 20 crore).',
      'Spearheaded integration with India’s Account Aggregator ecosystem, implementing real-time data processing pipelines that analyze customer financial statements via Business Rules Engine (BRE), enabling dynamic loan offer generation that increased qualified leads by 45%.',
      'Developed fault-tolerant Temporal workflow orchestrations for complex loan disbursement processes, implementing saga patterns and compensation transactions that ensured transaction consistency across distributed systems while scaling to handle ￿20 crore in daily disbursements with 99.99% reliability.',
      'Built a high-throughput validation API performing penny-drop verification and fuzzy name-matching algorithms for non-Kotak bank accounts, reducing fraud by 65% while maintaining sub-100ms response times at scale.',
      'Technical Skills: Java 17, Spring Boot, Microservices, MongoDB, DynamoDB, AWS (S3, Lambda, SQS), Temporal Workflows, Distributed Systems, AppDynamics, Real-time Monitoring'
    ],
  },
  {
    company: 'Lenskart',
    position: 'Software Development Engineer',
    period: 'Mar 2023 - Jun 2023',
    location: 'Gurgaon, India',
    description: [
      'Architected and re-engineered the mission-critical Order Management System (OMS), implementing distributed transaction handling and fault-tolerance mechanisms that reduced failed orders by 93%, directly impacting company revenue and customer satisfaction metrics',
      'Designed and implemented high-throughput order processing workflows with event-driven architecture, orchestrating complex business logic across order creation, modification, and cancellation processes while ensuring data consistency across distributed systems',
      'Technologies: Java, Spring Boot, MySQL, MongoDB, Apache Kafka, Redis, Microservices, RESTful APIs',
    ],
  },
  {
    company: 'Amazon',
    position: 'Software Development Engineer',
    period: 'Jun 2022 - Mar 2023',
    location: 'Bangalore, India',
    description: [
      'Engineered a real-time analytics dashboard for warehouse operations, implementing event-driven data processing pipelines that reduced problem-solving ticket resolution time by 35% and improved operational eﬀiciency across multiple fulfillment centers',
      'Designed optimized SQL queries for QuickSight dashboards that increased logistics eﬀiciency by 28%',
      'Technologies: Java, Kotlin, AWS (Lambda, DynamoDB, CloudWatch, QuickSight), JavaScript, React.js, RESTful APIs, SQL.',
    ],
  },
];

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Box
      id="experience"
      sx={{
        py: 8,
        backgroundColor: 'background.default',
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
      <Container sx={{ position: 'relative', zIndex: 1, px: { xs: 1, sm: 2, md: 0 } }}>
        <Box
          ref={ref}
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          sx={{ textAlign: 'center', mb: { xs: 3, md: 6 } }}
        >
          <Typography
            variant="h2"
            sx={{
              mb: 2,
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
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
            Experience
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', fontSize: { xs: '1rem', md: '1.1rem' } }}>
            My professional journey
          </Typography>
        </Box>
        <Box sx={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          {/* Timeline accent */}
          <Box
            sx={{
              position: 'absolute',
              left: { xs: 8, md: '50%' },
              transform: { xs: 'none', md: 'translateX(-50%)' },
              width: 4,
              height: '100%',
              background: 'linear-gradient(180deg, #4285F4 0%, #34A853 100%)',
              borderRadius: 2,
              zIndex: 0,
              display: { xs: 'none', md: 'block' },
            }}
          />
          {experiences.map((experience, index) => (
            <Box
              key={index}
              component={motion.div}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              sx={{
                width: '100%',
                display: 'flex',
                justifyContent: { xs: 'center', md: index % 2 === 0 ? 'flex-start' : 'flex-end' },
                mb: { xs: 3, md: 5 },
                position: 'relative',
                zIndex: 1,
              }}
            >
              <Paper
                elevation={6}
                sx={{
                  p: { xs: 2, sm: 3, md: 4 },
                  maxWidth: { xs: '100%', sm: 500, md: 540 },
                  width: '100%',
                  backgroundColor: 'background.paper',
                  borderRadius: 3,
                  border: '1.5px solid',
                  borderColor: 'primary.main',
                  boxShadow: '0 8px 32px rgba(66, 133, 244, 0.10)',
                  position: 'relative',
                  transition: 'box-shadow 0.3s, transform 0.3s',
                  '&:hover': {
                    transform: 'translateY(-7px) scale(1.02)',
                    boxShadow: '0 12px 32px rgba(66, 133, 244, 0.18)',
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', mb: { xs: 1.5, md: 2 } }}>
                  <Box
                    sx={{
                      width: { xs: 36, md: 44 },
                      height: { xs: 36, md: 44 },
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
                    <FaBriefcase size={22} />
                  </Box>
                  <Box>
                    <Typography variant="h5" sx={{ color: 'primary.main', mb: 0.5, fontWeight: 700, fontSize: { xs: '1.1rem', md: '1.3rem' } }}>
                      {experience.position}
                    </Typography>
                    <Typography variant="h6" sx={{ mb: 0.5, fontWeight: 600, fontSize: { xs: '1rem', md: '1.1rem' } }}>
                      {experience.company}
                    </Typography>
                    {/* Location below company name */}
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 0.5 }}>
                      <FaMapMarkerAlt size={15} style={{ marginRight: 6, color: '#4285F4' }} />
                      <Typography variant="subtitle2" sx={{ color: 'text.secondary', fontWeight: 500, fontSize: { xs: '0.95rem', md: '1rem' } }}>
                        {experience.location}
                      </Typography>
                    </Box>
                    <Typography variant="subtitle2" sx={{ color: 'text.secondary', fontWeight: 500, fontSize: { xs: '0.95rem', md: '1rem' } }}>
                      {experience.period}
                    </Typography>
                  </Box>
                </Box>
                <Box
                  component="ul"
                  sx={{
                    pl: 0,
                    mt: 2,
                    mb: 0,
                    listStyle: 'none',
                  }}
                >
                  {experience.description.map((item, itemIndex) => (
                    <Box
                      key={itemIndex}
                      component="li"
                      sx={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        mb: 1.2,
                        fontSize: { xs: '0.98rem', md: '1.05rem' },
                        color: 'text.secondary',
                        fontWeight: 400,
                        lineHeight: 1.7,
                      }}
                    >
                      <Box
                        sx={{
                          width: { xs: 8, md: 10 },
                          height: { xs: 8, md: 10 },
                          minWidth: { xs: 8, md: 10 },
                          borderRadius: '50%',
                          background: 'linear-gradient(45deg, #4285F4, #34A853)',
                          mt: '7px',
                          mr: 1.5,
                        }}
                      />
                      <Typography component="span" sx={{ fontSize: { xs: '0.98rem', md: '1.05rem' }, color: 'text.secondary', fontWeight: 400 }}>
                        {item}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Paper>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Experience; 