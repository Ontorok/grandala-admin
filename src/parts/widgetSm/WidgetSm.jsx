import { Visibility } from '@mui/icons-material';
import React from 'react';
import classes from './WidgetSm.module.css';

const WidgetSm = function () {
  return (
    <div className={classes.widgetSm}>
      <span className={classes.widgetSmTitle}>New Join Members</span>
      <ul className={classes.widgetSmList}>
        <li className={classes.widgetSmListItem}>
          <img
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            alt=""
            className={classes.widgetSmImage}
          />
          <div className={classes.widgetSmUser}>
            <span className={classes.widgetSmUserName}>Nasir Ahmed</span>
            <span className={classes.widgetSmUserTitle}>Software Developer</span>
          </div>
          <button type="button" className={classes.widgetSmButton}>
            <Visibility className={classes.widgetSmIcon} />
            Display
          </button>
        </li>
        <li className={classes.widgetSmListItem}>
          <img
            src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            alt=""
            className={classes.widgetSmImage}
          />
          <div className={classes.widgetSmUser}>
            <span className={classes.widgetSmUserName}>Nasir Ahmed</span>
            <span className={classes.widgetSmUserTitle}>Software Developer</span>
          </div>
          <button type="button" className={classes.widgetSmButton}>
            <Visibility className={classes.widgetSmIcon} />
            Display
          </button>
        </li>
        <li className={classes.widgetSmListItem}>
          <img
            src="https://images.pexels.com/photos/7326951/pexels-photo-7326951.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            alt=""
            className={classes.widgetSmImage}
          />
          <div className={classes.widgetSmUser}>
            <span className={classes.widgetSmUserName}>Nasir Ahmed</span>
            <span className={classes.widgetSmUserTitle}>Software Developer</span>
          </div>
          <button type="button" className={classes.widgetSmButton}>
            <Visibility className={classes.widgetSmIcon} />
            Display
          </button>
        </li>
        <li className={classes.widgetSmListItem}>
          <img
            src="https://images.pexels.com/photos/4242520/pexels-photo-4242520.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt=""
            className={classes.widgetSmImage}
          />
          <div className={classes.widgetSmUser}>
            <span className={classes.widgetSmUserName}>Nasir Ahmed</span>
            <span className={classes.widgetSmUserTitle}>Software Developer</span>
          </div>
          <button type="button" className={classes.widgetSmButton}>
            <Visibility className={classes.widgetSmIcon} />
            Display
          </button>
        </li>
        <li className={classes.widgetSmListItem}>
          <img
            src="https://images.pexels.com/photos/6838615/pexels-photo-6838615.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            alt=""
            className={classes.widgetSmImage}
          />
          <div className={classes.widgetSmUser}>
            <span className={classes.widgetSmUserName}>Nasir Ahmed</span>
            <span className={classes.widgetSmUserTitle}>Software Developer</span>
          </div>
          <button type="button" className={classes.widgetSmButton}>
            <Visibility className={classes.widgetSmIcon} />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
};

export default WidgetSm;
