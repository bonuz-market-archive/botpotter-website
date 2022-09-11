import { Box, BoxProps, Link, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

import Container from 'components/Container';
import useResponsive from 'hooks/useResponsive';

// ----------------------------------------------------------------------

const IconWrapperStyle = styled('div')(({ theme, }) => ({
  // display:'flex',
  // flexDirection: 'row',
  // flexWrap: 'wrap',
  // justifyContent: 'start',

  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', //? this will not center the content -- justifyContent will not work
  gap: theme.spacing(2),

  [theme.breakpoints.up('md')]: {
    margin: 'auto',
    gap: theme.spacing(3),
    justifyContent: 'center',
    gridTemplateColumns: 'repeat(5, max-content)',
  },
}));

// ----------------------------------------------------------------------

const ITEMS = [
  {
    name: 'Reddit',
    src: 'reddit-big.svg',
    href: 'http://medium.com/',
  },
  {
    name: 'Discord',
    src: 'discord-big.svg',
    href: 'http://discord.com/',
  },
  {
    name: 'GitHub',
    src: 'github-big.svg',
    href: 'http://github.com/',
  },
  {
    name: 'Twitter',
    src: 'twitter-big.svg',
    href: 'http://twitter.com/',
  },

  {
    name: 'Facebook',
    src: 'facebook-big.svg',
    href: 'http://facebook.com/',
  }
];

export default function Community({ ...other }: BoxProps) {
  const isDesktop = useResponsive('up', 'md');

  return (
    <Box {...other}>
      <Container>
        <Typography
          variant='h2'
          mb={4}
          align={isDesktop ? 'center' : 'left'}
        >
          Community
        </Typography>

        <Typography
          variant='h4'
          fontWeight={400}
          align={isDesktop ? 'center' : 'left'}
        >
          Don`t miss out to join our community.
        </Typography>

        <Typography
          variant='subtitle2'
          align={isDesktop ? 'center' : 'left'}
          sx={{
            mb: {
              xs: 3,
              md: 6.75,
            },
          }}
        >
          You can ask questions, give valuable input and be part of a new
          movement.
        </Typography>

        <IconWrapperStyle>
          {ITEMS.map((item, idx) => {
            return (
              <Link
                key={`icon__${item}__${idx}`}
                href={item.href}
                rel='noopener noreferrer'
                target='_blank'
                // underline='hover'
                sx={{
                  '&:hover': {
                    cursor: 'pointer',
                  },
                }}
              >
                <Box
                  component='img'
                  src={`/svg/${item.src}`}
                  alt={`${item.name} icon`}
                />
              </Link>
            );
          })}
        </IconWrapperStyle>
      </Container>
    </Box>
  );
}
