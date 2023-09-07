import { alpha, Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

export default makeStyles((theme: Theme) => ({
  loanCard: {
    marginBottom: theme.spacing(4),
    padding: theme.spacing(4, 6),
    maxWidth: 800,
    borderRadius: theme.shape.borderRadius,
    boxShadow: '0 5px 25px rgba(227, 230, 236, 0.6)',
  },
  loansListHeader: {
    marginBottom: theme.spacing(4),
    padding: theme.spacing(2, 6),
    maxWidth: 800,
    borderRadius: theme.shape.borderRadius,
    fontSize: 12,
    color: theme.palette.text.secondary,
    backgroundColor: theme.palette.background.default,
  },
  loansWarning: {
    marginBottom: theme.spacing(4),
    padding: theme.spacing(3),
    maxWidth: 540,
    borderRadius: theme.shape.borderRadius,
    backgroundColor: '#DCEDDD',

    '& .MuiTypography-root': {
      fontSize: 12,
      lineHeight: 1.33,
    },
  },
  icon: {
    width: 24,
    height: 24,
    fontSize: 20,
  },
  name: {
    minWidth: 150,
    fontSize: 14,
    fontWeight: theme.typography.fontWeightBold,
    lineHeight: 1.14,
  },
  subtitle: {
    fontSize: 12,
    lineHeight: 1.33,
    color: theme.palette.text.secondary,
  },
  nameSubtitle: {
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',

    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(2),
    },
  },
  date: {
    fontSize: 12,

    [theme.breakpoints.up('sm')]: {
      textAlign: 'right',
    },
  },
  status: {
    display: 'inline-flex',
    alignItems: 'center',
    padding: theme.spacing(1.5, 3),
    height: theme.spacing(6),
    borderRadius: 100,
    fontSize: 12,
    fontWeight: theme.typography.fontWeightBold,
    color: '#E2A314',
    backgroundColor: alpha('#FFC542', 0.2),

    [theme.breakpoints.down('sm')]: {
      display: 'inline-flex',
      padding: theme.spacing(1, 2),
      height: theme.spacing(5),
    },
    '&.rejected': {
      color: theme.palette.error.main,
      backgroundColor: alpha(theme.palette.error.main, 0.2),
    },
    '&.active': {
      color: theme.palette.info.dark,
      backgroundColor: alpha(theme.palette.info.dark, 0.2),
    },
    '&.pending-settlement': {
      color: theme.palette.info.main,
      backgroundColor: alpha(theme.palette.info.main, 0.2),
    },
    '&.closed': {
      color: theme.palette.text.primary,
      backgroundColor: alpha(theme.palette.text.primary, 0.2),
    },
  },
  amount: {
    fontWeight: theme.typography.fontWeightBold,

    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(2),
    },
  },
  amountBox: {
    [theme.breakpoints.up('md')]: {
      textAlign: 'right',
    },
  },
  description: {
    ...theme.typography.overline,

    '&.success': {
      color: theme.palette.info.dark,
    },
  },
}));
