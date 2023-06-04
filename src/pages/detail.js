import "../../style/detail.css";
import "../../style/style.css";
import { useState,useEffect } from "../lib";

const productDetail = function (idFind) {
  const [books,setBooks] = useState([]);
  useEffect(function (){
    fetch('http://localhost:3000/books')
    .then(function (response) {
      return response.json()
    })
    .then(function (data){
      return setBooks(data);
    });
  })

  const dataFind = books.find(({ id }) => id === +idFind);
  if (dataFind) {
    const dataFilter = books.filter((data) => data.rating_average === dataFind.rating_average);
    return /*html*/ `
    <div class="navAddress">
    <p><a href="/" class="firstPage">Trang chủ</a> ><a href="/">${dataFind.name}</a></p>
  </div>
    <div class="divPrdDetail w-[90%] mx-auto border-b-2 border-gray-200 pb-3 ">
  
            <div class="imgProduct">
                <img class="imgPrdDetail " src="${dataFind.images[0]}" alt="" />
                <div class="divImgDemo mt-2">
                <img class="imgDemo pl-2 " src="${dataFind.images[0]}" alt="" />
                <img class="imgDemo pl-2" src="${dataFind.images[1]}" alt="" />
                
            </div>
            </div>
            <div class="divMainProduct ml-4">
                <div class="divBookName">
                    <p>${dataFind.name}</p>
                </div>
                <div class="rate">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <div class="seller flex">
                         <p class="pr-2">${dataFind.rating_average}</p>
                         <p>${
                           dataFind.quantity_sold
                             ? dataFind.quantity_sold.value
                             : ""
                         }</p>
                    </div>
                </div>
                <div class="divPrice bg-[#FAFAFA] w-[70%] h-32 mt-3 border-b-2 border-gray-300">
                <p class="p-3 text-3xl text-red-500">${dataFind.list_price}₫</p>
                <p class="pt-[25px] text-[#808089]">${
                  dataFind.original_price
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
                    `
                    
                  }).join('')}
           
    `;
  } else {
    return `
      <div class="flex flex-col h-screen bg-white">
      <div class="flex items-center justify-center flex-1">
        <div class="max-w-xl px-4 py-8 mx-auto text-center">
          <h1 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            We can't find that page.
          </h1>
    
          <p class="mt-4 text-gray-500">
            Try searching again, or return home to start from the beginning.
          </p>
    
          <a
            href="/"
            class="inline-block px-5 py-3 mt-6 text-sm font-medium text-white bg-indigo-600 rounded hover:bg-indigo-700 focus:outline-none focus:ring"
          >
            Go Back Home
          </a>
        </div>
      </div>
    </div>
      `;
  }
};

export default productDetail;
