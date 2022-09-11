/* eslint-disable sonarjs/no-identical-functions */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useEffect, useState } from 'react';

import { Box, BoxProps, Paper, Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

import BotCard from 'components/BotCard';
import CheckboxWithLabel from 'components/CheckboxWithLabel';
import Container from 'components/Container';
import Divider from 'components/Divider';
import SearchInput from 'components/SearchInput';
import { useQueryBots } from 'hooks/react-query';
import useResponsive from 'hooks/useResponsive';
import { IBots, TCategory, TLicense, TPlatform } from 'types';
// ----------------------------------------------------------------------

const ContentStyle = styled('div')(({ theme, }) => ({
  [theme.breakpoints.up('md')]: {
    marginLeft: theme.spacing(9),
    marginRight: theme.spacing(9),
  },
}));

// ----------------------------------------------------------------------

const CardsWrapperStyle = styled('div')(({ theme, }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(337px, 1fr))',
  gap: theme.spacing(2),
  [theme.breakpoints.up('md')]: {
    gap: theme.spacing(3),
  },
}));

// ----------------------------------------------------------------------
const GridStyle = styled('div')(({ theme, }) => ({
  display: 'grid',
  gap: theme.spacing(2),
  [theme.breakpoints.up('md')]: {
    columGap: theme.spacing(5),
    rowGap: theme.spacing(2),
    gridTemplateColumns: '359px 1fr',
  },
}));

// ----------------------------------------------------------------------
const PaperStyle = styled(Paper)(({ theme, }) => ({
  backgroundColor: '#FBFBFB',
  padding: theme.spacing(4),
}));
// ----------------------------------------------------------------------

