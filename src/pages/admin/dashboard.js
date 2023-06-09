import { useState, useEffect, router } from "../../../lib";

const Dashboard = function () {
  const [books, setBooks] = useState([]);
  useEffect(function () {
    fetch("http://localhost:3000/books")
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        setBooks(data);
      });
  }, []);
  useEffect(function () {
    const btnDelete = document.querySelectorAll(".deleteBtn");
    btnDelete.forEach(function (btn) {
      btn.onclick = function () {
        const id = btn.dataset.id;
        fetch(`http://localhost:3000/books/${id}`, { method: "DELETE" })
          .then(function () {
            const data = books.filter(function (book) {
              return book.id != id;
            });
            setBooks(data);
          })
          .then(() => {
            router.navigate("/dashboard");
          });
      };
    });
  });
  useEffect(() => {
    const select = document.querySelector("#HeadlineAct");
    select.onchange = (e) => {
      e.preventDefault();
      const options = select.value;     
          fetch(`http://localhost:3000/books?_sort=${options}&_order=desc`)
            .then((res) => {
              return res.json();
            })
            .then((data) => {
              setBooks(data);
            });
      
    };
  });
  return /*html*/ `
        <div>
            <h1>Dashboard</h1>
            <div>
  <label for="HeadlineAct" class="text-sm mx-auto font-medium text-gray-900">
    Headliner
  </label>

  <select
    name="sort"
    id="HeadlineAct"
class="mt-1.5 w-[30%] mx-auto block rounded-lg border-gray-300 text-gray-700 sm:text-sm">
    <option value="" selected disabled hidden>Sắp xếp theo:</option>
    <option value="list_price" data-id="desc">Giá</option>
    <option value="rating_average" data-id="desc">Đánh giá</option>
  </select>
</div>
            <div class="overflow-x-auto rounded-lg border border-gray-200">
            <table class="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
            <thead class="ltr:text-left rtl:text-right">
                <tr>
                <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Name
                </th>
                <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Image
                </th>
                <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Rate
                </th>
                <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Price
                </th>
                <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Chức năng
                </th>
                </tr>
            </thead>

            <tbody class="divide-y divide-gray-200">
            ${books
              .map(function (book) {
                return /*html*/ `
                <tr>
                    <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                        ${book?.name}
                    </td>
                    <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                        <img width="200" src="${
                          book?.images ? book?.images[0] : ""
                        }"/>
                    </td>
                    <td class="whitespace-nowrap px-4 py-2 text-gray-700">${
                      book?.rating_average
                    }</td>
                    <td class="whitespace-nowrap px-4 py-2 text-gray-700">${
                      book?.list_price
                    }</td>
                    <td>
                    <button class="deleteBtn bg-red-500 text-white p-2 rounded-md" data-id="${
                      book.id
                    }">Xóa</button>
                    <a href="/edit/${
                      book.id
                    }" class="editBtn bg-blue-500 text-white p-2 rounded-md" data-id="${book.id}" >Sửa</a>
                    </td>
                </tr>
                `;
              })
              .join("")}
                
            </tbody>
            </table>
            <button class="bg-orange-500 text-white p-2 rounded-md mx-auto block"><a href="/add">Thêm mới</a></button>
            </div>
        </div>
    `;
};

export default Dashboard;
