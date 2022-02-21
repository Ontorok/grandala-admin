import React from 'react';
import Featured from '../../parts/featured/Featured';
import UserChart from '../../parts/userChart/UserChart';
import WidgetLg from '../../parts/widgetLg/WidgetLg';
import WidgetSm from '../../parts/widgetSm/WidgetSm';
import classes from './Home.module.css';

const Home = function () {
  return (
    <div className={classes.home}>
      <Featured />
      <UserChart />
      <div className={classes.homeWidgets}>
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
};

export default Home;