export default function SearchBots({ ...other }: BoxProps) {
  const isDesktop = useResponsive('up', 'md');
  const { isLoading, data, } = useQueryBots();
  const [filteredBots, setFilteredBots] = useState<IBots[] | undefined>();

  const [searchFilter, setSearchFilter] = useState('');
  const [platformFilter, setPlatformFilter] = useState<TPlatform[] | []>([]);
  const [categoryFilter, setCategoryFilter] = useState<TCategory[] | []>([]);
  const [licenseFilter, setLicenseFilter] = useState<TLicense[] | []>([]);

  // TODO: Make is one function
  const handlePlatformChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      const value = e.target.name as TPlatform;
      setPlatformFilter([...platformFilter, value]);
    } else {
      setPlatformFilter(platformFilter.filter((id) => id !== e.target.name));
    }
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      const value = e.target.name as TCategory;
      setCategoryFilter([...categoryFilter, value]);
    } else {
      setCategoryFilter(categoryFilter.filter((id) => id !== e.target.name));
    }
  };

  const handleLicenseChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      const value = e.target.name as TLicense;
      setLicenseFilter([...licenseFilter, value]);
    } else {
      setLicenseFilter(licenseFilter.filter((id) => id !== e.target.name));
    }
  };

  const handleSearchBtnOnClick = () => {
    if (!filteredBots) return;

    const botsData = filteredBots.filter((bot) => {
      return (
        bot.title.toString().toLowerCase().includes(searchFilter) ||
        bot.body.toString().toLowerCase().includes(searchFilter)
      );
    });

    setFilteredBots(botsData);
  };

  useEffect(() => {
    if (!data?.bots) return;

    const botsData = data.bots;

    //* Filter as user types
    // const botsData = data.bots.filter((bot) => {
    //   return (
    //     bot.title.toString().toLowerCase().includes(searchFilter) ||
    //     bot.body.toString().toLowerCase().includes(searchFilter)
    //   );
    // });

    if (
      platformFilter.length === 0 &&
      categoryFilter.length === 0 &&
      licenseFilter.length === 0
    ) {
      setFilteredBots(botsData);
    } else {
      let filteredCategory = [];
      let filteredPlatform = [];

      if (categoryFilter.length > 0) {
        filteredCategory = botsData.filter((bot) =>
          categoryFilter.some((category) => {
            //@ts-ignore
            return bot.category.includes(category);
          })
        );

        if (platformFilter.length > 0) {
          filteredPlatform = filteredCategory.filter((bot) =>
            platformFilter.some((platform) => {
              //@ts-ignore
              return bot.platform.includes(platform);
            })
          );

          setFilteredBots(filteredPlatform);
        } else {
          setFilteredBots(filteredCategory);
        }
      } else if (platformFilter.length > 0) {
        filteredPlatform = botsData.filter((bot) =>
          platformFilter.some((platform) => {
            //@ts-ignore
            return bot.platform.includes(platform);
          })
        );

        setFilteredBots(filteredPlatform);
      }
    }
  }, [
    categoryFilter,
    data?.bots,
    licenseFilter.length,
    platformFilter,
    searchFilter
  ]);

  return (
    <Box {...other}>
      <Container>
        <ContentStyle>
          <GridStyle>
            <Typography
              variant='h2'
              color='initial'
              // mb={4}
            >
              Search
            </Typography>

            <SearchInput
              onChange={(e) => setSearchFilter(e.target.value)}
              btnOnClick={handleSearchBtnOnClick}
            />

            <Box>
              <PaperStyle>
                <Typography
                  variant='h5'
                  mb={4}
                >
                  Platform
                </Typography>

                <Stack
                  direction='column'
                  spacing={1}
                  justifyContent='center'
                  alignItems='start'
                >
                  <CheckboxWithLabel
                    label='Telegram'
                    onChange={handlePlatformChange}
                  />

                  <CheckboxWithLabel
                    label='Twitter'
                    onChange={handlePlatformChange}
                  />

                  <CheckboxWithLabel
                    label='Facebook'
                    onChange={handlePlatformChange}
                  />

                  <CheckboxWithLabel
                    label='Discord'
                    onChange={handlePlatformChange}
                  />

                  <CheckboxWithLabel
                    label='WhatsApp'
                    onChange={handlePlatformChange}
                  />
                </Stack>

                <Divider
                  sx={{
                    my: 4,
                    bgcolor: '#EAEAEA',
                    opacity: 0.7,
                  }}
                />

                <Typography
                  variant='h5'
                  mb={4}
                >
                  Category
                </Typography>

                <Stack
                  direction='column'
                  spacing={1}
                  justifyContent='center'
                  alignItems='start'
                >
                  <CheckboxWithLabel
                    label='Support'
                    onChange={handleCategoryChange}
                  />

                  <CheckboxWithLabel
                    label='Administration'
                    onChange={handleCategoryChange}
                  />

                  <CheckboxWithLabel
                    label='Application'
                    onChange={handleCategoryChange}
                  />

                  <CheckboxWithLabel
                    label='Information'
                    onChange={handleCategoryChange}
                  />

                  <CheckboxWithLabel
                    label='Other'
                    onChange={handleCategoryChange}
                  />
                </Stack>
              </PaperStyle>

              <PaperStyle
                sx={{
                  mt: 4,
                }}
              >
                <Typography
                  variant='h5'
                  mb={4}
                >
                  License
                </Typography>

                <Stack
                  direction='column'
                  spacing={1}
                  justifyContent='center'
                  alignItems='start'
                >
                  <CheckboxWithLabel
                    label='Free'
                    onChange={handleLicenseChange}
                  />

                  <CheckboxWithLabel
                    label='Commercial'
                    onChange={handleLicenseChange}
                  />
                </Stack>
              </PaperStyle>
            </Box>

            <Box>
              <CardsWrapperStyle>
                {filteredBots &&
                  filteredBots.map((bot, idx) => {
                    return (
                      <BotCard
                        key={`bot__${idx}`}
                        {...bot}
                      />
                    );
                  })}
              </CardsWrapperStyle>
            </Box>
          </GridStyle>
        </ContentStyle>
      </Container>
    </Box>
  );
}
