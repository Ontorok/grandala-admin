import { Visibility } from '@mui/icons-material';
import React, { useEffect, useState } from 'react';
import { userRequest } from '../../services/config';
import classes from './WidgetSm.module.css';

const WidgetSm = function () {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await userRequest.get('/user/?new=true');

        setUsers(res.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div className={classes.widgetSm}>
      <span className={classes.widgetSmTitle}>New Join Members</span>
      <ul className={classes.widgetSmList}>
        {users.map((u) => (
          <li key={u._id} className={classes.widgetSmListItem}>
            <img
              src={
                u.img ||
                'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'
              }
              alt=""
              className={classes.widgetSmImage}
            />
            <div className={classes.widgetSmUser}>
              <span className={classes.widgetSmUserName}>{u.username}</span>
              <span className={classes.widgetSmUserTitle}>Software Developer</span>
            </div>
            <button type="button" className={classes.widgetSmButton}>
              <Visibility className={classes.widgetSmIcon} />
              Display
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WidgetSm;
