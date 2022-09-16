/* eslint-disable sonarjs/no-identical-functions */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useEffect, useState } from 'react';

import {
  Box,
  BoxProps,
  Button,
  Collapse,
  Stack,
  Typography
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { useRouter } from 'next/router';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import BotCard from 'components/BotCard';
import Container from 'components/Container';
import Filters from 'components/Filters';
import { LoadingSpinner } from 'components/LoadingSpinner';
import { useQueryBots } from 'hooks/react-query';
import useResponsive from 'hooks/useResponsive';
import { IBots, TCategory, TLicense, TPlatform } from 'types';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// ----------------------------------------------------------------------

const ContentStyle = styled('div')(({ theme, }) => ({
  [theme.breakpoints.up('md')]: {
    marginLeft: theme.spacing(9),
    marginRight: theme.spacing(9),
  },
}));

// ----------------------------------------------------------------------
const GridStyle = styled('div')(({ theme, }) => ({
  maxWidth: '100%',
  display: 'grid',
  gap: theme.spacing(2),
  gridTemplateColumns: '1fr',
  [theme.breakpoints.up('md')]: {
    columGap: theme.spacing(5),
    rowGap: theme.spacing(2),
    gridTemplateColumns: '250px 1fr',
  },

  [theme.breakpoints.up('lg')]: {
    columGap: theme.spacing(5),
    rowGap: theme.spacing(2),
    gridTemplateColumns: '359px 1fr',
  },
}));

// ----------------------------------------------------------------------

export default function SearchBots({ ...other }: BoxProps) {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);

  const isMobile = useResponsive('down', 'sm');
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
    if (!filteredBots || !data?.bots) return;

    if (searchFilter) {
      const botsData = filteredBots.filter((bot) => {
        return (
          bot.title
            .toString()
            .toLowerCase()
            .includes(searchFilter.toLowerCase()) ||
          bot.body.toString().toLowerCase().includes(searchFilter.toLowerCase())
        );
      });

      setFilteredBots(botsData);
    } else {
      setFilteredBots(data.bots);
    }
  };

  const handleClick = () => {
    setOpen(!open);
  };

  useEffect(() => {
    if (!data?.bots) return;

    // const botsData = data.bots;

    //* Filter as user types
    const botsData = data.bots.filter((bot) => {
      return (
        bot.title
          .toString()
          .toLowerCase()
          .includes(searchFilter.toLowerCase()) ||
        bot.body.toString().toLowerCase().includes(searchFilter.toLowerCase())
      );
    });

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
    licenseFilter?.length,
    platformFilter,
    searchFilter
  ]);

  let n = isDesktop ? 8 : 4;
  n = isMobile ? 3 : n;
  const numOfSlides = Math.ceil((filteredBots?.length ?? 0) / n);

  console.log(
    '🚀MMM ~ file: SearchBots.tsx ~ line 195 ~ numOfSlides',
    numOfSlides
  );

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchFilter(value);
  };

  useEffect(() => {
    const filterQuery = router.query.searchFilter as string;

    if (filterQuery) setSearchFilter(filterQuery || '');
  }, [router.query]);

  return (
    <Box {...other}>
      <Container>
        <ContentStyle>
          <GridStyle>
            <Stack
              direction='row'
              spacing={1}
              justifyContent='space-between'
              alignItems='center'
            >
              <Typography
                variant='h2'
                color='initial'
                // mb={4}
              >
                Search
              </Typography>

              {!isDesktop && (
                <Box
                  sx={{
                    cursor: 'pointer',
                  }}
                  onClick={handleClick}
                >
                  {!open ? (
                    <Button
                      variant='text'
                      color='primary'
                      sx={{
                        color: 'grey.900',
                        border: '1px solid #DBDBDB',
                        borderRadius: '16px',
                        width: 110,
                        height: 54,
                      }}
                    >
                      Filter
                    </Button>
                  ) : (
                    <Button
                      variant='contained'
                      color='primary'
                      sx={{
                        height: 54,
                        width: 110,
                        justifyContent: 'space-around',
                        // p:0,
                      }}
                    >
                      <Typography variant='subtitle1'>Filter</Typography>

                      <Box
                        component='img'
                        src='/svg/cross.svg'
                        alt='close icon'
                      />
                    </Button>
                  )}
                </Box>
              )}
            </Stack>

            {isDesktop ? (
              <Filters
                value={searchFilter}
                btnOnClick={handleSearchBtnOnClick}
                onChange={handleInputChange}
                handlePlatformChange={handlePlatformChange}
                handleCategoryChange={handleCategoryChange}
                handleLicenseChange={handleLicenseChange}
              />
            ) : (
              <Collapse
                in={open}
                timeout='auto'
                unmountOnExit
              >
                <Box>
                  <Filters
                    value={searchFilter}
                    btnOnClick={handleSearchBtnOnClick}
                    onChange={handleInputChange}
                    handlePlatformChange={handlePlatformChange}
                    handleCategoryChange={handleCategoryChange}
                    handleLicenseChange={handleLicenseChange}
                  />
                </Box>
              </Collapse>
            )}

            <Box
              sx={{
                ...(!isDesktop && {
                  gridColumn: '1/ -1',
                }),
              }}
            >
              {isLoading && <LoadingSpinner />}

              {!isLoading && numOfSlides === 0 && (
                <Stack
                  direction='row'
                  spacing={1}
                  justifyContent='center'
                  alignItems='center'
                  sx={{
                    height: '50vh',
                  }}
                >
                  <Typography variant='h5'>No bot found.</Typography>
                </Stack>
              )}

              {!isLoading && numOfSlides > 0 && (
                <Box
                  sx={{
                    '& .mySwiper': {
                      '& .swiper-wrapper': {
                        pb: 10,
                        maxWidth: 100, // this is just to remove width: 100%;
                      },
                      '& .swiper-slide': {
                        display: 'grid',
                        gridTemplateColumns: {
                          xs: '1fr',
                          sm: 'repeat(auto-fill, minmax(337px, 1fr))',
                        },
                        gap: 2,
                      },
                      '& .swiper-pagination-bullet-active': {
                        background: '#CA7B57',
                      },
                    },
                  }}
                >
                  <Swiper
                    pagination={{
                      clickable: true,
                    }}
                    modules={[Pagination]}
                    className='mySwiper'
                  >
                    {[...Array(numOfSlides)].map((slideNumber, index) => {
                      const start = index * n;
                      const end = (index + 1) * n;

                      const range = Array.from(Array(end - start).keys()).map(
                        (x) => x + start
                      );

                      // if (filteredBots && end <= filteredBots?.length)
                      return (
                        <SwiperSlide
                          key={`SwiperSlide___${slideNumber}__${index}`}
                        >
                          {range.map((element, idx) => {
                            const bot = filteredBots?.[element];

                            return bot ? (
                              <BotCard
                                //
                                key={`bot__${idx}`}
                                {...bot}
                              />
                            ) : null;
                          })}
                        </SwiperSlide>
                      );
                    })}
                  </Swiper>
                </Box>
              )}

              {/* <CardsWrapperStyle>
                {filteredBots &&
                  filteredBots.map((bot, idx) => {
                    return (
<BotCard
  key={`bot__${idx}`}
  {...bot}
/>
);
                  })}
              </CardsWrapperStyle> */}
            </Box>
          </GridStyle>
        </ContentStyle>
      </Container>
    </Box>
  );
}
