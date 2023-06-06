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
        <p class="login-register"><a href="#">Đăng nhập</a>/<a href="#">Đăng ký</a></p>
        <p class="account"><a href="#">Tài khoản</a></p>
        </div>
      </div>
    <div class="divCartSite">
      <img class="cartLogo" src="../src/img/cartLogo.png" alt="">
      <p class="cartBtn"><a href="/cart">Giỏ hàng</a></p>
    </div>
      </div>
      </div>
      
    `;
};

export default header;
