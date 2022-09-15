import { Link, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import NextLink from 'next/link';
import { useRouter } from 'next/router';

import { MenuItemProps, MenuProps } from './type';
// ----------------------------------------------------------------------

const LinkStyle = styled(Link)(({ theme, }) => ({
  ...theme.typography.tab,
  color: theme.palette.grey[900],
  marginRight: theme.spacing(2),
  width: 'max-content',
  transition: theme.transitions.create('opacity', {
    duration: theme.transitions.duration.shorter,
  }),
  '&:hover': {
    // opacity: 0.48,
    // color:theme.palette.primary.main,
    // textDecoration: 'none',
  },

  [theme.breakpoints.up('lg')]: {
    marginRight: theme.spacing(7),
  },
}));

// ----------------------------------------------------------------------

export default function MenuDesktop({ navConfig, }: MenuProps) {
  return (
    <Stack direction='row'>
      {navConfig.map((link) => (
        <MenuDesktopItem
          key={link.title}
          item={link}
        />
      ))}
    </Stack>
  );
}

// ----------------------------------------------------------------------
const isChildRoute = (asPath: string, path: string) => {
 const asPathSplit = asPath.split('/')[1];
  const pathSplit = path.split('/')[1];

  return asPathSplit === pathSplit;
};

type MenuDesktopItemProps = {
  item: MenuItemProps;
};

function MenuDesktopItem({ item, }: MenuDesktopItemProps) {
  const { pathname, asPath, } = useRouter();
  const { title, path, } = item;
  const isActive = (path: string) => asPath === path ;

  return (
    <NextLink
      href={path}
      passHref
    >
      <LinkStyle
        sx={{
          ...((isActive(path) || isChildRoute(asPath, path)) && {
            color: 'primary.main',
          }),
        }}
      >
        {title}
      </LinkStyle>
    </NextLink>
  );
}
