import { m } from 'framer-motion';
import { useState, useCallback } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { alpha } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Accordion from '@mui/material/Accordion';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary, { accordionSummaryClasses } from '@mui/material/AccordionSummary';

import { useResponsive } from 'src/hooks/use-responsive';

import Pattern01 from 'src/assets/illustrations/pattern/pattern-01';

import Iconify from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';
import { paths } from 'src/routes/paths';
import { Link } from 'react-router-dom';

// ----------------------------------------------------------------------

const CONTENTS = [
  {
    question: `Will I receive a certificate upon completion of the course?`,
    answer: `For a complete transformative learning experience, a 100% attendance rate for all classes is expected. Upon doing so, you will be eligible to obtain a certificate for your CV and LinkedIn profile.`,
  },
  {
    question: 'What are the key benefits of enrolling in our programmes?',
    answer: `The program offers hands-on learning, the opportunity to learn from industry experts in class, and collaboration with design leaders.`,
  },
  {
    question: 'What does the course fee cover?',
    answer: `The course fee includes all class materials, as well as guidance and support from experienced instructors and mentors throughout the course.`,
  },
  {
    question: 'Can the courses be taken online or offline?',
    answer: `We offer offline classes only as we emphasize the importance of in-person interactions.`,
  },
  // {
  //   question: 'What if I have further questions?',
  //   answer: `We encourage you to attend our demo session to get a taste of the course. Alternatively, you can also contact us on WhatsApp if you have any questions.`,
  // },
  {
    question: 'Are there any financing options available?',
    answer: `Ensuring education is accessible to individuals is our priority. We provide various payment options to assist you. Feel free to reach out to our course advisors for detailed information.`,
  },
];

// ----------------------------------------------------------------------

export default function HomeFAQs() {
  const smUp = useResponsive('up', 'sm');

  const [expanded, setExpanded] = useState(false);

  const handleChangeExpanded = useCallback(
    (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    },
    []
  );

  return (
    <Container
      component={MotionViewport}
      sx={{
        position: 'relative',
        py: { xs: 5, md: 10 },
      }}
    >
      <Grid container spacing={{ md: 3 }} justifyContent="center">
        <Grid xs={12} md={8}>
          <m.div variants={varFade().in}>
            <Typography variant="h2" sx={{ textAlign: 'center' }}>
              Frequently Asked Questions
            </Typography>
          </m.div>

          <Box
            sx={{
              my: { xs: 8, md: 10 },
            }}
          >
            {CONTENTS.map((faq) => (
              <m.div key={faq.question} variants={varFade().in}>
                <Accordion
                  expanded={expanded === faq.question}
                  onChange={handleChangeExpanded(faq.question)}
                >
                  <AccordionSummary
                    sx={{
                      minHeight: 64,
                      borderBottom: (theme) => `dashed 1px ${theme.palette.divider}`,
                      [`& .${accordionSummaryClasses.content}`]: {
                        p: 0,
                        m: 0,
                      },
                      [`&.${accordionSummaryClasses.expanded}`]: {
                        bgcolor: 'action.selected',
                      },
                    }}
                  >
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                      {faq.question}
                    </Typography>

                    <Iconify
                      width={24}
                      icon={expanded === faq.question ? 'carbon:subtract' : 'carbon:add'}
                    />
                  </AccordionSummary>

                  <AccordionDetails>{faq.answer}</AccordionDetails>
                </Accordion>
              </m.div>
            ))}
          </Box>

          <Box
            sx={{
              borderWidth: 1,
              borderRadius: 3,
              textAlign: 'center',
              borderStyle: 'dashed',
              borderColor: (theme) => alpha(theme.palette.grey[500], 0.32),
              px: { xs: 3, md: 8 },
              py: { xs: 6, md: 8 },
            }}
          >
            <m.div variants={varFade().inUp}>
              <Typography variant="h3">If you have further enquiry, don't hesitate to contact us!</Typography>
            </m.div>

            <m.div variants={varFade().inUp}>
              <Typography sx={{ mt: 3, mb: 5, color: 'text.secondary' }}>
                Please describe your case to receive the most accurate advice.
              </Typography>
            </m.div>

            {/* <m.div variants={varFade().inUp}>
              <Button 
                component={Link} // Use the component prop to make the button a link
                to={paths.eLearning.contact}
                variant="contained"
              >
                Contact us
              </Button>
            </m.div> */}

          </Box>
        </Grid>
      </Grid>

      {smUp && (
        <Pattern01
          sx={{
            top: 80,
            left: 0,
            right: 0,
            zIndex: -1,
            mx: 'auto',
            maxWidth: 600,
            maxHeight: 600,
          }}
        />
      )}
    </Container>
  );
}
