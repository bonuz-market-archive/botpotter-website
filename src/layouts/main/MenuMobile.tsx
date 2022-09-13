/* eslint-disable sonarjs/no-identical-functions */
import { useEffect, useState } from 'react';

import {
  Drawer,
  List,
  ListItemButton,
  ListItemButtonProps,
  ListItemText
} from '@mui/material';
import { alpha, styled } from '@mui/material/styles';
import Image from 'next/image';
import NextLink from 'next/link';
import { useRouter } from 'next/router';

import { IconButtonAnimate } from '../../components/animate';
import Logo from '../../components/Logo';
import Scrollbar from '../../components/Scrollbar';
import { NAVBAR } from '../../config';
import { MenuItemProps, MenuProps } from './type';

// ----------------------------------------------------------------------

const ListItemStyle = styled(ListItemButton)<ListItemButtonProps>(
  ({ theme, }) => ({
    ...theme.typography.body2,
    textTransform: 'capitalize',
    height: NAVBAR.DASHBOARD_ITEM_ROOT_HEIGHT,
    color: theme.palette.text.primary,
    // color:'#fff',
    // paddingLeft:theme.spacing(9),
  })
);
// ----------------------------------------------------------------------

export default function MenuMobile({ navConfig, }: MenuProps) {
  const { pathname, } = useRouter();

  const [open, setOpen] = useState(false);

  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    if (drawerOpen) {
      handleDrawerClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  return (
    <>
      <IconButtonAnimate
        onClick={handleDrawerOpen}
        sx={{
          // ml: 1,
          color: 'common.black',
        }}
      >
        {/* <Iconify icon='eva:menu-2-fill' /> */}

        <Image
          src='/svg/hamburger.svg'
          alt='hamburger icon'
          width={20}
          height={20}
        />
      </IconButtonAnimate>

      <Drawer
        open={drawerOpen}
        onClose={handleDrawerClose}
        ModalProps={{
          keepMounted: true,
        }}
        PaperProps={{
          sx: {
            pb: 5,
            width: 260,
            // backgroundColor: 'common.black',
          },
        }}
      >
        <Scrollbar>
          <Logo
            sx={{
              mx: 2.5,
              my: 3,
            }}
          />

          <List disablePadding>
            {navConfig.map((link) => (
              <MenuMobileItem
                key={link.title}
                item={link}
              />
            ))}
          </List>
        </Scrollbar>
      </Drawer>
    </>
  );
}

// ----------------------------------------------------------------------

type MenuMobileItemProps = {
  item: MenuItemProps;
};

function MenuMobileItem({ item, }: MenuMobileItemProps) {
  const { pathname,asPath, } = useRouter();
  const { title, path, children, } = item;
  const isActive = asPath === path;

  return (
    <>
      <NextLink
        href={path}
        passHref
      >
        <ListItemStyle
          sx={{
            ...(isActive && {
              color: 'primary.main',
              fontWeight: 'fontWeightMedium',
              bgcolor: (theme) =>
                alpha(
                  theme.palette.info.lighter,
                  theme.palette.action.selectedOpacity
                ),
            }),
          }}
        >
          <ListItemText
            disableTypography
            primary={title}
          />
        </ListItemStyle>
      </NextLink>

      {children && (
        <>
          {children[0].items.map((item) => {
            const isSubActive = pathname === item.path;

            return (
              <NextLink
                href={item.path}
                passHref
                key={item.title}
              >
                <ListItemStyle
                  sx={{
                    pl: 5,
                    ...(isSubActive && {
                      color: 'info.light',
                      fontWeight: 'fontWeightMedium',
                      bgcolor: (theme) =>
                        alpha(
                          theme.palette.info.lighter,
                          theme.palette.action.selectedOpacity
                        ),
                    }),
                  }}
                >
                  <ListItemText
                    disableTypography
                    primary={item.title}
                  />
                </ListItemStyle>
              </NextLink>
            );
          })}
        </>
      )}
    </>
  );
}
