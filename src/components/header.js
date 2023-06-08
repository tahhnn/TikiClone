const header = function () {
  return `<div class="div-header">
    <div class="div-img">
        <a href="/"><img class="logo-main" src="../src/img/Rectangle.png" alt="">
        <img class="logo-title" src="../src/img/Rectangle-1.png" alt=""></a>
    </div>
    <div class="divHeaderNav">
      <input type="text" class="searchBox">
      <button class="btnSearch"><img src="../src/img/searchbtn.png" alt="">
      <p>Tìm kiếm</p></button>
      <div class="divUserSite">
      <img class="userLogo" src="../src/img/userLogo.png" alt="">
        <div class="divAccountAcess">
        <p class="login-register cursor-pointer"><a href="/login">Đăng nhập/Đăng ký</a></p>
        <p class="account cursor-pointer">Tài khoản</p>
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
