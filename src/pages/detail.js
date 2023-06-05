import "../../style/detail.css";
import "../../style/style.css";
import { useState,useEffect } from "../../lib";

const productDetail = function ({id}) {
  console.log(id);
  const [books,setBooks] = useState([]);
  useEffect(function (){
    fetch(`http://localhost:3000/books/${id}`)
    .then(function (response) {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(function (data){
      console.log(data);
      setBooks(data);
    })
    .catch(function (error) {
      console.error('Error:', error);
    });
  }, []);
  
  // console.log(data.id);
  const dataFind = books.find((book) => book.id === +id);
  console.log(dataFind);
  if (dataFind) {
    const dataFilter = books.filter((data) => data.rating_average === id.rating_average);
    return /*html*/ `
    <div class="navAddress">
    <p><a href="/" class="firstPage">Trang chủ</a> ><a href="/">${books.name}</a></p>
  </div>
    <div class="divPrdDetail w-[90%] mx-auto border-b-2 border-gray-200 pb-3 ">
  
            <div class="imgProduct">
                <img class="imgPrdDetail " src="${books.images[0]}" alt="" />
                <div class="divImgDemo mt-2">
                <img class="imgDemo pl-2 " src="${books.images[0]}" alt="" />
                <img class="imgDemo pl-2" src="${books.images[1]}" alt="" />
                
            </div>
            </div>
            <div class="divMainProduct ml-4">
                <div class="divBookName">
                    <p>${books.name}</p>
                </div>
                <div class="rate">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <div class="seller flex">
                         <p class="pr-2">${books.rating_average}</p>
                         <p>${
                           books.quantity_sold
                             ? books.quantity_sold.value
                             : ""
                         }</p>
                    </div>
                </div>
                <div class="divPrice bg-[#FAFAFA] w-[70%] h-32 mt-3 border-b-2 border-gray-300">
                <p class="p-3 text-3xl text-red-500">${books.list_price}₫</p>
                <p class="pt-[25px] text-[#808089]">${
                  books.original_price
                } ₫</p>
                <p class=" text-red-700 text-sm border-2 border-red-800 h-6 mt-6 ml-2">-23%</p>
                </div>
                <div class="divOrder">
                    <p>Số Lượng</p>
                    <button class="w-10 h-10 border-2 border-gray-400">-</button>
                    <input class="w-20 h-10 border-2 border-gray-400 rounded-md" type="number">
                    <button class="w-10 h-10 border-2 border-gray-400">+</button>
                    </div>
                    <button class="w-[50%] h-[50px] mt-3 bg-[#FF3945] text-white font-semibold">Mua ngay</button>
                </div>
                </div>
                <div class="divRcmPrd w-[100%] pb-3">
                    <p class="w-[70%] mx-auto mt-10 text-2xl">Sản phẩm tương tự</p>
                    <div class="grid grid-cols-4 w-[70%] mx-auto gap-20">
                    

                  ${dataFilter.map(function(data) {
                    return `
                    <div class="divProduct w-full">
                    <a href="/prd/${data.id}"><img class="imgPrd" src="${data.images[0]}" alt="" /></a>
                      <img class="freeShipAlowed" src="./src/img/tikiNow.png" alt="" />
                      <p class="shipFastest">GIAO SIÊU TỐC 2H</p>
                      <a href="/prd/${data.id}"><p class="pTitle"></p>${data.name}</a>
                      <div class="rate">
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                        <div class="seller">
                          <p>${data.quantity_sold ? data.quantity_sold.value : ''}</p>
                        </div>
                      </div>
                      <div class="divPrice">
                        <p class="price">${data.list_price}₫</p>
                        <p class="discount">23%</p>
                      </div>   
                    </div>
                    </div>
                    `
                    
                  }).join('')}
           
    `};
  } 


export default productDetail;
