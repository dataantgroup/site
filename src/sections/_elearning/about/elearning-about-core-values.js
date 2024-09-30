import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

const CORE_VALUES = [
  {
    title: 'Pioneering',
    description:
      'Encourage a pioneering spirit that drives exploration and advancement in technology. This aim inspires students to lead the way in discovering new methodologies and technologies, pushing boundaries, and setting trends. By fostering a pioneering mindset, learners are motivated to take risks, experiment with fresh ideas, and contribute to the evolution of the tech industry.',
    icon: 'carbon:3d-curve-auto-colon',
  },
  {
    title: 'Adaptability',
    description:
      'Cultivate the ability to adapt to rapidly changing technologies and environments. In a field as dynamic as tech, embracing adaptability helps students remain flexible and resilient. This aim inspires learners to embrace change, learn new skills, and pivot when necessary, ensuring they are always prepared for the future.',
    icon: 'carbon:chat-bot',
  },
  {
    title: 'Excellence',
    description:
      'Commit to achieving the highest standards in all endeavors. This aim emphasizes the pursuit of quality and mastery in skills, encouraging students to continually improve and challenge themselves. By fostering a culture of excellence, learners are inspired to set ambitious goals and take pride in their work, ensuring they contribute meaningfully to the tech industry.',
    icon: 'carbon:airport-location',
  },
  {
    title: 'Open-mindedness',
    description:
      'Foster an open-minded approach to exploring new technologies and ideas. This quality encourages students to embrace change and remain receptive to innovative solutions. By cultivating open-mindedness, learners are inspired to experiment with emerging tools and methodologies, enhancing their adaptability and creativity in the ever-evolving tech landscape.',
    icon: 'carbon:event',
  },
];

// ----------------------------------------------------------------------

export default function ElearningAboutCoreValues() {
  return (
    <Box
      sx={{
        overflow: 'hidden',
        bgcolor: 'background.neutral',
        py: { xs: 8, md: 15 },
      }}
    >
      <Container>
        <Stack
          spacing={3}
          direction={{ xs: 'column', md: 'row' }}
          justifyContent={{ md: 'space-between' }}
          sx={{
            mb: { xs: 8, md: 15 },
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          <Typography variant="h2">Core Values</Typography>

          <Typography sx={{ color: 'text.secondary', maxWidth: { md: 540 } }}>
            By adopting these core values, our bootcamp offers a well-rounded and enriching educational experience that equips students to become pioneering, high-achieving, cooperative, and influential leaders in the tech sector.
          </Typography>
        </Stack>

        <Grid container spacing={8}>
          {CORE_VALUES.map((value) => (
            <Grid
              key={value.title}
              xs={12}
              sm={6}
              md={3}
              sx={{
                textAlign: { xs: 'center', md: 'left' },
              }}
            >
              <Iconify icon={value.icon} width={48} sx={{ color: 'primary.main' }} />

              <Typography variant="h5" sx={{ mt: 5, mb: 2 }}>
                {value.title}
              </Typography>

              <Typography sx={{ color: 'text.secondary' }}> {value.description} </Typography>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
