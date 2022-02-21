/* eslint-disable jsx-a11y/label-has-associated-control */
import {
  CalendarToday,
  MailOutline,
  PermIdentity,
  PhoneOutlined,
  Upload
} from '@mui/icons-material';
import React from 'react';
import { Link } from 'react-router-dom';
import classes from './User.module.css';

const User = function () {
  return (
    <div className={classes.user}>
      <div className={classes.userTitleContainer}>
        <h1>Edit User</h1>
        <Link to="/newUser">
          <button type="button" className={classes.userAddBtn}>
            ADD
          </button>
        </Link>
      </div>

      <div className={classes.userContainer}>
        <div className={classes.userShow}>
          <div className={classes.userShowTop}>
            <img
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
              alt="username"
              className={classes.userShowImg}
            />
            <div className={classes.userShowTopTitle}>
              <span className={classes.userShowUserName}>Nasir Ahmed</span>
              <span className={classes.userShowUserTitle}>Software Developer</span>
            </div>
          </div>
          <div className={classes.userShowBottom}>
            <span className={classes.userShowBottomTitle}>Account Details</span>
            <div className={classes.userShwoInfo}>
              <PermIdentity />
              <span className={classes.userShwoInfoTitle}>nasir</span>
            </div>
            <div className={classes.userShwoInfo}>
              <CalendarToday />
              <span className={classes.userShwoInfoTitle}>01-Dec-2000</span>
            </div>
            <span className={classes.userShowBottomTitle}>Contact Details</span>
            <div className={classes.userShwoInfo}>
              <MailOutline />
              <span className={classes.userShwoInfoTitle}>nasir@mail.com</span>
            </div>
            <div className={classes.userShwoInfo}>
              <PhoneOutlined />
              <span className={classes.userShwoInfoTitle}>01911612755</span>
            </div>
          </div>
        </div>
        <div className={classes.userUpdate}>
          <span className={classes.userUpdateTitle}>Edit</span>
          <form className={classes.userUpdateForm} autoComplete="off">
            <div className={classes.userUpdateLeft}>
              <div className={classes.userUpdateItem}>
                <label htmlFor="username">User Name</label>
                <input
                  name="username"
                  type="text"
                  placeholder="nasir"
                  className={classes.userUpdateInput}
                />
              </div>
              <div className={classes.userUpdateItem}>
                <label htmlFor="username">Full Name</label>
                <input
                  name="username"
                  type="text"
                  placeholder="Nasir Ahmed"
                  className={classes.userUpdateInput}
                />
              </div>
              <div className={classes.userUpdateItem}>
                <label htmlFor="dob">Date of Birth</label>
                <input
                  name="dob"
                  type="text"
                  placeholder="01-Dec-2020"
                  className={classes.userUpdateInput}
                />
              </div>

              <div className={classes.userUpdateItem}>
                <label htmlFor="email">Email</label>
                <input
                  name="email"
                  type="email"
                  placeholder="nasir@mail.com"
                  className={classes.userUpdateInput}
                />
              </div>
              <div className={classes.userUpdateItem}>
                <label htmlFor="phone">Phone</label>
                <input
                  name="phone"
                  type="text"
                  placeholder="01911612755"
                  className={classes.userUpdateInput}
                />
              </div>
            </div>
            <div className={classes.userUpdateRight}>
              <div className={classes.userUpdateUpload}>
                <img
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                  alt="user"
                  className={classes.userUpdateAvatar}
                />
                <label htmlFor="upload">
                  <Upload className={classes.uploadIcon} />
                </label>
                <input id="upload" type="file" className={classes.userUpdatorInput} />
              </div>
              <button type="button" className={classes.userUpdateBtn}>
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default User;
