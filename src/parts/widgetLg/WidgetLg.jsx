import clsx from 'clsx';
import React from 'react';
import classes from './WidgetLg.module.css';

const Button = function ({ type }) {
  switch (type) {
    case 'approve':
      return (
        <button type="button" className={clsx(classes.widgetLgBtn, classes.widgetLgBtnApprove)}>
          Approve
        </button>
      );
    case 'decline':
      return (
        <button type="button" className={clsx(classes.widgetLgBtn, classes.widgetLgBtnDecline)}>
          Declined
        </button>
      );
    case 'pending':
      return (
        <button type="button" className={clsx(classes.widgetLgBtn, classes.widgetLgBtnPending)}>
          Pending
        </button>
      );

    default:
      return <button type="button">button</button>;
  }
};

const WidgetLg = function () {
  return (
    <div className={classes.widgetLg}>
      <span className={classes.widgetLgTitle}>Lastes Transactions</span>
      <table className={classes.widgetLgTable}>
        <thead>
          <tr className={classes.widgetLgTr}>
            <th className={classes.widgetLgTh}>Customer</th>
            <th className={classes.widgetLgTh}>Date</th>
            <th className={classes.widgetLgTh}>Amount</th>
            <th className={classes.widgetLgTh}>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className={classes.widgetLgTr}>
            <td className={classes.widgetLgUser}>
              <img
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt=""
                className={classes.widgetLgImg}
              />
              <span className={classes.widgetLgUserName}>Nasir</span>
            </td>
            <td className={classes.widgetLgDate}>04-Dec-2021</td>
            <td className={classes.widgetLgAmount}>$ 120</td>
            <td className={classes.widgetLgStatus}>
              <Button type="approve" />
            </td>
          </tr>

          <tr className={classes.widgetLgTr}>
            <td className={classes.widgetLgUser}>
              <img
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt=""
                className={classes.widgetLgImg}
              />
              <span className={classes.widgetLgUserName}>Nasir</span>
            </td>
            <td className={classes.widgetLgDate}>04-Dec-2021</td>
            <td className={classes.widgetLgAmount}>$ 120</td>
            <td className={classes.widgetLgStatus}>
              <Button type="pending" />
            </td>
          </tr>

          <tr className={classes.widgetLgTr}>
            <td className={classes.widgetLgUser}>
              <img
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt=""
                className={classes.widgetLgImg}
              />
              <span className={classes.widgetLgUserName}>Nasir</span>
            </td>
            <td className={classes.widgetLgDate}>04-Dec-2021</td>
            <td className={classes.widgetLgAmount}>$ 120</td>
            <td className={classes.widgetLgStatus}>
              <Button type="decline" />
            </td>
          </tr>

          <tr className={classes.widgetLgTr}>
            <td className={classes.widgetLgUser}>
              <img
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt=""
                className={classes.widgetLgImg}
              />
              <span className={classes.widgetLgUserName}>Nasir</span>
            </td>
            <td className={classes.widgetLgDate}>04-Dec-2021</td>
            <td className={classes.widgetLgAmount}>$ 120</td>
            <td className={classes.widgetLgStatus}>
              <Button type="approve" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default WidgetLg;
