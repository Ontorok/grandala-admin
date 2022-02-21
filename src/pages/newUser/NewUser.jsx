/**
 * Title: User Form
 * Description: User Form
 * Author: Nasir Ahmed
 * Date: 01-January-2022
 * Modified: 01-January-2022
 * */

import React from 'react';
import classes from './NewUser.module.css';

const NewUser = function () {
  return (
    <div className={classes.newUser}>
      <h1 className={classes.newUserTitle}>New User</h1>
      <form className={classes.newUserForm} autoComplete="off">
        <div className={classes.newUserFormItem}>
          <label htmlFor="username">User Name</label>
          <input type="text" placeholder="jhon" name="username" />
        </div>

        <div className={classes.newUserFormItem}>
          <label htmlFor="fullname">Full Name</label>
          <input type="text" placeholder="Jhon Smith" name="fullname" />
        </div>

        <div className={classes.newUserFormItem}>
          <label htmlFor="email">Email</label>
          <input type="email" placeholder="jhon@mail.com" name="email" />
        </div>

        <div className={classes.newUserFormItem}>
          <label htmlFor="password">Password</label>
          <input type="password" placeholder="password" name="password" />
        </div>

        <div className={classes.newUserFormItem}>
          <label htmlFor="phone">Phone</label>
          <input type="password" placeholder="+88 01911612755" name="phone" />
        </div>

        <div className={classes.newUserFormItem}>
          <label htmlFor="address">Address</label>
          <input type="password" placeholder="Chittagong | Bangladesh" name="address" />
        </div>

        <div className={classes.newUserFormItem}>
          <span>Gender</span>

          <div className={classes.newUserGenderContainer}>
            <input type="radio" name="gender" value="Male" id="male" />
            <label htmlFor="male">Male</label>

            <input type="radio" name="gender" value="Female" id="female" />
            <label htmlFor="female">Female</label>

            <input type="radio" name="gender" value="Other" id="other" />
            <label htmlFor="other">Other</label>
          </div>
        </div>

        <div className={classes.newUserFormItem}>
          <label htmlFor="active">Active</label>
          <select name="active" id="active" className={classes.newUserStatus}>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        <div className={classes.newUserFormItem}>
          <button type="submit" className={classes.newUserButton}>
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewUser;
