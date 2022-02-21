import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import { format } from 'timeago.js';
import { userRequest } from '../../services/config';
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
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await userRequest.get('/order');
        console.log(res.data.data);
        setOrders(res.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchOrders();
  }, []);

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
          {orders.map((o) => (
            <tr key={o._id} className={classes.widgetLgTr}>
              <td className={classes.widgetLgUser}>
                <img
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                  alt=""
                  className={classes.widgetLgImg}
                />
                <span className={classes.widgetLgUserName}>{o.userId}</span>
              </td>
              <td className={classes.widgetLgDate}>{format(o.createdAt)}</td>
              <td className={classes.widgetLgAmount}>{o.amount}</td>
              <td className={classes.widgetLgStatus}>
                <Button type={o.status} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WidgetLg;
