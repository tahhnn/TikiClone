import header from "../components/header";
import footer from "../components/footer";
import { useState,useEffect } from "../../lib";
const homePage = function () {
  const [data, setData] = useState([]);
  useEffect(() => {
		fetch('http://localhost:3000/books')
				.then(res => res.json())
				.then(value => setData(value))
		}
, [])
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
          <a href="/home/sortSeller" class="btnSeller"><h2>Bán chạy</h2></a>
          <button class="btnNewPrd"><h2>Hàng mới</h2></button>
          <a href="/home/sortLow" class="btnLow"><h2>Giá thấp</h2></a>
          <a href="/home/sortHigh" class="btnHight"><h2>Giá cao</h2></a>           
        </div>
        <div class="divIcon">
          <img class="icon" src="/src/img/tikiNow.png" alt="">
          <img class="icon" src="/src/img/freeshipBtw.png" alt="">
        </div>
        <div class="divProductList">
          ${data
            .map(function (item) {
              return /*html*/ `
                <div class="divProduct">
                  <a class="" href="/prd/${item.id}"><img class="imgPrd hover:scale-125 duration-100" src="${item.images[0]}" alt="" /></a>
                  <img class="freeShipAlowed" src="./src/img/tikiNow.png" alt="" />
                  <p class="shipFastest">GIAO SIÊU TỐC 2H</p>
                  <a href="/prd/${item.id}"><p class="pTitle">${item.name}</p></a>
                  <div class="rate ">
                    <i class="fas fa-star text-sm"></i>
                    <i class="fas fa-star text-sm"></i>
                    <i class="fas fa-star text-sm"></i>
                    <i class="fas fa-star text-sm"></i>
                    <i class="fas fa-star text-sm"></i>
                    <div class="seller">
                      <p>${item.quantity_sold ? item.quantity_sold.text : ""}</p>
                    </div>
                  </div>
                  <div class="divPrice">
                    <p class="price">${item.list_price}₫</p>
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
