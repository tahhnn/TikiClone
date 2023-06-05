import { useState, useEffect } from '../../../lib'

const Dashboard = function () {
    // Buoc 2
    const [books, setBooks] = useState([])
    // Buoc 3
    useEffect(function () {
        fetch('http://localhost:3000/books')
            .then(function (res) {
                return res.json()
            })
            .then(function (data) {
                setBooks(data)
                
            })
    })
    return /*html*/`
        <div>
            <h1>Dashboard</h1>

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
                </tr>
            </thead>

            <tbody class="divide-y divide-gray-200">
            ${books.map(function (book) {
        return /*html*/`
                <tr>
                    <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                        ${book.name}
                    </td>
                    <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                        <img width="200" src="${book.images[0]}"/>
                    </td>
                    <td class="whitespace-nowrap px-4 py-2 text-gray-700">${book.rating_average}</td>
                    <td class="whitespace-nowrap px-4 py-2 text-gray-700">${book.original_price}đ</td>
                    <td><a class="bg-red-500 text-white p-2 rounded-md" href="/dashboard/${book.id}">Xóa</a></td>
                    <td><a class="bg-blue-500 text-white p-2 rounded-md" href="/dashboard/${book.id}">Sửa</a></td>
                </tr>
                `
    }).join("")}
                
            </tbody>
            </table>
            <button class="bg-orange-500 text-white p-2 rounded-md mx-auto block">Thêm mới</button>
            </div>
        </div>
    `
}

export default Dashboard