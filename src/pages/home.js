import header from "../components/header";
import footer from "../components/footer";
import { useState, useEffect } from "../../lib";
const homePage = function () {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/books")
      .then((res) => res.json())
      .then((value) => setData(value));
  }, []);
  useEffect(() => {
    const btnLow = document.querySelector(".btnLow");
    const btnHigh = document.querySelector(".btnHight");
    const btnSeller = document.querySelector(".btnSeller");
    btnLow.onclick = () => {
      const dataSort = data.sort((a, b) => {
        return a.list_price - b.list_price;
      });
      setData(dataSort);
      console.log(dataSort);
    };
    btnHigh.onclick = () => {
      const dataSort = data.sort((a, b) => {
        return b.list_price - a.list_price;
      });
      setData(dataSort);
    };
    btnSeller.onclick = () => {
      const prdCheckSellValue = data.filter(function (prd) {
        return prd.hasOwnProperty("quantity_sold");
      });
      console.log(prdCheckSellValue);
      const dataFilter = prdCheckSellValue.sort(function (a, b) {
        return b.quantity_sold.value - a.quantity_sold.value;
      });
      setData(dataFilter);
    };
  });
  //tìm kiếm
  useEffect(() => {
    const searchBox = document.querySelector(".searchBox");
    const searchBtn = document.querySelector(".btnSearch");
    searchBtn.addEventListener("click", function (e) {
      e.preventDefault();  
      const valueSearch = searchBox.value;
      
      fetch(`http://localhost:3000/books?name_like=${valueSearch}`)
        .then(function (response) {
          return response.json();
        })
        .then((data) => {
          setData(data);
        });
    });
  });
  // console.log(data);
  return /*html*/ `
    ${header()}
    <div class="navAddress">
      <p><a href="/" class="firstPage">Trang chủ</a> ><a href="/">Nhà sách Tiki</a></p>
    </div>
    <div class="divMainContainer">
      <div class="divCateName">
        <p>Danh Mục Sản Phẩm</p>
        <ul class="ulCateName">
          <li>English Book</li>
          <li>Sách tiếng Việt</li>
          <li>Văn phòng phẩm</li>
          <li>Quà lưu niệm</li>
        </ul>
      </div>
      <div class="divProductSite pb-10">
        <p>Nhà sách Tiki</p>
        <img class="banner" src="/src/img/banner.png" alt="">
        <div class="divListProduct">
          <button class="btnNew"><h2>Mới nhất</h2></button>
          <button class="btnSeller"><h2>Bán chạy</h2></button>
          <button class="btnNewPrd"><h2>Hàng mới</h2></button>
          <button  class="btnLow"><h2>Giá thấp</h2></button>
          <button class="btnHight"><h2>Giá cao</h2></button>           
        </div>
        <div class="divIcon">
          <img class="icon" src="/src/img/tikiNow.png" alt="">
          <img class="icon" src="/src/img/freeshipBtw.png" alt="">
        </div>
        <div class="divProductList">
          ${data
            .map(function ({ id, name, images, quantity_sold, list_price }) {
              return /*html*/ `
                <div class="divProduct">
                  <a class="" href="/prd/${id}"><img class="imgPrd hover:scale-125 duration-100" src="${images ? images[0] : ""}" alt="" /></a>
                  <img class="freeShipAlowed" src="./src/img/tikiNow.png" alt="" />
                  <p class="shipFastest">GIAO SIÊU TỐC 2H</p>
                  <a href="/prd/${id}"><p class="pTitle">${name}</p></a>
                  <div class="rate ">
                    <i class="fas fa-star text-sm"></i>
                    <i class="fas fa-star text-sm"></i>
                    <i class="fas fa-star text-sm"></i>
                    <i class="fas fa-star text-sm"></i>
                    <i class="fas fa-star text-sm"></i>
                    <div class="seller">
                      <p>${quantity_sold ? quantity_sold.text : ""}</p>
                    </div>
                  </div>
                  <div class="divPrice">
                    <p class="price">${list_price}₫</p>
                    <p class="discount">23%</p>
                  </div>   
                </div>
              `;
            })
            .join("")}
        </div>
      </div>
    </div>
    ${footer()}`;
};

export default homePage;
