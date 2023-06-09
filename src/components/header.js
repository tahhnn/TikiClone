 import {useEffect } from "../../lib";
const header = function () {
  useEffect(() => {
      let isLog = !!localStorage.getItem('nameUser');
      const role = localStorage.getItem('roleUser');
      if(isLog) {
        const name = localStorage.getItem('nameUser');
        const nameUserArea = document.querySelector('.login-register');
        nameUserArea.innerText = `Xin chào ${name}`
        nameUserArea.nextElementSibling.innerText ='ĐĂNG XUẤT'
          if(role == 1){
              const dashboard = document.querySelector('.dashboard');
              dashboard.innerText = `Dashboard` 
          }
      }
  })
  return /*html*/ `<div class="div-header">
    <div class="div-img">
        <a href="/"><img class="logo-main" src="../src/img/Rectangle.png" alt="">
        <img class="logo-title" src="../src/img/Rectangle-1.png" alt=""></a>
    </div>
    <div class="divHeaderNav">
      <input type="text" class="searchBox">
      <button class="btnSearch"><img src="../src/img/searchbtn.png" alt="">
      <p>Tìm kiếm</p></button>
      <div class="divUserSite">
      
        <div class="divAccountAcess">
        <p class="login-register cursor-pointer"><a href="/login">Đăng nhập/Đăng ký</a></p>
        <a href="/" class="account cursor-pointer" onclick="localStorage.removeItem('nameUser')">Tài khoản</a>
        <a href="/dashboard" class="dashboard account cursor-pointer" onclick="localStorage.removeItem('nameUser')"></a>
        </div>
      </div>
    <div class="divCartSite">
      <img class="cartLogo" src="../src/img/cartLogo.png" alt="">
      <p class="cartBtn cursor-pointer">Giỏ hàng</p>
    </div>
      </div>
      </div>
      
    `;
};

export default header;
