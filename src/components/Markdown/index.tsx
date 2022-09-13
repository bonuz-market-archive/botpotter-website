/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-ignore
import rdmd from '@readme/markdown';

export interface Props {
  body?: string;
}

export default function Markdown({ body, }: Props) {
  return <div className='markdown-body'>{rdmd(body)}</div>;
}