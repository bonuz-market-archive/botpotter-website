import React from 'react';

import { Box, Paper, Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

import CheckboxWithLabel from 'components/CheckboxWithLabel';
import Divider from 'components/Divider';
import SearchInput from 'components/SearchInput';
import useResponsive from 'hooks/useResponsive';

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

export default Filters;