import header from './header'
import footer from "./footer"
const UserLayout = function (page) {
    return `
        <div>
            ${header()}
            ${page()}
            ${footer()}
        </div>
    `
}
export default UserLayout