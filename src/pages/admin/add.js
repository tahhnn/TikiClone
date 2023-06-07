import { useEffect, useState, router } from "../../../lib";
import { v4 as uuidv4 } from "uuid";
const addProduct = function () {
  useEffect(() => {
    const form = document.querySelector("form");
    form.addEventListener("submit", (e) => {
      const prd = form.querySelector(".prd");
      const price = form.querySelector(".price");
      const rate = form.querySelector(".rate");

      const img = form.querySelector(".img");
      uploadImg(img.files[0]);
      
      e.preventDefault();
      
      if (prd.value.length < 5) {
        prd.nextElementSibling.innerText = "Tên tối thiểu 5 ký tự";
      } else if (price.value.length < 5) {
        price.nextElementSibling.innerText = "Bạn chưa nhập giá";
      } else {
        const newPrd = {
          name: formData.get("name"),
          list_price: formData.get("price"),
          rating_average: formData.get("rate"),
        };
        fetch("http://localhost:3000/books", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newPrd),
          // }).then(() => {
            //   router.navigate("/dashboard");
          });
        }
      });
    });
    const uploadImg = (files) => {
      const key = "okchuaaa";
      const URLCloud = "https://api.cloudinary.com/v1_1/diklknmpm/image/upload";
      const imgForm = new FormData();
      const url = [];
    imgForm.append("upload_preset", key);
    imgForm.append("folder", "anhthanh");

    imgForm.append("file", files);
    const res = fetch(URLCloud, {
      method: "POST",
      headers: { "content-type": "application/form-data" },
    }).then((data) => {
      console.log(data);
    })
    
    console.log(url);
  };
  return /*html*/ `
   
  
  <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-lg text-center">
      <h1 class="text-2xl font-bold sm:text-3xl">Thêm sản phẩm</h1>
  
     
    </div>
  
    <form action="" class="mx-auto mb-0 mt-8 max-w-md space-y-4">
      <div>
        <label for="name" class="sr-only">Tên sản phẩm</label>

        <div class="relative">
          <input
            type="text"
            class="prd w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            placeholder="Enter name..."
            name="name"
          />
          <p class="text-red-600 font-extrabold"></p>
  
        
        </div>
      </div>
  
      <div>
        <label for="img" class="sr-only">Ảnh</label>
  
        <div class="relative">
          <input
            type="file"
            class="img w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            placeholder="Enter description"
            name="img"
          />
        </div>
        <label for="rate" class="sr-only">Đánh giá</label>
  
        <div class="relative">
          <input
            type="number"
            class="rate w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm" min="0" max="5" step=".1"
            placeholder="Rate Ratio"
            name="rate"
          />
          <p class="text-red-600 font-extrabold"></p>
        
        </div>
      </div>
  
      <div>
        <label for="desc" class="sr-only">Gía</label>
  
        <div class="relative">
          <input
            type="text"
            class="price w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            placeholder="Enter price"
            name="price"
          />
          <p class="text-red-600 font-extrabold"></p>
        </div>
      </div>
  
      <div class="flex items-center justify-between">
  
        <button
          type="submit"
          class="btn inline-block rounded-lg mx-auto bg-blue-500 px-5 py-3 text-sm font-medium text-white">
          Thêm sản phẩm
        </button>
      </div>
    </form>
  </div>
    
    `;
};
export default addProduct;
