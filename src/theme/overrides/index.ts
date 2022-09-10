import { Theme } from '@mui/material/styles';

//
import Backdrop from './Backdrop';
import Button from './Button';
import Card from './Card';
import CssBaseline from './CssBaseline';
import Drawer from './Drawer';
import Link from './Link';
import LoadingButton from './LoadingButton';
import Paper from './Paper';
import Popover from './Popover';
import SvgIcon from './SvgIcon';
import Tabs from './Tabs';
import Typography from './Typography';

// ----------------------------------------------------------------------

export default function ComponentsOverrides(theme: Theme) {
  return Object.assign(
    Tabs(theme),
    Card(theme),
    Link(theme),
    Paper(theme),
    Button(theme),
    Drawer(theme),
    Popover(theme),
    SvgIcon(theme),
    Backdrop(theme),
    Typography(theme),
    CssBaseline(theme),
    LoadingButton(theme)
  );
}
