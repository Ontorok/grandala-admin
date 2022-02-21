import React from 'react';
import classes from './NewProduct.module.css';

const NewProduct = function () {
  return (
    <div className={classes.newProduct}>
      <h1 className={classes.addProductTitle}>New Product</h1>
      <form className={classes.addProductForm} autoComplete="off">
        <div className={classes.addProductItem}>
          <label htmlFor="file">Image</label>
          <input type="file" name="file" id="file" />
        </div>

        <div className={classes.addProductItem}>
          <label htmlFor="productname">Name</label>
          <input type="text" name="productname" id="productname" placeholder="Apple Airpods" />
        </div>

        <div className={classes.addProductItem}>
          <label htmlFor="instock">Stock</label>
          <input type="text" name="instock" id="instock" placeholder="123" />
        </div>

        <div className={classes.addProductItem}>
          <label htmlFor="status">Status</label>
          <select name="status" id="status">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button type="button" className={classes.addProductButton}>
          Create
        </button>
      </form>
    </div>
  );
};

export default NewProduct;
