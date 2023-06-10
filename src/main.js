import UserLayout from "./components/user-layout";
import productDetail from "./pages/detail";
import homePage from "./pages/home";
import Dashboard from "./pages/admin/dashboard";

import "../style/style.css";
import header from "./components/header";
import footer from "./components/footer";
// console.log(data);
import { router, useState, useEffect, render } from "../lib";
import { scrollToTop } from "../ultilities/lib";
import { notFound } from "./components/notfound";
import addProduct from "./pages/admin/add";
import editProduct from "./pages/admin/edit";
import loginDashBoard from "./pages/login";
// DOM declaration
const headerBox = document.querySelector("#header");
const app = document.querySelector("#app");
const footerBox = document.querySelector("#footer");

// template string
// const render = function (content) {

//   scrollToTop();
//   headerBox.innerHTML = header();
//   app.innerHTML = content;
//   footerBox.innerHTML = footer();
// };

router.on({
  "/": () => {
    render(homePage, app);
  },
  "/prd": () => {
    render(productDetail, app);
  },
  "/prd/:id": ({ data }) => {
    // console.log(data);
    // if (data.hasOwnProperty("id")) {
    render(() => productDetail(data), app);
    // }
    // render(notFound,app);
  },
  "/dashboard": () => {
    const role = localStorage.getItem("roleUser");
      if (role == 0) {
        render(notFound, app);
      }
    else if(role == 1) {
      render(Dashboard, app);
    }
    

  },
  "/add/": () => {
    render(addProduct, app);
  },
  "/edit/:id": ({ data }) => {
    render(() => editProduct(data), app);
  },
  "/login": () => {
    render(loginDashBoard, app);
  },
});

// router.on('/prd/:id', ({ data }) => render(() => productDetail(data), app))
router.notFound = () => {
  render(notFound());
};
router.resolve();
