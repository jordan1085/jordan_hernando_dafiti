import React, { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#212121",
  },
  productContainer: {
    margin: 30,
  },
}));

function App() {
  const classes = useStyles();
  const [productList, setproductList] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const getData = () => {
    fetch("./detalle-2022.json", {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setproductList(data);
        setLoading(false);
      })
      .catch(function (err) {
        setError(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={classes.container}>
      {!loading
        ? productList.products.map((product, index) => (
            <div key={product.id} className={classes.productContainer}>
              <ProductCard product={product.related[1]} />
            </div>
          ))
        : null}
    </div>
  );
}

export default App;
