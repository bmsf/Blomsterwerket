import React from "react";
import { Grid } from "@material-ui/core";
import Product from "./Product/index";
import useStyles from "./styles";

const Products = ({ products, onAddToCart, totalProducts }) => {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <div className={classes.wrapper}>
        {" "}
        <div className={classes.productsAndFilter}>
          <div className={classes.header}>Produkter: {totalProducts}</div>
          <div>Filter</div>
        </div>
        <Grid container justify="center" spacing={3}>
          {products.map((product) => (
            <Grid item key={product.id} xs={6} sm={6} md={4} lg={3}>
              <Product product={product} onAddToCart={onAddToCart} />
            </Grid>
          ))}
        </Grid>
      </div>
    </main>
  );
};

export default Products;
