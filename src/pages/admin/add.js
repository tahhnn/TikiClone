import { useEffect, useState, router } from "../../../lib";
import { v4 as uuidv4 } from "uuid";
const addProduct = function () {
  useEffect(() => {
    const form = document.querySelector("form");
    const prd = form.querySelector(".prd");
    const desc = form.querySelector(".desc");
    const rate = form.querySelector(".rate");
    const imgData = form.querySelector(".img").files[0];
    const key = "vqmbmvm1";
    const URLCloud = "https://api.cloudinary.com/v1_1/diklknmpm/image/upload";

    const formData = new FormData();
    formData.append("file", imgData);
    formData.append("upload_preset", key);

 

    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const newPrd = {
        name: prd.value,
        desc: desc.value,
        rating_average: rate.value,
       
      };
      fetch("http://localhost:3000/books", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newPrd),
      }).then(() => {
        // router.navigate("/dashboard");
      });
    });
  });

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
          />
  
        
        </div>
      </div>
  
      <div>
        <label for="img" class="sr-only">Ảnh</label>
  
        <div class="relative">
          <input
            type="file"
            class="img w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            placeholder="Enter description"
          />
        </div>
        <label for="rate" class="sr-only">Đánh giá</label>
  
        <div class="relative">
          <input
            type="number"
            class="rate w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm" min="0" max="5" step=".1"
            placeholder="Rate Ratio"
          />
  
        
        </div>
      </div>
  
      <div>
        <label for="desc" class="sr-only">Mô tả</label>
  
        <div class="relative">
          <input
            type="text"
            class="desc w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            placeholder="Enter description"
          />
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
