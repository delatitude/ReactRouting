import React from "react";
import { logout } from "./utils/xhr";

const Products = ({ history }) => (
  <div>
    Products Page
    <br />
    <br />
    <button
      onClick={() => {
        logout().then(() => {
          history.push("/");
        });
      }}
    >
      Logout
    </button>
  </div>
);

export default Products;
