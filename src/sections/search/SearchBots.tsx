/* eslint-disable sonarjs/no-identical-functions */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useEffect, useState, useRef } from 'react';

import {
  Box,
  BoxProps,
  Button,
  Collapse,
  Paper,
  Stack,
  Typography
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { useRouter } from 'next/router';
import { A11y, Navigation, Scrollbar, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import BotCard from 'components/BotCard';
import CheckboxWithLabel from 'components/CheckboxWithLabel';
import Container from 'components/Container';
import Divider from 'components/Divider';
import SearchInput from 'components/SearchInput';
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
const PaperStyle = styled(Paper)(({ theme, }) => ({
  backgroundColor: '#FBFBFB',
  padding: theme.spacing(4),
}));

// ----------------------------------------------------------------------

interface FilterProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  btnOnClick: () => void;
  handlePlatformChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleCategoryChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleLicenseChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
const Filters = ({
  value,
  onChange,
  btnOnClick,
  handlePlatformChange,
  handleCategoryChange,
  handleLicenseChange,
}: FilterProps) => {
  const isDesktop = useResponsive('up', 'md');

  return (
    <>
      <SearchInput
        value={value}
        onChange={onChange}
        btnOnClick={btnOnClick}
      />

      <Box>
        <PaperStyle
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: 'repeat(2, 1fr)',
              md: 'repeat(1, 1fr)',
            },
          }}
        >
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

          {isDesktop && (
            <Divider
              sx={{
                my: 4,
                bgcolor: '#EAEAEA',
                opacity: 0.7,
              }}
            />
          )}

          <Typography
            variant='h5'
            mb={4}
            sx={{
              ...(!isDesktop && {
                gridColumn: '2/ 3',
                gridRow: '1/ -1',
              }),
            }}
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
    </>
  );
};
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
          bot.title.toString().toLowerCase().includes(searchFilter) ||
          bot.body.toString().toLowerCase().includes(searchFilter)
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
  }, [categoryFilter, data?.bots, licenseFilter.length, platformFilter]);

  let n = isDesktop ? 8 : 4;
  n = isMobile ? 3 : n;
  const numOfSlides = Math.ceil((filteredBots?.length ?? 0) / n);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchFilter(event.target.value);
  };

  useEffect(() => {
    const filterQuery = router.query.searchFilter as string;
    setSearchFilter(filterQuery || '');
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

                    return (
                      <SwiperSlide key={`SwiperSlide___${slideNumber}`}>
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
