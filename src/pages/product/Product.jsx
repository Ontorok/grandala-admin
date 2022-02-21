/**
 * Title: Single product
 * Description: Single Product
 * Author: Nasir Ahmed
 * Date: 01-January-2022
 * Modified: 01-January-2022
 * */

import { Publish } from '@mui/icons-material';
import React from 'react';
import { Link } from 'react-router-dom';
import Rechart from '../../components/chart/Rechart';
import { productAnalytics } from '../../fake-data/product';
import classes from './Product.module.css';

const Product = function () {
  return (
    <div className={classes.product}>
      <div className={classes.productTitleContainer}>
        <h1 className={classes.productTitle}>Product</h1>
        <Link to="/newProduct">
          <button type="button" className={classes.productAddBtn}>
            Create
          </button>
        </Link>
      </div>
      <div className={classes.productTop}>
        <div className={classes.productTopLeft}>
          <Rechart title="Sales Performance" data={productAnalytics} dataKey="Sales" />
        </div>
        <div className={classes.productTopRight}>
          <div className={classes.productInfoTop}>
            <img
              src="https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="Apple Airpods"
              className={classes.productInfoImage}
            />
            <span className={classes.productName}>Apple Airpods</span>
          </div>
          <div className={classes.productInfoBottom}>
            <div className={classes.productInfoItem}>
              <span className={classes.productInfoKey}>id:</span>
              <span className={classes.productInfoValue}>123</span>
            </div>
            <div className={classes.productInfoItem}>
              <span className={classes.productInfoKey}>sales:</span>
              <span className={classes.productInfoValue}>1237</span>
            </div>
            <div className={classes.productInfoItem}>
              <span className={classes.productInfoKey}>active:</span>
              <span className={classes.productInfoValue}>yes</span>
            </div>
            <div className={classes.productInfoItem}>
              <span className={classes.productInfoKey}>in stock:</span>
              <span className={classes.productInfoValue}>no</span>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.productBottom}>
        <form className={classes.productForm}>
          <div className={classes.productFormLeft}>
            <label htmlFor="productname">Product Name</label>
            <input type="text" name="productname" id="productname" placeholder="Apple Airpods" />

            <label htmlFor="instock">Product Name</label>
            <select name="instock" id="instock" defaultValue="yes">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>

            <label htmlFor="status">Product Name</label>
            <select name="status" id="status" defaultValue="yes">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className={classes.productFormRight}>
            <div className={classes.productUpload}>
              <img
                src="https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="product"
                className={classes.productUploadImg}
              />
              <label htmlFor="file">
                <Publish />
              </label>
              <input type="file" name="file" id="file" style={{ display: 'none' }} />
            </div>
            <button type="button" className={classes.productButton}>
              Upldate
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Product;
