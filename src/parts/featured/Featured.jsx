import { ArrowDownward, ArrowUpward } from '@mui/icons-material';
import clsx from 'clsx';
import React from 'react';
import classes from './Featured.module.css';

const Featured = function () {
  return (
    <div className={classes.featured}>
      {/* Revenue */}
      <div className={classes.featuredItem}>
        <span className={classes.featuredTitle}>Revenue</span>
        <div className={classes.featuredMoneyContainer}>
          <span className={classes.featuredMoney}>$20,369</span>
          <span className={classes.featuredMoneyRate}>
            -45.6 <ArrowDownward className={clsx(classes.featuredIcon, classes.negetive)} />
          </span>
        </div>
        <span className={classes.featuredSubtitle}>Compared to last month</span>
      </div>
      {/* /Revenue */}

      {/* Sales */}

      <div className={classes.featuredItem}>
        <span className={classes.featuredTitle}>Sales</span>
        <div className={classes.featuredMoneyContainer}>
          <span className={classes.featuredMoney}>$20,369</span>
          <span className={classes.featuredMoneyRate}>
            -45.6 <ArrowDownward className={clsx(classes.featuredIcon, classes.negetive)} />
          </span>
        </div>
        <span className={classes.featuredSubtitle}>Compared to last month</span>
      </div>
      {/* /Sales */}

      {/* Cost */}

      <div className={classes.featuredItem}>
        <span className={classes.featuredTitle}>Cost</span>
        <div className={classes.featuredMoneyContainer}>
          <span className={classes.featuredMoney}>$20,369</span>
          <span className={classes.featuredMoneyRate}>
            45.6 <ArrowUpward className={classes.featuredIcon} />
          </span>
        </div>
        <span className={classes.featuredSubtitle}>Compared to last month</span>
      </div>
      {/* /Cost */}
    </div>
  );
};

export default Featured;
