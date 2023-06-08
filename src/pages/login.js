import { router, useEffect, useState } from "../../lib";

const loginDashBoard = () => {
  const [users, setUser] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3000/user`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);
  useEffect(() => {
    const userInput = document.querySelector("input[type=text]");
    const passInput = document.querySelector("input[type=password]");
    const btn = document.querySelector("button");
    userInput.addEventListener("keyup", function (e) {
      if (userInput.value.length < 5) {
        userInput.nextElementSibling.innerText = "Tối thiểu 5 ký tự";
        userInput.classList.add("outline-red-600");
      } else {
        userInput.classList.remove("outline-red-600");
        userInput.nextElementSibling.innerText = "";
        userInput.classList.add("outline-green-600");
      }
    });

    passInput.addEventListener("keydown", () => {
      if (passInput.value.length < 3) {
        passInput.nextElementSibling.innerText = "Tối thiểu 3 ký tự";
        passInput.classList.add("outline-red-600");
      } else {
        passInput.classList.remove("outline-red-600");
        passInput.nextElementSibling.innerText = "";
        passInput.classList.add("outline-green-600");
      }
    });
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const findUser = users.find(
        (user) =>
          user.user == userInput.value && user.password == passInput.value
      );
      const checkUser = users.some(
        (user) =>
          user.user == userInput.value && user.password == passInput.value
      );

      if (checkUser) {
        localStorage.setItem("user", userInput.value);
        alert(`Đăng nhập thành công rồi nha ${findUser.name}`);
        router.navigate("/dashboard");
      } else {
        alert(`Kiểm tra lại thông tin đăng nhập`);
        userInput.value = "";
        passInput.value = "";
      }
    });
  });
  return `
  
  <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-lg text-center">
      <h1 class="text-2xl font-bold sm:text-3xl">Get started today!</h1>
  
      
    </div>
  
    <form action="" class="mx-auto mb-0 mt-8 max-w-md space-y-4">
      <div>
        <label for="email" class="sr-only">UserName</label>
  
        <div class="relative">
          <input
            type="text"
            class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            placeholder="Enter name..."
          />
          <span class="font-bold font-3xl text-red-600"></span>
          
          
          </div>
          </div>
          
          <div>
          <label for="password" class="sr-only">Password</label>
          
          <div class="relative">
          <input
          type="password"
          class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
          placeholder="Enter password"
          />
          <span class="font-bold font-3xl text-red-600"></span>
          
          
          </div>
          </div>
  
      <div class="flex items-center justify-between">
        <p class="text-sm text-gray-500">
          No account?
          <a class="underline" href="">Sign up</a>
        </p>
  
        <button
          type="submit"
          class="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
        >
          Sign in
        </button>
      </div>
    </form>
  </div>
    `;
};

export default loginDashBoard;
