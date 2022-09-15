/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-nocheck

import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import rdmd from '@readme/markdown';

// ----------------------------------------------------------------------
const MarkDownStyle = styled(Box)(({ theme }) => ({
  '& .heading': {
    fontFamily: 'Flame',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '32px',
    lineHeight: '38px',
    color: '#000000',
  },
  '& li': {
    marginLeft: theme.spacing(2.5),
  },
  '& .client__side__routing': {
    textDecoration: 'underline',
    color: 'blue',
    '&:hover': {
      cursor: 'pointer',
    },
  },
}));

// ----------------------------------------------------------------------
export interface Props {
  body?: string;
}

export default function Markdown({ body }: Props) {
  return (
    <MarkDownStyle>
      <div className='markdown-body'>{rdmd(body)}</div>
    </MarkDownStyle>
  );
}
