import { Box, Card, Grid, Hidden, Typography, useMediaQuery } from '@mui/material';
import moment from 'moment';
import React from 'react';
import useStyles from './LoansListStyles';
import theme from '../../../theme/theme';
import { Loan } from '../../../types/loans';

interface Props {
  loan: Loan
}

const LoansItem: React.FC<Props> = ({ loan }) => {
  const mobile = useMediaQuery(theme.breakpoints.down('xs'));
  const styles = useStyles();

  return (
    <Card className={styles.loanCard}>
      <Grid container alignItems={mobile ? 'flex-start' : 'center'}>
        <Grid item xs={7} sm={2}>
          <span className={styles.name}>
            <Hidden smDown>
              FL
              {' '}
            </Hidden>
            {loan.externalId}
          </span>
          <Hidden smUp>
            <Box component="span" ml={2} mb={-0.5} className={`${styles.status} ${loan.status.replaceAll(/\s+/g, '-')}`}>
              {loan.status}
            </Box>
          </Hidden>
          <div className={`${styles.subtitle} ${styles.nameSubtitle}`}>{loan.account?.company.name}</div>
          <Hidden smUp>
            <Box className={styles.date} pt={1} color={theme.palette.text.secondary}>
              {moment(loan.createdAt).format('DD MMM YYYY')}
            </Box>
          </Hidden>
        </Grid>
        <Hidden smDown>
          <Grid item xs={12} sm={2}>
            <div className={styles.date}>
              {moment(loan.createdAt).format('DD MMM YYYY')}
            </div>
          </Grid>
          <Grid item xs sm={2}>
            <div className={styles.date}>
              {`${loan.duration} months`}
            </div>
          </Grid>
        </Hidden>
        <Grid item xs={5} sm={3}>
          <Box className={styles.amountBox}>
            <Typography component="div" variant="caption" className={styles.amount} align="right">
              {`${loan.amount.toLocaleString('de-DE', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}`}
              &nbsp;€
            </Typography>
            <Hidden smUp>
              <Box mt={2} mb={1} className={styles.date} color={theme.palette.text.secondary} textAlign="right">
                for
                {' '}
                {`${loan.duration} months`}
              </Box>
            </Hidden>
            <Box className={styles.subtitle} textAlign="right">
              {`${loan.monthlyPayment.toLocaleString('de-DE', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}€ / month`}
            </Box>
          </Box>
        </Grid>
        <Hidden smDown>
          <Grid item xs={12} sm={3}>
            <Box textAlign="right">
              <span className={`${styles.status} ${loan.status.replaceAll(/\s+/g, '-')}`}>
                {loan.status}
              </span>
            </Box>
          </Grid>
        </Hidden>
      </Grid>
    </Card>
  );
};

export default LoansItem;
